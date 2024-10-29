import Image from "next/image";

import cloud_confetti from "@/app/assets/png/cloud-mascot/confetti.png"
import cloud_confused from "@/app/assets/png/cloud-mascot/confused.png"
import cloud_explaining from "@/app/assets/png/cloud-mascot/explaining.png"
import cloud_headache from "@/app/assets/png/cloud-mascot/headache.png"
import cloud_idle from "@/app/assets/png/cloud-mascot/idle.png"
import cloud_pointing from "@/app/assets/png/cloud-mascot/pointing.png"
import cloud_shrug from "@/app/assets/png/cloud-mascot/shrug.png"
import cloud_talking from "@/app/assets/png/cloud-mascot/talking.png"
import cloud_victory from "@/app/assets/png/cloud-mascot/victory.png"
import cloud_wave from "@/app/assets/png/cloud-mascot/wave.png"

export default function StickmanImage({ type }) {
  const cloud_actions = {
    "confetti": cloud_confetti,
    "confused": cloud_confused,
    "explaining": cloud_explaining,
    "headache": cloud_headache,
    "idle": cloud_idle,
    "pointing": cloud_pointing,
    "shrug": cloud_shrug,
    "talking": cloud_talking,
    "victory": cloud_victory,
    "wave": cloud_wave
  }

  return (
    <div className="min-h-[200px]">
      <div className="absolute h-[200px] w-[200px] m-auto border-4 border-white border-opacity-50 rounded-2xl overflow-hidden">
        {/* <Image src={stickmanActions[type].body} width={150} height={200} alt="Stickman Idle" /> */}
        <Image className="relative left-1/2 -translate-x-1/2 h-[300px] max-w-[300px] w-[300px]" src={cloud_actions[type]} width={300} height={300} alt="Stickman Idle" />
      </div>
    </div>
  )
}