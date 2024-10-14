import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidyCardComponent } from './identidy-card.component';

describe('IdentidyCardComponent', () => {
  let component: IdentidyCardComponent;
  let fixture: ComponentFixture<IdentidyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentidyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentidyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
