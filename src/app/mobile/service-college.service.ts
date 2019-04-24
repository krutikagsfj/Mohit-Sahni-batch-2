import { Injectable } from '@angular/core';
import { InterfaceCollege } from './interface-college';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceCollegeService {
  private link="assets/mobile.json";
  constructor(private http:HttpClient) { }
  mobileinfo():Observable<InterfaceCollege[]>
  {
    return this.http.get<InterfaceCollege[]>(this.link);
  }
}
