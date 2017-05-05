var video = document.querySelector("video"),
    playPause = document.querySelector(".player__play"),
    timeCurrent = document.querySelector(".player__time-current"),
    timeTotal = document.querySelector(".player__time-total"),
    timeline = document.querySelector(".player__timeline input"),
    volume = document.querySelector(".player__volume input");

formatTime = function(seconds) {

        var seconds = Math.round(seconds),
            minutes = Math.floor(seconds / 60),
            remainingSeconds = seconds - minutes * 60;

        if(remainingSeconds == 0)
            remainingSeconds = "00";
        else if(remainingSeconds < 10)
            remainingSeconds = "0" + remainingSeconds;

        return minutes + ":" + remainingSeconds;
    };


playPause.onclick = function(){
    if (video.paused) {
        video.play();
        playPause.classList.add("pause");
        
    } else {
        video.pause();
        playPause.classList.remove("pause");
    }
};

video.onclick = function(){
    if (video.paused) {
        video.play();
        playPause.classList.add("pause");
        
    } else {
        video.pause();
        playPause.classList.remove("pause");
    }
};


video.ondurationchange = function() {
    timeTotal.textContent = formatTime(video.duration);
};

 
video.addEventListener("timeupdate", function() {
    timeCurrent.textContent = formatTime(video.currentTime);
}, false);


video.addEventListener("timeupdate", function(){
        var percentPlayed = (video.currentTime / video.duration) * 100;
        timeline.value = percentPlayed;
    }, false);

video.onended = function() {
    resetPlayer = playPause.classList.remove("pause");
    timeCurrent.textContent = formatTime(0);
    timeline.value = 0;
    };

timeline.oninput = function(e) {

        var newTime = video.duration * parseInt(e.target.value) / 100;
        video.currentTime = newTime;
};

setCurrentVolume = function() {
        volume.value = (video.volume * 100);
    };

volume.oninput = function(e) {
        video.volume = parseInt(e.target.value) / 100;
    };