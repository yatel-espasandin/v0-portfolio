import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MailjetService {

  private apiUrl = '/api';
  private apiKey = environment.apiKey;
  private apiSecret = environment.apiSecret;
  private myEmail = environment.email; 
  private http = inject(HttpClient)

  sendEmail(fromEmail: string, text: string): Observable<any> {
    const body = {
      Messages: [
        {
          From: {
            Email: fromEmail,
          },
          To: [
            {
              Email: this.myEmail
            }
          ],
          Subject: 'portfolio message',
          TextPart: text
        }
      ]
    };

    const headers = {
      Authorization: 'Basic ' + btoa(`${this.apiKey}:${this.apiSecret}`)
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
