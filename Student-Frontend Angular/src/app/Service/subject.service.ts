import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
    private apiUrl = `${environment.apiBaseUrl}/subjects`;

    constructor(private http: HttpClient) { }
  
    createSubject(subject: Subject): Observable<Subject> {
      return this.http.post<Subject>(`${this.apiUrl}/createSubject`, subject);
    }
  
    getAllSubjects(): Observable<Subject[]> {
      return this.http.get<Subject[]>(`${this.apiUrl}/getAllSubjects`);
    }

    deleteSubject(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
      }
}