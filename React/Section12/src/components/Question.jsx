import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  return (
    <div id="question">
      <QuestionTimer
        //키값을 추가해서 리랜더링되게끔 만들기
        //해당 컴포넌트에서는 상위 컴포넌트에 키값이 있기에 삭제해도 됨
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
