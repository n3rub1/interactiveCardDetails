import "./App.css";
import React from "react";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";

function App() {
  const [nameOfUser, setNameOfUser] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expDateMonth, setExpDateMonth] = React.useState("");
  const [expDateYear, setExpDateYear] = React.useState("");
  const [cvc, setCvc] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${nameOfUser}`);
  };

  return (
    <div className="topBody">
      <div className="top">
        <div className="cardTop">
          <div className="cardFront">
            <img
              src={cardFront}
              alt="card front image"
            ></img>
            <div className="nameOfUser">{nameOfUser}</div>
            <div className="cardNumber">{cardNumber}</div>
            <div className="month">{expDateMonth}</div>
            <div className="divider">/</div>
            <div className="year">{expDateYear}</div>
          </div>
          <div className="cardBack">
            <img
              src={cardBack}
              alt="card back image"
            ></img>
            <div className="cvc">{cvc}</div>
          </div>
        </div>

        <div className="formTop--div">
          <form className="formTop" onSubmit={handleSubmit}>
            <label className="nameLabel">
              Cardholder Name
              <input
                className="nameInput"
                placeholder="Eg: Jane Appleseed"
                type="text"
                value={nameOfUser}
                onChange={(e) => {
                  setNameOfUser(e.target.value);
                }}
              />
            </label>

            <div>
              <label className="cardLabel">
                Card Number
                <input
                  className="cardInput"
                  placeholder="Eg: 1234 5678 9100 1234"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                />
              </label>
            </div>

            <div className="month-year-cvc-top">
              <label className="monthYearLabel">
                Exp. Date (MM/YY)
                <input
                  className="monthInput"
                  placeholder="MM"
                  type="text"
                  value={expDateMonth}
                  onChange={(e) => {
                    setExpDateMonth(e.target.value);
                  }}
                />
                <input
                  className="yearInput"
                  placeholder="YY"
                  type="text"
                  value={expDateYear}
                  onChange={(e) => {
                    setExpDateYear(e.target.value);
                  }}
                />
              </label>
              <label className="cvcField">
                CVC
                <input
                  className="cvcInput"
                  placeholder="123"
                  type="text"
                  value={cvc}
                  onChange={(e) => {
                    setCvc(e.target.value);
                  }}
                />
              </label>
            </div>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
