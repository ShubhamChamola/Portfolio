import HeroSVG from "../../assets/HeroSVG";
// import styles from "../../styles/hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="left">
        <h3> hi! i'm Shubham Chamola &</h3>
        <h1>
          I <span>DEVELOP</span> WEBSITES & WEBAPPS
        </h1>
      </div>
      <div className="right">
        <HeroSVG />
      </div>
    </section>
  );
};

export default Hero;
