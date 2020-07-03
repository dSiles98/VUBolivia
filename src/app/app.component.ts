import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VUBBoliviaProject';
  isnotLogIn = true;
  
  ngOnChanges(){
    console.log('active')
    if (localStorage.getItem('user') != null){
      this.isnotLogIn = false;
    }
  }

}
