import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBandComponent } from './animated-band.component';

describe('AnimatedBandComponent', () => {
  let component: AnimatedBandComponent;
  let fixture: ComponentFixture<AnimatedBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedBandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
