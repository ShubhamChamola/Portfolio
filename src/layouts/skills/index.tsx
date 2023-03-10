import ReactSVG from "../../icons/ReactSVG";
import FirebaseSVG from "../../icons/FirebaseSVG";
import HtmlSVG from "../../icons/HtmlSVG";
import SassSVG from "../../icons/SassSVG";
import JsSVG from "../../icons/JsSVG";
import TsSVG from "../../icons/TsSVG";
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
