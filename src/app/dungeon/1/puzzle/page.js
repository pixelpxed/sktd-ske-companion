'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { validAnswer } from "@/app/data/puzzle/01";

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0); // Initialize as null
  const [displayResetButton, setDisplayResetButton] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function randomizeQuestionIndex() {
    const sequence = Array.from({ length: 100 }, (_, i) => i + 1);    
    shuffleArray(sequence)
    setRandomQuestionIndex((sequence[0] - 1))
    window.localStorage.setItem("sktd-ske2024-room01-randomQuestionIndex", (sequence[0]))
  }

  useEffect(() => {
    if (window.localStorage.getItem("sktd-ske2024-room01-randomQuestionIndex") === null) {
      randomizeQuestionIndex()
    } else {
      setRandomQuestionIndex(window.localStorage.getItem("sktd-ske2024-room01-randomQuestionIndex"))
    }
  }, []);

  // Answer Checker
  function handleSequence() {
    const r = document.querySelector("#input-r").value;
    const g = document.querySelector("#input-g").value;
    const b = document.querySelector("#input-b").value;

    // if ((r == 999) && (g == 999) && (b == 999)) {
    //   document.querySelector("#input-r").value = "";
    //   document.querySelector("#input-g").value = "";
    //   document.querySelector("#input-b").value = "";

    //   return setDisplayResetButton(true)
    // }

    const isValidColorComponent = (value) => /^\d+$/.test(value) && value >= 0 && value <= 255;

    if (
      isValidColorComponent(r) &&
      isValidColorComponent(g) &&
      isValidColorComponent(b)
    ) {
      setShowInvalid(false);

      if (
        (r == validAnswer[randomQuestionIndex - 1].r) && 
        (g == validAnswer[randomQuestionIndex - 1].g) && 
        (b == validAnswer[randomQuestionIndex - 1].b)
      ) {
        setShowIncorrect(false);
        return location.href = "/dungeon/1/puzzle/success";
      } else {
        return setShowIncorrect(true);
      }
    } else {
      return setShowInvalid(true);
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
                <button type="mini" onClick={() => {randomizeQuestionIndex(); setDisplayResetButton(false);}}>สุ่มเลขขวดใหม่</button> : 
                <></>
              }
            <p className="text-sm">Chapter 01: Puzzle</p>
          </div>
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="flex justify-between items-end">
              <p><b>ปริมาณสารในน้ำยาวิเศษ</b></p>
              <div className="[&>*]:text-right">
                <p>ขวดที่ #{parseInt(randomQuestionIndex)}</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-3 [&>p]:text-center">
              <p>สาร R</p>
              <p>สาร G</p>
              <p>สาร B</p>
              <input type="text" inputMode="numeric" id="input-r" className="font-mono text-center" />
              <input type="text" inputMode="numeric" id="input-g" className="font-mono text-center" />
              <input type="text" inputMode="numeric" id="input-b" className="font-mono text-center" />
              {showInvalid ? <p className="text-red-400 col-span-3 text-sm">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 col-span-3 text-sm">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/1/puzzle/tutorial?from=puzzle">
              <button type="outlined">วิธีการแก้</button>
            </Link>
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}