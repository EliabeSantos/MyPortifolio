export type ProjectStatus = "publicado" | "em-desenvolvimento" | "arquivado";

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string[];
  features: string[];
  tech: string[];
  challenges: string[];
  contribution: string;
  status: ProjectStatus;
  repoUrl: string;
  demoUrl?: string;
  /** Projeto colaborativo — não é autoria exclusiva de Eliabe. */
  collaborative?: boolean;
  /** Nota de rodapé honesta sobre o estado do projeto. */
  note?: string;
}

export const featuredProjects: Project[] = [
  {
    slug: "relion",
    name: "RELION",
    category: "E-commerce & automação de artes",
    summary:
      "Plataforma de e-commerce de produtos personalizáveis que recebe artes enviadas pelo cliente e prepara os arquivos para o processo de impressão.",
    problem:
      "Em personalização de produtos, a arte que chega do cliente raramente está pronta para impressão: formatos variam, cores não são CMYK e arquivos vetoriais nem sempre chegam. O processo manual de conferência e correção é lento e propenso a erro. O projeto une catálogo, personalização, checkout e tratamento de arquivos em um único fluxo.",
    solution: [
      "Front-end em React com Vite para catálogo, personalização de produtos, upload de artes e checkout.",
      "API em Python com FastAPI, organizada por regras de negócio e validação de dados.",
      "Persistência com SQLAlchemy e migrações versionadas com Alembic.",
      "Associação dos arquivos enviados ao pedido, com metadados preservados ao longo do fluxo.",
      "Área administrativa para gestão de pedidos e acompanhamento dos arquivos recebidos.",
      "Deploy em contêineres com Docker e publicação da API e do front-end em serviços separados.",
    ],
    features: [
      "Personalização de produtos com envio de artes",
      "Upload de arquivos associado ao pedido",
      "Checkout com persistência de metadados",
      "Painel administrativo de pedidos",
      "Pipeline de preparação de arquivos para impressão (CMYK e vetorização)",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "SQL",
      "Docker",
      "Render",
    ],
    challenges: [
      "Manter a associação entre arquivo, item de pedido e metadados sem perda em nenhuma etapa do checkout.",
      "Tratar uploads de formats e tamanhos muito diferentes com validação clara no front e na API.",
      "Conceber o pipeline de conversão CMYK e vetorização como etapas verificáveis, com devolução de artes inadequadas ao cliente para correção.",
      "Separar responsabilidades entre catálogo, pedidos e processamento de arquivos mantendo o fluxo único para o usuário.",
    ],
    contribution:
      "Desenvolvimento do front-end e da API, modelagem do banco de dados, fluxo de personalização com upload de artes, checkout e painel administrativo.",
    status: "em-desenvolvimento",
    repoUrl: "https://github.com/droprelion-ai/Relion",
    note: "Projeto em desenvolvimento ativo. O repositório está sob a organização droprelion-ai e, no momento, não é publicamente acessível.",
  },
  {
    slug: "cyberpunk-red-calculator",
    name: "Cyberpunk RED Calculator",
    category: "Aplicação web & jogos — Full-Stack",
    summary:
      "Aplicação Next.js/TypeScript que automatiza fichas, regras, rolagens e combate de uma mesa de RPG online — do modo local ao jogo em grupo com validação no servidor.",
    problem:
      "Mesa de RPG pede muita conta: fichas extensas, rolagens com modificadores, iniciativa, ações por turno e regras que precisam ser aplicadas igualmente para todos. Erro de cálculo quebra a imersão e gera discussão. O projeto transforma o compêndio de regras em software testável, jogável no navegador e compartilhável entre jogadores.",
    solution: [
      "Aplicação Next.js + TypeScript com motor de regras próprio: criação de fichas, rolagens, combate e resolução de ações.",
      "Validação das regras no servidor, não apenas no navegador, para garantir consistência entre jogadores.",
      "Testes automatizados cobrindo cálculos e contratos de resolução do motor de combate.",
      "Persistência com Supabase e espelho de rolagens em canais do Discord via API REST, com segredos somente no servidor.",
      "Modo grupo: mestre cria a mesa, jogadores entram por código e o combate é compartilhado em tempo real.",
      "Self-host documentado (PostgreSQL local, Windows/WSL2, LAN ou VPN) e build de desktop com instalador gerado no CI.",
    ],
    features: [
      "Fichas, rolagens e combate com regras do sistema",
      "Motor de combate com contratos de resolução documentados",
      "Validação de regras no servidor",
      "Mesa online em tempo real por código de sessão",
      "Espelho de rolagens em canais do Discord",
      "Mapa tático com geometria de paredes e portas",
      "Self-host local e aplicação desktop (Windows)",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Discord API",
      "GitHub Actions",
      "Vercel",
    ],
    challenges: [
      "Modelar o motor de combate em contratos de resolução testáveis, para provar equivalência entre implementações.",
      "Escrever a mesma regra no cliente e no servidor sem que as duas versões divirjam.",
      "Manter o modo local (ficha e combate funcionando sem servidor) e o modo online sem duplicar lógica.",
      "Publicar no Discord em ambiente serverless usando apenas a API REST, sem gateway.",
      "Redigir documentação operacional real: self-host, instalação, backup e firewall.",
    ],
    contribution:
      "Arquitetura e desenvolvimento completo: motor de regras, interface, persistência, integrações (Supabase e Discord), testes, CI e documentação.",
    status: "em-desenvolvimento",
    repoUrl: "https://github.com/EliabeSantos/cyberpunk-red-calculator",
    demoUrl: "https://cyberpunk-red-calculator.vercel.app",
    note: "O modo local (fichas, criação, combate e rolagens) funciona sem servidor; recursos online dependem de configuração de Supabase e Discord.",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "uno-chess",
    name: "Uno-Chess",
    category: "Jogo web — Full-Stack",
    summary:
      "Xadrez com regras clássicas, névoa de guerra no tabuleiro e camadas de jogo adicionais, com multiplayer via Supabase.",
    problem:
      "Aplicar regras de xadrez (xeque, promoção, movimentação) já é desafiador; combinar isso com visão limitada do tabuleiro e estado compartilhado entre jogadores exige uma camada de jogo bem estruturada.",
    solution: [
      "Motor de jogo separado da interface: tabuleiro, movimentação, xeque, promoção e névoa de guerra em módulos próprios.",
      "Multiplayer por salas com Supabase, integrado ao estado do jogo.",
      "Interface em React/Next.js com componentes de tabuleiro, casas e modal de promoção.",
    ],
    features: [
      "Regras clássicas de xadrez",
      "Névoa de guerra no tabuleiro",
      "Multijogador em salas",
      "Promoção de peças com interface dedicada",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase"],
    challenges: [
      "Manter as regras de movimentação e xeque corretas ao introduzir informação parcial (névoa).",
      "Sincronizar o estado da partida entre jogadores sem conflitos.",
    ],
    contribution: "Desenvolvimento completo do projeto.",
    status: "em-desenvolvimento",
    repoUrl: "https://github.com/EliabeSantos/uno-chess",
    demoUrl: "https://uno-chess-cyan.vercel.app",
  },
  {
    slug: "easy-wash",
    name: "Easy-Wash",
    category: "Plataforma de serviços — Front-End",
    summary:
      "Plataforma para conectar clientes a lavanderias, desenvolvida em equipe durante o curso Kenzie Academy.",
    problem:
      "Cliente precisa encontrar lavanderias próximas, acompanhar pedidos e gerenciar serviços; a lavanderia precisa organizar sua operação. O projeto foi a aplicação prática de arquitetura de estado e validação em um produto com múltiplos módulos.",
    solution: [
      "Interface em React com Redux e Redux Thunk para estado global e efeitos assíncronos.",
      "Validação de formulários com Yup.",
      "Componentes em Material UI e testes com Jest.",
    ],
    features: [
      "Cadastro e autenticação de usuários",
      "Catálogo de lavanderias e serviços",
      "Gestão de pedidos",
    ],
    tech: ["React", "Redux", "Redux Thunk", "Yup", "Material UI", "Jest"],
    challenges: [
      "Organizar o estado global da aplicação entre papéis diferentes (cliente e lavanderia).",
      "Integrar validação de formulários com o fluxo de navegação.",
    ],
    contribution:
      "Desenvolvimento front-end como parte da equipe — projeto colaborativo com múltiplos autores, sem autoria exclusiva.",
    status: "arquivado",
    repoUrl: "https://github.com/EliabeSantos/Easy-Wash",
    demoUrl: "https://easy-wash.vercel.app/",
    collaborative: true,
    note: "Projeto de equipe do curso Kenzie Academy. Demo hospedada pode estar desatualizada.",
  },
];

export const moreProjectsLink = "https://github.com/EliabeSantos?tab=repositories";
