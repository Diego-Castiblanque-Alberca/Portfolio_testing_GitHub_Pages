import { Component } from '@angular/core';
import { AnimatedBandComponent } from '../../presentation/two-animated-bands/animated-band/animated-band.component';

@Component({
  selector: 'app-contact-links',
  standalone: true,
  imports: [AnimatedBandComponent],
  templateUrl: './contact-links.component.html',
  styleUrl: './contact-links.component.scss',
})
export class ContactLinksComponent {}
