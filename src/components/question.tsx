import * as React from "react";
import "../includes/question.scss";
import { useParams } from "react-router";
import llamaQuestions from "./llama-questions";

const Question = (props: any) => {

    let {queId} = useParams();
    let id: number = Number(queId);
    let question = llamaQuestions[id];
    let answer: NodeListOf<HTMLInputElement>;

    React.useEffect(() => {
        answer = document.querySelectorAll(`article.question input[name="que-${id}-ans"]`);
        console.log(answer);
        answer.addEventListener("change", updateScore);
    });

    const updateScore = (e: any) => {
        console.log(e);
        if (null != answer && llamaQuestions[id].correct == e.target.value) {
            props.onSelect();
        }
    };

    return(
        <article className="question">
            <h2>{ question.question }</h2>
            {
                question.answeres.map((answer: string, index: number) => (
                    <label key={"que-" + queId + "-ans-" + index} className="question__option" htmlFor={"que-" + queId + "-ans-" + index}>
                        {answer}
                        <input type="radio" name={"que-" + queId + "-ans"} value={index} id={"que-" + queId + "-ans-" + index}/>
                        <span className="question__radio"></span>
                    </label>
                ))
            }
        </article>
    );
};

export default Question;