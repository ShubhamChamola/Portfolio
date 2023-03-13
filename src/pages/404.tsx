import Navigation from "../layouts/navigation";
import Contact from "../layouts/contact";
import styles from "../styles/404.module.scss";
import { useNavigate } from "react-router-dom";
import ErrorSVG from "../icons/ErrorSVG";

const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <section className={styles.container}>
          <div className={styles.left}>
            <h2>Ooops...</h2>
            <h3>
              Something went <span>WRONG!</span>
            </h3>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Homepage
            </button>
          </div>
          <div className={styles.right}>
            <ErrorSVG />
          </div>
        </section>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
};

export default Error;
