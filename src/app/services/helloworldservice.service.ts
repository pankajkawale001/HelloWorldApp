import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {
 
  constructor(private http: HttpClient) { }

  private url:string  = "http://localhost:8090";
  
  getUsersDetails(){
      return this.http.get(`${this.url}/helloWorld/fetchAllDetails`);
  }
}
