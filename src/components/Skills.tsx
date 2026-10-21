import { skillContexts, skillGroups } from "../data/skills";
import { Section } from "./Section";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section
      id="habilidades"
      title="Habilidades técnicas"
      lead="Tecnologias organizadas por categoria. O contexto de uso está indicado abaixo — sem percentuais nem níveis artificiais."
    >
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={`reveal ${styles.group}`}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`reveal ${styles.contexts}`}>
        <h3 className={styles.contextsTitle}>Contexto de uso</h3>
        <dl className={styles.contextList}>
          {skillContexts.map((context) => (
            <div key={context.label} className={styles.context}>
              <dt className={styles.contextLabel}>{context.label}</dt>
              <dd className={styles.contextText}>{context.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
