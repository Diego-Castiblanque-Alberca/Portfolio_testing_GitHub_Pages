import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextTypping } from '../../../models/text-typping';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  @ViewChild('about_me_info_with_dimensions', { static: true })
  containerInfoHidden!: ElementRef;
  @ViewChild('about_me_info_without_dimensions', { static: true })
  containerInfo!: ElementRef;
  spans: TextTypping[];
  isTyppingNow: boolean;
  textContent: string[];

  constructor() {
    this.spans = [
      { isTypping: false, isWaitting: true, text: '' },
      { isTypping: false, isWaitting: true, text: '' },
      { isTypping: false, isWaitting: true, text: '' },
      { isTypping: false, isWaitting: true, text: '' },
      { isTypping: false, isWaitting: true, text: '' },
    ];
    this.isTyppingNow = false;
    this.textContent = [
      'The combination of hard work, perseverance, frustration tolerance and a pinch of ambition is the formula I follow to build and grow my profile as a ',
      'Full Stack Developer',
      '.',
      'I am currently focused on the JavaScript and TypeScript ecosystem, although always open to learning new languages or going deeper into those I have used during my training, such as PHP with Laravel and Java.',
      "My roadmap includes frameworks and libraries such as Angular, React, NestJS or Express along with Jest for test automation. Database management like MongoDB and MySQL or PostgreSQL, combined with ORM's to optimise data management. CSS styling with Sass. For deployment I use tools like Docker and AWS.",
    ];
  }
  ngOnInit() {
    this.TypeWriter();
  }
  ngAfterViewInit() {
    /* setTimeout is used to wait for the view to be rendered, 
     so the dimensions of the hidden element are calculated correctly*/
    setTimeout(() => {
      this.resizeContainerInfo();
    }, 50);
  }

  resizeContainerInfo() {
    const height = this.containerInfoHidden.nativeElement.offsetHeight;
    const width = this.containerInfoHidden.nativeElement.offsetWidth;
    this.containerInfo.nativeElement.style.height = `${height}px`;
    this.containerInfo.nativeElement.style.width = `${width}px`;
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async cursorWaitting(span: TextTypping) {
    while (span.isWaitting) {
      span.isTypping = false;
      await this.delay(400);
      span.isTypping = true;
      await this.delay(400);
    }
    span.isTypping = false;
  }
  async TypeWriter() {
    this.isTyppingNow = true;
    for (let i = 0; i < this.spans.length; i++) {
      for (let j = 0; j < this.textContent[i].length; j++) {
        this.spans[i].isTypping = true;
        const char = this.textContent[i].split('')[j];
        this.spans[i].text += char;
        switch (char) {
          case '.':
          case '?':
            this.spans[i].isWaitting = true;
            this.cursorWaitting(this.spans[i]);
            await this.delay(500);
            this.spans[i].isWaitting = false;
            this.spans[i].isTypping = false;
            break;
          case ',':
            this.spans[i].isWaitting = true;
            this.cursorWaitting(this.spans[i]);
            await this.delay(800);
            this.spans[i].isWaitting = false;
            this.spans[i].isTypping = false;
            break;
          default:
            await this.delay(50);
            this.spans[i].isTypping = false;
        }
      }
    }
    this.spans[this.spans.length - 1].isWaitting = true;
    this.cursorWaitting(this.spans[this.spans.length - 1]);
    await this.delay(2000);
    this.isTyppingNow = false;
    this.spans[this.spans.length - 1].isWaitting = false;
  }
  @HostListener('window:resize')
  onResize() {
    this.resizeContainerInfo();
  }
}
