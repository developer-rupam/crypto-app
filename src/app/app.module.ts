import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from "@angular/common/http";

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
import { ExchangeFooterComponent } from './components/exchange-footer/exchange-footer.component';
import { DashboardComponent } from './pages/exchange/dashboard/dashboard.component';
import { PurchaseComponent } from './pages/exchange/purchase/purchase.component';
import { WithdrawComponent } from './pages/exchange/withdraw/withdraw.component';
import { ProfileComponent } from './pages/exchange/profile/profile.component';
import { ExchangeHeaderComponent } from './components/exchange-header/exchange-header.component';
import { ExchangeSidebarComponent } from './components/exchange-sidebar/exchange-sidebar.component';

// Define routes here
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "team", component: TeamComponent },
  { path: "faq", component: FaqComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "purchase", component: PurchaseComponent },
  { path: "withdraw", component: WithdrawComponent },
  { path: "profile", component: ProfileComponent },
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
    ExchangeFooterComponent,
    DashboardComponent,
    PurchaseComponent,
    WithdrawComponent,
    ProfileComponent,
    ExchangeHeaderComponent,
    ExchangeSidebarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule 

  ],
  providers: [Helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
