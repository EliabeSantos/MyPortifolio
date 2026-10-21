/**
 * Dados de perfil e contatos.
 * Edite este arquivo para atualizar informações pessoais e links.
 */

export const profile = {
  name: "Eliabe Santos",
  role: "Desenvolvedor de Software",
  focus: "Front-End · Full-Stack · Integrações",
  headline:
    "Desenvolvo aplicações web, integrações e soluções que transformam necessidades reais em software funcional.",
  location: "Paraná, Brasil",

  /**
   * Currículo em PDF.
   * Para ativar o botão "Currículo", coloque o arquivo em `public/curriculo.pdf`
   * e mude o valor abaixo para "/curriculo.pdf".
   * Enquanto for null, o botão não é renderizado (evita link quebrado).
   */
  resumeUrl: null as string | null,
} as const;

export const contacts = {
  email: "eliabedodo@gmail.com",
  github: "https://github.com/EliabeSantos",
  linkedin: "https://www.linkedin.com/in/eliabe-santos/",
  site: "https://my-portifolio-eliabesantos.vercel.app/",
} as const;

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
] as const;
