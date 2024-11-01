import StickmanImage from "@/app/components/StickmanImage"

import { validJigsaw } from "../puzzle/03"
import { roomThreeRandomizer } from "@/app/utilities/roomThreeRandomizer"

roomThreeRandomizer()

export const success = [
  {
    "page": (
      <div key="sequence-01" className="dialogue-container">
        <p>
          <span className="text-gradient font-bold text-2xl">สวัสดีครับ !</span>
        </p>
        <div className="m-4">
          <StickmanImage
            type="confetti"
          />
        </div>
        <p>
          ยอดเยี่ยม! พวกท่านประสบความสำเร็จในการช่วยแม่มดถอดรหัสสูตรยาแล้ว!
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-02" className="dialogue-container">
        <p>
          <span className="text-gradient font-bold text-2xl">สวัสดีครับ !</span>
        </p>
        <div className="m-4">
          <StickmanImage
            type="idle"
          />
        </div>
        <p>
          คุณได้รับรางวัลจากแม่มดเป็นชิ้นส่วนปริศนา!
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-04" className="dialogue-container">
        <p>คุณได้รับของวิเศษ</p>
        <p className="text-6xl font-bold animate-fade [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
          {(typeof window !== 'undefined')
            ? validJigsaw[parseInt(localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex"))][0]
            : ''}
        </p>
        <p>แล้ว!!</p>
        <p className="pt-4">โปรดเดินไปหา Staff ที่ทางออกของห้องนี้เพื่อดำเนินการต่อ!</p>
      </div>
    ),
    "cooldown": true
  }
]