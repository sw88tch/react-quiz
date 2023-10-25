import baseURL from "../../apis/openTDB";

export const loadQuizData = async (numQuestions) => {
    const quizDB = `/api.php?amount=${numQuestions}&type=multiple&encode=url3986`;
    const res = await baseURL.get(quizDB);
    
    return res.data?.results;
};
