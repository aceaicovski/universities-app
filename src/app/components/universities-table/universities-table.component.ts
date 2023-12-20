import { Component } from '@angular/core';
import { UniversitiesService } from '../../services/universities.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-universities-table',
  standalone: true,
  templateUrl: './universities-table.component.html',
  styleUrl: './universities-table.component.css',
  imports: [CommonModule],
})
export class UniversitiesTableComponent {
  public universities;

  constructor(private universitiesService: UniversitiesService) {
    this.universities = this.universitiesService.universities$.pipe(
      map((universities) => universities.slice(0, 10))
    );
  }
}
