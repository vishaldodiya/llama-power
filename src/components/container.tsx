import * as React from "react";
import {HashRouter as Router, Link, Switch, Route} from "react-router-dom";
import Quiz from "./quiz";
import "../includes/container.scss";
import "../includes/quiz.scss";

const Container = () => {

    const [result, setResult] = React.useState(0);

    const updateResult = (total: number) => {
        console.log(total);
        setResult(total);
    }

    return(
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <section className="quiz">
                            <h1 className="quiz--grey">Test Your Llama Power!</h1>
                            <h4 className="quiz--grey">The Quiz contains 10 set of questions which will test your Llama knowledge and give result of your Llama power.</h4>
                            <Link to="/quiz/0" className="quiz__start">Start</Link>
                        </section>
                    </Route>
                    <Route exact path="/quiz/:queId">
                        <Quiz onSubmit={updateResult}></Quiz>
                    </Route>
                    <Route exact path="/result">
                        {result}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Container;