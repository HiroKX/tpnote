import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { MusicListComponent } from './data-card/./music-list.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'other', component: OtherComponent},
  {path: 'random', component: MusicListComponent},
  {path: 'card', component: MusicListComponent},
  {path: 'card/:id', component: MusicListComponent},
  {path: 'add', component: FormComponent},
];