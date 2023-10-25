import { shuffleAnswers } from "../../utils/shuffle";

export const nextQuestionReducer = (state) => {
    const showResults = state.currentQuestionIndex === state.questions?.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: '',
                isButtonDisabled: false,
            };
}