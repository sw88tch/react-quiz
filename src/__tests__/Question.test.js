import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Question from '../components/elements/Question';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);

const mockQuestion = {
    question: 'What is the capital of Russia?',
    answers: ['Moscow', 'Saint Petersburg', 'Kazan', 'Ekaterinburg'],
    correctAnswer: 'Moscow',
};

test('Displays current question', () => {
    const initialState = {
        currentQuestionIndex: 0,
        questions: [mockQuestion],
        answers: mockQuestion.answers,
        currentAnswer: '',
    };

    const store = mockStore(initialState);

    const { getByText } = render(
        <Provider store={store}>
            <Question />
        </Provider>
    );

    const questionElement = getByText('What is the capital of Russia?');
    expect(questionElement).toBeInTheDocument();
});

test('Displays answer options', () => {
    const initialState = {
        currentQuestionIndex: 0,
        questions: [mockQuestion],
        answers: mockQuestion.answers,
        currentAnswer: '',
    };

    const store = mockStore(initialState);

    const { getByText } = render(
        <Provider store={store}>
            <Question />
        </Provider>
    );

    mockQuestion.answers.forEach((answer) => {
        const answerElement = getByText(answer);
        expect(answerElement).toBeInTheDocument();
    });
});

test('Calls onSelectAnswer with correct argument', () => {
    const initialState = {
        currentQuestionIndex: 0,
        questions: [mockQuestion],
        answers: mockQuestion.answers,
        currentAnswer: '',
    };

    const store = mockStore(initialState);

    const { getByText } = render(
        <Provider store={store}>
            <Question />
        </Provider>
    );

    const answerElement = getByText('Moscow');
    fireEvent.click(answerElement);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'SELECT_ANSWER', payload: 'Moscow' }]);
});