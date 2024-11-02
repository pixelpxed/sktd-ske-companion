import StickmanImage from "@/app/components/StickmanImage"
import { roomTwoRandomizer } from "@/app/utilities/roomTwoRandomizer";
import { randomSituationList } from "../puzzle/02";

roomTwoRandomizer()

export const sequence = [
  {
    "page": (
      <div key="sequence-09" className="dialogue-container">
        <p className="text-4xl">
          โปรดเดินหยิบเทียนเพื่อดำเนินการต่อ!!
        </p>
      </div>
    ),
    "cooldown": true
  },
  {
    "page": (
      <div key={"sequence-03"} className="dialogue-container">
        <div className="mb-4">
          <StickmanImage
            type="shrug"
          />
        </div>
        <p>
          ยินดีต้อนรับสู่สุสานพีระมิดแห่งความลับ… ที่ที่กษัตริย์อียิปต์ผู้ยิ่งใหญ่ถูกจองจำ
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
            type="shrug"
          />
        </div>
        <p>
          ตอนนี้อาณาจักรกำลังเผชิญกับปัญหา
        </p>
        <p className="text-4xl font-bold text-gradient">
          {typeof window !== 'undefined' ? randomSituationList[localStorage.getItem("sktd-ske2024-room02-randomSituationIndex")].problem : ''}
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
            type="shrug"
          />
        </div>
        <p>
          อย่างไรก็ตาม กษัตริย์ผู้ยิ่งใหญ่ได้จารึกรหัสซึ่งวิธีแก้ปัญหาไว้ นั่นก็คือโดยการ
        </p>
        <p className="text-4xl font-bold text-gradient">
          {typeof window !== 'undefined' ? randomSituationList[localStorage.getItem("sktd-ske2024-room02-randomSituationIndex")].solution : ''}
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
          วิธีแก้ปัญหาเหล่านี้ได้จางหายไปพร้อมกับการสวรรคตของกษัตริย์องค์ก่อน
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
          วิธีแก้ปัญหาเหล่านี้ได้จางหายไปพร้อมกับการสวรรคตของกษัตริย์องค์ก่อน
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
          เหลือไว้เพียงภาพจิตรกรรมปริศนาบนผนังที่ไม่มีผู้ใดสามารถไขความลับได้... จนถึงบัดนี้
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
          จงแก้ปัญหาให้แก่ชาวอียิป เพื่อรับชิ้นส่วนชิ้นที่สอง
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key={"sequence-02"} className="dialogue-container">
        <p className="text-4xl">
          โปรดเดินเข้าสู่โซนถัดไปในเพื่อดำเนินการต่อ!!
        </p>
      </div>
    ),
    "cooldown": true
  },
  {
    "page": (
      <div key={"sequence-04"} className="dialogue-container">
        <p>พวกท่านได้รับกุญแจสำคัญแล้ว! บัดนี้ จงไขความลับที่ซ่อนอยู่บนผนังที่ตำแหน่ง</p>
        <p className="text-8xl font-bold text-center">
          <span className="text-gradient">
            {typeof window !== 'undefined' ? (parseInt(localStorage.getItem("sktd-ske2024-room02-randomQuestionIndex")) + 1) : ''}
          </span>
        </p>
        <p>นาฬิกาของน้อนหมูเด้ง เพื่อช่วยกอบกู้อาณาจักรอันยิ่งใหญ่!</p>
      </div>
    ),
    "cooldown": true
  }
]