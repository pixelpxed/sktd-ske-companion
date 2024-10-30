"use client"

import BackHistoryButton from "@/app/components/BackHistoryButton";
import { randomSituationList, validAnswer } from "@/app/data/puzzle/02";
import Link from "next/link";
import { useEffect, useState } from "react";
import { roomTwoRandomizer } from "@/app/utilities/roomTwoRandomizer";

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(null);
  const [randomSituationIndex, setRandomSituationIndex] = useState(0);
  const [displayResetButton, setDisplayResetButton] = useState(false);

  function randomizeLocalQuestionIndex() {
    localStorage.setItem("sktd-ske2024-room02-randomQuestionIndex", Math.floor(Math.random() * validAnswer.length))
    localStorage.setItem("sktd-ske2024-room02-randomSituationIndex", Math.floor(Math.random() * randomSituationList.length)) 
    setRandomQuestionIndex(localStorage.getItem("sktd-ske2024-room02-randomQuestionIndex")); // Set the value after component mounts
    setRandomSituationIndex(localStorage.getItem("sktd-ske2024-room02-randomSituationIndex")); // Set the value after component mounts
  }

  useEffect(() => {
    roomTwoRandomizer()

    setRandomQuestionIndex(localStorage.getItem("sktd-ske2024-room02-randomQuestionIndex")); // Set the value after component mounts
    setRandomSituationIndex(localStorage.getItem("sktd-ske2024-room02-randomSituationIndex")); // Set the value after component mounts
  }, []);
  
  function handleSequence() {
    const ans1 = document.querySelector("#input-1").value
    const ans2 = document.querySelector("#input-2").value
    const ans3 = document.querySelector("#input-3").value
    const ans4 = document.querySelector("#input-4").value

    if ((ans1 == 9) && (ans2 == 9) && (ans3 == 9) && (ans4 == 9)) {
      document.querySelector("#input-1").value = "";
      document.querySelector("#input-2").value = "";
      document.querySelector("#input-3").value = "";
      document.querySelector("#input-4").value = "";

      return setDisplayResetButton(true)
    }

    const isValidAnswerFormat = (value) => /^[01]$/.test(value);

    if (
      isValidAnswerFormat(ans1) && 
      isValidAnswerFormat(ans2) && 
      isValidAnswerFormat(ans3) && 
      isValidAnswerFormat(ans4)
    ) {
      setShowInvalid(false);

      if (((ans1 + ans2 + ans3 + ans4) == validAnswer[randomQuestionIndex])) {
        setShowIncorrect(false);
        location.href = "/dungeon/2/puzzle/success"
      } else {
        setShowIncorrect(true);
      }
    } else {
      setShowInvalid(true);
      setShowIncorrect(false);
    }
  }

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="flex justify-between p-4">
            <BackHistoryButton />
            {
              displayResetButton ?
                <button type="mini" onClick={() => {randomizeLocalQuestionIndex(); setDisplayResetButton(false);}}>สุ่มเลขขวดใหม่</button> : 
                <></>
              }
            <p className="text-sm">Chapter 02: Puzzle</p>
          </div>
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="grid gap-2 grid-cols-1 [&>p]:text-left">
              <p>
                ตอนนี้อาณาจักรกำลังเผชิญกับปัญหา 
                <span className="font-bold text-gradient">
                  {randomSituationList[randomSituationIndex].problem} 
                </span>
              </p>
              <p>
                อย่างไรก็ตาม กษัตริย์ผู้ยิ่งใหญ่ได้จารึกรหัสซึ่งวิธีการ 
                <span className="font-bold text-gradient">
                  {randomSituationList[randomSituationIndex].solution}
                </span>
                ในการแก้ปัญหา
              </p>
              <hr />
              <p>
                <span className="font-bold">แก้รหัสที่อยู่ทาง {(parseInt(randomQuestionIndex) + 1)} นาฬิกาของหมูเด้งหน่อยสิ</span>
              </p>
              <div className="grid grid-cols-4 gap-2">
                <input type="text" id="input-1" inputMode="numeric" placeholder="X" onKeyUp={() => {document.querySelector("#input-2").focus()}} className="font-mono text-center" />
                <input type="text" id="input-2" inputMode="numeric" placeholder="X" onKeyUp={() => {document.querySelector("#input-3").focus()}} className="font-mono text-center" />
                <input type="text" id="input-3" inputMode="numeric" placeholder="X" onKeyUp={() => {document.querySelector("#input-4").focus()}} className="font-mono text-center" />
                <input type="text" id="input-4" inputMode="numeric" placeholder="X" className="font-mono text-center" />
              </div>
              {showInvalid ? <p className="text-red-400 text-sm !text-center">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 text-sm !text-center">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/2/puzzle/tutorial?from=puzzle">
              <button type="outlined">วิธีการแก้</button>
            </Link>
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}