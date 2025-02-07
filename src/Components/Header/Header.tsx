import QuizLogo from "../../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="my-8 text-center">
      <img
        src={QuizLogo}
        alt="quiz-logo"
        className="w-12 h-12 shadow-md mx-auto"
      />
      <h1 className="font-Roboto font-bold uppercase bg-[linear-gradient(90deg,_#e781fb_40%,_#8e76fa_60%)] tracking-[.6rem] bg-clip-text text-transparent text-2xl md:text-4xl">
        ReactQuiz
      </h1>
    </header>
  );
}
