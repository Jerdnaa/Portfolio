const Navbar = ({ scrollToHome, scrollToAbout, scrollToProject, scrollToContact }) => {
  return (
    <navbar className="navbar">
      <div className="navbar-logo">
        <a onClick={scrollToHome}>Logo</a>
      </div>
      <div className="navbar-links">
        <a onClick={scrollToAbout}>About</a>
        <a onClick={scrollToProject}>Projects</a>
        <a onClick={scrollToContact}>Contact</a>
      </div>
    </navbar>
  );
};

export default Navbar;
