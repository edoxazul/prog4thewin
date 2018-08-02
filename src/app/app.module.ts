import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { ErrorComponent } from './error/error.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import {UsuarioService} from './services/usuario.services';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    NoticiasComponent,
    NoticiaDetalleComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [AppComponent, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
