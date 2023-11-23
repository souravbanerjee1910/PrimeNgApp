import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foodcardData = [
    {
      src: '../assets/logo/rest_img/albert-YYZU0Lo1uXE-unsplash.jpg',
      name: 'Indian Cuisine',
      bio:' Best indian Food'
    },
    {
      src: '../assets/logo/rest_img/alessio-dandi-LusjIyLfZ70-unsplash.jpg',
      name: 'Italian Cuisine',
      bio:' Best Italian Food'
    },
    {
      src: '../assets/logo/rest_img/jason-leung-poI7DelFiVA-unsplash.jpg',
      name: 'Chinese Cuisine',
      bio:' Best Chinese Food'

    },
    {
      src: '../assets/logo/rest_img/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg',
      name: 'Thai Cuisine',
      bio:' Best Thai Food'
    },
    {
      src: '../assets/logo/rest_img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg',
      name: 'Soul Cuisine ',
      bio:' Best Soul Food'
    },
    {
      src: '../assets/logo/rest_img/ruben-ramirez-xhKG01FN2uk-unsplash.jpg',
      name: 'Japanese Cuisine',
      bio:' Best Japanese Food'
    }
  ]

}
