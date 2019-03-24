import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {Routes, RouterModule} from '@angular/router';

import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { AutorizacionService } from './services/autorizacion.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from'angularfire2/auth';
import { environment } from '../environments/environment';

//import { HttpModule } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { MyGuard } from './services/my-guard.service';



const appRoutes: Routes = [
  {path:'', component: LugaresComponent},
  {path:'lugares', component: LugaresComponent},
  {path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear/:id', component: CrearComponent, canActivate:[MyGuard]},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetalleComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule,
  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
