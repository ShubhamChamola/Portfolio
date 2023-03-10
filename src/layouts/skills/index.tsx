import ReactSVG from "../../assets/ReactSVG";
import FirebaseSVG from "../../assets/FirebaseSVG";
import HtmlSVG from "../../assets/HtmlSVG";
import SassSVG from "../../assets/SassSVG";
import JsSVG from "../../assets/JsSVG";
import TsSVG from "../../assets/TsSVG";
import styles from "./style.module.scss";

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2>My Top Skills</h2>
      <ul>
        <li>
          <ReactSVG />
        </li>
        <li>
          <FirebaseSVG />
        </li>
        <li>
          <HtmlSVG />
        </li>
        <li>
          <SassSVG />
        </li>
        <li>
          <JsSVG />
        </li>
        <li>
          <TsSVG />
        </li>
      </ul>
    </section>
  );
};

export default Skills;
