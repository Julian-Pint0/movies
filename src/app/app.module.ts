import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavInputModule } from './shared/components/nav-input/nav-input.module';
import { AuthService } from './core/interceptors/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavInputModule,
    HttpClientModule
  ],
  providers: [
    {
       provide: HTTP_INTERCEPTORS ,
       useClass: AuthService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
