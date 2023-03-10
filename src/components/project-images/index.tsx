import styles from "./style.module.scss";
import { useState } from "react";

interface Prop {
  images: string[];
}

const ProjectImages: React.FC<Prop> = ({ images }) => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.current}>
        <img src={images[currImg]} alt="" />
      </div>
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
                <img src={img} alt="" />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ProjectImages;
