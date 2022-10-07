import { Component, OnInit } from '@angular/core';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Students: any;
  allStudents: number = 0;
  pagination: number = 1;
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.fetchStudents();
    console.log(this.fetchStudents());
  }

  fetchStudents() {
    this.studentsService.getStudents(this.pagination).subscribe((res: any) => {
      this.Students = res.data;
      this.allStudents = res.total;
      console.log(res.total);
    });
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchStudents();
  }
}
