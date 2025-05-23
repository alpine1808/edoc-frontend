import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DanhmucComponent} from './pages/danhmuc/danhmuc.component';
import {HethongComponent} from './pages/hethong/hethong.component';
import {VanbanDenComponent} from './pages/vanban/vanban-den/vanban-den.component';
import {VanbanDiComponent} from './pages/vanban/vanban-di/vanban-di.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'danhmuc', component: DanhmucComponent},
  {path: 'hethong', component: HethongComponent},
  {path: 'vanban/vanban-den', component: VanbanDenComponent},
  {path: 'vanban/vanban-di', component: VanbanDiComponent},
];
