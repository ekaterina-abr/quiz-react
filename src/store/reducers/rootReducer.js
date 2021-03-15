import { CREATE_QUIZ } from '../actions/actionTypes'

const initialState = {
    quizes: [
        [{
        question: 'Территория какой из этих стран - наибольшая?',
        answers: [
            {option: 'Германия'},
            {option: 'Италия'},
            {option: 'Финляндия'},
            {option: 'Япония'}
        ],
        rightAnswerId: 3 
        },
        {
            question: 'В каком итальянском городе была выведена известная порода комнатных собак?',
            answers: [
            {option: 'Сиракузы'},
            {option: 'Болонья'},
            {option: 'Падуя'},
            {option: 'Верона'}
            ],
            rightAnswerId: 1 
        }]
    ]
}

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case CREATE_QUIZ: 
            state.quizes.push(action.quiz)
            return {
                quizes: state.quizes
            }
        default:
            return state
    }
}