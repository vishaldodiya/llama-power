import * as React from "react";
import "../includes/question.scss";

const Question = React.forwardRef((props: any, ref: any) => {
    return(
        <article ref={ref} className="question">
            <h2>{ props.data.question }</h2>
            {
                props.data.answeres.map((answer: string, index: number) => (
                    <label key={"que-" + props.index + "-ans-" + index} className="question__option" htmlFor={"que-" + props.index + "-ans-" + index}>
                        {answer}
                        <input type="radio" name={"que-" + props.index + "-ans"} value={index} id={"que-" + props.index + "-ans-" + index}/>
                        <span className="question__radio"></span>
                    </label>
                ))
            }
        </article>
    );
});

export default Question;