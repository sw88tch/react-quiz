import { useContext, useEffect, useReducer } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const apiUrl = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

    useEffect(() => {
        if (quizState.questions.length > 0) {
            return;
        }
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "LOADED_QUESTION", payload: data.results })
            })
    })

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Поздравляем!</div>
                    <div className="results-info">
                        <div>Вы завершили игру</div>
                        <div>Правильные ответы: {quizState.correctAnswersCount} из {quizState.questions.length}</div>
                        <div className="next-button"
                            onClick={() => dispatch({ type: "RESTART" })}>Начать заново</div>
                    </div>
                </div>
            )}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div className="score">Вопрос {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                    <Question />
                    <div className="next-button"
                        onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Следующий вопрос</div>
                </div>
            )}
        </div>
    );
};

export default Quiz;