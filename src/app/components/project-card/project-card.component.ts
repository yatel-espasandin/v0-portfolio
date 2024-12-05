import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Projects } from 'app/model/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent{

  readonly project = input.required<Projects>();

}
