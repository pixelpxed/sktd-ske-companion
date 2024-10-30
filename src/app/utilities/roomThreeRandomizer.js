export function roomThreeRandomizer() {
  function randomizeQuestionIndex() {
    if (localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex") === null) {
      localStorage.setItem("sktd-ske2024-room02-randomQuestionIndex", Math.floor(Math.random() * 3))
    }
  }

  if (
    (localStorage.getItem("sktd-ske2024-room03-randomJigsawIndex") === null)
  ) {
    return randomizeQuestionIndex()
  } else {
    return
  }
}