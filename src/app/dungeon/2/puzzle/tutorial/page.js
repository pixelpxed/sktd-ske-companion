'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { validAnswer, randomSituationList } from "@/app/data/puzzle/02";

import { tutorial } from "@/app/data/tutorial/02";

export default function TutorialPage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex flex-col pt-8 align-middle gap-0 transition-opacity">
            {tutorial[currentSlideShow]}
          </div>
          <div className="grid gap-2 p-4 w-full">
            {
              currentSlideShow > 0 ?
              <button onClick={() => {
                  setCurrentSlideShow(currentSlideShow - 1)
              }} type="outlined">ขั้นตอนก่อนหน้า</button> :
              <></>
            }
            <button onClick={() => {
              (currentSlideShow < tutorial.length - 1) ? 
                setCurrentSlideShow(currentSlideShow + 1) :
                // location.href = `/dungeon/2/puzzle?clock=${randomQuestionIndex}&situation=${randomSituationIndex}`
                location.href = `/dungeon/2/puzzle`
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