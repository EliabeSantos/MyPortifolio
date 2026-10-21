import { useEffect } from "react";

/**
 * Habilita a animação de entrada dos elementos `.reveal`.
 *
 * A classe `js-reveal-enabled` é adicionada só depois da confirmação de que
 * IntersectionObserver existe — se o recurso falhar, o conteúdo continua
 * visível normalmente (o CSS de `.reveal` sem a classe é opaco 1).
 */
export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const root = document.documentElement;
    root.classList.add("js-reveal-enabled");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return () => root.classList.remove("js-reveal-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal-enabled");
    };
  }, []);
}
