import Theme from "../../components/theme";
import styles from "./style.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";

function navLinkHandler(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth" });
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
      {pathname === "/" ? (
        <>
          <ul className={styles["nav-links"]}>
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
          <div
            className={styles["menu-toggle"]}
            onClick={(event) => {
              document
                .querySelector(`.${styles["nav-links"]}`)
                ?.classList.toggle(`${styles.active}`);
              event.currentTarget.classList.toggle(`${styles.active}`);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </>
      ) : (
        <>
          <Theme />
        </>
      )}
    </nav>
  );
};

export default Navigation;
