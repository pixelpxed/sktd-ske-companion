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
            G: แม่มด: โอ้! ข้ารู้สึกถึงพลังหนุ่มสาวที่หลั่งไหลกลับคืนมา! *หัวเราะอย่างมีความสุข* <br /><br />
            H: น้องคลาว: ยอดเยี่ยม! พวกท่านประสบความสำเร็จในการช่วยแม่มดถอดรหัสสูตรยา อายุของนางได้ย้อนคืนกลับมาแล้ว! ประตูสู่ห้องถัดไปได้เปิดออก พร้อมสำหรับการผจญภัยครั้งใหม่ของพวกท่าน จงเดินหน้าต่อไปด้วยความกล้าหาญ!
            </p>
            <p>End of Room 01</p>            
          </div>
          <div className="grid gap-2 p-4 w-full">
            <a href="/dungeon/2/dialogue">
              <button type="filled">ต่อไป</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}