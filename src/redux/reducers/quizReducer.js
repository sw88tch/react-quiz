import { SELECT_ANSWER } from "../actions/selectAnswer";
import { NEXT_QUESTION } from "../actions/nextQuestion";
import { RESTART } from "../actions/restart";
import { LOADED_QUESTION } from '../actions/loadedQuestion';
import { createContext, useReducer } from "react";
import { selectAnswerReducer } from './selectAnswerReducer';
import { nextQuestionReducer } from "./nextQuestionReducer";
import { loadedQuestionReducer } from "./loadedQuestionReducer";

const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    showResults: false,
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ANSWER: {
            if (state.isButtonDisabled) {
                return state;
            }
            return selectAnswerReducer(state, action);
        }
        case NEXT_QUESTION: {
            return nextQuestionReducer(state);
        }
        case RESTART: {
            return initialState;
        }
        case LOADED_QUESTION: {
            return loadedQuestionReducer(state, action);
        }
        default: {
            return state;
        }
    }
};

export default quizReducer;
export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};