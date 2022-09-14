import React from "react"
import tick from "./images/icon-complete.svg"

export function Completed(props){

    return(
        <div className="completed-top">
            <img src={tick} alt="ok"></img>
            <h1>Thank you!</h1>
            <p>We've added your card details</p>
            {/* <input type="submit" value="Continue"></input> */}
            <button type="button" className = "complete-button">Complete</button>
        </div>
    )

}