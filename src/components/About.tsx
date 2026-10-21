import { profile } from "../data/profile";
import { Section } from "./Section";
import styles from "./About.module.css";

const highlights = [
  {
    title: "Front-End profissional",
    text: "Dois anos construindo aplicações web e móveis com React e Redux na Weex Pass, em colaboração com design e back-end.",
  },
  {
    title: "Full-Stack na prática",
    text: "Projetos próprios com Python, FastAPI, SQLAlchemy e banco de dados — da modelagem ao deploy com Docker.",
  },
  {
    title: "Integrações e automação",
    text: "Experiência com APIs, webhooks, Supabase e Discord, além de rotinas administrativas com sistemas de gestão e relatórios.",
  },
  {
    title: "Formação em Computação",
    text: "Licenciatura em Computação na UTFPR (2024–2028) e curso intensivo de programação na Kenzie Academy.",
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      title="Sobre mim"
      lead={`Sou ${profile.name}, desenvolvedor de software baseado no Paraná.`}
    >
      <div className={styles.grid}>
        <div className={`reveal ${styles.text}`}>
          <p>
            Comecei minha carreira profissional como desenvolvedor front-end na
            Weex Pass, trabalhando com React, Redux e interfaces responsivas
            para aplicações web e móveis. Foi ali que aprendi o dia a dia de
            entregar software em produção: depurar problemas, otimizar
            desempenho e alinhar implementação com design e back-end.
          </p>
          <p>
            Depois, mantive minha prática de desenvolvimento por meio de
            projetos próprios que atravessam o stack completo — APIs em
            FastAPI, persistência com SQLAlchemy, migrações, testes automatizados
            e deploy. Hoje meu interesse central está em integrações e
            automação: transformar processos manuais e repetitivos em sistemas
            que funcionam.
          </p>
          <p>
            Entre os dois momentos profissionais, atuei como PAE em um colégio
            estadual, operando sistemas de gestão escolar, registros,
            relatórios e indicadores. Essa experiência reforçou algo que
            considero essencial no desenvolvimento de software: entender a
            regra de negócio antes de escrever a primeira linha de código.
          </p>
          <p>
            Em paralelo, curso Licenciatura em Computação na UTFPR, com
            conclusão prevista para 2028.
          </p>
        </div>

        <ul className={styles.highlights}>
          {highlights.map((item) => (
            <li key={item.title} className={`reveal ${styles.highlight}`}>
              <h3 className={styles.highlightTitle}>{item.title}</h3>
              <p className={styles.highlightText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
