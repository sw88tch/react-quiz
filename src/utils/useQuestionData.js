import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer } from '../redux/actions/selectAnswer';

export const useQuestionData = () => {
    const dispatch = useDispatch();

    const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
    const questions = useSelector((state) => state.questions);
    const answers = useSelector((state) => state.answers);
    const currentAnswer = useSelector((state) => state.currentAnswer);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectAnswer = answer => {
        dispatch(selectAnswer(answer));
    };

    return {
        currentQuestion,
        answers,
        currentAnswer,
        handleSelectAnswer,
    };
};