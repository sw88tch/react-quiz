import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadQuizData } from "../../redux/actions/loadQuizData";
import { loadedQuestion } from "../../redux/actions/loadedQuestion";
import { restart } from "../../redux/actions/restart";
import { nextQuestion } from "../../redux/actions/nextQuestion";
import StartPage from "./StartPage";
import Question from "../elements/Question";
import { QuizContainer } from "../../styles/containers/QuizContainer";
import { ResultsContainer } from "../../styles/containers/ResultsContainer";
import { NextButton } from "../../styles/buttons/NextButton";
import CongratulationsHeader from "../result/CongratulationsHeader"
import ResultInfoContainer from "../result/ResultInfoContainer";
import ScoreContainer from "../result/ScoreContainer";

const Quiz = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);
  const showResults = useSelector(state => state.showResults);
  const correctAnswersCount = useSelector(state => state.correctAnswersCount);
  const currentQuestionIndex = useSelector(state => state.currentQuestionIndex);

  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    if (questions.length > 0) {
      return;
    }
    loadQuizData().then((loadedQuestions) => {
      dispatch(loadedQuestion(loadedQuestions));
    });
  }, [dispatch, questions.length]);

  const startQuiz = (numQuestions) => {
    loadQuizData(numQuestions).then((loadedQuestions) => {
      dispatch(loadedQuestion(loadedQuestions));
      setShowStartPage(false);
    });
  };

  const restartQuiz = () => {
    dispatch(restart());
    setShowStartPage(true);
  };

  if (showStartPage) {
    return <StartPage onStartQuiz={startQuiz} />;
  }

  if (showResults && questions.length > 0) {
    return (
      <QuizContainer>
        <ResultsContainer>
          <CongratulationsHeader />
          <ResultInfoContainer correctAnswerCount={correctAnswersCount} questionsLength={questions.length} />
          <NextButton onClick={restartQuiz}>Restart Quiz</NextButton>
        </ResultsContainer>
      </QuizContainer>
    );
  }

  if (!showResults && questions.length > 0) {
    return (
      <QuizContainer>
        <ScoreContainer currentQuestionIndex={currentQuestionIndex} questionsLength={questions.length} />
        <Question />
        <NextButton onClick={() => dispatch(nextQuestion())}>Next question</NextButton>
      </QuizContainer>
    );
  }
};

export default Quiz;