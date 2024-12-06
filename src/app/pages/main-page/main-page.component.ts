import { Component } from '@angular/core';
import { AboutPageComponent } from '../about-page';
import { ProjectViewPageComponent } from '../project-view-page';
import { FormPageComponent } from '../form-page';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutPageComponent, ProjectViewPageComponent, FormPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})

export class MainPageComponent{

}