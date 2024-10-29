import Image from "next/image"
import Link from "next/link"

import exhibition_logo from "@/app/assets/svg/beyondpossibilities.svg"

export default function Dungeon() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4 flex-grow" />
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center gap-4 p-8">
            <Image className="block m-auto my-0" src={exhibition_logo} width={500} height={214} alt="Exhibition Logo" />
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/1/dialogue">
              <button type="filled">เริ่มเล่นเกม</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}