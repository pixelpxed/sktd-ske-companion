'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { validAnswer } from "@/app/data/puzzle/01";

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0); // Initialize as null


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const sequence = Array.from({ length: 100 }, (_, i) => i + 1);
    shuffleArray(sequence)
    setRandomQuestionIndex(sequence[0])
  }, []);

  function handleSequence() {
    const r = document.querySelector("#input-r").value;
    const g = document.querySelector("#input-g").value;
    const b = document.querySelector("#input-b").value;

    const isValidColorComponent = (value) => /^\d+$/.test(value) && value >= 0 && value <= 255;

    if (
      isValidColorComponent(r) &&
      isValidColorComponent(g) &&
      isValidColorComponent(b)
    ) {
      setShowInvalid(false);
      console.log("Answer Format Check: Passed");

      if ((r == validAnswer[randomQuestionIndex].r) && (g == validAnswer[randomQuestionIndex].g) && (b == validAnswer[randomQuestionIndex].b)) {
        setShowIncorrect(false);
        location.href = "/dungeon/1/puzzle/success";
        return console.log("yippie");
      } else {
        setShowIncorrect(true);
        console.log("boohoo");
      }
    } else {
      setShowInvalid(true);
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
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="flex justify-between items-end">
              <h1><b>ปริมาณสารในน้ำยาวิเศษ</b></h1>
              <div className="[&>*]:text-right">
                <p>ขวดที่ #{randomQuestionIndex + 1}</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-3 [&>p]:text-center">
              <p>สาร R</p>
              <p>สาร G</p>
              <p>สาร B</p>
              <input type="text" id="input-r" className="font-mono text-center" />
              <input type="text" id="input-g" className="font-mono text-center" />
              <input type="text" id="input-b" className="font-mono text-center" />
              {showInvalid ? <p className="text-red-400 col-span-3 text-sm">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 col-span-3 text-sm">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/1/puzzle/tutorial">
              <button type="outlined">วิธีการแก้</button>
            </Link>
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}