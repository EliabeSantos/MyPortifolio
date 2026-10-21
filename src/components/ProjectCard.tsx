import type { Project } from "../data/projects";
import { IconExternalLink, IconGithub } from "./Icons";
import styles from "./ProjectCard.module.css";

const statusLabels: Record<Project["status"], string> = {
  publicado: "Publicado",
  "em-desenvolvimento": "Em desenvolvimento",
  arquivado: "Arquivado",
};

interface ProjectCardProps {
  project: Project;
  /** Card em destaque ocupa mais espaço e mostra a descrição completa. */
  featured?: boolean;
}

/**
 * Card de projeto com composição editorial: problema, solução e decisões
 * técnicas — não apenas nome + botão.
 */
export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const {
    name,
    category,
    summary,
    problem,
    solution,
    features,
    tech,
    challenges,
    contribution,
    status,
    repoUrl,
    demoUrl,
    collaborative,
    note,
  } = project;

  return (
    <article
      className={`reveal ${styles.card} ${featured ? styles.featured : ""}`}
      aria-labelledby={`projeto-${project.slug}`}
    >
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <p className={styles.category}>{category}</p>
          <p className={styles.status} data-status={status}>
            <span className={styles.statusDot} aria-hidden="true" />
            {statusLabels[status]}
          </p>
        </div>

        <h3 id={`projeto-${project.slug}`} className={styles.name}>
          {name}
        </h3>

        {collaborative && (
          <p className={styles.collabNote}>Projeto colaborativo — equipe multipessoas</p>
        )}

        <p className={styles.summary}>{summary}</p>
      </header>

      <div className={styles.body}>
        {featured && (
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>O problema</h4>
            <p className={styles.blockText}>{problem}</p>
          </div>
        )}

        <div className={styles.block}>
          <h4 className={styles.blockTitle}>
            {featured ? "Como foi resolvido" : "Solução"}
          </h4>
          <ul className={styles.list}>
            {solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {featured && (
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Desafios e decisões</h4>
            <ul className={styles.list}>
              {challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Funcionalidades</h4>
          <ul className={styles.features}>
            {features.map((item) => (
              <li key={item} className={styles.feature}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Minha contribuição</h4>
          <p className={styles.blockText}>{contribution}</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <ul className={styles.tech} aria-label={`Tecnologias de ${name}`}>
          {tech.map((item) => (
            <li key={item} className={styles.techTag}>
              {item}
            </li>
          ))}
        </ul>

        {note && <p className={styles.note}>{note}</p>}

        <div className={styles.links}>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <IconGithub />
            <span>Repositório</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <IconExternalLink />
              <span>Demonstração</span>
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}
