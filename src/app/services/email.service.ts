import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MailjetService {
  private readonly mailjetUrl = 'https://api.mailjet.com/v3.1/send';
  private readonly apiKeyPublic = environment.apiKey;
  private readonly apiKeyPrivate = environment.apiSecret;
  private readonly email = environment.email
  constructor() {}

  async sendEmail(senderEmail: string, message: string): Promise<any> {
    const data = {
      Messages: [
        {
          From: {
            Email: senderEmail, 
          },
          To: [
            {
              Email: this.email,
            },
          ],
          Subject: 'Portfolio message', 
          TextPart: message, 
        },
      ],
    };

    try {
      const response = await axios.post(this.mailjetUrl, data, {
        auth: {
          username: this.apiKeyPublic,
          password: this.apiKeyPrivate,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
