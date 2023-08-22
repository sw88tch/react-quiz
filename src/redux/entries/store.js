import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../reducers/quizReducer';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  showResults: false,
  answers: [],
 // currentAnswer: '',
  correctAnswersCount: 0,
};

const store = configureStore({
  reducer: quizReducer,
  preloadedState: initialState,
});

export default store;