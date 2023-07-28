import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
	selector: 'app-details',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocation: HousingLocation | undefined;
	applyForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl('')
	});
	housingLocationId = -1;

	constructor() {
		this.housingLocationId = Number(this.route.snapshot.params['id']);
		this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
	}

	submitApplication() {
		this.housingService.submitApplication(
		  	this.applyForm.value.firstName ?? '',
		  	this.applyForm.value.lastName ?? '',
		  	this.applyForm.value.email ?? ''
		);
		this.applyForm.reset()
	}
}
