'use client'

import Link from "next/link"

import { useState } from "react"

import BackHistoryButton from "@/app/components/BackHistoryButton"

export default function Dungeon() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            <BackHistoryButton />
          </div>
          <div className="animate-fade [animation-delay:250ms] opacity-0 [animation-fill-mode:forwards] flex-grow flex flex-col justify-center p-8">
            <p className="text-xl ![line-height:1] ml-[-6rem] translate-y-3 text-center">the wish of...</p>
            <h1 className="text-6xl ![line-height:1] font-bold text-center">taweret.</h1>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <Link 
              href="/dungeon/2/dialogue" 
            >
              <button type="filled">เล่น &apos;the wish of... taweret.&apos;</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}