export const LOADED_QUESTION = 'LOADED_QUESTION';

export const loadedQuestion = (questions) => ({
  type: LOADED_QUESTION,
  payload: questions,
});