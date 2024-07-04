window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running if no element with data-key associated with the keyCode key pressed is found
    audio.currentTime = 0; // rewind audio to start
    audio.play();
    key.classList.add('playing');
});