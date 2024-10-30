'use client'

import BackHistoryButton from "@/app/components/BackHistoryButton";
import { tutorial } from "@/app/data/tutorial/01";
import { useState } from "react";

export default function TutorialPage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="flex justify-between items-center p-4">
            <BackHistoryButton />
            <p className="text-sm">Chapter 01: Tutorial <b className="font-mono">({currentSlideShow + 1}/{tutorial.length})</b></p>
          </div>
          <div className="flex flex-col pt-8 align-middle gap-0 transition-opacity">
            {tutorial[currentSlideShow]}
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button className={currentSlideShow > 0 ? "" : "opacity-0 interact-none"} onClick={() => { setCurrentSlideShow(currentSlideShow - 1) }} type="outlined">ก่อนหน้า</button>
            <button onClick={() => {
              (currentSlideShow < tutorial.length - 1) ? 
                setCurrentSlideShow(currentSlideShow + 1) :
                location.href = "/dungeon/1/puzzle"
            }} type="filled">{
              (currentSlideShow !== tutorial.length - 1) ? 
              "ขั้นตอนต่อไป" : "เริ่มแก้โจทย์"
              }</button>
          </div>
        </div>
      </div>
    </>
  );
}