import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ObjectSchema } from '../core/types'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { FormBuilderService } from '../services/form-builder.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  // Do not modify this property
  @Input() schema!: ObjectSchema
  @Input('form') formProps: any = null

  // Do not modify this property
  @Output() onSubmit = new EventEmitter<any>()

  myOwnForm!: FormGroup

  constructor(public formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    // console.log('PROPS: ', this.formProps, this.schema)
  }

  ngOnChanges() {
    this.initializeForm()
  }

  initializeForm(): void {
    if (this.formProps) {
      this.myOwnForm = this.formProps
    } else {
      this.myOwnForm = this.formBuilderService.creatForm(this.schema)
    }
  }

}
