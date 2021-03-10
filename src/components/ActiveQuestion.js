import React from "react";
import "./ActiveQuestion.css";

const ActiveQuestion = props => {
    return (
        <div className='ActiveQuestion'>
            <p className='question_p'>
                <span>{props.questionItem + 1}.&nbsp;{props.quiz[props.questionItem].question}</span>
                <small>{props.questionItem + 1} из {props.quiz.length}</small>
            </p>
            <ul>
                {props.quiz[props.questionItem].answers.map((option, index) => {
                    let cls
                    if (typeof props.answers[props.questionItem] !== 'undefined' && props.answers[props.questionItem] === index) {
                        if (props.answers[props.questionItem] === props.quiz[props.questionItem].rightAnswerId) {
                            cls = 'right_answer'
                        }
                        else cls = 'wrong_answer'
                    }
                    return (
                        <li key={index} className={cls} onClick={() => props.onClick(index)}>{option.option}</li>
                    )}
                )}
            </ul>
        </div>
    )
}

export default ActiveQuestion