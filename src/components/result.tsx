import * as React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/result.scss";

const Result = (props: any) => {

    const getScore = () => {

        if (!window.sessionStorage) {
            return 0;
        }

        return JSON.parse(sessionStorage.getItem("quizScore"));
    }

    const clearSession = () => {
        if (!window.sessionStorage) {
            return false;
        }

        sessionStorage.removeItem("quizAttempt");
        sessionStorage.removeItem("quizScore");
        return true;
    }

    return(
        <div className="result">
            <div className="result__text util--grey">
                Your Llama Power!
            </div>
            <div className="result__score util--grey">
                {`${getScore()} / 10`}
            </div>
            <div className="result__action">
                <Link className="util__btn" to="/quiz/0">Review</Link>
                <Link onClick={() => clearSession()} className="util__btn" to="/">Retake</Link>
            </div>
        </div>
    );
}

export default Result;