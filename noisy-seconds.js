function playSound () {
    var snd = new Audio("snd/boom.wav");
    snd.play();
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    function updateTime() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        
        playSound();
    };

    setInterval( updateTime, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
