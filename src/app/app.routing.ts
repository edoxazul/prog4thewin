import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ErrorComponent } from './error/error.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetalleComponent } from './noticia-detalle/noticia-detalle.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'noticias',         component: NoticiasComponent },
    { path: 'noticiasdetalle/:autor/:descripcion/:fecha/:titulo/:url/:imagenUrl',         component: NoticiaDetalleComponent },
    { path: 'favoritos',        component: FavoritosComponent},
    { path: '**',               component: SignupComponent},
    { path: '', redirectTo: 'noticias', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
