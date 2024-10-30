"use client"

import BackHistoryButton from "@/app/components/BackHistoryButton";
import { randomSituationList, validAnswer } from "@/app/data/puzzle/02";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

var randomQuestionIndex = []
var randomSituationIndex = []

export default function Puzzle() {
  // const searchParams = useSearchParams()

  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [randomQuestionIndex, setRandomQuestionIndex] = useState(null); // Initialize as null
  const [randomSituationIndex, setRandomSituationIndex] = useState(0);
  
  useEffect(() => {
    // setRandomQuestionIndex(searchParams.get("clock")); // Set the value after component mounts
    // setRandomSituationIndex(searchParams.get("situation")); // Set the value after component mounts
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
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <div className="grid gap-2 grid-cols-1 [&>p]:text-left">
              <p>
                ตอนนี้อาณาจักรกำลังเผชิญกับปัญหา 
                <span className="font-bold">
                  {randomSituationList[randomSituationIndex].problem} 
                </span>
              </p>
              <p>
                อย่างไรก็ตาม กษัตริย์ผู้ยิ่งใหญ่ได้จารึกรหัสซึ่งวิธีการ 
                <span className="font-bold">
                  {randomSituationList[randomSituationIndex].solution}
                </span>
                ในการแก้ปัญหา
              </p>
              <hr />
              <p>
                <span className="font-bold">แก้รหัสที่อยู่ทาง {(parseInt(randomQuestionIndex) + 1)} นาฬิกาของหมูเด้งหน่อยสิ</span>
              </p>
              <input type="text" id="input-1" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
              {showInvalid ? <p className="text-red-400 text-sm">รูปแบบคำตอบไม่ถูกต้อง</p> : <></>}
              {showIncorrect ? <p className="text-red-400 text-sm">คำตอบไม่ถูกต้อง</p> : <></>}
            </div>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/2/puzzle/tutorial">
              <button type="outlined">วิธีการแก้</button>
            </Link>
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}

// export function PuzzlePage() {
//   return (
//     <Suspense>
//       <Puzzle />
//     </Suspense>
//   )
// }