import img from '../assets/teddy.jpg';

const Welcome = () => {
  return (
    <div className="page">
      <div className="content">
        <img src={img} alt="Bear" className="image" />
        <h1 className="heading">WELCOME!</h1>
        <p className="subheading">Plan Your Day....</p>
        <button className="button">
          Get Started <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
