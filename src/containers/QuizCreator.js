import React, {Component} from 'react'
import './QuizCreator.css'
import createQuiz from '../store/actions/createQuiz'
import { connect } from 'react-redux'

class QuizCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: [],
            questionItem: {
                question: [],
                answers: [
                    {option: []}
                ],
                rightAnswerId: [0]
            },
            questionAdded: false,
            quizAdded: false
        }
    }

    onAddOptionHandler = () => {
        let innerAnswers = this.state.questionItem.answers
        innerAnswers.push({option: []})
        this.setState({
            questionItem: {
                answers: innerAnswers,
                ...this.state.questionItem
            }
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
    } 

    onChangeInputHandler = (event, item, index) => {
        if (item === 'question') {
            let questionArr = this.state.questionItem.question
            questionArr[0] = event.target.value
            this.setState({
                questionAdded: false,
                quizAdded: false,
                questionItem: {
                    question: questionArr,
                    ...this.state.questionItem
                }
            })
        }
        if (item === 'option') {
            let answers = this.state.questionItem.answers
            answers[index] = ({option: event.target.value})
            this.setState({
                questionAdded: false,
                quizAdded: false,
                questionItem: {
                    answers: answers,
                    ...this.state.questionItem
                }
            }) 
        }
    }

    onAddCurrentQuestion = () => {
        let quiz = this.state.quiz
        let answers = []
        this.state.questionItem.answers.map((answer) => {
            answers.push({
                option: answer.option
            })
            return undefined
        })

        let currentQuestion = {
            question: this.state.questionItem.question[0],
            answers,
            rightAnswerId: this.state.questionItem.rightAnswerId[0]
        }
        quiz.push(currentQuestion)
        this.setState({
            quiz,
            questionItem: {
                question: [],
                answers: [
                    {option: []}
                ],
                rightAnswerId: [0]
            },
            questionAdded: true
        })
    }

    onChangeRightAnswer = (index) => {
        console.log(index)
        let rightAnswerId = this.state.questionItem.rightAnswerId
        rightAnswerId[0] = index
        this.setState({
            questionItem: {
                rightAnswerId: rightAnswerId,
                ...this.state.questionItem
            }
        })
        console.log(this.state)
    }

    onCreateQuiz = () => {
        this.props.createQuiz(this.state.quiz)
        this.setState({
            quiz: [],
            questionItem: {
                question: [],
                answers: [
                    {option: []}
                ],
                rightAnswerId: [0]
            },
            questionAdded: false,
            quizAdded: true
        })
    }

    render() {
        return (
            <div className='QuizCreatorWrapper'>
                <h1>Создание квиза</h1>
                <div className='QuizCreator'>
                    <form onSubmit={this.onSubmitHandler}>
                        <label htmlFor='question-creator' className='form_label'>Введите вопрос</label>
                        <input type='text' required id='question-creator' onChange={(event) => this.onChangeInputHandler(event, 'question', null)}/>
                        <hr/>
                        <h3>Введите варианты ответа:</h3>
                        {this.state.questionItem.answers.map((option, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <label htmlFor={`option${index + 1}-creator`} className='form_label'>Вариант {index + 1}</label>
                                    <input id={`option${index + 1}-creator`} type='text' required onChange={(event) => this.onChangeInputHandler(event, 'option', index)}/>
                                </React.Fragment>
                            )
                        })}
                        <div className='add_option' onClick={this.onAddOptionHandler}>
                            <i className='fa fa-plus-circle'/>
                            <span>&nbsp;Добавить вариант ответа</span>
                        </div>
                        <h3>Выберите верный ответ:</h3>
                        {this.state.questionItem.answers.map((option, index) => {
                            if (index === 0) {
                                return (
                                    <p className='select_right_answer' key={index}>
                                        <input type='radio' name='right_answer' defaultChecked id={`right-answer-${index + 1}`} onChange={() => this.onChangeRightAnswer(index)}/>
                                        <label htmlFor={`right-answer-${index + 1}`}>&nbsp;{option.option}</label>
                                    </p>
                                )
                            }
                            else {
                                return (
                                    <p className='select_right_answer' key={index}>
                                        <input type='radio' name='right_answer' id={`right-answer-${index + 1}`} onChange={() => this.onChangeRightAnswer(index)}/>
                                        <label htmlFor={`right-answer-${index + 1}`}>&nbsp;{option.option}</label>
                                    </p>
                                )
                            }
                            
                        })}
                        <div className='buttons'>
                            <button className='add_question_button' onClick={this.onAddCurrentQuestion} type='reset'>ДОБАВИТЬ ТЕКУЩИЙ ВОПРОС</button>
                            <button className='create_quiz_button' onClick={this.onCreateQuiz} type='reset' disabled={this.state.quiz.length === 0}>СОЗДАТЬ КВИЗ</button>
                        </div>
                        {this.state.questionAdded === true ? 
                        <p className='question_added'>
                            Вопрос добавлен&nbsp;<i className='fa fa-check'/>
                        </p> :
                        null}
                        {this.state.quizAdded === true ? 
                        <p className='quiz_added'>
                            Квиз создан&nbsp;<i className='fa fa-check'/>
                        </p> :
                        null}
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createQuiz: quiz => dispatch(createQuiz(quiz))
    }
}

export default connect(null, mapDispatchToProps)(QuizCreator)