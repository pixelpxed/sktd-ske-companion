"use client"

import { useEffect, useState } from "react";
import { validAnswer, randomSituationList } from "@/app/data/puzzle/02";
import BackHistoryButton from "@/app/components/BackHistoryButton";

var randomQuestionIndex = []
var randomSituationIndex = []


export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(null); // Initialize as null
  const [randomSituationIndex, setRandomSituationIndex] = useState(0);

  useEffect(() => {
    setRandomQuestionIndex(Math.floor(Math.random() * validAnswer.length)); // Set the value after component mounts
    setRandomSituationIndex(Math.floor(Math.random() * randomSituationList.length)); // Set the value after component mounts
  }, []);

  console.log(randomQuestionIndex);
  console.log(randomSituationIndex);
  console.log(randomSituationList[randomSituationIndex]);

  function handleSequence() {
    const ans = document.querySelector("#input-1").value

    const isValidAnswerFormat = (value) => /^\d+$/.test(value);

    if (isValidAnswerFormat(ans)) {
      setShowInvalid(false);
      console.log("Answer Format Check: Passed");

      if ((ans == validAnswer[randomQuestionIndex])) {
        setShowIncorrect(false);
        location.href = "/dungeon/2/puzzle/success"
        return console.log("yippie");
      } else {
        setShowIncorrect(true);
        console.log("boohoo");
      }
    } else {
      setShowInvalid(true);
      setShowIncorrect(false);
      console.log("Invalid input");
    }
  }

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="flex justify-between items-end">
              <h1><b>คำตอบของปัญหา</b></h1>
            </div>
            <div className="grid gap-2 grid-cols-1 [&>p]:text-left">
              <p>
                โอ้ไม่นะ! เกิดปัญหา{randomSituationList[randomSituationIndex].problem} ช่วยน้องคลาวด์{randomSituationList[randomSituationIndex].solution} 
                <span className="font-bold">โดยการแก้รหัสที่อยู่ทาง {randomQuestionIndex} นาฬิกาหน่อยสิ</span>
              </p>
              <input type="text" id="input-1" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
              {showInvalid ? <p className="text-red-400 text-sm">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 text-sm">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button onClick={() => { }} type="outlined" disabled={true}>วิธีการแก้</button>
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}