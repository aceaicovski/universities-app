import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { University } from '../interfaces/university.interface';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService {
  private countries: string[] = [];
  //   public universities$ = this._universities.asObservable();

  private _universities = new BehaviorSubject<University[]>([]);
  public universities$ = this._universities.asObservable();

  private selectedCountrySource = new BehaviorSubject<any>(null);
  public selectedCountrie$ = this.selectedCountrySource.asObservable();

  private filterNameSource = new BehaviorSubject<string>('');
  public filterNameValue$ = this.filterNameSource.asObservable();

  constructor(public httpClient: HttpClient) {}

  public get countriesList() {
    this.httpClient
      .get<University[]>(`http://universities.hipolabs.com/search`)
      .subscribe((universities) => {
        const countries = Array.from(
          new Set(universities.map((university) => university.country))
        );
        this.countries = countries;
      });

    return this.countries;
  }

  public getFilteredUniversities(country: string = '', name: string = '') {
    this.httpClient
      .get<University[]>(
        `http://universities.hipolabs.com/search?country=${country}&name=${name}`
      )
      .subscribe((universities) => {
        this._universities.next(universities);
      });

    return this._universities.asObservable();
  }

  public setCountry(name: string): void {
    this.selectedCountrySource.next(name);
  }

  public setFilterName(name: string): void {
    this.filterNameSource.next(name);
  }
}
