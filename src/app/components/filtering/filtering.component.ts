import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversitiesService } from '../../services/universities.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, InputTextModule],
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
    this.countries = this.universitiesService.countriesList;
  }

  public setFilterName() {
    if (!this.filterName) {
      this.filterUniversities();
    }
  }

  public resetFilters() {
    if (!this.selectedCountry && !this.filterName) {
      return;
    }

    this.selectedCountry = '';
    this.filterName = '';
    this.filterUniversities();
  }

  public filterUniversities() {
    this.universitiesService.getFilteredUniversities(
      this.selectedCountry,
      this.filterName.toLowerCase()
    );
  }
}
