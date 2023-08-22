import { normalizeQuestions } from "../../utils/normalize";
import { shuffleAnswers } from "../../utils/shuffle";

export const loadedQuestionReducer = (state, action) => {
    const normalizedQuestions = normalizeQuestions(action.payload);
            return {
                ...state,
                questions: normalizedQuestions,
                answers: shuffleAnswers(normalizedQuestions[0]),
            };
}