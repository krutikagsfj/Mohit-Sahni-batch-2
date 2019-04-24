import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './mobile/college/college.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCollegeService } from './mobile/service-college.service';
import { sort } from './mobile/college/sort'; 
@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    sort,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceCollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
