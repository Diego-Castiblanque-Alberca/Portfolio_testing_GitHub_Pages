import { Component } from '@angular/core';
import { Quote } from '../../../../models/quote';
import { quotes } from '../../../../constants';
import { CommonModule } from '@angular/common';
import { randomBothInclusive } from '../../../../utils/randomBothInclusive'; 


@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {
  quoteIndexPosition: number = 0;
  quotesList: Quote[] = quotes;
  quote!: Quote;
  ngOnInit() {
    this.getRandomQuote();
  }
  getRandomQuote() {
    const min: number = 0;
    const max: number = this.quotesList.length - 1;
    this.quoteIndexPosition = randomBothInclusive(min,max);
    this.quote = this.quotesList[this.quoteIndexPosition];
  }
}
