import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Projects } from 'app/model/projects';
import { ProjectCardComponent } from '../project-card';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProjectViewComponent {

  projectArray: Array<Projects> = [
    {
      img: "./assets/images/tech-news.jpg",
      title: "Tech News",
      description: "A dynamic web application focused on a seamless user experience for browsing and reading news. It features articles organized by popularity and category, with functionality to save content for later reading.",
      codeLink: "https://github.com/maxkmesana/Angular-News-App",
      visualLink: "https://www.canva.com/design/DAGWJ4GsUXg/xqQKfXGwY77mfmHDYZM-TA/view#1",
    }
  ]
  
}
