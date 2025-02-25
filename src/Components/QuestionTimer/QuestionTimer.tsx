import { useEffect, useState } from "react";
import { QuestionTimerInterface } from "../Interfaces/QuestionTimer";

export default function QuestionTimer({
  timeout,
  onTimeout,
}: QuestionTimerInterface) {
    
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    const timeoutClear = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeoutClear);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intervalClear = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(intervalClear);
  }, []);

  return (
    <progress
      className="w-[50%] h-2 rounded-[24px]  
      bg-[#9e5ef8] m-0 
      [&::-webkit-progress-bar]:bg-[#6a558a] [&::-webkit-progress-bar]:rounded-[24px] 
      [&::-webkit-progress-value]:bg-[#9e5ef8] [&::-webkit-progress-value]:rounded-[24px] 
      [&::-moz-progress-bar]:bg-[#9e5ef8] [&::-moz-progress-bar]:rounded-[24px]
      answered:bg-[#f8e59c] 
      answered:[&::-webkit-progress-value]:bg-[#f8e59c] 
      answered:[&::-webkit-progress-bar]:bg-[#6a558a]"
      max={timeout}
      value={remainingTime}
    />
  );
}
