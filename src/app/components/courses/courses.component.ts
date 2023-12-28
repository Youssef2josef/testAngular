import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any = [];

  constructor(private router: Router,private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllCoursess();
  }

  getAllCoursess() {
    this.adminService.getAllCourses().subscribe(
      (data: any[]) => {
        this.courses = data.map(element => {
          return {
            id: element.id,
            name: element.name,
            prix: element.prix,
            processedImg: 'data:image/png;base64,' + element.image
          };
        });
        console.log("res", this.courses);
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }
  goToEdit(id) {
    this.router.navigate(["/admin/editCourse/" + id])
  }
  goToDipslay(id) {
    this.router.navigate(["/admin/displayCourse/" + id])
  }
  goToAdd() {
    this.router.navigate(["/admin/createCourse"])
  }
  deleteCourse(id: any) {
    this.adminService.deleteCourseById(id).subscribe((res)=>{
      console.log("here res after delete ", res);
    })
  }
}
