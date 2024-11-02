import StickmanImage from "@/app/components/StickmanImage"

import { validJigsaw } from "../puzzle/03"
import { roomThreeRandomizer } from "@/app/utilities/roomThreeRandomizer"

roomThreeRandomizer()

export const success = [
  {
    "page": (
      <div key="sequence-04" className="dialogue-container">
        <p>คุณได้รับของวิเศษจากเทวีฮิปโปเป็นชิ้นส่วนปริศนา!</p>
        <p className="text-6xl font-bold animate-fade [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
          {(typeof window !== 'undefined')
            ? validJigsaw[parseInt(localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex"))][1]
            : ''}
        </p>
        <hr />
        <p>โปรดเดินไปหา Staff ที่ทางออกของห้องนี้เพื่อดำเนินการต่อ!</p>
        <p className="pt-4">เมื่อเรียบร้อยแล้วให้ไปห้องที่ 3 ได้เลย!</p>
      </div>
    ),
    "cooldown": true
  }
]