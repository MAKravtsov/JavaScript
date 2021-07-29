import { Component } from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from  '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader/Loader';

// Контейнер всей страницы quiz
class Quiz extends Component {
    state = {
        results: {}, // {[id]: success error}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error'}
        quiz: [],
        loading: true
    }

    onAnswerClickHandker = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({answerState: {[answerId]: 'success'}, results});
            const timeOut = window.setTimeout(() => {
                if(this.isQuizFinished()) {
                    this.setState({isFinished: true});
                } else {
                    this.setState({activeQuestion: this.state.activeQuestion + 1});
                }
                window.clearTimeout(timeOut);
                this.setState({answerState: null});
            }, 1000)
        } else {
            results[question.id] = 'error';
            this.setState({answerState: {[answerId]: 'error'}, results});
        }
    }

    // ОБЯЗАТЕЛЬНО стрелочная функция, чтобы не терять контекст
    retryHandler = () => {
        this.setState({
            results: {}, // {[id]: success error}
            isFinished: false,
            activeQuestion: 0,
            answerState: null, // {[id]: 'success' 'error'}
        })
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    async componentDidMount() {
        // работа с URL с помощью роутинга
        const id = this.props.match.params.id;
        try {
            const resp = await axios.get(`/quizes/${id}.json`)
            const quiz = resp.data;
            this.setState({
                quiz,
                loading: false
            })
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished 
                            ? <FinishedQuiz 
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}/>
                            : this.state.loading
                                ? <Loader/>
                                : <ActiveQuiz 
                                    answers = {this.state.quiz[this.state.activeQuestion].answers}
                                    question = {this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClick = {this.onAnswerClickHandker}
                                    quizLength={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    state={this.state.answerState}/>
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;