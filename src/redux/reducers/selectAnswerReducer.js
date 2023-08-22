export const selectAnswerReducer = (state, action) => {
    const correctAnswersCount =
        action.payload === state.questions[state.currentQuestionIndex].correctAnswer
            ? state.correctAnswersCount + 1 : state.correctAnswersCount;
    return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
        isButtonDisabled: true,
    };
};