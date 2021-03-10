import React from "react";
import './FinishedQuiz.css'
import { Link } from "react-router-dom";

const FinishedQuiz = props => {
    let rigthAnswersCount = 0
    return (
        <div className='FinishedQuiz'>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    let cls = ['fa']
                    if (props.answers[index] === quizItem.rightAnswerId) {
                        rigthAnswersCount++
                        cls.push('fa-check-square')
                    }
                    else cls.push('fa-times-rectangle')
                    return (

                        <li key={index}>
                            {index + 1}.&nbsp;{quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p className='summary'>Привильно ответов: {rigthAnswersCount} из {props.quiz.length}</p>
            <button onClick={props.onRetry}>Пройти заново</button>
            <Link to='/' className='return_to_list'><button>Вернуться к списку квизов</button></Link>
        </div>
    )
}

export default FinishedQuiz