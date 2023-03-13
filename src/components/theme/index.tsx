import styles from "./style.module.scss";
import { useEffect, useState } from "react";

function initState() {
  if (document.querySelector("body")!.classList.contains("light-mode")) {
    return true;
  } else {
    return false;
  }
}

const darkModeImg = require("../../icons/dark-mode.png");
const lightModeImg = require("../../icons/light-mode.png");

const Theme: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(initState);

  useEffect(() => {
    let body = document.querySelector("body")!;
    let mode = document.querySelector(`.${styles.mode}`) as HTMLElement;

    if (isLightMode) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
      mode.style.left = "-3px";
      mode.style.right = "unset";
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      mode.style.right = "-3px";
      mode.style.left = "unset";
    }
  }, [isLightMode]);

  return (
    <div
      className={styles.theme}
      onClick={() => {
        setIsLightMode((prev) => !prev);
      }}
    >
      <span className={styles.mode}>
        <img
          src={isLightMode ? lightModeImg : darkModeImg}
          alt="Icon specifing dark theme(Moon) or light theme(Sun) for the site"
        />
      </span>
    </div>
  );
};

export default Theme;
