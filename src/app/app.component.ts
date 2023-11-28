import { Component } from '@angular/core';
import{LocationModel} from './location.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logo = 'D!';
  title = 'Search Places Near to you';
  Search='Quick Search';
  quickSearchSubTitle='Find Resturants By MealType';

  // food card data
  foodcardData=[
    {
      src: '../assets/logo/rest_img/albert-YYZU0Lo1uXE-unsplash.jpg',
      name: 'Indian cuisine',
    },
    {
      src: '../assets/logo/rest_img/alessio-dandi-LusjIyLfZ70-unsplash.jpg',
      name: 'Italian cuisine',
    },
    {
      src: '../assets/logo/rest_img/jason-leung-poI7DelFiVA-unsplash.jpg',
      name: 'Chinese cuisine',
    },
    {
      src: '../assets/logo/rest_img/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg',
      name: 'Thai cuisine',
    },
    {
      src: '../assets/logo/rest_img/patrick-tomasso-GXXYkSwndP4-unsplash.jpg',
      name: 'Soul food',
    },
    {
      src: '../assets/logo/rest_img/ruben-ramirez-xhKG01FN2uk-unsplash.jpg',
      name: 'Japanese Cuisine',
    },
  ];

  // Search Location Data

  searchLocationData :LocationModel [] =[
    {
      city: 'Chandrapura',
      state: 'Jharkhand',
      stateID:1,
    },
    {
      city: 'Chatra',
      state: 'Jharkhand',
      stateID:2,
    },

    {
      city: 'Daltonganj',
      state: 'Jharkhand',
      stateID:3,
    },
    {
      city: 'Deoghar',
      state: 'Jharkhand',
      stateID:4,
    },
    {
      city: 'Dhanbad',
      state: 'Jharkhand',
      stateID:5,
    },
    {
      city: 'Dumka',
      state: 'Jharkhand',
      stateID:6,
    },
  ];

  // Resturant Names
  resturantNameData = [
    {
      restName: 'Hydrabadi Zaika',
    },
    {
      restName: 'Behrauz Biryani',
    },
    {
      restName: 'Reddys Biryani',
    },
    {
      restName: 'Almor',
    },
    {
      restName: 'Moms Biryani',
    },
    {
      restName: 'Paradise Biryani',
    },
    {
      restName: 'Nandus Biryani',
    },
  ];

  // Dishes Available
  dishNameData = [
    {
      MenuItem: 'Chicken Tandoor Dum Biryani',
    },
    {
      MenuItem: 'Hydrabadi Dum Biryani',
    },
    {
      MenuItem: 'Chicken Tandoor Masala Dum Biryani',
    },
    {
      MenuItem: 'Veg Dum Biryani',
    },
    {
      MenuItem: 'Maska Dum Biryani',
    },
    {
      MenuItem: 'Chicken Tandoor Kabab',
    },
    {
      MenuItem: 'Veg Kabab',
    },
  ];

  onSelect(event:Event){
    console.log((event.target as HTMLInputElement).value );
  }

}
