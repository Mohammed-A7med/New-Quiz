import { useCallback, useState } from "react";
import QUESTIONS from "../QuestionsData/questions";
import Summary from "../Summary/Summary";
import QuestionTimer from "../QuestionTimer/QuestionTimer";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState<(string | null)[]>([]);
  const activeAnswerIndex = userAnswer.length;

  const handleSelectAnswer = useCallback((answerSelected: string | null) => {
    setUserAnswer((prevAnswer) => [...prevAnswer, answerSelected]);
  }, [userAnswer]);

  const isQuizCompleted = activeAnswerIndex === QUESTIONS.length;

  if (isQuizCompleted) {
    return <Summary />;
  }

  const shuffledAnswers = [...QUESTIONS[activeAnswerIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-[90%] md:max-w-[50rem] m-auto p-8 bg-[linear-gradient(180deg,_#3e2a60_0%,_#321061_100%)] rounded-lg shadow-[1px_1px_8px_4px_rgba(12,_5,_32,_0.6)] text-center">
      <QuestionTimer
        timeout={10000}
        onTimeout={() => handleSelectAnswer(null)}
      />
      <h2 className="text-lg md:text-2xl mt-6 mb-7 md:mb-10 text-[#c1b2dd] font-RobotoCondensed">
        {QUESTIONS[activeAnswerIndex].text}
      </h2>
      <ul className="list-none flex flex-col items-center gap-2">
        {shuffledAnswers.map((answer) => (
          <li className="w-[90%] mx-auto" key={answer}>
            <button
              onClick={() => handleSelectAnswer(answer)}
              className="w-full font-RobotoCondensed text-[.78rem] md:text-[.9rem] py-4 px-8 rounded-3xl bg-[#6cb7f5] cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#9d5af5] hover:text-white focus:bg-[#9d5af5] focus:text-white"
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
