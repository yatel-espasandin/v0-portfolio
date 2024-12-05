import { Component } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { ProjectViewPageComponent } from '../project-view-page/project-view-page.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutPageComponent, ProjectViewPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})

export class MainPageComponent{

}