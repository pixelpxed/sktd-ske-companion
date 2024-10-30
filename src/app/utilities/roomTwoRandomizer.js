import { validAnswer, randomSituationList } from "../data/puzzle/02"

export function roomTwoRandomizer() {
  function randomizeQuestionIndex() {
    if (localStorage.getItem("sktd-ske2024-room02-randomQuestionIndex") === null) {
      localStorage.setItem("sktd-ske2024-room02-randomQuestionIndex", Math.floor(Math.random() * validAnswer.length))
    }
    if (localStorage.getItem("sktd-ske2024-room02-randomSituationIndex") === null) {
      localStorage.setItem("sktd-ske2024-room02-randomSituationIndex", Math.floor(Math.random() * randomSituationList.length)) 
    }
  }

  if (
    (localStorage.getItem("sktd-ske2024-room02-randomQuestionIndex") === null) ||
    (localStorage.getItem("sktd-ske2024-room02-randomSituationIndex") === null)
  ) {
    return randomizeQuestionIndex()
  } else {
    return
  }
}