import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'learni-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learni';
  isProd = environment.production;
}
