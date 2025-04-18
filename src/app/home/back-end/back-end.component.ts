import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-end',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-end.component.html',
  styleUrl: './back-end.component.scss'
})
export class BackEndComponent {
  codeSnippet = `
  REST_FRAMEWORK = {
      'DEFAULT_PERMISSION_CLASSES': [
          'rest_framework.permissions.IsAuthenticatedOrReadOnly',
      ],
      'DEFAULT_AUTHENTICATION_CLASSES': [
          'rest_framework.authentication.TokenAuthentication',
      ],
  }`;


  codeSnippetpy = `
  def __str__(self):<br>
            return f"{self.first_name} {self.last_name}"<br>
            in der Klasse<br>
            customer = Customer.objects.all()[0]<br>
            customer.order_set.all()`

}