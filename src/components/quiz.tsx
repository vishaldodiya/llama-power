import * as React from "react";
import { useParams } from "react-router";
import {HashRouter as Router, Link} from "react-router-dom";
import llamaQuestions from "./llama-questions";
import "../assets/styles/quiz.scss";

const Quiz = () => {

    const [selected, setSelected] = React.useState(JSON.parse(sessionStorage.getItem("quizAttempt")) || []);

    let {queId} = useParams();
    let id: number = Number(queId);
    let question = llamaQuestions[id];
    let isReview = Boolean( "1" == sessionStorage.getItem("quizReview") );

    const submitScore = () => {
        let score = 0;
        for (let i = 0; i < 10; i++) {
            if (selected[i] == llamaQuestions[i].correct) score++;
        }

        sessionStorage.setItem("quizAttempt", JSON.stringify(selected));
        sessionStorage.setItem("quizScore", JSON.stringify(score));
    };

    const updateSelected = (answer: number) => {
        let list = selected;
        list[id] = answer;
        setSelected(list);
    }

    const reviewClass = (index: number) => {
        if (isReview) {
            if (selected[id] == index) {
                if ( index == llamaQuestions[id].correct ) {
                    return "util--correct";
                } else {
                    return "util--wrong";
                }
            } else if ( index == llamaQuestions[id].correct ) {
                return "util--correct";
            }
        }
    }

    return(
        <div className="quiz">
            <div style={{width: `${id*10}%`}} className="quiz__progress-bar"></div>
            <article className="quiz__question quiz--animate">
                <h2 className="util--grey">{ question.question }</h2>
                {
                    question.answeres.map((answer: string, index: number) => (
                        <label
                            key={"que-" + queId + "-ans-" + index}
                            className={`quiz__option util--grey ${reviewClass(index)}`}
                            htmlFor={"que-" + queId + "-ans-" + index}
                        >
                            {answer}
                            <input
                                defaultChecked={selected[id] == index ? true : false}
                                onClick={() => updateSelected(index)}
                                type="radio"
                                name={"que-" + queId + "-ans"}
                                value={index}
                                id={"que-" + queId + "-ans-" + index}
                                disabled={isReview}
                            />
                            <span className="quiz__radio"></span>
                        </label>
                    ))
                }
            </article>
            <div className="quiz__action">
                {
                    (id > 0) ? <Link className="util__btn" to={`/quiz/${id - 1}`}>Back</Link> : null
                }
                <Link onClick={id >= 9 ? () => submitScore(): null} className="util__btn" to={id >= 9 ? `/result` : `/quiz/${id+1}`}>{id >= 9 ? isReview ? "Result" : "Submit" : "Next"}</Link>
            </div>
        </div>
    );
};

export default Quiz;