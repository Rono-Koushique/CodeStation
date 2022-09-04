import React from "react";
import "./faq.scss";
import Data from "Assets/Data/faq";
import SectionHeader from "Components/SectionHeader/SectionHeader";

const Faq = () => {
    const [current, setCurrent] = React.useState(0);

    function changeQuestion(id) {
        if (id===current) {
            setCurrent(0)
        } else {
            setCurrent(id)
        }
    }
    
    const questionElements = Data.questions.map((question) => {
        return (
            <li
                onClick={() => changeQuestion(question.id)}
                className="question"
                // style={{ padding: current !== question.id && "20px 28px" }}
                key={question.icon}
            >
                <img
                    className="icon"
                    src={require(`Assets/Images/faq/${question.icon}`)}
                    alt=""
                />
                <div className="ask">{question.ask}</div>

                <img
                    className="expander"
                    src={
                        current === question.id
                            ? require("Assets/Images/faq/minimize.png")
                            : require("Assets/Images/faq/maximize.png")
                    }
                    alt=""
                />

                {current === question.id && (
                    <div className="ans">{question.ans}</div>
                )}
            </li>
        );
    });

    return (
        <section id="faq">
            <div className="bg">
                <img
                    className="c1"
                    src={require("Assets/Images/faq/circle.png")}
                    alt=""
                />
                <img
                    className="c2"
                    src={require("Assets/Images/faq/circle.png")}
                    alt=""
                />
                <img
                    className="c3"
                    src={require("Assets/Images/faq/circle.png")}
                    alt=""
                />
            </div>
            <div className="container">
                <div className="content">
                    <SectionHeader title="Frequently Asked <s>Questions<s>" />
                    <div className="question-group">{questionElements}</div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
