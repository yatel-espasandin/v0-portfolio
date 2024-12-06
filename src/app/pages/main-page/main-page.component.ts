import { Component } from '@angular/core';
import { AboutPageComponent } from '../about-page';
import { ProjectViewPageComponent } from '../project-view-page';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutPageComponent, ProjectViewPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})

export class MainPageComponent{

}