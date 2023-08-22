import baseURL from "../../apis/openTDB";

export const loadQuizData = async (amount) => {
    const quizDB = `/api.php?amount=${amount}&type=multiple&encode=url3986`;
    const res = await baseURL.get(quizDB);
    
    return res.data.results;
};