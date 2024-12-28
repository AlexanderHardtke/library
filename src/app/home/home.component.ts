import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  components = [
    {
      name: "CSS Tricks",
      useCase: "Some CSS styles",
      url: "/CSS",
    },
    {
      name: "HTML",
      useCase: "Some HTML container",
      url: "/HTML",
    },
    {
      name: "JS Basics",
      useCase: "Some JS Basic functions",
      url: "/JS",
    },
  ]
}
