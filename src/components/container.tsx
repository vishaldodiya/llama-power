import * as React from "react";
import "../includes/container.scss";
import "../includes/quiz.scss";

const Container = () => {
    return(
        <div className="container">
            <section className="quiz">
                <h1>Test Your Llama Power!</h1>
                <h4>The Quiz contains 10 set of questions which will test your Llama knowledge and give result of your Llama power.</h4>
                <button className="quiz__start">Start</button>
            </section>
        </div>
    );
}

export default Container;