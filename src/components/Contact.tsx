import { contacts } from "../data/profile";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";
import { Section } from "./Section";
import styles from "./Contact.module.css";

const channels = [
  {
    label: "E-mail",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    external: false,
    icon: IconMail,
    description: "Melhor canal para oportunidades e conversas sobre projetos.",
  },
  {
    label: "LinkedIn",
    value: "eliabe-santos",
    href: contacts.linkedin,
    external: true,
    icon: IconLinkedin,
    description: "Perfil profissional, experiência e formação.",
  },
  {
    label: "GitHub",
    value: "EliabeSantos",
    href: contacts.github,
    external: true,
    icon: IconGithub,
    description: "Código dos projetos, histórico e repositórios.",
  },
];

/**
 * Sem formulário: o envio direto por e-mail e os perfis profissionais
 * cobrem o contato sem exigir serviço externo, chaves ou coleta de dados.
 */
export function Contact() {
  return (
    <Section
      id="contato"
      title="Vamos conversar"
      lead="Se você procura um desenvolvedor para uma vaga, um projeto ou uma parceria, estou disponível para responder."
    >
      <div className={styles.grid}>
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.label}
              href={channel.href}
              className={`reveal ${styles.card}`}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className={styles.cardHeader}>
                <Icon aria-hidden="true" />
                <span className={styles.cardLabel}>{channel.label}</span>
              </span>
              <span className={styles.cardValue}>{channel.value}</span>
              <span className={styles.cardDescription}>{channel.description}</span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
