import email from "../assets/images/email.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

const Contact = ({ refProp }) => {
  return (
    <div ref={refProp} className="contact-container">
      <h2 className="contact-header">Contact Me</h2>
      <div className="email">
        <img src={email} alt="email" className="icon" />
        <p>andrejdelinac@gmail.com</p>
      </div>
      <div className="github">
        <img src={github} alt="github" className="icon" />
        <a href="https://github.com/Jerdnaa" target="_blank" className="contact-link">
          GitHub
        </a>
      </div>
      <div className="linkedin">
        <img src={linkedin} alt="linkedin" className="icon" />
        <a
          href="https://www.linkedin.com/in/andrej-delinac/"
          target="_blank"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
      <p>I'd love to hear from you! Feel free to send me a message.</p>
    </div>
  );
};

export default Contact;
