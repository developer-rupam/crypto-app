import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

/***  Defining Helper Component ***/
import { Helper } from "./utils/helper";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoaderComponent } from './utils/loader/loader.component';
import { NewsComponent } from './pages/news/news.component';
import { TeamComponent } from './pages/team/team.component';
import { FaqComponent } from './pages/faq/faq.component';

// Define routes here
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "team", component: TeamComponent },
  { path: "faq", component: FaqComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    AboutComponent,
    Helper,
    LoginComponent,
    SignupComponent,
    LoaderComponent,
    NewsComponent,
    TeamComponent,
    FaqComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule 

  ],
  providers: [Helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
