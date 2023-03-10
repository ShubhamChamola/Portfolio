import styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2>ABOUT ME</h2>
      <p>
        I've been sailing the web development seas for way too long & creating
        everything from regular websites to dashboards. <br /> <br />I have a
        passion for creating engaging and user-friendly web experiences that
        make people smile. I believe that the web has the power to connect us
        and bring us closer together, and I'm excited to be a part of that
        journey.
      </p>
    </section>
  );
};

export default About;
