import * as React from "react";
import {HashRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import Quiz from "./quiz";
import Result from "./result";
import "../assets/styles/container.scss";

const Container = () => {

    return(
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/"
                        render={
                            ({location}) => (null != sessionStorage.getItem("quizAttempt")) ? (
                                <Redirect to={{pathname: "/result", state: {from: location}}}/>
                            ) : (
                                <section className="container__intro">
                                    <h1 className="util--grey">Test Your Llama Power!</h1>
                                    <h4 className="util--grey">The Quiz contains set of 10 questions which will test your Llama knowledge and give result of your Llama power.</h4>
                                    <Link to="/quiz/0" className="util__btn">Start</Link>
                                </section>
                            )
                        }>
                    </Route>
                    <Route exact path="/quiz/:queId">
                        <Quiz></Quiz>
                    </Route>
                    <Route exact path="/result"
                        render={
                            ({location}) => (null == sessionStorage.getItem("quizAttempt")) ? (
                                <Redirect to={{pathname: "/", state: {from: location}}}/>
                            ) : (
                                <Result></Result>
                            )
                        }>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Container;