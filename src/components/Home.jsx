import coding from "../assets/images/coding.png";

const Home = ({ refProp }) => {
  return (
    <div ref={refProp}>
      <h1>Home</h1>
      <img src={coding} alt="coding picture" />
    </div>
  );
};

export default Home;
