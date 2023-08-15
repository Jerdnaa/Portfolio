import coding from "../assets/images/coding.png";

const Home = ({ refProp }) => {
  return (
    <div ref={refProp} className="home-container">
      <div className="heading-container">
        <h1 className="home-name">Andrej Delinac</h1>
        <h3 className="home-job">Full Stack Developer</h3>
        <a className="resume-dl">Resume</a>
      </div>
      <img src={coding} alt="coding picture" className="coding-img" />
    </div>
  );
};

export default Home;
