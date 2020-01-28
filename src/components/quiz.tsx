import * as React from "react";
import "../includes/question.scss";
import { useParams } from "react-router";
import {HashRouter as Router, Link} from "react-router-dom";
import llamaQuestions from "./llama-questions";

const Quiz = (props: any) => {

    let {queId} = useParams();
    let id: number = Number(queId);
    const [selected, setSelected] = React.useState([]);
    const [score, setScore] = React.useState(0);
    let question = llamaQuestions[id];

    const updateScore = () => {
        if (llamaQuestions[id].correct == selected[id]) {
            setScore(score + 1);
        }
        if ( id >= 9 ) {
            props.onSubmit(score);
        }
    };

    const updateSelected = (answer: number) => {
        let list = selected;
        list[id] = answer;
        setSelected(list);
    }

    return(
        <div className="quiz">
            <div style={{width: `${id*10}%`}} className="quiz__progress-bar"></div>
            <article className="question">
                <h2>{ question.question }</h2>
                {
                    question.answeres.map((answer: string, index: number) => (
                        <label key={"que-" + queId + "-ans-" + index} className="question__option" htmlFor={"que-" + queId + "-ans-" + index}>
                            {answer}
                            <input defaultChecked={selected[id] == index ? true : false} onClick={() => updateSelected(index)} type="radio" name={"que-" + queId + "-ans"} value={index} id={"que-" + queId + "-ans-" + index}/>
                            <span className="question__radio"></span>
                        </label>
                    ))
                }
            </article>
            <Link onClick={() => updateScore()} className="quiz__start" to={id >= 9 ? `/result` : `/quiz/${id+1}`}>{id >= 9 ? "Submit" : "Next"}</Link>
        </div>
    );
};

export default Quiz;