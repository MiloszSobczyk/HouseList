import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router' 
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  	selector: 'app-housing-location',
  	standalone: true,
  	imports: [
    	CommonModule,
		RouterLink,
		RouterOutlet,
  	],
	templateUrl: './housing-location.component.html',
  	styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  	@Input() housingLocation!: HousingLocation
}
