import { Component } from '@angular/core';
import { ContactLinksComponent } from './contact-links/contact-links.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactLinksComponent, ThankYouComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
 
}
