import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/net.svg',
      alt: 'Ícone de conhecimento de C#',
    },
    {
      src: 'assets/icons/knowledge/netCore.svg',
      alt: 'Ícone de conhecimento de .NET',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'Ícone de conhecimento de AWS',
    },
    {
      src: 'assets/icons/knowledge/azure.svg',
      alt: 'Ícone de conhecimento de Azure',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
  ]);
}
