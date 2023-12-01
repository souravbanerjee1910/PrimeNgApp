import { Component, OnInit } from '@angular/core';
import { ICity } from './location.model';
import { HomeService } from './services/home.service';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  logo = 'D!';
  title = 'Search Places Near to you';
  Search = 'Quick Search';
  quickSearchSubTitle = 'Find Resturants By MealType';

  foodcardData = [
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
// API Bin ID:- 65687edf12a5d37659a12400

  searchLocationData: ICity[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCity().subscribe((data: ICity[]) => {
        this.searchLocationData = data;
        console.log('Received data:', data);
      },
      (error: any) => {
        console.error('Error fetching city data:', error);
      }
    );
  }

  // Resturant Names
  // API BIN ID:-6569832454105e766fd80c68

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
  // API BIN ID:-6569841654105e766fd80cb0

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

  onSelect(event: Event): void {
    console.log((event.target as HTMLInputElement).value);
  }
}
