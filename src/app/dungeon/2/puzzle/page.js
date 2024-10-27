"use client"

import { useEffect, useState } from "react";
import { validAnswer } from "@/app/data/puzzle/02";

var randomQuestionIndex = []

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(null); // Initialize as null

  useEffect(() => {
    setRandomQuestionIndex(Math.floor(Math.random() * 12)); // Set the value after component mounts
  }, []);
  
  console.log(randomQuestionIndex);
  

  function handleSequence() {
    const ans1 = document.querySelector("#input-1").value

    const isValidAnswerFormat = (value) => /^\d+$/.test(value);

    if (isValidAnswerFormat(ans1)) {
      setShowInvalid(false);
      console.log("Answer Format Check: Passed");

      if ((ans1 == validAnswer[randomQuestionIndex])) {
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
            <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button>
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="flex justify-between items-end">
              <h1><b>คำตอบของปัญหา</b></h1>
              <div className="[&>*]:text-right">
                <p>น้ำท่วม</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-1 [&>p]:text-left">
              <p>{randomQuestionIndex} นาฬิกา</p>
              <input type="text" id="input-1" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
              {showInvalid ? <p className="text-red-400 text-sm">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 text-sm">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button onClick={handleSequence} type="filled">ต่อไป</button>
            <button onClick={() => { }} type="outlined">วิธีการแก้</button>
          </div>
        </div>
      </div>
    </>
  );
}