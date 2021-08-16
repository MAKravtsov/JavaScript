import axios from  '../../axios/axios-quiz';
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZ_SUCCESS, FETCH_QUIZES_ERROR, QUIZ_SET_STATE, FINISH_QUIZ, QUIZ_NEXT_QUESTION, RETRY_QUIZ } from './actionTypes';

export function fetchQuizes() {
    return async dispacth => {
        dispacth(fetchQuizesStart());
        try {
            const resp = await axios.get('/quizes.json')
            const quizes = [];
            Object.keys(resp.data).forEach((id,index) => {
                quizes.push({
                    id : id,
                    name: `Тест №${index + 1}`
                })
            })

            dispacth(fetchQuizesSuccess(quizes))
        } catch(e) {
            dispacth(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById(id) {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const resp = await axios.get(`/quizes/${id}.json`)
            const quiz = resp.data;
            dispatch(fetchQuizSuccess(quiz));
        } catch(e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function quizAnswerClick(answerId) {
    // getState - можно получать state
    return (dispacth, getState)=> {
        const state = getState().quiz;
        if(state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if(state.answerState[key] === 'success'){
                return;
            }
        }

        const question = state.quiz[state.activeQuestion];
        const results = state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }
            dispacth(quizSetState({[answerId]: 'success'}, results));
            const timeOut = window.setTimeout(() => {
                if(isQuizFinished(state)) {
                    dispacth(finishQuiz())
                } else {
                    dispacth(quizNextQuestion(state.activeQuestion + 1));
                }
                window.clearTimeout(timeOut);
                //this.setState({answerState: null});
            }, 1000)
        } else {
            results[question.id] = 'error';
            dispacth(quizSetState({[answerId]: 'error'}, results));
        }
    }
}

export function retryQuiz() {
    return {
        type: RETRY_QUIZ
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function fetchQuizesError(error) {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState, 
        results
    }
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    }
}

export function quizNextQuestion(activeQuestion) {
    return {
        type: QUIZ_NEXT_QUESTION,
        activeQuestion
    }
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length;
}