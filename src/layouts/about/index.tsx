import SeaSVG from "../../icons/SeaSVG";
import BoatSVG from "../../icons/BoatSVG";
import styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div>
        <h2>ABOUT ME</h2>
        <p>
          I've been sailing the web development seas for way too long & creating
          everything from regular websites to dashboards. <br /> <br />I have a
          passion for creating engaging and user-friendly web experiences that
          make people smile. I believe that the web has the power to connect us
          and bring us closer together, and I'm excited to be a part of that
          journey.
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
