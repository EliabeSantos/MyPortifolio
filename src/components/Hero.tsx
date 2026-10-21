import { contacts, profile } from "../data/profile";
import { ButtonLink } from "./Button";
import {
  IconArrowRight,
  IconDownload,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
} from "./Icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-titulo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.greeting}>Olá, sou {profile.name}.</p>

          <h1 id="hero-titulo" className={styles.title}>
            {profile.headline}
          </h1>

          <p className={styles.support}>
            Experiência profissional em Front-End com React na Weex Pass e
            projetos próprios em Full-Stack: APIs com FastAPI, banco de dados,
            testes e deploy. Resolvo problemas de software do conceito à
            aplicação publicada.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#projetos" icon={<IconArrowRight />}>
              Ver projetos
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary" icon={<IconMail />}>
              Entrar em contato
            </ButtonLink>
            {profile.resumeUrl && (
              <ButtonLink
                href={profile.resumeUrl}
                variant="secondary"
                external
                icon={<IconDownload />}
                ariaLabel="Baixar currículo de Eliabe Santos em PDF"
              >
                Currículo
              </ButtonLink>
            )}
          </div>

          <ul className={styles.socials} aria-label="Perfis e contatos">
            <li>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <IconGithub />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <IconLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contacts.email}`}
                className={styles.socialLink}
              >
                <IconMail />
                <span>E-mail</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.photoWrap}>
          <img
            src="/eliabe-photo.jpg"
            alt={`Foto de ${profile.name}`}
            width={640}
            height={698}
            className={styles.photo}
            loading="eager"
            decoding="async"
          />
          <p className={styles.location}>
            <IconMapPin aria-hidden="true" />
            <span>{profile.location} · disponível para oportunidades</span>
          </p>
        </div>
      </div>
    </section>
  );
}
