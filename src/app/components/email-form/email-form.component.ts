import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailjetService } from 'app/services/email.service';



interface emailForm {
  fromEmail: FormControl<string>,
  message: FormControl<string>
}

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss'
})
export class EmailFormComponent{

  fb = inject(NonNullableFormBuilder);
  sendService = inject(MailjetService);

  form = this.fb.group<emailForm>({
    fromEmail: this.fb.control('', { validators: [Validators.required, Validators.email, Validators.maxLength(64)] }),
    message: this.fb.control('', { validators: [Validators.required, Validators.minLength(16), Validators.maxLength(256)] })
  });

  onSubmit() { 
    const fromEmail = this.form.get('fromEmail')?.value;
    const message =  this.form.get('message')?.value;
    this.sendService.sendEmail(fromEmail!, message!);
  }
}


