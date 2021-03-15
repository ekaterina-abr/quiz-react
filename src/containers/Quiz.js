import React, { Component } from "react";
import "./Quiz.css";
import ActiveQuestion from "../components/ActiveQuestion";
import FinishedQuiz from "../components/FinishedQuiz";
import { connect } from "react-redux";

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionItem: 0,
            answers: []
        }
    }

    onClickHandler = (answerIndex) => {
        let answers = this.state.answers.concat(answerIndex)
        this.setState({
            answers
        })
        let timerId = setTimeout(() => {
            this.setState({
                questionItem: this.state.questionItem + 1
            })
            clearTimeout(timerId)
        }, 500)
    }

    onRetryHandler = () => {
        this.setState({
            questionItem: 0,
            answers: []
        })
    }

    render() {
        const quiz = this.props.quizes[this.props.match.params.id]
        return (
            <div className='QuizWrapper'>
                <h1>Ответьте на все вопросы</h1>
                <div className='Quiz'>
                    {this.state.questionItem < quiz.length ? 
                        <ActiveQuestion 
                            questionItem={this.state.questionItem}
                            quiz={quiz}
                            onClick={(answerIndex) => this.onClickHandler(answerIndex)}
                            answers={this.state.answers}/> : 
                        <FinishedQuiz 
                            quiz={quiz} 
                            answers={this.state.answers}
                            quizId={this.props.match.params.id}
                            onRetry={this.onRetryHandler}/>
                    }
               </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quizes
    }
}

export default connect(mapStateToProps)(Quiz)