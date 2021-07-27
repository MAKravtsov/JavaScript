import { Component } from "react";
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import {createControl, validate, validateForm} from '../../Form/formFramework';
import Input from "../../components/UI/Input/Input";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(index) {
    return createControl({
        label: `Вариант ${index}`,
        errorMessage: 'Значение не может быть пустым',
        id: index
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [],
        rightAnswerId: 1,
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    addQuestionHandler = (event) => {
        event.preventDefault(); /* Чтобы не перезагружалась страница */

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        // деструктуризация элемента
        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        } 

        quiz.push(questionItem);

        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = (event) => {
        event.preventDefault();
        console.log(this.state.quiz);
    }

    onChangeHandler = (value, name) => {
        const formControls = {...this.state.formControls};
        const control = { ...formControls[name] }

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);
        formControls[name] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((name, index) => {
            const control = this.state.formControls[name];
            return (
                <Auxilary key={name + index}>
                    <Input type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        shouldValidate={!!control.validation} /* !! - приведение объекта к bool */
                        onChange={(event) => this.onChangeHandler(event.target.value, name)}/> 
                    {index === 0 ? <hr/> : null}
                </Auxilary>
            )
        })
    }

    onChangeSelect = (event) => {
        this.setState({
            rightAnswerId: +event.target.value // + - приведение к числу
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <Select onChange={this.onChangeSelect}
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            options={[
                                {text:1, value: 1},
                                {text:2, value: 2},
                                {text:3, value: 3},
                                {text:4, value: 4},
                            ]}>
                        </Select>

                        <Button type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}>
                            Добавить вопрос
                        </Button>

                        <Button type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}>
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}