import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, ChartsModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';

//components
import { LoginComponent } from './components/login/login.component';
import { FilterVehiclesComponent } from './components/filter-vehicles/filter-vehicles.component';

//services
import { LoginServiceService } from './service/login-service.service'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     CheckboxModule,
     WavesModule,
     ButtonsModule,
     InputsModule,
     IconsModule,
     ChartsModule,
     FormsModule, 
     ReactiveFormsModule
  ],
  providers: [
    LoginServiceService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
