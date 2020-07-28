export const videoPlayerInit = () => {

    const   videoPlayer = document.querySelector(".video-player"),
        videoButtonPlay = document.querySelector(".video-button__play"),
        videoButtonStop = document.querySelector(".video-button__stop"),
        videoTimePassed = document.querySelector(".video-time__passed"),
        videoProgress = document.querySelector(".video-progress"),
        videoTimeTotal = document.querySelector(".video-time__total");

    //Change icon play button
    const toggleIcon = () => {
        if(videoPlayer.paused){
            videoButtonPlay.classList.remove("fa-pause");
            videoButtonPlay.classList.add("fa-play");
        }else{
            videoButtonPlay.classList.add("fa-pause");
            videoButtonPlay.classList.remove("fa-play");
        }
    };

    //Change play or pause
    const togglePlay = () => { 
        if(videoPlayer.paused){  
            videoPlayer.play();
         }else{
            videoPlayer.pause();
         }

        toggleIcon();   
    };

    //default start time = 0;
    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon(); 
    };

    //Add zero number for counter vider
    const addZero = n => n < 10 ? "0" + n : n;

    videoPlayer.addEventListener("click", togglePlay);
    videoButtonPlay.addEventListener("click", togglePlay);

    videoPlayer.addEventListener("play", toggleIcon);
    videoButtonPlay.addEventListener("pause", toggleIcon);

    videoButtonStop.addEventListener("click", stopPlay);

    videoPlayer.addEventListener("timeupdate", () => {
        //currentTime is last time video 
        //duration is full time video
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        //progress video 
        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        videoTimePassed.textContent = `${addZero(minutePassed)} : ${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)} : ${addZero(secondsTotal)}`;
        
    });

    //change progress video
    videoProgress.addEventListener("change", () => {
        const duration = videoPlayer.duration;
        //value time video of progress
        const value = videoProgress.value;
        videoPlayer.currentTime = (value * duration) / 100;
    });

}