import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  sendData(data: any): Observable<any> {
    return this.http.post('https://intellect-backend.onrender.com/api/contact', data);
  }
}
