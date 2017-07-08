import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet } from '@angular/router';


import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';
import { HomeProjectService } from './home-project.service';
import { AuthGuard } from './shared/auth.guard';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { HomeProjectsFilterComponent } from './home-projects-filter/home-projects-filter.component';
import { ProjectFilterPipe } from './progect-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    HomeProjectsComponent,
    HomeProjectsFilterComponent,
    ProjectFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    AuthService,
    HomeProjectService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
