"use client"

import { useEffect, useState } from "react";
var randomBottleIndex = []

export default function Puzzle() {
  const [showInvalid, setShowInvalid] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  // const [randomBottleIndex] = useState(() => Math.floor(Math.random() * 100)); // Initialize once

  randomBottleIndex.push(Math.floor(Math.random() * 100))
  console.log(randomBottleIndex);
  

  // useEffect(() => {
  //   console.log(randomBottleIndex);
  // }, [randomBottleIndex]); // Log only once when component mounts

  const validAnswer = ["0011", "1110", "1101"];

  function handleSequence() {
    const ans1 = document.querySelector("#input-1").value
    const ans2 = document.querySelector("#input-2").value
    const ans3 = document.querySelector("#input-3").value

    const isValidColorComponent = (value) => /^\d+$/.test(value);

    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    

    if (isValidColorComponent(ans1) && isValidColorComponent(ans2) && isValidColorComponent(ans3)) {
      setShowInvalid(false);
      console.log("Answer Format Check: Passed");

      if ((ans1 == validAnswer[0]) && (ans2 == validAnswer[1]) && (ans3 == validAnswer[2])) {
        setShowIncorrect(false);
        location.href = "/dungeon/2/puzzle/success"
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
              <h1><b>คำตอบของปัญหา</b></h1>
              <div className="[&>*]:text-right">
                <p>น้ำท่วม</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-1 [&>p]:text-left">
              <p>เปิดระบบปั๊มน้ำโบราณ</p>
              <input type="text" id="input-1" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
              <p>ปิดประตูเขื่อนเก็บน้ำขนาดใหญ่</p>
              <input type="text" id="input-2" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
              <p>เปิดระบบท่อระบายน้ำลับใต้พื้นทราย</p>
              <input type="text" id="input-3" placeholder="พิมพ์คำตอบของคุณ (XXXX)" className="font-mono" />
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