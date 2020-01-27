import * as React from "react";
import {HashRouter as Router, Link, Switch, Route, useRouteMatch} from "react-router-dom";
import llamaQuestion from "./llama-questions";
import Question from "./question";
import "../includes/container.scss";
import "../includes/quiz.scss";

const Container = () => {
    // const [question, setQuestion] = React.useState(llamaQuestion[index]);
    const [score, setScore] = React.useState(0);
    const [index, setIndex] = React.useState(0);

    const updateScore = () => {
        setScore(score + 1);
    }

    return(
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <section className="quiz">
                            <h1 className="quiz--grey">Test Your Llama Power!</h1>
                            <h4 className="quiz--grey">The Quiz contains 10 set of questions which will test your Llama knowledge and give result of your Llama power.</h4>
                            <Link to="/quiz/0" onClick={() => setIndex(index + 1)} className="quiz__start">Start</Link>
                        </section>
                    </Route>
                    <Route exact path="/quiz/:queId">
                        <section className="quiz">
                            <div style={{width: `${index*10}%`}} className="quiz__progress-bar"></div>
                            <Question onSelect={updateScore}></Question>
                            <Link onClick={() => setIndex(index + 1)} className="quiz__start" to={index > 9 ? `/result` : `/quiz/${index}`}>{index > 9 ? "Submit" : "Next"}</Link>
                        </section>
                    </Route>
                    <Route eaxct path="/result">
                        {score}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Container;