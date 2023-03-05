var videoPlay = document.getElementById("videoPlay");
var vid = document.getElementById("myVid");
var playing=document.getElementById("playing");
var pausing=document.getElementById("pausing");
var muting=document.getElementById("mute");
var volume = document.getElementById("volume");
var speed = document.getElementById("speed");
var toStart = document.getElementById("toStart");
var toEnd = document.getElementById("toEnd");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var indicators = document.getElementById("indicators");
videoPlay.max=110;
videoPlay.value=0;
volume.value=vid.volume*100;
setTimeout(function(){
    indicators.innerText=`${vid.currentTime}/${parseInt(vid.duration / 60)}:${Math.floor(vid.duration) % 60}`;

},100)
videoPlay.addEventListener("input",function(){
    //console.log(this.value);
    vid.currentTime=this.value;
})
var interval ;
playing.addEventListener("click",function(){
    vid.play();
    interval=setInterval(function(){
        videoPlay.value=vid.currentTime;

        indicators.innerText=`${parseInt(vid.currentTime / 60)}:${
            Math.floor(vid.currentTime) % 60
          }/ ${parseInt(vid.duration / 60)}:${Math.floor(vid.duration) % 60}`;
    },0)
})
pausing.addEventListener("click",function(){
    vid.pause();
    clearInterval(interval);
})
muting.addEventListener("click",function(){
    if(muting.value=="mute"){
        vid.muted=true;
        muting.value="unmute";
        volume.value=0;
    }
    else if (muting.value=="unmute")
    {
        vid.muted=false;
        muting.value="mute";
        volume.value=vid.volume*100;
    }
})
volume.addEventListener("input",function(){
    let degree = volume.value/100;
    vid.volume=degree;

})

speed.addEventListener("input",function(){
    let degree = speed.value/2;
    vid.playbackRate=degree;

})
toStart.addEventListener("click",function(){
    vid.currentTime=0;
    videoPlay.value=0;

})
toEnd.addEventListener("click",function(){
    vid.currentTime=vid.duration;
    videoPlay.value=videoPlay.max;

})
increase.addEventListener("click",function(){
    vid.currentTime+=5;
    videoPlay.value=vid.currentTime;
})
decrease.addEventListener("click",function(){
    if(vid.currentTime<=0){
        return;
    }
    vid.currentTime-=5;
    videoPlay.value=vid.currentTime
})