import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAnimatedBandsComponent } from './two-animated-bands.component';

describe('TwoAnimatedBandsComponent', () => {
  let component: TwoAnimatedBandsComponent;
  let fixture: ComponentFixture<TwoAnimatedBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoAnimatedBandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoAnimatedBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
