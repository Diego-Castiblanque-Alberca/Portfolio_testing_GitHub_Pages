import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isOpen: boolean = false;
  isVisible: boolean = true;
  previousScrollPosition = 0;
  @Output('secctionClicked') secction = new EventEmitter<number>();

  constructor() { }
  toggleMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }
  updateSelectedSecction(event: Event) {
    console.log((event.target as HTMLElement).dataset['ref']);
    this.secction.emit(Number((event.target as HTMLElement).dataset['ref']));
  }

  @HostListener('window:scroll', [])
  scrollDownAndUp() {
    const currentScrollPosition = document.documentElement.scrollTop;
    if (currentScrollPosition < this.previousScrollPosition || currentScrollPosition === 0) {
      this.isVisible = true;
    } else if (currentScrollPosition > this.previousScrollPosition) {
      this.isVisible = false;
    }
    // Actualizamos la posición anterior al valor actual del scroll
    this.previousScrollPosition = currentScrollPosition;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const window = event.target as Window;
    window.innerWidth > 768 && (this.isOpen = false);
  }
}
