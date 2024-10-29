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
            <p>น้องคลาว: ยอดเยี่ยม! พวกท่านประสบความสำเร็จในการช่วยแม่มดถอดรหัสสูตรยาแล้ว!</p>
            <p className="text-red-400 ​​​​ font-bold">
              โปรดเดินไปหา staff ที่ทางออกของห้องนี้เพื่อดำเนินการต่อ!!
            </p>
            <p>คุณได้รับของวิเศษ A แล้ว!!</p>
            <p>End of Room 01</p>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <a href="/dungeon/2/dialogue">
              <button type="filled">ต่อไป</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}