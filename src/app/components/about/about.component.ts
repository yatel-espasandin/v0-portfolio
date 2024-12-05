import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectViewComponent } from '../project-view/project-view.component';
import { ProjectViewPageComponent } from 'app/pages/project-view-page/project-view-page.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

}
