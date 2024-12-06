
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Projects } from 'app/model/projects';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {

  redirectToLink(link: string | undefined): void {
    window.location.href = link!;
  }

  readonly project = input.required<Projects>();

}
