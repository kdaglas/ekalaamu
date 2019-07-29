import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService}  from "./service/login.service";
import { ToasterService} from "../shared/services/toaster.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  isSubmitted  =  false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.emailCtrl = new FormControl('Email', {validators:
        [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      ,updateOn: 'blur'
    })
    this.passwordCtrl = new FormControl('', {validators:
        [Validators.required,
          Validators.minLength(3)
        ],updateOn: 'blur'})


    this.loginForm  =  new FormGroup({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  login() {

    this.authService.login(this.loginForm.value).subscribe((result)=>{
      console.log(result, "00000000000000000")
      this.toasterService.onSuccess(result.success)
    },
        err => this.toasterService.onFailure(err.error.Errors)
  )

    this.isSubmitted = true;

    if(this.loginForm.invalid){
      return;
    }
  }
}
