import styles from "./style.module.scss";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <span className="logo-appear">SHUBHAM CHAMOLA</span>
      <ul>
        <li className="link-highlight">ABOUT ME</li>
        <li className="link-highlight">SKILLS</li>
        <li className="link-highlight">PROJECTS</li>
      </ul>
    </nav>
  );
};

export default Navigation;
