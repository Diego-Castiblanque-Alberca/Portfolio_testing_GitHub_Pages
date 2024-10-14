import { Component, ElementRef, ViewChild } from '@angular/core';
import { IdentidyCardComponent } from './identidy-card/identidy-card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TwoAnimatedBandsComponent } from './two-animated-bands/two-animated-bands.component';
import { BouncingIconsComponent } from './bouncing-icons/bouncing-icons.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    IdentidyCardComponent,
    AboutMeComponent,
    TwoAnimatedBandsComponent,
    BouncingIconsComponent,
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {
  @ViewChild('presentationContainer', { static: true }) presentationContainer:
    | ElementRef
    | undefined;
}
