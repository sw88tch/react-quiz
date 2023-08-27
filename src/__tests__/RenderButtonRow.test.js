import { render, fireEvent } from '@testing-library/react';
import renderButtonRow from '../components/buttons/RenderButtonRow';
import '@testing-library/jest-dom/extend-expect';

test('Renders buttons with correct numbers', () => {
  const buttonNumbers = [4, 6, 8, 10];
  const onStartQuiz = jest.fn();

  const { getByText } = render(renderButtonRow(buttonNumbers, onStartQuiz));

  buttonNumbers.forEach((number) => {
    const buttonElement = getByText(number.toString());
    expect(buttonElement).toBeInTheDocument();
  });
});

test('Calls onStartQuiz with correct argument when button is clicked', () => {
  const buttonNumbers = [4, 6, 8, 10];
  const onStartQuiz = jest.fn();

  const { getByText } = render(renderButtonRow(buttonNumbers, onStartQuiz));

  buttonNumbers.forEach((number) => {
    const buttonElement = getByText(number.toString());
    fireEvent.click(buttonElement);

    expect(onStartQuiz).toHaveBeenCalledWith(number);
  });
});