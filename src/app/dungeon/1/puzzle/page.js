'use client'

import { useEffect, useState } from "react";

import { validAnswer } from "@/app/data/puzzle/01";

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomBottleIndex, setRandomBottleIndex] = useState(null); // Initialize as null

  useEffect(() => {
    setRandomBottleIndex(Math.floor(Math.random() * 100)); // Set the value after component mounts
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

      if ((r == validAnswer[randomBottleIndex].r) && (g == validAnswer[randomBottleIndex].g) && validAnswer[randomBottleIndex].b) {
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
            <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button>
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="flex justify-between items-end">
              <h1><b>ปริมาณสารในน้ำยาวิเศษ</b></h1>
              <div className="[&>*]:text-right">
                <p>ขวดที่ #{randomBottleIndex + 1}</p>
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
            <button onClick={handleSequence} type="filled">ต่อไป</button>
            <button onClick={() => { }} type="outlined">วิธีการแก้</button>
          </div>
        </div>
      </div>
    </>
  );
}