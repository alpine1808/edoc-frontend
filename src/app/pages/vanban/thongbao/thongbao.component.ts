import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-thongbao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thongbao.component.html',
  styleUrl: './thongbao.component.scss'
})
export class ThongbaoComponent {

}
