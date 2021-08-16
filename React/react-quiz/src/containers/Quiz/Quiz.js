import { Component } from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import {connect} from 'react-redux'
import {fetchQuizById, quizAnswerClick, retryQuiz} from '../../store/actions/quiz'

// Контейнер всей страницы quiz
class Quiz extends Component {
    componentDidMount() {
        // работа с URL с помощью роутинга
        this.props.fetchQuizById(this.props.match.params.id)
    }

    // при перезагрузке страницы, очищаем state
    componentWillUnmount() {
        this.props.retryQuiz();
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.props.isFinished 
                            ? <FinishedQuiz 
                                results={this.props.results}
                                quiz={this.props.quiz}
                                onRetry={this.props.retryQuiz}/>
                            : this.props.loading || !this.props.quiz
                                ? <Loader/>
                                : <ActiveQuiz 
                                    answers = {this.props.quiz[this.props.activeQuestion].answers}
                                    question = {this.props.quiz[this.props.activeQuestion].question}
                                    onAnswerClick = {this.props.quizAnswerClick}
                                    quizLength={this.props.quiz.length}
                                    answerNumber={this.props.activeQuestion + 1}
                                    state={this.props.answerState}/>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results, // {[id]: success error}
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState, // {[id]: 'success' 'error'}
        quiz: state.quiz.quiz,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: (id) => dispatch(fetchQuizById(id)),
        quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);