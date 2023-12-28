import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

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
}
