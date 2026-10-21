import { featuredProjects, moreProjectsLink, otherProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section
      id="projetos"
      title="Projetos"
      lead="Seleção de trabalho real: o problema de negócio, a solução implementada, as decisões técnicas e o repositório com o código."
    >
      <div className={styles.featuredGrid}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured />
        ))}
      </div>

      <h3 className={styles.subheading}>Outros projetos</h3>

      <div className={styles.grid}>
        {otherProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <p className={styles.more}>
        <a
          href={moreProjectsLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreLink}
        >
          Ver todos os repositórios no GitHub
        </a>
      </p>
    </Section>
  );
}
