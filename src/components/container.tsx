import * as React from "react";
import Question from "./question";
import "../includes/container.scss";
import "../includes/quiz.scss";

const llamaQuestion = [
    {
        question: "Which of these animals are llamas related to?",
        answeres: [
            "Zebras",
            "Camels",
            "Horses",
            "Cows"
        ],
        correct: 1
    },
    {
        question: "How tall can llamas grow?",
        answeres: [
            "8 feet tall",
            "6 feet tall",
            "4 meters tall",
            "4 feet tall"
        ],
        correct: 1
    },
    {
        question: "Llamas are vegetarian. True or false?",
        answeres: [
            "True - they only eat plants",
            "False - I've defenitely seen one eating a burger once",
        ],
        correct: 0
    },
    {
        question: "What is a group of llamas called?",
        answeres: [
            "A brood of llamas",
            "A University of llamas",
            "A pack of llamas",
            "A herd of llamas"
        ],
        correct: 3
    },
    {
        question: "A cow's stomach has 4 compartments. How many does a llama's stomach have?",
        answeres: [
            "Just 1",
            "2",
            "3",
            "14"
        ],
        correct: 2
    },
    {
        question: "Which of these video games DOESN'T have llamas in it?",
        answeres: [
            "Fortnite",
            "Minecraft",
            "FIFA",
            "Vicious Attack Llama Apocaplypse"
        ],
        correct: 2
    },
    {
        question: "Where do llamas come from?",
        answeres: [
            "South America",
            "Asia",
            "Africa",
            "Yorkshire"
        ],
        correct: 0
    },
    {
        question: "Which ancient people first started using llamas to help them carry things?",
        answeres: [
            "The Incas",
            "The Romans",
            "The Celts",
            "The Phoenicians"
        ],
        correct: 0
    },
    {
        question: "What are llamas famous for doing when they're angry?",
        answeres: [
            "Sulking",
            "Sneezing",
            "Snarling",
            "Spitting"
        ],
        correct: 3
    },
    {
        question: "What is the scientific name for llamas?",
        answeres: [
            "Lama Glama",
            "Llama Vicugunos",
            "Llama Pacos",
            "Furrius Hilario"
        ],
        correct: 0
    }
];
var index = 0;

const Container = () => {
    const [question, setQuestion] = React.useState(llamaQuestion[index]);
    const [score, updateScore] = React.useState(0);
    const queRef = React.createRef();

    const nextQuestion = () => {
        index = index + 1;
        let currentRef: any = queRef.current;
        let answer = currentRef.querySelector("input:checked");
        if (null != answer && answer.value == question.correct) {
            let point = score;
            updateScore(point + 1);
        }
        console.log(score);
        if (index > 9) {
            return;
        }
        setQuestion(llamaQuestion[index]);
    }

    return(
        <div className="container">
            <section className="quiz">
                <h1 className="quiz--grey">Test Your Llama Power!</h1>
                <h4 className="quiz--grey">The Quiz contains 10 set of questions which will test your Llama knowledge and give result of your Llama power.</h4>
                <button className="quiz__start">Start</button>
                <div style={{width: `${index*10}%`}} className="quiz__progress-bar"></div>
                <Question ref={queRef} data={question} index={index}></Question>
    <button className="quiz__start" onClick={() => nextQuestion()}>{index == 9 ? "Submit" : "Next"}</button>
            </section>
        </div>
    );
}

export default Container;