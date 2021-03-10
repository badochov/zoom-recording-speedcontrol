function getControls() {
  const controls = document.createElement("input");
  controls.type = "number";
  controls.min = 0;
  controls.step = 0.25;
  controls.value = 1;
  controls.classList.add("controls");

  return controls;
}

window.onload = () => {
  const [video] = document.getElementsByTagName("video");
  const controls = getControls();
  controls.onchange = () => {
    const val = controls.value;
    video.playbackRate = val;
    controls.blur();
  };
  video.after(controls);
};
