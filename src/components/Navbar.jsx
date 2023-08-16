import logo from "../assets/images/logo.png";

const Navbar = ({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToContact,
  language,
  setLanguage,
}) => {
  const changeToGerman = () => {
    setLanguage("de");
  };
  const changeToEnglish = () => {
    setLanguage("en");
  };

  if (language === "en") {
    return (
      <navbar className="navbar">
        <div className="navbar-logo">
          <a onClick={scrollToHome}>
            <img src={logo} alt="logo" className="my-logo" />
          </a>
        </div>
        <div className="navbar-links">
          <span onClick={changeToEnglish} className="english">
            EN
          </span>
          <span>|</span>
          <span onClick={changeToGerman} className="german">
            DE
          </span>
          <a onClick={scrollToAbout}>About</a>
          <a onClick={scrollToProject}>Projects</a>
          <a onClick={scrollToContact}>Contact</a>
        </div>
      </navbar>
    );
  }
  if (language === "de") {
    return (
      <navbar className="navbar">
        <div className="navbar-logo">
          <a onClick={scrollToHome}>
            <img src={logo} alt="logo" className="my-logo" />
          </a>
        </div>
        <div className="navbar-links">
          <span onClick={changeToEnglish} className="english">
            EN
          </span>
          <span>|</span>
          <span onClick={changeToGerman} className="german">
            DE
          </span>
          <a onClick={scrollToAbout}>Über</a>
          <a onClick={scrollToProject}>Projekte</a>
          <a onClick={scrollToContact}>Kontakt</a>
        </div>
      </navbar>
    );
  }
};

export default Navbar;
