const colors = [...document.getElementsByClassName("box")];

colors.forEach((button, i) => {
  button.addEventListener("click", () => {
    const color = button.style.backgroundColor;
    state.userClicks.push(i);
    button.style.filter = "saturate(50%)";
    setTimeout(() => {
      button.style.filter = "saturate(100%)";
      if (checkUserInput(sequence, state.userClicks) && equalLengths(state)) {
        ++state.count;
        state.userClicks = [];
        playSequence(state);
      } else {
        playSequence(state);
      }
    }, 300);
  });
});

function checkUserInput(sequence, userClicks) {
  return userClicks.every(v => {
    return sequence[v] === v;
  });
}

function equalLengths(state) {
  return state.count === state.userClicks.length;
}

function playSequence(state) {
  for (let i = 0; i < state.count; i++) {
    setTimeout(() => {
      colors[sequence[i]].style.filter = "saturate(50%)";
    }, 1000 * (i + 1));
    setTimeout(() => {
      colors[sequence[i]].style.filter = "saturate(100%)";
    }, 1300 * (i + 1));
  }
}
