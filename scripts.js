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
