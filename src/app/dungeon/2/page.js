import Image from "next/image"
import Link from "next/link"

import BackHistoryButton from "@/app/components/BackHistoryButton"

export default function Dungeon() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center gap-4 p-8">
            <p>dream of ... 02</p>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/2/dialogue">
              <button type="filled">เริ่มเล่นเกม</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}