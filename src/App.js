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
    <div className="topDiv">
      <section className="cardSection">
        <img
          className="frontCardSection"
          src={cardFront}
          alt="card front image"
        ></img>
        <p>{cardNumber}</p>
        <p>{nameOfUser}</p>
        <p>{expDateMonth}</p>
        <p>{expDateYear}</p>
        <img
          className="backCardSection"
          src={cardBack}
          alt="card back image"
        ></img>
        <p>{cvc}</p>
      </section>

      <div className="topForm">
        <form onSubmit={handleSubmit}>

            <label className="field">
              Cardholder Name
              <input
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
                type="text"
                value={cardNumber}
                onChange={(e) => {
                  setCardNumber(e.target.value);
                }}
              />
            </label>
          </div>

          <div>
            <label className="field">
              Exp. Date (MM/YY)
              <input
                type="text"
                value={expDateMonth}
                onChange={(e) => {
                  setExpDateMonth(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                type="text"
                value={expDateYear}
                onChange={(e) => {
                  setExpDateYear(e.target.value);
                }}
              />
            </label>

            <label className="field">
              CVC
              <input
                type="text"
                value={cvc}
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
              />
            </label>
          </div>

          <button>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;
