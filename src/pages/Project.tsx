import ArrowSVG from "../icons/ArrowSVG";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { detailedProjectData } from "../data";
import ProjectImages from "../components/project-images";
import styles from "../styles/project.module.scss";

interface DetailedData {
  sequence: number;
  name: string;
  url: string;
  git: string;
  images: string[];
  prev: null | string;
  next: null | string;
  introPara: string;
  features: { [key: string]: string };
}

function getInitialState(id: string | undefined) {
  if (!id || !detailedProjectData[`${id}`]) {
    return null;
  }

  return detailedProjectData[`${id}`];
}

const Project: React.FC = () => {
  const navigate = useNavigate();
  const { projectID } = useParams();
  const [data, setData] = useState<DetailedData | null>(
    getInitialState(projectID)
  );

  useEffect(() => {
    if (!projectID || !detailedProjectData[`${projectID}`]) {
      navigate("/404");
      return;
    }

    setData(detailedProjectData[`${projectID}`]);
  }, [projectID]);

  return (
    <main className={styles.main}>
      <div className={styles["top-links"]}>
        <a href={data?.url} target="blank" className="link-highlight">
          VIEW LIVE <ArrowSVG />
        </a>
        <a href={data?.git} target="blank" className="link-highlight">
          GIT HUB <ArrowSVG />
        </a>
      </div>
      <ProjectImages images={data?.images || []} />
      <div className={styles.sequence}>
        <ul>
          {data?.prev ? (
            <Link className="link-highlight" to={`/projects/${data.prev}`}>
              PREV
            </Link>
          ) : (
            <span>PREV</span>
          )}
          {data?.next ? (
            <Link className="link-highlight" to={`/projects/${data.next}`}>
              NEXT
            </Link>
          ) : (
            <span>NEXT</span>
          )}
        </ul>
        <span>{`${data?.sequence}`.padStart(2, "0")}</span>
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <h3>{data?.name}</h3>
          <p>{data?.introPara}</p>
        </div>
        <div className={styles.right}>
          <h4>FUNCTIONALITY</h4>
          <p>This Website has the following functionalities:-</p>
          <ol>
            {Object.entries(data?.features || {}).map((key, value) => (
              <li>
                {key[0]} :- {key[1]}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default Project;
