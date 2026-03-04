import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  model = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isLoading = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isLoading = true;

    this.http.post(`${environment.apiUrl}/messages`, this.model).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response.success) {
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonColor: 'var(--primary-color)',
            background: 'var(--surface-color)',
            color: 'var(--text-primary)'
          });
          this.model = { name: '', email: '', subject: '', message: '' };
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Error!',
          text: error.error?.error || 'Failed to send message. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
          background: 'var(--surface-color)',
          color: 'var(--text-primary)'
        });
      }
    });
  }
}
