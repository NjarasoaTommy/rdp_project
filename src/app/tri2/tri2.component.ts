import { Component } from '@angular/core';
import { RdpGraphComponent } from '../rdp-graph/rdp-graph.component';
@Component({
  selector: 'app-tri2',
  imports: [RdpGraphComponent],
  templateUrl: './tri2.component.html',
  styleUrl: './tri2.component.css',
})
export class Tri2Component {
  nodes = [
    {
      id: 'p1',
      label: 'P1',
      type: 'place',
      jetons: 1,
      capacity: 1,
      couleur: 'rouge',
      isError: false,
    },
    {
      id: 'p2',
      label: 'P2',
      type: 'place',
      jetons: 0,
      capacity: 1,
      couleur: 'vert',
      isError: false,
    },
    {
      id: 'p3',
      label: 'P3',
      type: 'place',
      jetons: 0,
      capacity: 1,
      couleur: 'orange',
      isError: false,
    },
    {
      id: 'p4',
      label: 'P4',
      type: 'place',
      jetons: 1,
      capacity: 1,
      couleur: 'rouge',
    },
    {
      id: 'p5',
      label: 'P5',
      type: 'place',
      jetons: 0,
      capacity: 1,
      couleur: 'vert',
      isError: false,
    },
    {
      id: 'p6',
      label: 'P6',
      type: 'place',
      jetons: 0,
      capacity: 1,
      couleur: 'orange',
      isError: false,
    },
    {
      id: 't1',
      label: 'T1',
      type: 'transition_verticale',
      couleur: 'rouge',
      isError: false,
    },
    {
      id: 't2',
      label: 'T2',
      type: 'transition_verticale',
      couleur: 'vert',
      isError: false,
    },
    {
      id: 't3',
      label: 'T3',
      type: 'transition_verticale',
      couleur: 'rouge',
      isError: false,
    },
    {
      id: 't4',
      label: 'T4',
      type: 'transition_verticale',
      couleur: 'vert',
      isError: false,
    },
    {
      id: 't5',
      label: 'T5',
      type: 'transition_verticale',
      couleur: 'orange',
      isError: false,
    },
    {
      id: 't6',
      label: 'T6',
      type: 'transition_verticale',
      couleur: 'orange',
      isError: false,
    },
    {
      id: 't7',
      label: 'T7',
      type: 'transition_verticale',
      couleur: 'orange',
      isError: false,
    },
    {
      id: 't8',
      label: 'T8',
      type: 'transition_verticale',
      couleur: 'orange',
      isError: false,
    },
  ];

  links = [
    { id: 'pt31', source: 'p3', target: 't1', poids: '1', isError: false }, //01 -> R1
    { id: 'tp11', source: 't1', target: 'p1', poids: '1', isError: false }, //---> R1
    { id: 'pt32', source: 'p3', target: 't2', poids: '1', isError: false }, //01 -> V1
    { id: 'tp22', source: 't2', target: 'p2', poids: '1', isError: false }, //---> V1

    { id: 'pt63', source: 'p6', target: 't3', poids: '1', isError: false }, //O2 -> R2
    { id: 'tp34', source: 't3', target: 'p4', poids: '1', isError: false }, //---> R2
    { id: 'pt64', source: 'p6', target: 't4', poids: '1', isError: false }, //O2 -> V2
    { id: 'tp45', source: 't4', target: 'p5', poids: '1', isError: false }, //---> V2

    { id: 'pt15', source: 'p1', target: 't5', poids: '1', isError: false }, //R1 -> O1
    { id: 'tp53', source: 't5', target: 'p3', poids: '1', isError: false }, //---> O1
    { id: 'pt26', source: 'p2', target: 't6', poids: '1', isError: false }, //O1 -> V1
    { id: 'tp63', source: 't6', target: 'p3', poids: '1', isError: false }, //---> V1

    { id: 'pt47', source: 'p4', target: 't7', poids: '1', isError: false }, //R2 -> O2
    { id: 'tp76', source: 't7', target: 'p6', poids: '1', isError: false }, //---> O2
    { id: 'pt58', source: 'p5', target: 't8', poids: '1', isError: false }, //O2 -> V2
    { id: 'tp86', source: 't8', target: 'p6', poids: '1', isError: false }, //---> V2
  ];
}
