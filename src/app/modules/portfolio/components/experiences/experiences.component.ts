import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor .NET',
        p: 'ConferIR | Julho 2022 - Present',
      },
      text: `
        <p>Participo ativamente do desenvolvimento e manutenção de APIs, aplicando princípios de Clean Architecture e Design Patterns, com foco em escalabilidade e facilidade de manutenção.</p>
        <p>Utilizo práticas como CQRS, Mediator Pattern e Repository Pattern para melhorar a modularidade e desempenho das aplicações.</p>
        <p>Correção bugs nos sistemas, garantindo alta disponibilidade e satisfação dos usuários.</p>
        <p>Realizo consultas e alterações em bancos de dados SQL (SQL Server) e NoSQL (MongoDB), otimizando o armazenamento e a recuperação de dados.</p>
        <p>Contribuo para a entrega de novas funcionalidades, sempre alinhado a boas práticas de engenharia de software, buscando reduzir o tempo de desenvolvimento e retrabalho.</p>
      `,
    },
    {
      summary: {
        strong: 'Estágio HelpDesk',
        p: 'ConferIR | Novembro 2021 - Julho 2022',
      },
      text: `<p>Responsável pelo atendimento ao cliente e na resolução de problemas no software da empresa</p>
            <p>Realização de testes nas funcionalidades do site e desenvolvimento de projetos e desafios sobre .NET requeridos pela empresa<p/>`,
    },
  ]);
}
