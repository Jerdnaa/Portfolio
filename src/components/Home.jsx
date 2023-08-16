import coding from "../assets/images/coding.png";
import resume from "../assets/cv/resume.pdf";
import lebenslauf from "../assets/cv/Lebenslauf.pdf";

const Home = ({ refProp, language }) => {
  if (language === "en") {
    return (
      <div ref={refProp} className="home-container">
        <div className="heading-container">
          <h1 className="home-name">Andrej Delinac</h1>
          <h3 className="home-job">Full Stack Developer</h3>
          <a className="resume-dl" href={resume} without rel="noopener noreferrer" target="_blank">
            Resume
          </a>
        </div>
        <img src={coding} alt="coding picture" className="coding-img" />
      </div>
    );
  }
  if (language === "de") {
    return (
      <div ref={refProp} className="home-container">
        <div className="heading-container">
          <h1 className="home-name">Andrej Delinac</h1>
          <h3 className="home-job">Full Stack Entwickler</h3>
          <a
            className="resume-dl"
            href={lebenslauf}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            Lebenslauf
          </a>
        </div>
        <img src={coding} alt="coding picture" className="coding-img" />
      </div>
    );
  }
};

export default Home;
