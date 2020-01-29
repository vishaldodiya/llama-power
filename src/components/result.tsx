import * as React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/result.scss";

const Result = (props: any) => {
    console.log(props);
    return(
        <div className="result">
            <div className="result__text">
                Your Llama Score!
            </div>
            <div className="result__score">
                {`${props.score}/10`}
            </div>
            <div className="result__action">
                <Link className="util__btn" to="/quiz/0">Review</Link>
                <Link className="util__btn" to="/quiz/0">Retake</Link>
            </div>
        </div>
    );
}

export default Result;