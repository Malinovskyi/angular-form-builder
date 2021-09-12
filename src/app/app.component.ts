// Do not modify this file
// -----------------------

import { Component } from '@angular/core'
import { studentProfileSchema } from './schemas/student-profile'
import { testAllPropertiesSchema } from './schemas/test-all-properties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-form-builder'

  studentProfileSchema = studentProfileSchema
  testAllPropertiesSchema = testAllPropertiesSchema

  schema = 'student'

  setSchema(schema: 'student' | 'all-properties') {
    this.schema = schema
  }

  handleSubmit(values: any) {
    console.log(values)
  }
}
