'use client'

import BackHistoryButton from "@/app/components/BackHistoryButton";

export default function Puzzle() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle w-screen gap-4 p-8">
            <p>
              น้องคลาว: เสียงตื่นเต้น ยอดเยี่ยม! พวกท่านได้ไขปริศนาสำเร็จแล้ว! ความลับของกษัตริย์ได้ถูกเปิดเผย และอาณาจักรจะรอดพ้นจากหายนะ ด้วยปัญญาและความกล้าหาญของพวกท่าน แร่ธาตุวิเศษจึงปรากฏขึ้น
            </p>
            <p className="text-red-400 font-bold">
              โปรดเดินไปหา staff ที่ทางออกของห้องนี้เพื่อดำเนินการต่อ!!
            </p>
            <p>End of room 02</p>
          </div>
        </div>
      </div>
    </>
  );
}