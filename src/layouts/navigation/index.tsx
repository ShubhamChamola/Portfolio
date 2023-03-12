import Theme from "../../components/theme";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";

function navLinkHandler(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth" });
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Link
        to="/"
        className="logo-appear"
        onClick={(event) => {
          navigate("/");
          event.preventDefault();
          navLinkHandler("hero");
        }}
      >
        SHUBHAM C.
      </Link>
      <ul>
        <span>
          <Theme />
        </span>
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
