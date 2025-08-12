import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tri-color-fire',
    loadComponent: () =>
      import('./tri-color-fire/tri-color-fire.component').then(
        (m) => m.TriColorFireComponent
      ),
  },
  {
    path: 'tri2',
    loadComponent: () =>
      import('./tri2/tri2.component').then((m) => m.Tri2Component),
  },
  {
    path: 'problem',
    loadComponent: () =>
      import('./problem/problem.component').then((m) => m.ProblemComponent),
  },
  {
    path: 'wolf-goat',
    loadComponent: () =>
      import('./wolf-goat/wolf-goat.component').then(
        (m) => m.WolfGoatComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./tri-color-fire/tri-color-fire.component').then(
        (m) => m.TriColorFireComponent
      ),
  },
];
