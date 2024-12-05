import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectViewComponent } from 'app/components/project-view/project-view.component';

@Component({
  selector: 'app-project-view-page',
  standalone: true,
  imports: [ProjectViewComponent],
  templateUrl: './project-view-page.component.html',
  styleUrl: './project-view-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectViewPageComponent {

}
