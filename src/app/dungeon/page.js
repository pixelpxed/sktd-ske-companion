import Image from "next/image"
import Link from "next/link"

import techdev_presents from "@/app/assets/svg/techdev-presents.svg"
import exhibition_logo from "@/app/assets/svg/beyond-possibilities.svg"

export default function Dungeon() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="animate-fade opacity-0 [animation-fill-mode:forwards]">
            <Image className="aspect-[135.16/25] h-8 mx-auto my-4" src={techdev_presents} width={1024} height={256} alt="techdev. Presents" />
          </div>
          <div className="animate-fade [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center gap-4 p-8">
            <Image className="block m-auto my-0" src={exhibition_logo} width={500} height={214} alt="Exhibition Logo" />
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link href="/dungeon/dialogue">
              <button type="filled">เริ่มเล่นเกม</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}