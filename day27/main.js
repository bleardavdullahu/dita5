function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM"

    if(hours >= noon){
        meridian = "PM";
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerHTML = clockTime;
};

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage (){
    var time = new Date().getHours();
    console.log(time);

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if(time == wakeuptime){
        image = "img/morning.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image = "img/class.gif";
    }
    else if(time==sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image;
    console.log(imageHTML.src)
}

function updateClock(){

    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
    wakeuptime = wakeUpTimeSelector.value;

    var dstimeSelector = document.getElementById("dstimeSelector");
    dstime = dstimeSelector.value;

    var sleeptimeSelector = document.getElementById("sleeptimeSelector");
    sleeptime = sleeptimeSelector.value;

    var saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", updateClock);
}