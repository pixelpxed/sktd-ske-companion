import Image from "next/image";

// Body
import stickman_body_idle from "@/app/assets/svg/stickman/body/idle-white.svg"
import stickman_body_wave from "@/app/assets/svg/stickman/body/wave-white.svg"
import stickman_body_talking from "@/app/assets/svg/stickman/body/talking-white.svg"
import stickman_body_looking from "@/app/assets/svg/stickman/body/looking-white.svg"
import stickman_body_explaining from "@/app/assets/svg/stickman/body/explaining-white.svg"
import stickman_body_confused from "@/app/assets/svg/stickman/body/confused-white.svg"

// Actions
import stickman_action_wave from "@/app/assets/svg/stickman/actions/wave-motion-white.svg"
import stickman_action_talking from "@/app/assets/svg/stickman/actions/talking-motion-white.svg"
import stickman_action_looking from "@/app/assets/svg/stickman/actions/looking-motion-white.svg"
import stickman_action_confused from "@/app/assets/svg/stickman/actions/confused-motion-white.svg"

export default function StickmanImage({ type, action }) {
  const stickmanActions = {
    "idle": {
      "body": stickman_body_idle,
      "action": stickman_action_talking
    },
    "wave": {
      "body": stickman_body_wave,
      "action": stickman_action_talking
    },
    "talking": {
      "body": stickman_body_talking,
      "action": stickman_action_talking
    },
    "looking": {
      "body": stickman_body_looking,
      "action": stickman_action_talking
    },
    "explaining": {
      "body": stickman_body_explaining,
      "action": stickman_action_talking
    },
    "confused": {
      "body": stickman_body_confused,
      "action": stickman_action_talking
    }
  }

  return (
    <div className="relative h-[200px] w-[150px] m-auto mr-0">
      <Image className="absolute top-0 left-0" src={stickmanActions[type].body} width={150} height={200} alt="Stickman Idle" />

      {action ? (
        <Image className="absolute top-0 left-0" src={stickmanActions[type].action} width={150} height={200} alt="Stickman Idle" />
      ) : <></>}
    </div>
  )
}