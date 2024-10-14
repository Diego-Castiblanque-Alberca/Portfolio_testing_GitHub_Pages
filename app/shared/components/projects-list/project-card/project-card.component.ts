import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true })
  title1!: string;
  @Input({ required: true })
  iconSpine!: string;
  @Input({ required: true })
  title2!: string[];
  @Input({ required: true })
  descriptions!: string[];
  @Input({ required: true })
  type!: string | string[];
  @Input({ required: true })
  iconsTechnologies!: string[];
  @Input({ required: true })
  url!: string;
  @ViewChild('card', { static: true })
  card!: ElementRef;
  isActive = false;
  constructor(private cdr: ChangeDetectorRef) {}

  toProject(event: Event) {
    event.stopPropagation();
    if (!this.isActive) {
      return;
    }
    this.card.nativeElement.classList.toggle('card-selected');
    setTimeout(() => {
      this.card.nativeElement.classList.toggle('card-selected');
      
    }, 200);
    window.open(this.url, '_blank');
  }
  setActiveStatus(status: boolean) {
    this.isActive = status;
    this.cdr.detectChanges(); // Forzar la verificación de cambios
  }
}
