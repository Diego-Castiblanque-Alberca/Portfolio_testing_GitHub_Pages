import { Component } from '@angular/core';
import { QuotesComponent} from './quotes/quotes.component';
import { ContactLinksComponent } from '../contact-links/contact-links.component';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [QuotesComponent, ContactLinksComponent],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent {

}
