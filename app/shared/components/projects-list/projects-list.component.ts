import {
  Component,
  QueryList,
  ViewChildren,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { projects, emptyProjects } from '../../constants';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent implements OnInit, AfterViewInit {
  //Hard coded projects
  allProjects: Project[] = projects;
  hiddenProjects: Project[] = emptyProjects;
  //scroll variables
  scrollDisabled: boolean = false;
  previousScroll!: number;
  //sizes and positions
  halfWidthContainer!: number; //ancho de la ventana
  middleContainer!: number; //el punto del ejex central de la ventana
  halfWidthCardSelected!: number; //ancho de la card seleccionada
  middleCardSelected!: number; //punto del eje x central de la card seleccionada
  //card selected
  previousCardSelected!: ProjectCardComponent | null; //referencia a la card seleccionada anterior
  cardSelected!: ProjectCardComponent; //referencia a la card seleccionada
  cardSelectedIndex!: number; //indice de la card seleccionada
  //status and pointer
  previousStatus!: number;
  urlPointerActive: string = 'assets/images/pointer-enable.png';
  urlPointerInactive: string = 'assets/images/pointer-disable.png';
  //references
  @ViewChild('pointer', { static: true }) pointer!: ElementRef;
  @ViewChild('containerList', { static: true }) container!: ElementRef;
  @ViewChildren('projectCard')
  projectsCards!: QueryList<ProjectCardComponent>;
  @ViewChildren('itemStatus')
  itemsStatusBar!: QueryList<ElementRef>;

  ngOnInit() {
    this.halfWidthContainer =
      this.container.nativeElement.getBoundingClientRect().width / 2;
    this.middleContainer =
      this.container.nativeElement.getBoundingClientRect().x +
      this.halfWidthContainer;
    this.previousScroll = this.container.nativeElement.scrollLeft;
    if (window.innerWidth < 740) {
      this.cardSelectedIndex = 0;
    } else {
      this.cardSelectedIndex = 1;
    }
    this.previousStatus = -1;
    this.previousCardSelected = null;
  }
  ngAfterViewInit() {
    this.cardMoveTo(this.cardSelectedIndex, true);
  }

  scrollNextOrPrevCard(event: Event) {
    event.stopPropagation();
    if (this.scrollDisabled) return;
    const actualPosition = this.container.nativeElement.scrollLeft;
    // eslint-disable-next-line prettier/prettier
    if (actualPosition > this.previousScroll && this.cardSelectedIndex < this.allProjects.length - 1) {
      this.cardSelectedIndex++;
      this.cardMoveTo(this.cardSelectedIndex); //unificar
    } else if (
      actualPosition < this.previousScroll &&
      this.cardSelectedIndex > 0
    ) {
      this.cardSelectedIndex--;
      this.cardMoveTo(this.cardSelectedIndex);
    } else {
      this.cardMoveTo(this.cardSelectedIndex);
    }
  }
  clickNextOrPrevCard(event: Event, direction: 'next' | 'prev') {
    event.stopPropagation();
    const button = event.target as HTMLButtonElement;
    button.classList.toggle('button-clicked');
    setTimeout(() => {
      button.classList?.toggle('button-clicked');
    }, 200);
    if (this.scrollDisabled) return;
    // eslint-disable-next-line prettier/prettier
    if ( direction === 'next' && this.cardSelectedIndex < this.allProjects.length - 1) {
      this.cardSelectedIndex++;
      this.cardMoveTo(this.cardSelectedIndex);
    } else if (direction === 'prev' && this.cardSelectedIndex > 0) {
      this.cardSelectedIndex--;
      this.cardMoveTo(this.cardSelectedIndex);
    }
  }

  cardMoveTo(index: number, firstTime: boolean = false) {
    this.scrollDisabled = true;
    this.container.nativeElement.style.overflow = 'hidden';
    this.pointer.nativeElement.src = this.urlPointerInactive;
    this.previousCardSelected = this.cardSelected || null;
    this.cardSelected =
      this.projectsCards.get(index) || this.projectsCards.first;
    //Cambiar el tamaño de la tarjeta seleccionada
    if (this.previousCardSelected) {
      this.previousCardSelected.setActiveStatus(false);
      this.previousCardSelected = this.cardSelected;
    }
    this.cardSelected.setActiveStatus(true);
    this.halfWidthCardSelected =
      this.cardSelected.card.nativeElement.getBoundingClientRect().width / 2;
    this.middleCardSelected =
      this.cardSelected.card.nativeElement.getBoundingClientRect().x +
      this.halfWidthCardSelected;
    // Calcular el desplazamiento necesario para centrar la tarjeta seleccionada
    const scrollOffset = this.middleCardSelected - this.middleContainer;
    // Ajustar el desplazamiento del contenedor
    this.container.nativeElement.scroll({
      left: this.container.nativeElement.scrollLeft + scrollOffset,
      behavior: firstTime ? 'auto' : 'smooth',
    });
    setTimeout(
      () => {
        this.changeStatus(index, this.previousStatus);
        this.pointer.nativeElement.src = this.urlPointerActive;
        this.previousScroll = this.container.nativeElement.scrollLeft;
        this.scrollDisabled = false;
        this.container.nativeElement.style.overflow = 'scroll';
      },
      firstTime ? 100 : 600,
    );
  }
  changeStatus(itemForEnabled: number, itemForDisabled: number) {
    if (itemForEnabled === itemForDisabled) return;
    if (itemForDisabled === -1) {
      this.itemsStatusBar
        .get(itemForEnabled)
        ?.nativeElement.classList?.toggle('status-enabled');
      this.previousStatus = itemForEnabled;
    } else {
      this.itemsStatusBar
        .get(itemForEnabled)
        ?.nativeElement.classList.toggle('status-enabled');
      this.itemsStatusBar
        .get(itemForDisabled)
        ?.nativeElement.classList?.toggle('status-enabled');
      this.previousStatus = itemForEnabled;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    event.stopPropagation();
    this.halfWidthContainer =
      this.container.nativeElement.getBoundingClientRect().width / 2;
    this.middleContainer =
      this.container.nativeElement.getBoundingClientRect().x +
      this.halfWidthContainer;
    setTimeout(() => {
      this.cardMoveTo(this.cardSelectedIndex, true);
    }, 1);
  }
}
