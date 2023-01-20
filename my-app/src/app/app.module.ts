import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule, // importe également CommonModule
    BrowserModule, // importe également CommonModule
    HttpClientModule, // à importer une seule fois à la racine

    TodosModule,
    UsersModule,
    AppRoutingModule, // importe également RouterModule en dernier à cause du path: '**'
  ],
  providers: [
    // {
    //   provide: HttpClient,
    //   useValue: { type: 'HttpClient' }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
