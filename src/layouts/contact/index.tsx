import styles from "./style.module.scss";
import ArrowSVG from "../../icons/ArrowSVG";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.left}>
        <p>
          I am open to work and currently looking for new oppotunities to grow
          my skill set, just ping me up on my social and I’ll get back to you!
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
            href="https://github.com/ShubhamChamola?tab=repositories"
          >
            My Repositories
            <ArrowSVG />
          </a>
        </div>
        <div>
          <span>LinkedIn - </span>
          <a
            className="link-highlight"
            target="blank"
            href="https://www.linkedin.com/in/shubham-chamola-a82594246"
          >
            Shubham@linkedin
            <ArrowSVG />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
