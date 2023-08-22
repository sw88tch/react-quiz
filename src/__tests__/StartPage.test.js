import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StartPage from '../components/pages/StartPage';

test('Render component without errors', () => {
    render(<StartPage />);
});

test('Displays correct text', () => {
    const { getByRole } = render(<StartPage />);
    const textElement = getByRole('heading', { name: /Choose the number of questions in Quiz:/i });
    expect(textElement).toBeTruthy();
});

test('Calls onStartQuiz with correct arguments', () => {
    const mockOnStartQuiz = jest.fn();
    const { getAllByRole } = render(<StartPage onStartQuiz={mockOnStartQuiz} />);
    const buttons = getAllByRole('button');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[3]);

    expect(mockOnStartQuiz).toHaveBeenCalledWith(4);
    expect(mockOnStartQuiz).toHaveBeenCalledWith(6);
    expect(mockOnStartQuiz).toHaveBeenCalledWith(8);
    expect(mockOnStartQuiz).toHaveBeenCalledWith(10);
});