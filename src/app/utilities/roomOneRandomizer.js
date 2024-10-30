export function roomOneRandomizer() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function randomizeQuestionIndex() {
    const sequence = Array.from({ length: 100 }, (_, i) => i + 1);
    shuffleArray(sequence);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("sktd-ske2024-room01-randomQuestionIndex", sequence[0]);
    }
  }

  if (typeof localStorage !== 'undefined' && localStorage.getItem("sktd-ske2024-room01-randomQuestionIndex") === null) {
    return randomizeQuestionIndex();
  } else {
    return;
  }
}