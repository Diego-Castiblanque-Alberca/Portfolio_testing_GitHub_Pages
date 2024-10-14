import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  ElementRef,
  HostListener,
} from '@angular/core';
import { AnimatedBandComponent } from './animated-band/animated-band.component';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-two-animated-bands',
  standalone: true,
  imports: [AnimatedBandComponent],
  templateUrl: './two-animated-bands.component.html',
  styleUrl: './two-animated-bands.component.scss',
})
export class TwoAnimatedBandsComponent implements OnInit, AfterViewInit {
  @ViewChild('containerBands', { static: true }) containerBands!: ElementRef;
  containerRotated: number;
  lastScrollTop: number;
  xMovement: BehaviorSubject<number>;
  isVisible: boolean;
  totalScroll: number;
  arrayFill: number[];

  constructor() {
    this.lastScrollTop = 0;
    this.totalScroll = 0;
    this.isVisible = false;
    this.containerRotated = 0;
    this.xMovement = new BehaviorSubject<number>(0);
    this.arrayFill = Array(2).fill(0);
  }

  ngOnInit() {
    this.containerRotated = this.getRotationDegrees(this.containerBands);
  }
  ngAfterViewInit() {
    this.checkVisibility(this.containerBands);
  }
  getRotationDegrees(element: ElementRef): number {
    const transform = window.getComputedStyle(element.nativeElement).transform;
    if (transform === 'none') return 0;
    const values = transform.split('(')[1].split(')')[0].split(',');
    const a = parseFloat(values[0]);
    const b = parseFloat(values[1]);
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
  }
  checkVisibility(element: ElementRef): void {
    const elementRendered = element.nativeElement.getBoundingClientRect();

    const partiallyVisible =
      elementRendered.top <
        (window.innerHeight || document.documentElement.clientHeight) &&
      elementRendered.bottom > 0 &&
      elementRendered.left <
        (window.innerWidth || document.documentElement.clientWidth) &&
      elementRendered.right > 0;

    const completelyVisible =
      elementRendered.top >= 0 &&
      elementRendered.left >= 0 &&
      elementRendered.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      elementRendered.right <=
        (window.innerWidth || document.documentElement.clientWidth);

    this.isVisible = partiallyVisible || completelyVisible;
  }
  //Calculate the movement of the scroll
  calculateScrollMovement(): void {
    const scrollTop: number = document.documentElement.scrollTop;
    const scrollAmount: number = scrollTop - this.lastScrollTop;
    this.lastScrollTop = scrollTop;
    this.totalScroll += scrollAmount;
  }
  //Calculate the movement of the band
  calculateXMovement(scrollInfo: number): void {
    this.xMovement.next(Math.abs(scrollInfo * 0.5));
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.innerWidth < 992) {
      this.checkVisibility(this.containerBands);
      this.calculateScrollMovement();
      if (this.isVisible) {
        this.calculateXMovement(this.totalScroll);
      }
    }
  }
}
