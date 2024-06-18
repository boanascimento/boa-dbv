import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortProfileCardComponent } from './chart-test/short-profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ShortProfileCardComponent],
})
export class AppComponent {
  title = 'boa-dbv';
}
