import {Injectable} from "@angular/core";
import {ObjectSchema} from "../core/types";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  creatForm(schema: ObjectSchema) {
    const myOwnsFormControls: any = {}

    schema.properties.forEach(items => {
      const required = true
      if (
        items.type == 'string' ||
        items.type == 'number' ||
        items.type == 'enum' ||
        items.type == 'boolean'
      ) {
        myOwnsFormControls[items.name] = required
          ? new FormControl('', Validators.required)
          : new FormControl('')
      } else if (items.type == 'array') {
        myOwnsFormControls[items.name] = new FormArray([
          this.formGroupCreat(items.name, items.item),
        ])
      } else if (items.type == 'object') {
        myOwnsFormControls[items.name] = this.creatForm(items)
      }
    })
    return new FormGroup(myOwnsFormControls)
  }

  formGroupCreat(key: string, schema: ObjectSchema) {
    return new FormGroup({
      [key]: this.creatForm(schema),
    })
  }

  toArray(formControlName: string, form: FormGroup): FormArray {
    const formArray: any = form.get(formControlName) as FormArray
    if (formArray) {
      return formArray
    } else {
      return new FormArray([])
    }
  }

  onAddToFormArray(propName: string, schema: ObjectSchema, form: FormGroup): void {
    const technologiesControls = form.get(propName) as FormArray
    const newTechnology = this.formGroupCreat(propName, schema)
    technologiesControls.push(newTechnology)
  }

  onRemoveFromFormArray(propName: string, index: any, form: FormGroup) {
    const technologiesControls = form.get(propName) as FormArray
    technologiesControls.removeAt(index)
  }
}
