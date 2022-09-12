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
    <div>
      <div className="topDiv">
        <section className="container">
          <img className="frontCardSection" src={cardFront} alt="card front image"></img>
          <img className="backCardSection" src={cardBack} alt="card back image"></img>
        </section>

        <div className="topForm">
          <form onSubmit={handleSubmit}>
            <label className="field">
              Cardholder Name
              <input
                placeholder="Eg: Jane Appleseed"
                type="text"
                value={nameOfUser}
                onChange={(e) => {
                  setNameOfUser(e.target.value);
                }}
              />
            </label>

            <div>
              <label className="field">
                Card Number
                <input
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
              <div className="month-year-top">
                <label className="field">
                  Exp. Date (MM/YY)
                  <input
                    placeholder="MM"
                    type="text"
                    value={expDateMonth}
                    onChange={(e) => {
                      setExpDateMonth(e.target.value);
                    }}
                  />
                  <input
                    placeholder="YY"
                    type="text"
                    value={expDateYear}
                    onChange={(e) => {
                      setExpDateYear(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="month-year-top">
                <label className="field">
                  CVC
                  <input
                    placeholder="123"
                    type="text"
                    value={cvc}
                    onChange={(e) => {
                      setCvc(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>

            <button>Confirm</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
