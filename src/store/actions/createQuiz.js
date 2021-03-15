import { CREATE_QUIZ } from './actionTypes'

export default function createQuiz(quiz) {
    return {
        type: CREATE_QUIZ,
        quiz
    }
}