import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/profile";
import { contacts } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { IconClose, IconMenu } from "./Icons";
import styles from "./Header.module.css";

const sectionIds = navLinks.map((link) => link.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Muda a aparência do header após rolar um pouco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao pressionar Escape e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Fecha o menu ao redimensionar para desktop.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 52rem)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      data-open={open}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#inicio"
          className={styles.brand}
          onClick={closeMenu}
          aria-label={`${profile.name} — voltar ao início`}
        >
          {profile.name}
        </a>

        <nav
          ref={menuRef}
          id="menu-principal"
          className={styles.nav}
          aria-label="Navegação principal"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={styles.navLink}
                  data-active={active === link.id}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${contacts.email}`}
            onClick={closeMenu}
            className={`${styles.navLink} ${styles.navCta}`}
          >
            Falar comigo
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
          <span className="visually-hidden">
            {open ? "Fechar menu" : "Abrir menu"}
          </span>
        </button>
      </div>
    </header>
  );
}
