import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ObjectSchema } from './core/types'
import { FormBuilderService } from './services/form-builder.service'

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  // Do not modify this property
  @Input() schema!: ObjectSchema
  @Input('form') formProps: any = null

  // Do not modify this property
  @Output() onSubmit = new EventEmitter<any>()

  myOwnForm!: FormGroup

  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    console.log('PROPS: ', this.formProps, this.schema)
  }

  ngOnChanges() {
    this.myOwnForm = this.formBuilderService.creatForm(this.schema)
  }

  handleSubmit(event: Event) {
    this.onSubmit.emit(this.myOwnForm.value)
  }
  // submit() {
  //   console.log('VALUE: ', this.myOwnForm.value)
  // }
}
