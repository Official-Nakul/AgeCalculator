import "./App.css";
import arrow from "../public/images/icon-arrow.svg";
function App() {
  return (
    <>
      <div className="container">
        <div className="userInput">
          <div className="day">
            <p>DAY</p>
            <input
              type="text"
              placeholder="DD"
              className="dayIn"
              maxLength={2}
            />
          </div>
          <div className="month">
            <p>MONTH</p>
            <input
              type="text"
              placeholder="MM"
              className="monthIn"
              maxLength={2}
            />
          </div>
          <div className="year">
            <p>YEAR</p>
            <input
              type="text"
              placeholder="YYYY"
              className="yearIn"
              maxLength={4}
              minLength={4}
            />
          </div>
        </div>
        <div className="btnArea">
          <hr />
          <div className="btn">
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="outputArea">
          <div className="outputtxt">
            <p className="calOutput">--</p>
            <p>years</p>
          </div>
          <div className="outputtxt">
            <p className="calOutput">--</p>
            <p>months</p>
          </div>
          <div className="outputtxt">
            <p className="calOutput">--</p>
            <p>days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
