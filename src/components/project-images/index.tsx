import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import RadioSVG from "../../icons/RadioSVG";

interface Prop {
  images: string[];
  imageIds: string[];
}

function initState() {
  let width = window.innerWidth;
  if (width <= 570) {
    return true;
  }
  return false;
}

const ProjectImages: React.FC<Prop> = ({ images, imageIds }) => {
  const [currImg, setCurrImg] = useState(0);
  const [isMobile, setIsMobile] = useState(initState());

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
    setCurrImg(0);
  }, [images]);

  function handleClick(target: HTMLElement, index: number) {
    if (index !== currImg) {
      target?.classList.add(`${styles.active}`);
      document
        .getElementById(`${imageIds[currImg]}`)
        ?.classList.remove(`${styles.active}`);

      setCurrImg(index);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.current}>
        <img src={images[currImg]} alt="Selected screenshots of the project" />
      </div>
      {isMobile ? (
        <>
          <div className={styles.list}>
            {images.map((img, index) => (
              <div
                key={imageIds[index]}
                id={imageIds[index]}
                className={index === 0 ? styles.active : ""}
                onClick={(event) => {
                  handleClick(event.currentTarget, index);
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
              if (index !== currImg) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrImg(index);
                    }}
                  >
                    <img src={img} alt="Screenshots of the project" />
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
