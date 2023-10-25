import React from "react";
import { Score } from "../../styles/results/Score";

const ScoreContainer = ({ currentQuestionIndex, questionsLength }) => {
    return <Score>Question {currentQuestionIndex + 1}/{questionsLength}</Score>;
};

export default ScoreContainer;