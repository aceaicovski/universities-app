import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilteringComponent } from "./components/filtering/filtering.component";
import { UniversitiesTableComponent } from "./components/universities-table/universities-table.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HttpClientModule, FilteringComponent, UniversitiesTableComponent]
})
export class AppComponent {
  title = 'universities-app';
}
