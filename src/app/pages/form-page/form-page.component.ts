import { Component } from '@angular/core';
import { EmailFormComponent } from 'app/components/email-form';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [EmailFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

}
