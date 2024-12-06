import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailService } from 'app/services/email.service';
import { environment } from 'src/environments/environment.development';


interface emailForm {
  message: FormControl<string>
}

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent {

  fb = inject(NonNullableFormBuilder);
  emailService = inject(emailService);
  readonly email = environment.email;
  form = this.fb.group<emailForm>({
    message: this.fb.control('', { validators: [Validators.required, Validators.minLength(16), Validators.maxLength(256)] })
  });

  sendEmail() {

    const message = this.form.value.message!;

    const mailtoLink = `mailto: ${this.email}?body=${encodeURIComponent(message)}}`;

    window.location.href = mailtoLink;
  }  

  onSubmit() {
    this.sendEmail();
  }

}
