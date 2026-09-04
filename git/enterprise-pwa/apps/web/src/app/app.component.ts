import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <header>
        <h1>Service Portal</h1>
        <p>Enterprise appointment scheduling</p>
      </header>

      <form (ngSubmit)="submit()">
        <input name="customerName" [(ngModel)]="form.customerName" placeholder="Name">
        <input name="customerEmail" [(ngModel)]="form.customerEmail" placeholder="Email">
        <input name="customerPhone" [(ngModel)]="form.customerPhone" placeholder="Phone">
        <select name="service" [(ngModel)]="form.service">
          <option value="maintenance">Maintenance</option>
          <option value="inspection">Inspection</option>
          <option value="repair">Repair</option>
        </select>
        <input name="scheduledAt" type="datetime-local" [(ngModel)]="form.scheduledAt">
        <button type="submit">Book appointment</button>
      </form>

      @if (status()) {
        <output>{{ status() }}</output>
      }
    </main>
  `
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  readonly status = signal('');

  form = {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    service: 'maintenance',
    scheduledAt: ''
  };

  submit(): void {
    this.http.post<{ id: number; status: string }>(
      '/api/appointments',
      this.form
    ).subscribe({
      next: response => this.status.set(`Appointment ${response.id}: ${response.status}`),
      error: () => this.status.set('Unable to create appointment')
    });
  }
}
