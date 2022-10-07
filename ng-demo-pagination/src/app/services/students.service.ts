import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) { }

  getStudents(page: number) {
    return this.httpClient.get(this.url + '?page=' + page);
  }
}
