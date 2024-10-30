'use client'

import { useState, useEffect } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { sequence } from "@/app/data/sequence/00";

export default function SequencePage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)
  const [disableNextButton, setDisableNextButton] = useState(false)

  function tempDisableNextButton() {
    setDisableNextButton(true);
    setTimeout(() => {
      setDisableNextButton(false);
    }, 3000);
  }

  useEffect(() => {
    if (sequence[currentSlideShow].cooldown == true) { // Replace 2 with the specific number you want
      tempDisableNextButton();
    }
  }, [currentSlideShow]);

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex align-middle p-4 gap-0 transition-opacity">
            {sequence[currentSlideShow].page}
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button className={currentSlideShow > 0 ? "" : "opacity-0 interact-none"} onClick={() => { setCurrentSlideShow(currentSlideShow - 1) }} type="outlined">ก่อนหน้า</button>
            <button onClick={() => {
              (currentSlideShow < sequence.length - 1) ?
                setCurrentSlideShow(currentSlideShow + 1) :
                location.href = "/dungeon/1"
            }}
              className={disableNextButton ? "!button-disabled" : ""}
              type={"filled"}>
              {(currentSlideShow !== sequence.length - 1) ?
                "ต่อไป" : "เริ่มเล่นห้อง 01"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}