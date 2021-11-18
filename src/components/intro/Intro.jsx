import "./intro.css";
import me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is </h2>
          <h1 className="i-name">Chukwuebuka Ernest-Opara</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX</div>
              <div className="i-title-item">Python Developer</div>
              <div className="i-title-item">Mobile Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
            </div>
          </div>
          <div className="i-desc">
            A recent university graduate and a hands-on software engineer who is
            highly driven and equipped with mid-level proficiency in Full Stack
            Development and Mobile App Development with sights set on how health
            informatics and software engineering can be used to help people with
            health challenges.
          </div>
        </div>
      </div>
      <div className="i-right">
        
        <div className="i-right-wrapper">
            <img src={me} alt="" className="i-img" />
          <div className="social-buttons">
            <a
              href="mailto:ernest.ebuka@gmail.com"
              className="social-buttons__button social-button social-button--mail"
              aria-label="Email"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/chukwuebuka-ernest-opara/"
              className="social-buttons__button social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.twitter.com/manlikebd"
              className="social-buttons__button social-button social-button--twitter"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.github.com/ernest-opara"
              className="social-buttons__button social-button social-button--github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/manlikebd"
              className="social-buttons__button social-button social-button--instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Intro;
