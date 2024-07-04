function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running if no element with data-key associated with the keyCode key pressed is found
    audio.currentTime = 0; // rewind audio to start
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if not a transform
    this.classList.remove('playing');
}

// play sound when keys are pressed
window.addEventListener('keydown', playSound); // call playSound function in the event that a key is pressed

// remove playing styling after transition ends
const keys = document.querySelectorAll('.key'); // store all elements with class .key as an array in the variable keys
keys.forEach(key => key.addEventListener('transitionend',removeTransition)); // call remove Transition function when transition ends for each element in keys variable