import React from "react";

function MilestoneProject1() {
    return (
        <div id="container">
            <div id="start">Start Quiz!</div>
            <div id="quiz" style="display: none">
                <div id="question"></div>
                <div id="qImg"></div>
                <div id="choices">
                    <div class = "choice" id = "A" onclick = "checkAnswer('A')"></div>
                    <div class = "choice" id = "B" onclick = "checkAnswer('B')"></div>
                    <div class = "choice" id = "C" onclick = "checkAnswer('C')"></div>
                    <div class = "choice" id = "D" onclick = "checkAnswer('D')"></div>
                </div>
                <div id="timer">
                    <div id="counter"></div>
                    <div id="btimeGauge"></div>
                    <div id="timeGauge"></div>
                </div>
            </div>
        </div>
    );
}

export default MilestoneProject1;