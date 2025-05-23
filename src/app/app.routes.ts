import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DanhmucComponent} from './pages/danhmuc/danhmuc.component';
import {HethongComponent} from './pages/hethong/hethong.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'danhmuc', component: DanhmucComponent},
  {path: 'hethong', component: HethongComponent},
];
