var buttons, frame, audio, soundPack;

function initialize(event) {
  frame = document.getElementById('frame');
  buttons = document.getElementsByClassName('button');
  soundPack = document.getElementById("soundPack");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mousedown', playSound, false);
    buttons[i].addEventListener('mouseup', removeHighlight, false)
  }
  audio = document.getElementById('audio');
}

window.onload = initialize;

function playSound(event) {
  pack = soundPack.options[soundPack.selectedIndex].value;
  sound = 'sounds/' + pack + '/' + event.target.id + ".wav";
  audio.src = sound;
  audio.load();
  audio.play();
  event.target.style.background = 'limegreen';
  event.target.style.boxShadow = '0px 0px 10px 2px limegreen';
}

function removeHighlight(event) {
  event.target.style.background = 'silver';
  event.target.style.boxShadow = 'none';
}
