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
import { AdminGuard } from './shared/admin.guard';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { HomeProjectsFilterComponent } from './home-projects-filter/home-projects-filter.component';
import { ProjectFilterPipe } from './progect-filter.pipe';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UsersComponent } from './users/users.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { UserFilterPipe } from './user-filter.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    HomeProjectsComponent,
    HomeProjectsFilterComponent,
    ProjectFilterPipe,
    ProjectComponent,
    AddProjectComponent,
    UsersComponent,
    UserFilterComponent,
    UserFilterPipe,
    UserListComponent,
    AddUserComponent,
    UserSettingsComponent
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
        path: 'project/:id',
        component: ProjectComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [
          AdminGuard,
          AuthGuard
        ]
      },
      {
        path: 'user-settings',
        component: UserSettingsComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        canActivate: [ AuthGuard ]
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ])
  ],
  providers: [
    AuthService,
    HomeProjectService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
