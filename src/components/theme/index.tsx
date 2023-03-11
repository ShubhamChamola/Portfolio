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

    if (isLightMode) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
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
        <img src={isLightMode ? lightModeImg : darkModeImg} alt="" />
      </span>
      <div className={styles.seperator}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Theme;
