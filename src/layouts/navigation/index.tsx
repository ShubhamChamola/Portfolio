import Theme from "../../components/theme";
import styles from "./style.module.scss";

function navLinkHandler(id: string) {
  const target = document.getElementById(id);
  // target?.scrollIntoView({ behavior: "smooth" });

  window.scrollTo({
    top: target?.getBoundingClientRect().top,
    behavior: "smooth",
  });
}

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a
        href="#hero"
        className="logo-appear"
        onClick={(event) => {
          event.preventDefault();
          navLinkHandler("hero");
        }}
      >
        SHUBHAM C.
      </a>
      <ul>
        <a href="#mode">
          <Theme />
        </a>
        <a
          href="#about"
          className="link-highlight"
          onClick={(event) => {
            event.preventDefault();
            navLinkHandler("about");
          }}
        >
          ABOUT ME
        </a>
        <a
          href="#skills"
          className="link-highlight"
          onClick={(event) => {
            event.preventDefault();
            navLinkHandler("skills");
          }}
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="link-highlight"
          onClick={(event) => {
            event.preventDefault();
            navLinkHandler("projects");
          }}
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="link-highlight"
          onClick={(event) => {
            event.preventDefault();
            navLinkHandler("contact");
          }}
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
