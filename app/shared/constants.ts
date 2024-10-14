import { Project } from './models/project';
import { Quote } from './models/quote';

export const emptyProjects: Project[] = [
  {
    title1: ' ',
    title2: [' '],
    iconSpine: '#',
    descriptions: [' '],
    type: [' '],
    iconsTechnologies: ['#'],
    url: '#',
  },
  {
    title1: ' ',
    title2: [' '],
    iconSpine: '#',
    descriptions: [' '],
    type: [' '],
    iconsTechnologies: ['#'],
    url: '#',
  },
];
export const projects: Project[] = [
  {
    title1: 'Portfolio',
    title2: ['Portfolio', 'Web'],
    iconSpine: 'assets/images/icons-band/brackets.svg',
    descriptions: [
      'Responsive website about me (mobile first).',
      'Exhibition of all my personal projects.',
      'Deployment to GitHub Pages.',
    ],
    type: ['SPA & CSR'],
    iconsTechnologies: [
      'assets/images/icons-band/angular.png',
      'assets/images/icons-band/ts.png',
      'assets/images/icons-band/html.png',
      'assets/images/icons-band/css.png',
      'assets/images/icons-band/sass.png',
    ],
    url: 'https://github.com/Diego-Castiblanque-Alberca/Portfolio',
  },
  {
    title1: 'Maillard',
    title2: ['Maillard', 'Smokehouse'],
    iconSpine: 'assets/images/icons-band/brackets.svg',
    descriptions: [
      'Information about the restaurant.',
      'Gastronomic interactive menu.',
      'Booking management with email communications.',
    ],
    type: ['SPA & CSR + API Rest'],
    iconsTechnologies: [
      'assets/images/icons-band/react.png',
      'assets/images/icons-band/js.png',
      'assets/images/icons-band/laravel.png',
      'assets/images/icons-band/php.png',
      'assets/images/icons-band/aws.png',
    ],
    url: 'https://github.com/Diego-Castiblanque-Alberca/TFG_Maillard_SmokeHouse',
  },
  {
    title1: 'Frontend',
    title2: ['Frontend', 'Technical', 'test'],
    iconSpine: 'assets/images/icons-band/brackets.svg',
    descriptions: [
      'List of users with infinite scrolling.',
      'Data fetching to multiple APIs.',
      'Developed with React 18 + Vite.',
    ],
    type: ['SPA & CSR'],
    iconsTechnologies: [
      'assets/images/icons-band/react.png',
      'assets/images/icons-band/vite.png',
      'assets/images/icons-band/js.png',
      'assets/images/icons-band/html.png',
      'assets/images/icons-band/css.png',
    ],
    url: 'https://github.com/Diego-Castiblanque-Alberca/Frontend_Test',
  },
  {
    title1: 'Backend',
    title2: ['Backend', 'Technical', 'test'],
    iconSpine: 'assets/images/icons-band/brackets.svg',
    descriptions: [
      'API Rest with NestJS.',
      'Works as an API proxy.',
      'Responses in JSON and CSV format.',
      'Dockerized the application with Docker.',
    ],
    type: ['API Rest'],
    iconsTechnologies: [
      'assets/images/icons-band/nestjs.png',
      'assets/images/icons-band/ts.png',
      'assets/images/icons-band/node.png',
      'assets/images/icons-band/postman.png',
      'assets/images/icons-band/docker.png',
    ],
    url: 'https://github.com/Diego-Castiblanque-Alberca/Backend_Test',
  },
];

export const quotes: Quote[] = [
  {
    text: 'Always write your code as if the person who will maintain it is a dangerous psychopath who knows who you are and where you live.',
    autor: 'John F. Woods',
  },
  {
    text: 'Continuous learning is the key to personal and professional growth.',
    autor: 'Grace Hopper',
  },
  {
    text: 'Nothing is impossible if you have the determination and courage to move forward.',
    autor: 'Grace Hopper',
  },
  {
    text: 'Java is to JavaScript as ham is to hamster.',
    autor: 'Jeremy Keith',
  },
  {
    text: "Once a new technology rolls over you, if you're not part of the steamroller you're part of the road.",
    autor: 'Stewart Brand',
  },
  {
    text: 'Code is like humor. When you have to explain it, it’s bad.',
    autor: 'Cory House',
  },
  {
    text: 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.',
    autor: 'Linus Torvalds',
  },
];
