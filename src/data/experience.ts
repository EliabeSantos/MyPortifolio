export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  /** Contexto: "profissional" ou "formação". */
  kind: "work" | "education";
  items: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Desenvolvedor Front-End",
    company: "Weex Pass",
    period: "jul. 2021 — jul. 2023",
    kind: "work",
    items: [
      "Desenvolvimento de aplicações web e móveis com React e Redux.",
      "Construção e manutenção de interfaces responsivas em colaboração com equipes de design e back-end.",
      "Depuração e otimização de desempenho em aplicações em produção.",
      "Trabalho com UX/UI na implementação de fluxos de usuário.",
    ],
  },
  {
    role: "PAE — Atividades administrativas e sistemas de gestão",
    company: "Colégio Estadual Leocádia Braga Ramos",
    period: "jul. 2025 — jun. 2026",
    kind: "work",
    items: [
      "Operação de sistemas de gestão escolar para registros e acompanhamento diário.",
      "Registro e acompanhamento de frequência e ausências de alunos.",
      "Elaboração de relatórios administrativos e acompanhamento de indicadores.",
      "Aplicação de processos operacionais e resolução de problemas rotineiros em ambiente institucional.",
    ],
  },
  {
    role: "Licenciatura em Computação",
    company: "UTFPR — Universidade Tecnológica Federal do Paraná",
    period: "2024 — 2028 (em curso)",
    kind: "education",
    items: [
      "Curso superior em Computação, com conclusão prevista para 2028.",
    ],
  },
  {
    role: "Curso de Programação",
    company: "Kenzie Academy Brasil",
    period: "2020 — 2021",
    kind: "education",
    items: [
      "Curso intensivo de um ano com projetos práticos em React, Python, SQL e Redux.",
      "Fundamentos de UX/UI, clean code e trabalho em equipe.",
    ],
  },
  {
    role: "Ensino médio completo",
    company: "",
    period: "Concluído",
    kind: "education",
    items: [],
  },
];
