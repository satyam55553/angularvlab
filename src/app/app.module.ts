import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//popup
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabComponent } from './components/lab/lab.component';
import { HomeComponent } from './components/home/home.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { PopupComponent } from './components/popup/popup.component';
import { AmlabComponent } from './components/amlab/amlab.component';
import { LearnmoreComponent } from './components/learnmore/learnmore.component';
import { AmgraphsComponent } from './components/amgraphs/amgraphs.component';

@NgModule({
  declarations: [
    AppComponent,
    LabComponent,
    HomeComponent,
    GraphsComponent,
    PopupComponent,
    AmlabComponent,
    LearnmoreComponent,
    AmgraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//popup
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
