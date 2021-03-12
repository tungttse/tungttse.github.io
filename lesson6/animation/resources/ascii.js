// get elements DOM.
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let animationSelection = document.getElementById("animation");
let sizeSelection = document.getElementById("size");
let turboCheckbox = document.getElementById("turbo");
let textarea = document.getElementById("textarea");

// get values
let animationValue = animationSelection.value;
let isTurbo = turboCheckbox.checked;

//init values
let listAnimations = [""];
let speed = 250;
let intervalHandler;

//handle events
startBtn.onclick = handlePlay;
stopBtn.onclick = handleStop;
animationSelection.onchange = handleAnimationChange;
turboCheckbox.onchange = handleTurboChange;
sizeSelection.onchange = handleSizeChange;


function handlePlay(){
    handleControl(true);
    speed = isTurbo ? 50: 250;

    let startIndex = 0;
    let endIndex = listAnimations.length;

    intervalHandler = setInterval(() => {
        if(startIndex == endIndex) {
            startIndex = 0;
        }
        textarea.value = listAnimations[startIndex++];
    }, speed);
}


function handleStop(){
    clearInterval(intervalHandler);
    // reset control
    handleControl(false);
    // reset text area, show all animation
    resetTextArea();
}

function handleAnimationChange(){
    animationValue = animationSelection.value;
    listAnimations = ANIMATIONS[animationValue].split("=====\n");
    textarea.value = listAnimations[0];
}

function handleTurboChange(){
    isTurbo = turboCheckbox.checked;
    console.log(isTurbo);
}


function handleSizeChange(){
    textarea.style.fontSize = sizeSelection.value;
}

function resetTextArea(){
    textarea.value = ANIMATIONS[animationValue];
}

function handleControl(isEnable) {
    if (isEnable ) { //playing
        startBtn.disabled = true;
        stopBtn.disabled = false;
        animationSelection.disabled = true;
    } 
    else { //stop
        startBtn.disabled = false;
        stopBtn.disabled = true;
        animationSelection.disabled = false;
    }
}

