"use client"

import { useState } from "react";
import BackHistoryButton from "@/app/components/BackHistoryButton";

import StickmanImage from "../../../components/StickmanImage";
import { sequence } from "../../../data/sequence/01.js";


let sequence_next = null;
export default function Home() {
  const [sequenceIndex, setSequenceIndex] = useState(0);

  let curSequence = sequence[sequenceIndex];

  function handleSequence() {
    if ((sequenceIndex + 1) < sequence.length) {
      return setSequenceIndex(sequenceIndex + 1)
    } else {
      return location.href = "/dungeon/1/puzzle/tutorial";
    }
  }

  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <p className="p-4">
            <BackHistoryButton />
          </p>
          {curSequence.stickman.show ? <div className="flex-grow" /> : <></>}
          <div className={curSequence.stickman.show ? "" : "flex flex-col justify-center h-full [&>div]:!pb-4"}>
            {
              curSequence.dialog.show ?
                <div className="p-4 pb-0 [&>*]:text-center [&>*]:max-w-full [&>*]:w-max [&>*]:m-auto [&>*]:mr-28">
                  <p>{curSequence.dialog.text}</p>
                </div> : <></>
            }
            {
              curSequence.stickman.show ?
                <StickmanImage
                  type={curSequence.stickman.type}
                  action={curSequence.stickman.action}
                /> : <></>
            }
          </div>

          <div className="grid gap-2 p-4 w-full">
            <button onClick={() => { handleSequence() }} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}