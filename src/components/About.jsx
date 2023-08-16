import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/js.png";
import reactPic from "../assets/images/react.png";
import nodeJs from "../assets/images/nodejs.png";
import mongo from "../assets/images/database.png";
import git from "../assets/images/git.png";
import gitHub from "../assets/images/github.png";

const About = ({ refProp, language }) => {
  if (language === "en") {
    return (
      <div ref={refProp} className="about-container">
        <div className="my-info">
          <h2 className="my-info-header">About Me</h2>
          <p className="my-info-about">
            I'm a passionate and detail-oriented Full Stack developer that favours a clean code and
            minimalist design. I believe in the power of collaboration and continuous learning.
            Whether it's diving into the world of APIs, crafting responsive designs, or optimizing
            database performance, I'm always eager to expand my skill set and contribute to
            innovative projects. Outside of coding, you'll find me exploring the latest tech trends,
            playing sports and reading a good book.
          </p>
        </div>
        <div className="technologies-container">
          <img src={html} alt="html picture" className="technologies-logo" />
          <img src={css} alt="html picture" className="technologies-logo" />
          <img src={javascript} alt="html picture" className="technologies-logo" />
          <img src={reactPic} alt="html picture" className="technologies-logo" />
          <img src={nodeJs} alt="html picture" className="technologies-logo" />
          <img src={mongo} alt="html picture" className="technologies-logo" />
          <img src={git} alt="html picture" className="technologies-logo" />
          <img src={gitHub} alt="html picture" className="technologies-logo" />
        </div>
      </div>
    );
  }
  if (language === "de") {
    return (
      <div ref={refProp} className="about-container">
        <div className="my-info">
          <h2 className="my-info-header">Über mich</h2>
          <p className="my-info-about">
            Ich bin ein leidenschaftlicher und detailorientierter Full Stack Entwickler, der
            sauberen Code und minimalistisches Design bevorzugt. Ich glaube an die Kraft der
            Zusammenarbeit und kontinuierlichen Weiterbildung. Ob es darum geht, in die Welt der
            APIs einzutauchen, responsive Designs zu erstellen oder die Leistung von Datenbanken zu
            optimieren, ich bin stets daran interessiert, meine Fähigkeiten zu erweitern und zu
            innovativen Projekten beizutragen. Abseits vom Codieren findet man mich dabei, die
            neuesten technischen Trends zu erkunden, Sport zu treiben und ein gutes Buch zu lesen.
          </p>
        </div>
        <div className="technologies-container">
          <img src={html} alt="html picture" className="technologies-logo" />
          <img src={css} alt="html picture" className="technologies-logo" />
          <img src={javascript} alt="html picture" className="technologies-logo" />
          <img src={reactPic} alt="html picture" className="technologies-logo" />
          <img src={nodeJs} alt="html picture" className="technologies-logo" />
          <img src={mongo} alt="html picture" className="technologies-logo" />
          <img src={git} alt="html picture" className="technologies-logo" />
          <img src={gitHub} alt="html picture" className="technologies-logo" />
        </div>
      </div>
    );
  }
};

export default About;
