import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { Student } from '../models/student.model';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    private apiUrl = `${environment.apiBaseUrl}/students`;

  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/createStudent`, student);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/getAllStudents`);
  }

  findStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/findById/${id}`);
  }

  enrollInSubject(studentId: number, subjectId: number): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}/${studentId}/enroll/${subjectId}`, {});
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteStudent/${id}`);
  }
}