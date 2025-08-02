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
    {
      name: "Angular",
      useCase: "Widely used Angular Components",
      url: "/Angular",
    },
    {
      name: "CRUD",
      useCase: "Simple CRUD for CRM",
      url: "/CRUD",
    },
    {
      name: "AF Authentication",
      useCase: "Angular Fire Authentication",
      url: "/AUTH",
    },
    {
      name: "Git Commands",
      useCase: "Git",
      url: "/GIT",
    },
    {
      name: "Backend",
      useCase: "Backend Infos",
      url: "/BACK",
    },
    {
      name: "Testing",
      useCase: "Testing",
      url: "/TESTING",
    },
    {
      name: "Command prompt",
      useCase: "Command Console",
      url: "/CMD",
    },
    {
      name: "Hosting",
      useCase: "Allgemeine Hosting Tipps",
      url: "/HOSTING",
    },
    {
      name: "RaspberryPi",
      useCase: "für das hosten auf dem Pi",
      url: "/RASP",
    },
    {
      name: "C#",
      useCase: "C# Infos",
      url: "/CSHARP",
    },
  ]
}
