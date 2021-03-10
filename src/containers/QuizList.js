import React, {Component} from 'react'
import './QuizList.css'
import { NavLink } from "react-router-dom";

class QuizList extends Component {
    render() {
        return (
            <div className='QuizList'>
                <h1>Список квизов</h1>
                <ul className='quizes'>
                    {this.props.quizes.map((quiz, index) => {
                        return (
                            <li key={index} className='quiz_item'>
                                <NavLink to={`/quiz/${index}`} className='quiz_navlink'>Квиз {index + 1}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default QuizList