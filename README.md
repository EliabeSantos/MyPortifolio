# Portfólio — Eliabe Santos

Portfólio profissional de **Eliabe Santos**, desenvolvedor de software com experiência
profissional em Front-End e prática em Full-Stack, APIs e automação de processos.

**Site publicado:** <https://my-portifolio-eliabesantos.vercel.app/>

## Stack

| Camada      | Tecnologia                                              |
| ----------- | ------------------------------------------------------- |
| Build       | [Vite 7](https://vitejs.dev)                            |
| Framework   | React 19 + TypeScript (strict)                          |
| Estilo      | CSS Modules + design tokens (CSS custom properties)     |
| Fontes      | Inter e Sora via `@fontsource` (self-hosted, sem CDN)   |
| Ícones      | SVG inline — nenhuma biblioteca de ícones               |

A base anterior era Create React App 4 + React 17 + styled-components, com carrossel,
AOS e `animated-scroll-to`. O CRA 4 está em fim de vida e quebra em versões modernas
do Node; a migração para Vite eliminou ~1200 pacotes de dependência (hoje são 71) e
removeu o runtime de CSS-in-JS.

## Rodar localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
```

## Build de produção

```bash
npm run build    # gera o bundle otimizado em dist/
npm run preview  # serve o build localmente para conferência
```

O build passa com TypeScript em modo strict e sem warnings.

## Publicar na Vercel

O projeto é um Vite puro: a Vercel detecta automaticamente sem `vercel.json`.

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

Basta conectar o repositório. Deploy contínuo acontece a cada push na branch principal.

## Estrutura

```
index.html              SEO, Open Graph, JSON-LD e favicon
public/                 estáticos: foto, favicon, og-image, robots, sitemap
src/
  components/           Header, Hero, About, Projects, ProjectCard, Skills,
                        Experience, Contact, Footer, Button, Section, Icons
  data/                 fonte única de conteúdo (profile, projects, skills, experience)
  hooks/                useReveal (animação de entrada), useActiveSection (nav ativa)
  styles/               tokens.css (design tokens) + global.css (reset e utilitários)
```

## Atualizar conteúdo

Todo o texto do site vive em `src/data/`:

- **`profile.ts`** — nome, headline, contatos e links de navegação.
- **`projects.ts`** — projetos em destaque e secundários, com problema, solução,
  desafios, tecnologias, contribuição e links de repositório/demonstração.
- **`skills.ts`** — categorias de habilidades e contextos de uso.
- **`experience.ts`** — experiência profissional e formação acadêmica.

### Ativar o botão de currículo

O botão "Currículo" no hero fica oculto enquanto `profile.resumeUrl` for `null`
(para não gerar link quebrado). Para ativá-lo:

1. Coloque o PDF em `public/curriculo.pdf`.
2. Em `src/data/profile.ts`, mude `resumeUrl: null` para `resumeUrl: "/curriculo.pdf"`.

## Acessibilidade

- HTML semântico com hierarquia de headings (`h1` → `h2` → `h3` → `h4`).
- Skip link para pular ao conteúdo.
- Navegação por teclado com foco visível em todos os elementos interativos.
- Menu mobile com `aria-expanded`, fechamento por `Escape` e foco devolvido ao botão.
- Contraste verificado sobre fundo escuro; estados ativos comunicados por cor **e**
  sublinhado/marcador, nunca só por cor.
- Animações respeitam `prefers-reduced-motion` — com a preferência ativa, todo o
  conteúdo aparece imediatamente, sem transição.
- Links externos com `rel="noopener noreferrer"`.

## Licença

Conteúdo e código pessoais. Os projetos colaborativos citados (como Easy-Wash)
possuem autoria de equipe e são indicados como tal.
