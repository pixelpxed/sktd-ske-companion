'use client'

const pageSequence = [
  "/dungeon",
  "/dungeon/dialogue",
  "/dungeon/1",
  "/dungeon/1/dialogue",
  "/dungeon/1/puzzle/tutorial",
  "/dungeon/1/puzzle",
  "/dungeon/1/puzzle/success",
  "/dungeon/2",
  "/dungeon/2/dialogue",
  "/dungeon/2/puzzle/tutorial",
  "/dungeon/2/puzzle",
  "/dungeon/2/puzzle/success",
]

export default function BackHistoryButton() { 
  function getPreviousSequencePage() {
    const url = window.location.pathname + window.location.search

    if (url == "/dungeon/1/puzzle/tutorial?from=puzzle") {
      return location.href = "/dungeon/1/puzzle";
    }
    if (url == "/dungeon/2/puzzle/tutorial?from=puzzle") {
      return location.href = "/dungeon/2/puzzle";
    }

    for (let i = 0; i < pageSequence.length; i++) {
      if (url == pageSequence[i]) {
        return location.href = pageSequence[i - 1];
      }
    }
  }

  return (
    <button type="mini" onClick={getPreviousSequencePage}>ไปส่วนก่อน</button>
  )
}