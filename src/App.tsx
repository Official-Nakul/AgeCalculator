import "./App.css";
import arrow from "../public/images/icon-arrow.svg";
import { useState } from "react";
function App() {
  const curDate = new Date();
  /*----------------current date--------------------*/
  const curDay = curDate.getDate();
  const curMonth = curDate.getMonth();
  const curYear = curDate.getFullYear();
  /*----------------calculated--------------------*/
  const [outDay, setDay] = useState("--");
  const [outMonth, setMonth] = useState("--");
  const [outYear, setYear] = useState("--");
  /*----------------indate--------------------*/
  const [inDay, getDay] = useState("");
  const [inMonth, getMonth] = useState("");
  const [inYear, getYear] = useState("");
  /*----------------validation check function-----------------------*/
  const checkVal = () => {
    // const dayin = document.querySelector(".dayIn").value;
    return true;
  };
  /*----------------output-----------------------*/
  const handleOnClick = () => {
    if (checkVal()) {
      setDay(Math.abs(parseInt(inDay) - curDay).toString());
      setMonth(Math.abs(parseInt(inMonth) - curMonth - 1).toString());
      setYear(Math.abs(parseInt(inYear) - curYear).toString());
    }
  };

  return (
    <>
      <div className="container">
        <div className="userInput">
          <div className="day">
            <p>DAY</p>
            <input
              type="text"
              value={inDay}
              placeholder="DD"
              className="dayIn"
              onChange={(e) => getDay(e.target.value)}
              maxLength={2}
            />
          </div>
          <div className="month">
            <p>MONTH</p>
            <input
              type="text"
              value={inMonth}
              placeholder="MM"
              className="monthIn"
              onChange={(e) => getMonth(e.target.value)}
              maxLength={2}
            />
          </div>
          <div className="year">
            <p>YEAR</p>
            <input
              value={inYear}
              type="text"
              placeholder="YYYY"
              className="yearIn"
              onChange={(e) => getYear(e.target.value)}
              maxLength={4}
              minLength={4}
            />
          </div>
        </div>
        <div className="btnArea">
          <hr />
          <div className="btn" onClick={handleOnClick}>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="outputArea">
          <div className="outputtxt">
            <p className="calOutput">{outYear}</p>
            <p>years</p>
          </div>
          <div className="outputtxt">
            <p className="calOutput">{outMonth}</p>
            <p>months</p>
          </div>
          <div className="outputtxt">
            <p className="calOutput">{outDay}</p>
            <p>days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
