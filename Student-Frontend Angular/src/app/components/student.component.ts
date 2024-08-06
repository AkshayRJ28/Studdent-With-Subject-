// src/app/components/student/student.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';
import { SubjectService } from 'src/app/Service/subject.service';
import { Student } from 'src/app/models/student.model';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    students: Student[] = [];
    subjects: Subject[] = [];
    student: Student = { name: '' };
    subject: Subject = { name: '' };
    selectedStudentId: number | null = null;
    selectedSubjectId: number | null = null;
  
    constructor(
      private studentService: StudentService,
      private subjectService: SubjectService
    ) { }
  
    ngOnInit(): void {
      this.loadStudents();
      this.loadSubjects();
    }
  
    loadStudents(): void {
      this.studentService.getAllStudents().subscribe(
        data => {
            this.students = data;
            console.log('Loaded students:', this.students);  // Debugging
          },
        error => console.error('Error fetching students:', error)
      );
    }
  
    loadSubjects(): void {
      this.subjectService.getAllSubjects().subscribe(
        data => {
            this.subjects = data;
            console.log('Loaded students:', this.subjects);  // Debugging
          },
        error => console.error('Error fetching subjects:', error)
      );
    }
  
    addStudent(): void {
      this.studentService.createStudent(this.student).subscribe(
        () => {
          this.loadStudents();
          this.resetStudentForm();
        },
        error => console.error('Error adding student:', error)
      );
    }
  
    addSubject(): void {
      this.subjectService.createSubject(this.subject).subscribe(
        () => {
          this.loadSubjects();
          this.resetSubjectForm();
        },
        error => console.error('Error adding subject:', error)
      );
    }
  
    enrollStudentInSubject(): void {
      if (this.selectedStudentId && this.selectedSubjectId) {
        console.log("this.selectedStudentId "+ this.selectedStudentId )
        console.log(" this.selectedSubjectId " + this.selectedSubjectId);
        
        this.studentService.enrollInSubject(this.selectedStudentId, this.selectedSubjectId).subscribe(
          () => this.loadStudents(),
          error => console.error('Error enrolling student:', error)
        );
      }
    }
  
    deleteStudent(id: number): void {
        console.log(this.student);
        
        this.studentService.deleteStudent(id).subscribe(
          () => this.loadStudents(),
          error => console.error('Error deleting student:', error)
        );
      }
    
      deleteSubject(id: number): void {
        this.subjectService.deleteSubject(id).subscribe(
          () => this.loadSubjects(),
          error => console.error('Error deleting subject:', error)
        );
      }

    resetStudentForm(): void {
      this.student = { name: '' };
      this.selectedStudentId = null;
    }
  
    resetSubjectForm(): void {
      this.subject = { name: '' };
    }
}
