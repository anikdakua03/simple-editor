import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Simple-Editor.UI');

  protected readonly user = signal<User>({
    firstName: "",
    lastName: "",
    email: "",
    isActive: false
  });

  // protected readonly userForm = form(this.user);
}
