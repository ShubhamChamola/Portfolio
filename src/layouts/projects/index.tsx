import ProjectImages from "../../components/project-images";
import ArrowSVG from "../../icons/ArrowSVG";
import styles from "./style.module.scss";

const projectData = [
  {
    name: "ONE TAP SERVICE",
    stack: ["Fullstack", "React", "Typescript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/blog/blog-1.png",
      "/assets/project-images/blog/blog-2.png",
      "/assets/project-images/blog/blog-3.png",
      "/assets/project-images/blog/blog-4.png",
    ],
  },
  {
    name: "Chat App",
    stack: ["Fullstack", "React", "Javascript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/chat-app/chat-1.png",
      "/assets/project-images/chat-app/chat-2.png",
      "/assets/project-images/chat-app/chat-3.png",
      "/assets/project-images/chat-app/chat-4.png",
    ],
  },
  {
    name: "#Blogger",
    stack: ["Fullstack", "React", "Javascript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/personal-blog/personal-blog-1.png",
      "/assets/project-images/personal-blog/personal-blog-2.png",
      "/assets/project-images/personal-blog/personal-blog-3.png",
      "/assets/project-images/personal-blog/personal-blog-4.png",
    ],
  },
  {
    name: "Quiz App",
    stack: ["Frontend", "React", "Javascript", "Sass"],
    images: [
      "/assets/project-images/quiz/quiz-1.png",
      "/assets/project-images/quiz/quiz-2.png",
      "/assets/project-images/quiz/quiz-3.png",
      "/assets/project-images/quiz/quiz-4.png",
    ],
  },
  {
    name: "Sassy Calci",
    stack: ["Frontend", "Html", "Javascript", "Sass"],
    images: [
      "/assets/project-images/calculator/calci-1.png",
      "/assets/project-images/calculator/calci-2.png",
      "/assets/project-images/calculator/calci-3.png",
    ],
  },
];

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
              <span className="link-highlight">VIEW PROJECT</span>
              <ArrowSVG />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
