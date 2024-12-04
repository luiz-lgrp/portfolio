import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/sales.png',
      alt: 'Projeto Sales Management',
      title: 'Sales Management',
      with: '100px',
      height: '51px',
      description:
        '<p>SalesManagement é um sistema desenvolvido para a gestão de vendas, com foco na escalabilidade, organização e aplicação de boas práticas de engenharia de software. O projeto foi idealizado para criar um ambiente robusto que atenda a requisitos comuns de sistemas de gerenciamento, como controle de produtos, clientes e pedidos, com um backend modular e altamente testável</p>',
      links: [
        {
          name: 'Github',
          href: 'https://github.com/luiz-lgrp/SalesManagement',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
