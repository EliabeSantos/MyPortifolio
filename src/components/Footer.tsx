import { contacts, profile } from "../data/profile";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>

        <ul className={styles.links} aria-label="Contatos">
          <li>
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub de Eliabe Santos"
            >
              <IconGithub />
            </a>
          </li>
          <li>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="LinkedIn de Eliabe Santos"
            >
              <IconLinkedin />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contacts.email}`}
              className={styles.link}
              aria-label="Enviar e-mail para Eliabe Santos"
            >
              <IconMail />
            </a>
          </li>
        </ul>

        <p className={styles.copyright}>
          © {year} {profile.name}. Portfólio construído com React e TypeScript.
        </p>
      </div>
    </footer>
  );
}
