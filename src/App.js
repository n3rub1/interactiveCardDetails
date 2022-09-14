import "./App.css";
import React from "react";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";
import { Completed } from "./completed";

function App() {
  const [nameOfUser, setNameOfUser] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expDateMonth, setExpDateMonth] = React.useState("");
  const [expDateYear, setExpDateYear] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [errors, setErrors] = React.useState({
    errorInName: false,
    errorInNameMessage: "",
    errorInCardNumber: false,
    errorInCardMessage: "",
    errorinMonth: false,
    errorInMonthMessage: "",
    errorInYear: false,
    errorInYearMessage: "",
    errorInCvc: false,
    errorInCvcMessage: "",
  });
  const [isCompleted, setIsCompleted] = React.useState(false);

  const regexContainingLetters = /[a-zA-Z]/; //if it contains letters
  const regexContainingNumbers = /\d/; //if it contains numbers

  const handleSubmit = (event) => {
    let state = [];
    event.preventDefault();

    state.push(handleNameErrors());
    state.push(handleCardErrors());
    state.push(handleMonthErrors());
    state.push(handleYearErrors());
    state.push(handleCvcErrors());

    if(state.filter(element => !element).length === 5){
      setIsCompleted(true)
    }

    state= []
  };

  function handleMonthErrors() {
    if (expDateMonth <= 0 || expDateMonth > 12) {
      setErrors((prev) => {
        return { ...prev, errorinMonth: true, errorInMonthMessage: "Month must be between 1 and 12" };
      });
      return true;
    } else {
      setErrors((prev) => {
        return { ...prev, errorinMonth: false, errorInMonthMessage: "" };
      });
      return false;
    }
  }
  function handleYearErrors() {
    if (expDateYear <= 0 || expDateYear > 12) {
      setErrors((prev) => {
        return { ...prev, errorInYear: true, errorInYearMessage: "Month must be between 1 and 12" };
      });
      return true;
    } else {
      setErrors((prev) => {
        return { ...prev, errorInYear: false, errorInYearMessage: "" };
      });
      return false;
    }
  }
  function handleCvcErrors() {
    if (cvc <= 0) {
      setErrors((prev) => {
        return { ...prev, errorInCvc: true, errorInCvcMessage: "CVC is a number must be geater than 0" };
      });
      return true
    } else if (cvc.length < 3) {
      setErrors((prev) => {
        return { ...prev, errorInCvc: true, errorInCvcMessage: "CVC is always a 3 digit number" };
      });
      return true
    } else {
      setErrors((prev) => {
        return { ...prev, errorInYear: false, errorInYearMessage: "" };
      });
      return false
    }
  }

  function handleNameErrors() {
    const found = nameOfUser.match(regexContainingNumbers);
    if (found){
      setErrors((prev) => {
        return { ...prev, errorInName: true, errorInNameMessage: "Name cannot contain numbers" };
      });
      return true
    }else if (nameOfUser.length === 0){
      setErrors((prev) => {
        return { ...prev, errorInName: true, errorInNameMessage: "Name must contain a value" };
      });
      return true
    }else{
      setErrors((prev) => {
        return { errorInName: false, errorInNameMessage: "" };
      });
      return false
    }
  }

  function handleCardErrors() {
    const found = cardNumber.match(regexContainingLetters);

    if (cardNumber.length < 16){
      setErrors((prev) => {
        return { ...prev, errorInCardNumber: true, errorInCardMessage: "Cannot be less than 16 characters" };
      });
      return true
    }else if (found){
      setErrors((prev) => {
        return { ...prev, errorInCardNumber: true, errorInCardMessage: "Cannot contain letters" };
      });
      return true
    }else{
      setErrors((prev) => {
        return { ...prev, errorInCardNumber: false, errorInCardMessage: "" };
      });
      return false
    }
  }

  return (
    <div className="topBody">
      <div className="top">
        <div className="cardTop">
          <div className="cardFront">
            <img className = "frontImage"src={cardFront} alt="card front image"></img>
            <div className="nameOfUser">{nameOfUser}</div>
            <div className="cardNumber">{cardNumber}</div>
            <div className="month">{expDateMonth}</div>
            <div className="divider">/</div>
            <div className="year">{expDateYear}</div>
          </div>
          <div className="cardBack">
            <img className = "backImage" src={cardBack} alt="card back image"></img>
            <div className="cvc">{cvc}</div>
          </div>
        </div>

        {!isCompleted && <div className="formTop--div">
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
              {errors.errorInName && <p className="error">{errors.errorInNameMessage}</p>}
            </label>

            <div>
              <label className="cardLabel">
                Card Number
                <input
                  className="cardInput"
                  placeholder="Eg: 1234 5678 9100 1234"
                  type="text"
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                />
                {errors.errorInCardNumber && <p className="error">{errors.errorInCardMessage}</p>}
              </label>
            </div>

            <div className="month-year-cvc-top">
              <label className="monthYearLabel">
                Exp. Date (MM/YY)
                <input
                  className="monthInput"
                  placeholder="MM"
                  type="text"
                  maxLength={2}
                  value={expDateMonth}
                  onChange={(e) => {
                    setExpDateMonth(e.target.value);
                  }}
                />
                {errors.errorinMonth && <p className="error">{errors.errorInMonthMessage}</p>}
                <input
                  className="yearInput"
                  placeholder="YY"
                  type="text"
                  value={expDateYear}
                  maxLength={2}
                  onChange={(e) => {
                    setExpDateYear(e.target.value);
                  }}
                />
                {errors.errorInYear && <p className="error">{errors.errorInYearMessage}</p>}
              </label>
              <label className="cvcField">
                CVC
                <input
                  className="cvcInput"
                  placeholder="123"
                  type="text"
                  value={cvc}
                  maxLength={3}
                  onChange={(e) => {
                    setCvc(e.target.value);
                  }}
                />
                {errors.errorInCvc && <p className="error">{errors.errorInCvcMessage}</p>}
              </label>
            </div>

            <input type="submit" value="Submit"></input>
          </form>
        </div>}

        {isCompleted && <Completed />}
      </div>
    </div>
  );
}

export default App;
