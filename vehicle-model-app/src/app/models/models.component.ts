import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface IModels {
  year: number;
  make: string;
  model: string;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  models: IModels[] = [];
  years;
  makes;
  selectedY;
  selectedM;

  constructor(private location: Location, private http: HttpClient) {
    this.loadMakes();
  }

  ngOnInit() {
  }

  async loadMakes() {
    this.years = await this.http.get('https://vehicle-data.azurewebsites.net/api/years').toPromise();
    this.makes = await this.http.get('https://vehicle-data.azurewebsites.net/api/makes').toPromise();
  }


  async filterList() {
    this.models = await this.http.get<IModels[]>
    (`https://vehicle-data.azurewebsites.net/api/models?make=${this.selectedM}&year=${this.selectedY}`).toPromise();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
