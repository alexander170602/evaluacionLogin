import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import {ApiService} from '../../servicios/api.service';
import {loginI} from '../../modelos/login.interface'
import { ResponseI } from 'src/app/modelos/response.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('', Validators.required),

  })


  constructor(private api:ApiService, private router:Router){}
  
  
  

  onLogin(form:loginI){
    console.log(form)
    this.api.loginByEmail(form).subscribe(data=>{
      console.log(data)
      let dataResponse:ResponseI =data;
      if(dataResponse.tokenType == "Bearer"){
        localStorage.setItem("accessToken",dataResponse.tokenType.token);
        this.router.navigate(['dashboard'])
      }
     
    });
  }
}
