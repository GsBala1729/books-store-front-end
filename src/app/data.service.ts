import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookManagerDataService {
  private base_url = 'http://localhost:8080'
  private username = 'balakrishnan1729'
  private secret = 'findMe@1234'
  private token = 'Basic ' + btoa('balakrishnan1729:findMe@1234');

  constructor(private http: HttpClient) {}

  private authHeader = new HttpHeaders({
      Authorization: this.token,
      'Content-Type': 'application/json'
    });

    private httpOptions = {
      headers: this.authHeader,
    };

  // Example: Fetch data from an API
  fetchBookData(): Observable<any> {
    return this.http.get(this.base_url+'/book/',this.httpOptions);
  }

  // Example: Fetch data from an API
  fetchUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/user/');
  }

    login(userName:string,password:string): Observable<any> {
      return this.http.post('http://localhost:8080/user/login',{
        'userName':userName,
        'password':password
      });
    }
}
