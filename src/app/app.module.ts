import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Blog1118Component } from './blog1118/blog1118.component';
import { Blog01012018Component } from './blog01012018/blog01012018.component';
import { Blog01022018Component } from './blog01022018/blog01022018.component';
import { Blog01032018Component } from './blog01032018/blog01032018.component';
import { Blog01042018Component } from './blog01042018/blog01042018.component';
import { Blog01052018Component } from './blog01052018/blog01052018.component';
import { Blog01062018Component } from './blog01062018/blog01062018.component';
import { Blog01072018Component } from './blog01072018/blog01072018.component';
import { Blog01082018Component } from './blog01082018/blog01082018.component';
import { Blog01092018Component } from './blog01092018/blog01092018.component';
import { Blog01102018Component } from './blog01102018/blog01102018.component';
import { Blog01112018Component } from './blog01112018/blog01112018.component';
import { Blog01122018Component } from './blog01122018/blog01122018.component';
import { Blog01132018Component } from './blog01132018/blog01132018.component';
import { Blog01152018Component } from './blog01152018/blog01152018.component';
import { Blog01142018Component } from './blog01142018/blog01142018.component';
import { Blog01162018Component } from './blog01162018/blog01162018.component';
import { Blog01172018Component } from './blog01172018/blog01172018.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MainContentComponent,
    Blog1118Component,
    Blog01012018Component,
    Blog01022018Component,
    Blog01032018Component,
    Blog01042018Component,
    Blog01052018Component,
    Blog01062018Component,
    Blog01072018Component,
    Blog01082018Component,
    Blog01092018Component,
    Blog01102018Component,
    Blog01112018Component,
    Blog01122018Component,
    Blog01132018Component,
    Blog01152018Component,
    Blog01142018Component,
    Blog01162018Component,
    Blog01172018Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
