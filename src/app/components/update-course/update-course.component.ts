import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  title = 'Edit Course';
  id: any;
  findedCourse: any = {};

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService, private router: Router) {}

  ngOnInit() {
    // get id from path
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminService.getCourseById(this.id).subscribe((res) => {
      this.findedCourse = res;
    });
  }

  editCourse() {
    const file = this.findedCourse.file;
    const name = this.findedCourse.name;
    const prix = this.findedCourse.prix;
    const id = this.findedCourse.id;

    this.adminService.editCourse(file, name, prix, id).subscribe((res) => {
      console.log('Response after edit:', res);
      this.router.navigate(['admin/allCourses']);
    });
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    this.findedCourse.file = file;
  }
}
