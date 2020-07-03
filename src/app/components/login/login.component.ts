import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../../service/login-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  darkForm: FormGroup;
  email: string;
  password: string;

    constructor(public fb: FormBuilder, private authService: LoginServiceService, private router: Router) {
    this.darkForm = fb.group({
      darkFormEmailEx: ['', [Validators.required, Validators.email]],
      darkFormPasswordEx: ['', Validators.required],
    });
  }

  logIn(){
    this.authService.login(this.email, this.password)
    .then( (res)=> {
      this.router.navigate(['']);
      localStorage.setItem('user', this.email)
    }).catch(err => console.log('err', err.message))
    console.log('entro', this.email, this.password);
  }

  ngOnInit() {
  }

}
