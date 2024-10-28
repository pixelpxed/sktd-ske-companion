'use client'

import BackHistoryButton from "@/app/components/BackHistoryButton";

export default function Puzzle() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <p>
              น้องคลาว: เสียงตื่นเต้น ยอดเยี่ยม! พวกท่านได้ไขปริศนาสำเร็จแล้ว! ความลับของกษัตริย์ได้ถูกเปิดเผย และอาณาจักรจะรอดพ้นจากหายนะ ด้วยปัญญาและความกล้าหาญของพวกท่าน แร่ธาตุวิเศษจึงปรากฏขึ้น
            </p>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}