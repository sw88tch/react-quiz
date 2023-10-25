import React from "react";
import { ResultInfo } from "../../styles/results/ResultInfo";

const ResultInfoContainer = ({ correctAnswerCount, questionsLength }) => {
    return (
        <ResultInfo>
            <p>
                You have completed the game.
            </p>
            <p>
                Correct answers: {correctAnswerCount} of {questionsLength}
            </p>
        </ResultInfo>
    );
};

export default ResultInfoContainer;