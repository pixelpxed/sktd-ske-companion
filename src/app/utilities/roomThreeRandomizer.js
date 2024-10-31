export function roomThreeRandomizer() {
  function randomizeQuestionIndex() {
    if (
      (typeof localStorage !== 'undefined') && 
      (localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex") === null)
    ) {
      localStorage.setItem("sktd-ske2024-room03-randomJigsawIndex", Math.floor(Math.random() * 3))
    }
  }

  if (
    (typeof localStorage !== 'undefined') && 
    (localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex") === null)
  ) {
    return randomizeQuestionIndex()
  } else {
    return
  }
}