import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-vanban-di',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vanban-di.component.html',
  styleUrl: './vanban-di.component.scss'
})
export class VanbanDiComponent {

}
