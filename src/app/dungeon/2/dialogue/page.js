'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { sequence } from "@/app/data/sequence/02";

export default function SequencePage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)
  const [disableNextButton, setDisableNextButton] = useState(false)

  function tempDisableNextButton() {
    setDisableNextButton(true);
    setTimeout(() => {
      setDisableNextButton(false);
    }, 3000);
  }

  const [randomQuestionIndex, setRandomQuestionIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (sequence[currentSlideShow].cooldown === true) {
      tempDisableNextButton();
    }

    if (isMounted) {
      const storedIndex = localStorage.getItem("sktd-ske2024-room01-randomQuestionIndex");
      if (storedIndex !== null) {
        setRandomQuestionIndex(storedIndex);
      }
    }
  }, [sequence, currentSlideShow, isMounted]);

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="flex justify-between items-center p-4">
            <BackHistoryButton />
            <p className="text-sm">Chapter 01: Story <b className="font-mono">({currentSlideShow + 1}/{sequence.length})</b></p>
          </div>
          <div className="flex align-middle p-4 gap-0 transition-opacity">
            {sequence[currentSlideShow].page}
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button className={currentSlideShow > 0 ? "" : "opacity-0 interact-none"} onClick={() => { setCurrentSlideShow(currentSlideShow - 1) }} type="outlined">ก่อนหน้า</button>
            <button onClick={() => {
              (currentSlideShow < sequence.length - 1) ?
                setCurrentSlideShow(currentSlideShow + 1) :
                location.href = "/dungeon/2/puzzle/tutorial"
            }}
              className={disableNextButton ? "!button-disabled" : ""}
              type="filled">
              {(currentSlideShow !== sequence.length - 1) ?
                "ต่อไป" : `แก้ปัญหากัน !`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}