import { Component } from '@angular/core';
import { UniversitiesService } from '../../services/universities.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { SvgIconComponent } from '../ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-universities-table',
  standalone: true,
  templateUrl: './universities-table.component.html',
  styleUrl: './universities-table.component.css',
  imports: [CommonModule, SvgIconComponent],
})
export class UniversitiesTableComponent {
  public universities;

  constructor(private universitiesService: UniversitiesService) {
    this.universities = this.universitiesService.universities$.pipe(
      map((universities) => universities.slice(0, 10))
    );
  }
}
