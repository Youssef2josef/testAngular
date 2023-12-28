import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:"",component:UserInterfaceComponent},
  {path:"admin",component:DashboardComponent},
  {path:"admin/allCourses",component:DashboardComponent},
  {path:"admin/createCourse",component:AddCourseComponent},
  {path:"admin/editCourse/:id",component:UpdateCourseComponent},
  {path:"admin/deleteCourse",component:DeleteCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
