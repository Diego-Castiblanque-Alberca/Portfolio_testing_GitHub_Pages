import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PresentationComponent } from '../../shared/components/presentation/presentation.component';
import { ProjectsListComponent } from '../../shared/components/projects-list/projects-list.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    CommonModule,
    PresentationComponent,
    ProjectsListComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  previousScrollPosition!: number;
  scrollActive: boolean = true;
  @ViewChild('homeContainer', { static: true })
  homeContainer!: ElementRef;
  currentSection: number = 0;
  viewportHeight: number = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
  

  ngOnInit() {
    this.previousScrollPosition = window.document.body.offsetTop;
  }
  goToSection(section: number) {
    if (window.innerWidth < 992 || !this.scrollActive || this.currentSection === section) return;
    window.document.body.style.overflow = 'hidden';
    this.scrollActive = false;
    
      if (this.currentSection < section) {
        while(this.currentSection !== section){
        window.scroll(0, this.previousScrollPosition + this.viewportHeight);
        this.previousScrollPosition += this.viewportHeight;
        this.currentSection++;
        }
      } else if (this.currentSection > section) {
        while(this.currentSection !== section){
          window.scroll(0, this.previousScrollPosition - this.viewportHeight);
          this.previousScrollPosition -= this.viewportHeight;
          this.currentSection--;
        }
      }
    setTimeout(() => {
      this.scrollActive = true;
      window.document.body.style.overflow = 'scroll';
    }, 1200);
  }
  @HostListener('window:scroll', ['$event'])
  changeSeccion(event: Event) {
    event.preventDefault();
    if (window.innerWidth < 992 || !this.scrollActive) return;
    window.document.body.style.overflow = 'hidden';
    this.scrollActive = false;
    const currentScrollPosition: number = window.scrollY;
    if (currentScrollPosition > this.previousScrollPosition) {
      window.scroll(0, this.previousScrollPosition + this.viewportHeight);
      this.previousScrollPosition += this.viewportHeight;
      this.currentSection++;
    } else if (currentScrollPosition < this.previousScrollPosition) {
      window.scroll(0, this.previousScrollPosition - this.viewportHeight);
      this.previousScrollPosition -= this.viewportHeight;
      this.currentSection--;
    }
    setTimeout(() => {
      this.scrollActive = true;
      window.document.body.style.overflow = 'scroll';
    }, 1200);
  }
  @HostListener('window:resize', ['$event'])
  onresize(event: Event) {
    event.preventDefault();
    if (window.innerWidth < 992) return;
    window.document.body.style.overflow = 'hidden';
    this.scrollActive = false;
    window.scroll({ top: 0, behavior: 'instant' });
    this.previousScrollPosition = 0;
    this.viewportHeight =
    window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;
    setTimeout(() => {
      this.scrollActive = true;
      window.document.body.style.overflow = 'scroll';
    }, 300);
  }
}
