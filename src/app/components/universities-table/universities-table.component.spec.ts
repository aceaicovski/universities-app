import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesTableComponent } from './universities-table.component';

describe('UniversitiesTableComponent', () => {
  let component: UniversitiesTableComponent;
  let fixture: ComponentFixture<UniversitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversitiesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
