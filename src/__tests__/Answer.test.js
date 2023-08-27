import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Answer from '../components/elements/Answer';
import '@testing-library/jest-dom/extend-expect';

test('Renders component without errors', () => {
  render(<Answer answerText="Sample Answer" onSelectAnswer={() => {}} index={0} />);
});

test('Displays correct answer text and letter', () => {
    const { getByText } = render(<Answer answerText="Sample Answer" onSelectAnswer={() => {}} index={0} />);
    const answerTextElement = getByText('Sample Answer');
    const letterElement = getByText('A');
    expect(answerTextElement).toBeInTheDocument();
    expect(letterElement).toBeInTheDocument();
  });

test('Calls onSelectAnswer with correct argument', () => {
  const mockOnSelectAnswer = jest.fn();
  const { getByText } = render(<Answer answerText="Sample Answer" onSelectAnswer={mockOnSelectAnswer} index={0} />);
  const answerTextElement = getByText(/Sample Answer/i);
  fireEvent.click(answerTextElement);
  expect(mockOnSelectAnswer).toHaveBeenCalledWith('Sample Answer');
});