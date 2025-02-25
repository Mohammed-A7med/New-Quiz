import QuizCompleteImg from "../../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div className="max-w-[40rem] my-8 mx-auto p-8 bg-[linear-gradient(180deg,_#a17eda_0%,_#895fc4_100%)] text-[#191321] rounded-[0.5rem] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)] animate-[slide-in-from-bottom_0.7s_ease-out]">
    <img
      className="block w-32 h-32 p-4 object-contain mx-auto mb-4 border-[#3a2353] border-2 rounded-full bg-[#c18cfa] drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]"
      src={QuizCompleteImg}
      alt="trophy icon"
    />
    <h2 className="text-center text-5xl uppercase text-[#3a2353]">
      Quiz Completed!
    </h2>
  </div>
  )
}

