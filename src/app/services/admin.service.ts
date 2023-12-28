import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminUrl: string="http://localhost:8086/admin";
  constructor(private http:HttpClient) { }
  addCourse(file: File, name: string, prix: string) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('prix', prix);
    return this.http.post(this.adminUrl, formData);
  }

  getAllCourses(){
    return this.http.get(this.adminUrl);
  }

  editCourse(file: File, name: string, prix: string, id: number) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('name', name);
    formData.append('prix', prix);
    formData.append('id', id.toString());
    return this.http.put(this.adminUrl, formData);
  }

  getCourseById(id){
    return this.http.get(this.adminUrl + "/" + id);
  }

  deleteCourseById(id){
    return this.http.delete(this.adminUrl + "/" + id);
  }
}
