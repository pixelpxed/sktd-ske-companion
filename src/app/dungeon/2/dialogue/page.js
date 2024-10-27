"use client"

import { useState } from "react";
// import { useRouter } from "next/router";

import StickmanImage from "../../../components/StickmanImage";
import { sequence } from "../../../data/sequence/02.js";

let sequence_next = null;

export default function Home() {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  // const router = useRouter(); // Move useRouter hook here

  let curSequence = sequence[sequenceIndex];

  function handleSequence() {
    if ((sequenceIndex + 1) < sequence.length) {
      setSequenceIndex(sequenceIndex + 1);
    } else {
      location.href = "/dungeon/2/puzzle/"
      // router.push("/dungeon/2/puzzle/");
    }
  }

  return (
    <>
      <div className="flex flex-col w-dvw h-dvh">
        <div className="p-4 m-auto max-w-screen-sm w-full">
            <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button>
        </div>
        <div className="flex flex-col flex-grow w-dvw m-auto max-w-screen-sm">
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
            <button onClick={handleSequence} type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}