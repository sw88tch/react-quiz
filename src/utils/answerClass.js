import classnames from 'classnames';

export const getAnswerClass = ({ isCorrectAnswer, isWrongAnswer, currentAnswer }) => {
  return classnames({
    'correct-answer': isCorrectAnswer,
    'wrong-answer': isWrongAnswer,
    'disabled-answer': currentAnswer,
  });
};