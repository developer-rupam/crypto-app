import { BrowserModule,Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { TransactionComponent } from './pages/exchange/transaction/transaction.component';
import { AdminDashboardComponent } from './admin/pages/admin-dashboard/admin-dashboard.component';
import { UserListsComponent } from './admin/pages/user-lists/user-lists.component';
import { UserDetailsComponent } from './admin/pages/user-details/user-details.component';
import { AdminHeaderComponent } from './admin/components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/components/admin-footer/admin-footer.component';
import { AdminLoginComponent } from './admin/pages/admin-login/admin-login.component';
import { TransactionHistoryComponent } from './admin/pages/transaction-history/transaction-history.component';
import {ExchangeRouteGuard} from './utils/exchangeRouteGuard/exchange-route.guard'
import {AdminRouteGuard} from  './utils/adminRouteGuard/admin-route.guard';
import { LiveTickerComponent } from './pages/live-ticker/live-ticker.component'

// Define routes here
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "team", component: TeamComponent },
  { path: "faq", component: FaqComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent ,canActivate:[ExchangeRouteGuard]},
  { path: "purchase", component: PurchaseComponent ,canActivate:[ExchangeRouteGuard]},
  { path: "withdraw", component: WithdrawComponent ,canActivate:[ExchangeRouteGuard]},
  { path: "profile", component: ProfileComponent ,canActivate:[ExchangeRouteGuard]},
  { path: "transaction", component: TransactionComponent ,canActivate:[ExchangeRouteGuard]},
  { path: "admin/login", component: AdminLoginComponent }, 
  { path: "admin", component: AdminLoginComponent }, 
  { path: "admin/dashboard", component: AdminDashboardComponent ,canActivate:[AdminRouteGuard]},
  { path: "admin/user-lists", component: UserListsComponent ,canActivate:[AdminRouteGuard]},
  { path: "admin/user-details", component: UserDetailsComponent ,canActivate:[AdminRouteGuard]},
  { path: "admin/transactions", component: TransactionHistoryComponent,canActivate:[AdminRouteGuard] },
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
    TransactionComponent,
    AdminDashboardComponent,
    UserListsComponent,
    UserDetailsComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminLoginComponent,
    TransactionHistoryComponent,
    LiveTickerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule 

  ],
  providers: [Helper,ExchangeRouteGuard,AdminRouteGuard,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
