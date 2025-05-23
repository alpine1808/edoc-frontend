import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-danhmuc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './danhmuc.component.html',
  styleUrl: './danhmuc.component.scss'
})
export class DanhmucComponent {

}
