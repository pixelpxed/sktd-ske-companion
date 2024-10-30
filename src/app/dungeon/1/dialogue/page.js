'use client'

import Image from "next/image";
import { useState } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { sequence } from "@/app/data/sequence/01_new";

export default function SequencePage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex align-middle p-4 gap-0 transition-opacity">
            {sequence[currentSlideShow]}
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button className={currentSlideShow > 0 ? "" : "opacity-0 interact-none"} onClick={() => { setCurrentSlideShow(currentSlideShow - 1) }} type="outlined">ก่อนหน้า</button>
            <button onClick={() => {
              (currentSlideShow < sequence.length - 1) ?
                setCurrentSlideShow(currentSlideShow + 1) :
                location.href = "/dungeon/1/puzzle/tutorial"
            }} type="filled">
              {(currentSlideShow !== sequence.length - 1) ?
                "ต่อไป" : "แก้ยังไงนะ?"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}