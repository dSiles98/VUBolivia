import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private authFire: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject)=> {
      this.authFire.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err =>reject(err));
    });
  }

  logout(){
    this.authFire.auth.signOut();
  }
}
