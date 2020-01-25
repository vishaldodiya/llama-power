import * as React from "react";
import "../includes/question.scss";

const Question = () => {
    return(
        <article className="question">
            <h2>Who is Llama?</h2>

            <label className="question__option" htmlFor="radio-1">
                Radio 1
                <input type="radio" name="radio" value="Radio 1" id="radio-1"/>
                <span className="question__radio"></span>
            </label>

            <label className="question__option" htmlFor="radio-2">
                Radio 2
                <input type="radio" name="radio" value="Radio 1" id="radio-2"/>
                <span className="question__radio"></span>
            </label>

            <label className="question__option" htmlFor="radio-3">
                Radio 3
                <input type="radio" name="radio" value="Radio 1" id="radio-3"/>
                <span className="question__radio"></span>
            </label>

            <label className="question__option" htmlFor="radio-4">
                Radio 4 
                <input type="radio" name="radio" value="Radio 1" id="radio-4"/>
                <span className="question__radio"></span>
            </label>
        </article>
    );
}

export default Question;