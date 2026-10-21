import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Constellation } from "./components/Constellation";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useReveal } from "./hooks/useReveal";
import styles from "./App.module.css";

export default function App() {
  useReveal();

  return (
    <>
      {/* Camada de fundo 3D. Decorativa: ignorada por leitores de tela. */}
      <Constellation />

      {/* Conteúdo num stacking context acima do canvas (z-index 1 > 0). */}
      <div className={styles.content}>
        <a href="#inicio" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
