'use client'

export default function Puzzle() {
  return (
    <>
      <div className="w-dvw h-dvh">
        <div className="flex flex-col w-dvw h-dvh m-auto max-w-screen-sm">
          <div className="p-4">
            {/* <button type="mini" onClick={() => { history.back() }}>ไปหน้าก่อน</button> */}
          </div>
          <div className="flex-grow flex flex-col justify-center align-middle gap-4 p-8">
            <p>
              น้องคลาว: วิธีแก้ปัญหาเหล่านี้ได้จางหายไปพร้อมกับการสวรรคตของกษัตริย์องค์ก่อน เหลือไว้เพียงภาพจิตรกรรมปริศนาบนผนังที่ไม่มีผู้ใดสามารถไขความลับได้... จนถึงบัดนี้
            </p>
            <p>
              ข้อความปรากฏขึ้นกะพริบ <span className="animate-pulse">"หยิบเทียนเพื่อให้สามารถมองทาง</span>
            </p>
            <p>
              ปุ่มดาวน์โหลดปรากฏขึ้น <button className="w-max max-w-full">แตะเพื่อรับข้อมูลและตัวถอดรหัสอักษรอียิปต์โบราณ</button>
            </p>
            <p>
              after download:<br />
              น้องคลาว: พวกท่านได้รับกุญแจสำคัญแล้ว! บัดนี้ จงไขความลับที่ซ่อนอยู่บนผนังระหว่างตำแหน่ง [สุ่มเลข] นาฬิกา ถึง [สุ่มเลข] นาฬิกา เพื่อช่วยกอบกู้อาณาจักรอันยิ่งใหญ่
            </p>
            <p>
              after puzzle done:<br />
              น้องคลาว: เสียงตื่นเต้น ยอดเยี่ยม! พวกท่านได้ไขปริศนาสำเร็จแล้ว! ความลับของกษัตริย์ได้ถูกเปิดเผย และอาณาจักรจะรอดพ้นจากหายนะ ด้วยปัญญาและความกล้าหาญของพวกท่าน แร่ธาตุวิเศษจึงปรากฏขึ้น
            </p>
          </div>
          <div className="grid gap-2 p-4 w-full">
            <button type="filled">ต่อไป</button>
          </div>
        </div>
      </div>
    </>
  );
}