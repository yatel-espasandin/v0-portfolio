import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from 'app/components/about/index';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {

}
