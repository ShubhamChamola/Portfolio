import HeroSVG from "../../assets/HeroSVG";
import styles from "./style.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h3> hi! I'm Shubham Chamola &</h3>
        <h1>
          I <span>DEVELOP</span> WEBSITES & WEBAPPS
        </h1>
      </div>
      <div className={styles.right}>
        <HeroSVG />
      </div>
    </section>
  );
};

export default Hero;
