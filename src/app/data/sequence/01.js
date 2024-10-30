import StickmanImage from "@/app/components/StickmanImage"
import { roomOneRandomizer } from "@/app/utilities/roomOneRandomizer";

roomOneRandomizer()

export const sequence = [
  {
    "page": (
      <div key={"sequence-01"} className="dialogue-container">
        <div className="mb-4">
          <StickmanImage
            type="explaining"
          />
        </div>
        <p>
          ในห้องนี้มีแม่มดผู้ทรงพลัง นางเป็นผู้ครอบครองสูตรน้ำยาอายุวัฒนะอันล้ำค่า
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key={"sequence-02"} className="dialogue-container">
        <div className="mb-4">
          <StickmanImage
            type="headache"
          />
        </div>
        <p>
          แต่ด้วยวัยชราที่ล่วงเลยมานาน ทำให้นางลืมวิธีถอดรหัสสูตรยานั้นเสียแล้ว
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key={"sequence-03"} className="dialogue-container">
        <div className="mb-4">
          <StickmanImage
            type="wave"
          />
        </div>
        <p>
          จงช่วยแม่มดตามหาสูตรยาอายุวัฒนะ !!!
        </p>
      </div>
    ),
    "cooldown": true
  },
  {
    "page": (
      <div key={"sequence-04"} className="dialogue-container">
        <p>จงหาขวดหมายเลขที่</p>
        <p className="text-8xl font-bold text-center">
          <span className="text-gradient">
            {typeof window !== 'undefined' ? localStorage.getItem("sktd-ske2024-room01-randomQuestionIndex") : ''}
          </span>
        </p>
        <p>เพื่อเริ่มเล่นกิจกรรม !</p>
      </div>
    ),
    "cooldown": true
  }
]