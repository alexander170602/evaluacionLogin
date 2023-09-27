import { Injectable } from '@angular/core';
import {loginI} from '../../app/modelos/login.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { ResponseI } from '../modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string = "http://159.65.96.86:8080/services/auth/signin";

  constructor(private http:HttpClient) { }

  loginByEmail(form:loginI):Observable<ResponseI>{
    let direccion = this.url;
    return this.http.post<ResponseI>(direccion,form);
  }
}
