import TutorialArrow from "@/app/components/TutorialArrow"

export const tutorial = [
  (
    <div key="slide-1" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">#9A667F</h1>
    </div>
  ),
  (
    <div key="slide-2" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
    </div>
  ),
  (
    <div key="slide-3" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <div className="m-auto animate-fade">
        <div className="grid grid-cols-[4rem,10rem] gap-4 items-center ml-16 [&>p]:text-left">
          <TutorialArrow />
          <h1 className="text-red-500 text-6xl font-bold">9</h1>
          <p>เลขตำแหน่งที่ 1</p>
          <h1 className="text-red-500 text-6xl font-bold">A</h1>
          <p>เลขตำแหน่งที่ 2</p>
        </div>
      </div>
    </div>
  ),
  (
    <div key="slide-4" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <div className="m-auto animate-fade">
        <div className="grid grid-cols-[4rem,10rem] gap-4 items-center ml-16 [&>p]:text-left">
          <TutorialArrow />
          <h1 className="text-red-500 text-6xl font-bold">9</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 1</p>
            <p><b>9 × 16<sup>1</sup> = <span className="opacity-0 pointer-events-none select-none">144</span></b></p>
          </div>
          <h1 className="text-red-500 text-6xl font-bold">A</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 2</p>
            <p><b>10 × 16<sup>0</sup> = <span className="opacity-0 pointer-events-none select-none">10</span></b></p>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div key="slide-5" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <div className="m-auto animate-fade">
        <div className="grid grid-cols-[4rem,10rem] gap-4 items-center ml-16 [&>p]:text-left">
          <TutorialArrow />
          <h1 className="text-red-500 text-6xl font-bold">9</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 1</p>
            <p><b>9 × 16<sup>1</sup> = <span>144</span></b></p>
          </div>
          <h1 className="text-red-500 text-6xl font-bold">A</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 2</p>
            <p><b>10 × 16<sup>0</sup> = <span>10</span></b></p>
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div key="slide-6" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <div className="m-auto animate-fade flex flex-col gap-4">
        <div className="grid grid-cols-[4rem,10rem] gap-4 items-center ml-16 [&>p]:text-left">
          <TutorialArrow />
          <h1 className="text-red-500 text-6xl font-bold">9</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 1</p>
            <p><b>9 × 16<sup>1</sup> = <span>144</span></b></p>
          </div>
          <h1 className="text-red-500 text-6xl font-bold">A</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 2</p>
            <p><b>10 × 16<sup>0</sup> = <span>10</span></b></p>
          </div>
        </div>
        <div>
          <p>เมื่อเรานำเลข 2 ตำแหน่งรวมกัน</p>
          <p><b>144 + 10 = <span className="opacity-0 pointer-events-none select-none">154</span></b></p>
        </div>
      </div>
    </div>
  ),
  (
    <div key="slide-7" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <div className="m-auto animate-fade flex flex-col gap-4">
        <div className="grid grid-cols-[4rem,10rem] gap-4 items-center ml-16 [&>p]:text-left">
          <TutorialArrow />
          <h1 className="text-red-500 text-6xl font-bold">9</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 1</p>
            <p><b>9 × 16<sup>1</sup> = <span>144</span></b></p>
          </div>
          <h1 className="text-red-500 text-6xl font-bold">A</h1>
          <div className="text-left">
            <p>เลขตำแหน่งที่ 2</p>
            <p><b>10 × 16<sup>0</sup> = <span>10</span></b></p>
          </div>
        </div>
        <div>
          <p>เมื่อเรานำเลข 2 ตำแหน่งรวมกัน</p>
          <p><b>144 + 10 = <span>154</span></b></p>
        </div>
      </div>
    </div>
  ),
  (
    <div key="slide-8" className="grid gap-2 text-center">
      <p>ตัวอย่างเช่น</p>
      <h1 className="font-bold text-6xl">
        #
        <span className="text-red-500">9A</span>
        <span className="text-green-500">66</span>
        <span className="text-blue-500">7F</span>
      </h1>
      <p className="pt-2">และเมื่อเราทำต่อ ๆ ไปจนครบ จะได้เลข RGB</p>
      <h1 className="font-bold text-6xl">
        <span className="text-red-500">154</span>
        <span className="text-green-500">102</span>
        <span className="text-blue-500">127</span>
      </h1>
      <p className="pt-2">เป็นอันเสร็จ 🎉</p>
    </div>
  )
]