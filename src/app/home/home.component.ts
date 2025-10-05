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
      name: "PrimeNG",
      useCase: "CSS Library",
      url: "/PrimeNG",
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
      name: "Django",
      useCase: "Django Infos",
      url: "/DJANGO",
    },
    {
      name: "Django",
      useCase: "Django Serializer",
      url: "/SERIAL",
    },
    {
      name: "SQL",
      useCase: "SQL Datenbank",
      url: "/SQL",
    },
    {
      name: "Testing",
      useCase: "Testing",
      url: "/TESTING",
    },
    {
      name: "CMD",
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
      useCase: "Hosten auf dem Pi",
      url: "/RASP",
    },
    {
      name: "AI",
      useCase: "KI Infos",
      url: "/PROMPT",
    },
    {
      name: "C#",
      useCase: "C# Basics",
      url: "/CSHARP",
    },
  ]
}
