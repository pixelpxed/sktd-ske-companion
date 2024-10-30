import StickmanImage from "@/app/components/StickmanImage"

export const sequence = [
  {
    "page": (
      <div key="sequence-01" className="dialogue-container">
        <p>
          โลกของเรากำลังเผชิญหน้ากับโรคระบาดร้ายแรงที่ไม่เคยพบมาก่อน
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-02" className="dialogue-container">
        <p>
          ผู้คนล้มตายเป็นจำนวนมาก และการแพทย์ทั่วไปก็ไม่สามารถรับมือได้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-03" className="dialogue-container">
        <p>
          พวกคุณเหล่านักวิจัยคือหนทางเดียวที่จะช่วยมนุษยชาติให้รอดพ้นจากหายนะครั้งนี้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-04" className="dialogue-container">
        <p>
          คือการค้นพบแหล่งพลังงานวิเศษที่ซ่อนอยู่ในดันเจี้ยนโบราณแห่งนี้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-05" className="dialogue-container">
        <p>
          ไม่เคยมีผู้ใดสามารถพิชิตดันเจี้ยนอันน่าพิศวงนี้ได้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-06" className="dialogue-container">
        <p>
          เพื่อช่วยในภารกิจอันยิ่งใหญ่นี้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-07" className="dialogue-container">
        <p>
          ข้าขอมอบผู้พิทักษ์วิเศษประจำกายให้แก่พวกท่านในการผจญภัยครั้งนี้
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-08" className="dialogue-container">
        <p>
          <span className="text-gradient font-bold text-2xl">สวัสดีครับ !</span>
        </p>
        <div className="m-4">
          <StickmanImage
            type="confetti"
          />
        </div>
        <p>
          ผมคือคลาวด์ ! ผู้ช่วยของคุณในการผจญภัยครั้งนี้ เรามาเริ่มกันเถอะ !
        </p>
      </div>
    ),
    "cooldown": false
  },
  {
    "page": (
      <div key="sequence-09" className="dialogue-container">
        <p className="text-4xl">
          โปรดเดินเข้าสู่โซนถัดไปในเพื่อดำเนินการต่อ
        </p>
      </div>
    ),
    "cooldown": true
  }
]