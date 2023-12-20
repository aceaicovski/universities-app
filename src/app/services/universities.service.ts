import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { University } from '../interfaces/university.interface';

@Injectable({
  providedIn: 'root',
})
export class UniversitiesService implements OnDestroy {
  private countries: string[] = [];

  private _universities = new BehaviorSubject<University[]>([]);
  public universities$ = this._universities.asObservable();

  private destroy$: Subject<void> = new Subject<void>();

  constructor(public httpClient: HttpClient) {}

  public get countriesList() {
    this.httpClient
      .get<University[]>(`http://universities.hipolabs.com/search`)
      .pipe(takeUntil(this.destroy$))
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
      .pipe(takeUntil(this.destroy$))
      .subscribe((universities) => {
        this._universities.next(universities);
      });

    return this._universities.asObservable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
