import SeaSVG from "../../icons/SeaSVG";
import BoatSVG from "../../icons/BoatSVG";
import styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div>
        <h2>ABOUT ME</h2>
        <p>
          As a web developer, I navigate the vast and ever-changing digital sea,
          using my skills to craft websites that are not only functional but
          also visually appealing. <br /> <br />
          Whether it's developing a custom web application or creating a
          responsive and visually stunning website, I'm always up for a
          challenge and excited to learn new skills along the way.
        </p>
      </div>
      <div>
        <BoatSVG />
        <SeaSVG />
      </div>
    </section>
  );
};

export default About;
