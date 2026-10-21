export interface SkillGroup {
  title: string;
  /** Contexto de uso — evita sugerir domínio uniforme. */
  items: string[];
}

/**
 * Habilidades organizadas por categoria e contexto de uso.
 * Sem percentuais: o contexto (profissional / projetos / complementar)
 * descreve onde cada tecnologia foi aplicada.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-End",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Vite",
      "HTML e CSS",
      "Redux",
      "Material UI",
      "Fundamentos de UX/UI",
    ],
  },
  {
    title: "Back-End",
    items: [
      "Python",
      "FastAPI",
      "APIs REST",
      "SQLAlchemy",
      "Regras de negócio e validação",
    ],
  },
  {
    title: "Dados",
    items: ["SQL", "SQLite", "PostgreSQL", "Modelagem relacional", "Alembic"],
  },
  {
    title: "Qualidade e entrega",
    items: [
      "Testes automatizados",
      "Git e GitHub",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Deploy com Vercel e Render",
    ],
  },
  {
    title: "Integrações e ferramentas",
    items: [
      "Supabase",
      "Discord (API REST)",
      "C# e Unity",
      "Processamento e preparação de imagens",
    ],
  },
];

export interface SkillContext {
  label: string;
  description: string;
}

/**
 * Camadas de contexto verdadeiras — não são níveis de domínio.
 */
export const skillContexts: SkillContext[] = [
  {
    label: "Experiência profissional",
    description:
      "React, Redux, interfaces responsivas, depuração e otimização de desempenho no dia a dia da Weex Pass.",
  },
  {
    label: "Projetos práticos",
    description:
      "TypeScript, Next.js, Python, FastAPI, SQL, Docker, testes e integrações aplicados em projetos próprios publicados.",
  },
  {
    label: "Conhecimentos complementares",
    description:
      "Tecnologias estudadas ou utilizadas em projetos menores, em processo de aprofundamento.",
  },
];
