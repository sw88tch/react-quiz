import { render, fireEvent } from '@testing-library/react';
import quizButton from '../components/buttons/QuizButton';
import '@testing-library/jest-dom/extend-expect';

test('Renders button with correct text', () => {
    const number = 10;
    const onStartQuiz = jest.fn();

    const { getByText } = render(quizButton(number, onStartQuiz));

    const buttonElement = getByText('10');
    expect(buttonElement).toBeInTheDocument();
});

test('Calls onStartQuiz with correct argument when button is clicked', () => {
    const number = 5;
    const onStartQuiz = jest.fn();

    const { getByText } = render(quizButton(number, onStartQuiz));

    const buttonElement = getByText('5');
    fireEvent.click(buttonElement);

    expect(onStartQuiz).toHaveBeenCalledTimes(1);
    expect(onStartQuiz).toHaveBeenCalledWith(5);
});