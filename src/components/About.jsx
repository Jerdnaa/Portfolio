import html from "../assets/images/html.png";
import css from "../assets/images/css-3.png";
import javascript from "../assets/images/js.png";
import reactPic from "../assets/images/react.png";
import nodeJs from "../assets/images/nodejs.png";
import mongo from "../assets/images/database.png";
import git from "../assets/images/git.png";
import gitHub from "../assets/images/github.png";

const About = ({ refProp }) => {
  return (
    <div ref={refProp} className="about-container">
      <div className="my-info">
        <h2 className="my-info-header">About Me</h2>
        <p className="my-info-about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia deleniti ratione esse
          possimus! Nobis dolorem quis ipsum molestiae inventore doloribus cum maxime impedit
          dolorum ipsa, aliquid corporis necessitatibus obcaecati velit! Dignissimos, reprehenderit
          quo vitae facere nisi porro, rerum illum ipsum sit culpa delectus veniam! Animi explicabo,
          libero accusamus fugit, sed, sunt debitis assumenda veritatis optio est ad tenetur dolor
          blanditiis. Obcaecati ipsam dicta at modi quasi unde! Dolorem at quam aliquam. Culpa
          eligendi reiciendis deserunt, quod harum at officia, labore dolore libero molestias,
          doloribus a est hic nesciunt voluptatum nam!
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
};

export default About;
