import { Link } from "react-router-dom";
import ProjectImages from "../../components/project-images";
import ArrowSVG from "../../icons/ArrowSVG";
import styles from "./style.module.scss";

import { projectData } from "../../data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Recent Projects</h2>
      {projectData.map((project, index) => (
        <article key={`${index}-${project.name}`}>
          <ProjectImages images={project.images} />
          <div>{`${index + 1}`.padStart(2, "0")}</div>
          <div>
            <h3>{project.name}</h3>
            <ul className="stack">
              {project.stack.map((tech, index) => (
                <li key={`${index}-${project.name}-${tech}`}>{tech}</li>
              ))}
            </ul>
            <div>
              <Link to={`/projects/${project.url}`} className="link-highlight">
                VIEW PROJECT
              </Link>
              <ArrowSVG />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
