import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { DataCardComponent } from './data-card/data-card.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path: 'other', component: OtherComponent},
  {path: 'card/:id', component: DataCardComponent},
  {path: 'add', component: FormComponent},

];
