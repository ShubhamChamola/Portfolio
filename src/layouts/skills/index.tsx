import ReactSVG from "../../icons/ReactSVG";
import FirebaseSVG from "../../icons/FirebaseSVG";
import HtmlSVG from "../../icons/HtmlSVG";
import SassSVG from "../../icons/SassSVG";
import JsSVG from "../../icons/JsSVG";
import TsSVG from "../../icons/TsSVG";
import styles from "./style.module.scss";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>My Skills</h2>
      <ul>
        <li>
          <ReactSVG />
          <span>React</span>
        </li>
        <li>
          <FirebaseSVG />
          <span>Firebase</span>
        </li>
        <li>
          <HtmlSVG />
          <span>Html</span>
        </li>
        <li>
          <SassSVG />
          <span>Sass</span>
        </li>
        <li>
          <JsSVG />
          <span>Javascript</span>
        </li>
        <li>
          <TsSVG />
          <span>Typescript</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
