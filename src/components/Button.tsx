import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  /** Quando definido, mostra um ícone à esquerda do texto. */
  icon?: ReactNode;
  ariaLabel?: string;
}

/**
 * Link estilizado como botão. Mantido como `<a>` para comportamento
 * nativo de navegação, abertura em nova aba e acessibilidade.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label={ariaLabel}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}
