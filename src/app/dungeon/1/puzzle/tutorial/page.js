'use client'

import Image from "next/image";
import { useState } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import { tutorial } from "@/app/data/tutorial/01";

export default function TutorialPage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex flex-col py-16 align-middle gap-0 transition-opacity">
            {/* <Image src={slideShow[currentSlideShow]} width={2160} height={3840} className="aspect-[9/16] h-[calc(100dvh-20rem)] w-auto m-auto" alt={"Tutorial for playing this room."} /> */}
            {tutorial[currentSlideShow]}
          </div>
          <div className="grid gap-2 p-4 w-full">
            {/* <button type="filled">ต่อไป</button> */}
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