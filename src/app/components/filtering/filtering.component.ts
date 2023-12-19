import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.css',
})
export class FilteringComponent implements OnInit {
  public countries: string[] = [];
  public selectedCountry = '';
  public filterName = '';

  constructor(private universitiesService: UniversitiesService) {}

  ngOnInit(): void {
    this.loadCountries();
    this.filterUniversities();
  }

  public loadCountries(): void {
    console.log('Countries Loaded!');
    this.countries = this.universitiesService.countriesList;
  }

  public setFilterName() {
    console.log(this.filterName);
    if (!this.filterName) {
      this.filterUniversities();
    }
  }

  public selectCountry() {
    console.log(this.selectedCountry);
    this.universitiesService.setCountry(this.selectedCountry);
  }

  public resetFilters() {
    this.selectedCountry = '';
    this.filterName = '';
    this.filterUniversities();
  }

  public filterUniversities() {
    console.log('Filtered list click!');
    this.universitiesService.getFilteredUniversities(
      this.selectedCountry,
      this.filterName.toLowerCase()
    );
  }
}
