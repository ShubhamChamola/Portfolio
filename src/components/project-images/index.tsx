import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import RadioSVG from "../../icons/RadioSVG";
import { useLocation } from "react-router-dom";

interface Prop {
  images: string[];
}

function initState() {
  let width = window.innerWidth;
  if (width <= 570) {
    return true;
  }
  return false;
}

const ProjectImages: React.FC<Prop> = ({ images }) => {
  const [currImg, setCurrImg] = useState(images[0]);
  const [isMobile, setIsMobile] = useState(initState());
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 570) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  useEffect(() => {
    setCurrImg(images[0]);
  }, [images]);

  useEffect(() => {
    setCurrImg((prev) => {
      if (prev) {
        document.getElementById(prev)?.classList.remove(`${styles.active}`);
      }
      document
        .getElementById(`${images[0]}`)
        ?.classList.add(`${styles.active}`);
      return images[0];
    });
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.current}>
        <img src={currImg} alt="Selected SS of the project" />
      </div>
      {isMobile ? (
        <>
          <div className={styles.list}>
            {images.map((img, index) => (
              <div
                key={index}
                id={img}
                className={index === 0 ? styles.active : ""}
                onClick={() => {
                  setCurrImg((prev) => {
                    document
                      .getElementById(prev)
                      ?.classList.remove(`${styles.active}`);
                    document
                      .getElementById(images[index])
                      ?.classList.add(`${styles.active}`);
                    return images[index];
                  });
                }}
              >
                <RadioSVG />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.list}>
            {images.map((img, index) => {
              if (img !== currImg) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrImg(images[index]);
                    }}
                  >
                    <img src={img} alt="screen shots of the project" />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImages;
