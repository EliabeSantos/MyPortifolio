import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  /** Subtítulo curto exibido sob o título. */
  lead?: string;
  children: ReactNode;
  /** Menor espaçamento vertical (usado em seções secundárias). */
  compact?: boolean;
}

/**
 * Seção semântica do portfólio. O heading é sempre `h2` para manter
 * a hierarquia: `h1` existe apenas no hero.
 */
export function Section({ id, title, lead, children, compact }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      aria-labelledby={`${id}-titulo`}
    >
      <div className="container">
        <div className={`reveal ${styles.heading}`}>
          <p className={styles.eyebrow} aria-hidden="true">
            {id}
          </p>
          <h2 id={`${id}-titulo`} className={styles.title}>
            {title}
          </h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
