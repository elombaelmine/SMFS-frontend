import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar} from './pages/sidebar/sidebar';
import { Header } from './pages/header/header';

@Component({
  selector: 'app-root',
  standalone: true, // Declares it explicitly as a modern standalone frame
  imports: [RouterOutlet, Sidebar, Header], // FIX: Inject elements here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'sfms-frontend';
}