import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingIconsComponent } from './bouncing-icons.component';

describe('BouncingIconsComponent', () => {
  let component: BouncingIconsComponent;
  let fixture: ComponentFixture<BouncingIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouncingIconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BouncingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
