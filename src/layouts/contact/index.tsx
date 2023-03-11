import styles from "./style.module.scss";
import ArrowSVG from "../../icons/ArrowSVG";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.left}>
        <p>
          I’m currently looking for any new opportunities, so if you wish to
          talk, reach me on any of the social paltforms my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>
      <div className={styles.right}>
        <div>
          <span>Email - </span>
          <a
            className="link-highlight"
            target="blank"
            href="mailto:shubhamchamola1@gmail.com"
          >
            shubhamchamola1@gmail.com
            <ArrowSVG />
          </a>
        </div>
        <div>
          <span>Phone & Whatsapp - </span>
          <a
            className="link-highlight"
            target="blank"
            href="https://wa.me/+919997888560"
          >
            +91-9997888560
            <ArrowSVG />
          </a>
        </div>
        <div>
          <span>Github - </span>
          <a
            className="link-highlight"
            target="blank"
            href="https://github.com/ShinOO7?tab=repositories"
          >
            My Repositories
            <ArrowSVG />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
