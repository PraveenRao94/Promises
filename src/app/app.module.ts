import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { FacultyComponent } from './faculty/faculty.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AngularSplDirective1Component } from './angular-spl-directive1/angular-spl-directive1.component';
import { ViewchilddComponent } from './viewchildd/viewchildd.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { CustomComponent } from './custom/custom.component';
import { CustomechangeDirective } from './customechange.directive';
import { TaskChild1Component } from './task-child1/task-child1.component';
import { TaskParent1Component } from './task-parent1/task-parent1.component';
import { PipePipe } from './pipe.pipe';
import { PipesComponent } from './pipes/pipes.component';

import { Taskpipe2Pipe } from './taskpipe2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    FacultyComponent,

    ParentComponent,
    ChildComponent,
    AngularSplDirective1Component,
    ViewchilddComponent,
    ViewchildParentComponent,
    CustomComponent,
    CustomechangeDirective,
    TaskChild1Component,
    TaskParent1Component,
    PipePipe,
    PipesComponent,

    Taskpipe2Pipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
