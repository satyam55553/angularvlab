import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AmlabComponent } from './components/amlab/amlab.component';
import { FmtheoryComponent } from './components/fmtheory/fmtheory.component';
import { HomeComponent } from './components/home/home.component';
import { LabComponent } from './components/lab/lab.component';
import { LearnmoreComponent } from './components/learnmore/learnmore.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lab', component: LabComponent },
  { path: 'amlab', component: AmlabComponent },
  { path: 'learnmore', component: LearnmoreComponent },
  { path: 'fmtheory', component: FmtheoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
