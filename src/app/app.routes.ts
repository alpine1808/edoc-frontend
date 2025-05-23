import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DanhmucComponent} from './pages/danhmuc/danhmuc.component';
import {HethongComponent} from './pages/hethong/hethong.component';
import {VanbanDenComponent} from './pages/vanban/vanban-den/vanban-den.component';
import {VanbanDiComponent} from './pages/vanban/vanban-di/vanban-di.component';
import {VanbanDangxulyComponent} from './pages/vanban/vanban-dangxuly/vanban-dangxuly.component';
import {VanbanDaxulyComponent} from './pages/vanban/vanban-daxuly/vanban-daxuly.component';
import {VanbanQuahanComponent} from './pages/vanban/vanban-quahan/vanban-quahan.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'danhmuc', component: DanhmucComponent},
  {path: 'hethong', component: HethongComponent},
  {path: 'vanban/vanban-den', component: VanbanDenComponent},
  {path: 'vanban/vanban-di', component: VanbanDiComponent},
  {path: 'vanban/vanban-dangxuly', component: VanbanDangxulyComponent},
  {path: 'vanban/vanban-daxuly', component: VanbanDaxulyComponent},
  {path: 'vanban/vanban-quahan', component: VanbanQuahanComponent},
];
