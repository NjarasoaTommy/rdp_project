import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-customized-template',
  imports: [NgxGraphModule],
  templateUrl: './customized-template.component.html',
  styleUrl: './customized-template.component.css',
})
export class CustomizedTemplateComponent {
  all_nodes = [
    {
      id: 'node1',
      label: 'Node 1',
    },
    {
      id: 'node2',
      label: 'Node 2',
    },
    {
      id: 'node3',
      label: 'Node 3',
    },
  ];
  all_links = [
    {
      id: 'link1',
      source: 'node1',
      target: 'node2',
    },
    {
      id: 'link2',
      source: 'node2',
      target: 'node3',
    },
  ];
}
