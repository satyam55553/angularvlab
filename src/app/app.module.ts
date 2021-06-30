import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';//popup
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabComponent } from './components/lab/lab.component';
import { HomeComponent } from './components/home/home.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LabComponent,
    HomeComponent,
    GraphsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule//popup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
