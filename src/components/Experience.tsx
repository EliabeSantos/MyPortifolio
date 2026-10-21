import { experiences } from "../data/experience";
import { IconBriefcase, IconGraduation } from "./Icons";
import { Section } from "./Section";
import styles from "./Experience.module.css";

export function Experience() {
  const work = experiences.filter((item) => item.kind === "work");
  const education = experiences.filter((item) => item.kind === "education");

  return (
    <Section
      id="experiencia"
      title="Experiência e formação"
      lead="Percurso profissional e acadêmico — do desenvolvimento de front-end à operação de sistemas administrativos, com formação continuada em Computação."
    >
      <div className={styles.columns}>
        <div>
          <h3 className={styles.columnTitle}>
            <IconBriefcase aria-hidden="true" />
            Experiência profissional
          </h3>

          <ol className={styles.timeline}>
            {work.map((item) => (
              <li key={item.role + item.period} className={`reveal ${styles.item}`}>
                <div className={styles.marker} aria-hidden="true" />
                <div className={styles.content}>
                  <p className={styles.period}>{item.period}</p>
                  <h4 className={styles.role}>{item.role}</h4>
                  {item.company && (
                    <p className={styles.company}>{item.company}</p>
                  )}
                  {item.items.length > 0 && (
                    <ul className={styles.details}>
                      {item.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className={styles.columnTitle}>
            <IconGraduation aria-hidden="true" />
            Formação
          </h3>

          <ol className={styles.timeline}>
            {education.map((item) => (
              <li key={item.role + item.period} className={`reveal ${styles.item}`}>
                <div className={styles.marker} aria-hidden="true" />
                <div className={styles.content}>
                  <p className={styles.period}>{item.period}</p>
                  <h4 className={styles.role}>{item.role}</h4>
                  {item.company && (
                    <p className={styles.company}>{item.company}</p>
                  )}
                  {item.items.length > 0 && (
                    <ul className={styles.details}>
                      {item.items.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
