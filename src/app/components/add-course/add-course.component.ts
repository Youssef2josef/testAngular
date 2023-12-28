import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: any = {};
  title = 'ADD Course';

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {}

  addCourse() {
    const file = this.course.file;
    const name = this.course.name;
    const prix = this.course.prix;

    this.adminService.addCourse(file, name, prix).subscribe((res) => {
      console.log('Response from BE:', res);
      this.router.navigate(['admin/allCourses']);
    });
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    this.course.file = file;
  }
}
