'use client'

import Image from "next/image";
import { useState } from "react";

import image_01 from "@/app/assets/png/tutorial/1/1-01.png"
import image_02 from "@/app/assets/png/tutorial/1/1-02.png"
import image_03 from "@/app/assets/png/tutorial/1/1-03.png"
import image_04 from "@/app/assets/png/tutorial/1/1-04.png"
import image_05 from "@/app/assets/png/tutorial/1/1-05.png"
import image_06 from "@/app/assets/png/tutorial/1/1-06.png"
import image_07 from "@/app/assets/png/tutorial/1/1-07.png"
import image_08 from "@/app/assets/png/tutorial/1/1-08.png"
import image_09 from "@/app/assets/png/tutorial/1/1-09.png"
import image_10 from "@/app/assets/png/tutorial/1/1-10.png"

const slideShow = [
  image_01,
  image_02,
  image_03,
  image_04,
  image_05,
  image_06,
  image_07,
  image_08,
  image_09,
  image_10
]

export default function TutorialPage() {
  const [currentSlideShow, setCurrentSlideShow] = useState(0)

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="grid grid-rows-[max-content,1fr,max-content] w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button>
          </div>
          <div className="flex flex-col justify-center align-middle gap-0">
            <h1 className="py-4 font-bold text-center">Tutorial for Room 01 (Work in Progress)</h1>
            <Image src={slideShow[currentSlideShow]} width={2160} height={3840} className="aspect-[9/16] h-[calc(100dvh-20rem)] w-auto m-auto" alt={"Tutorial for playing this room."} />
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
              (currentSlideShow < slideShow.length - 1) ? 
                setCurrentSlideShow(currentSlideShow + 1) :
                location.href = "/dungeon/1/puzzle"
            }} type="filled">ขั้นตอนต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}