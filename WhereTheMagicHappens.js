var count = 0;
var readCount = 0;
var playing = false;
var playingNumber = 0;
const timer = setInterval(() => {
    count += 0.01;
    readCount == count;
    
    if(playingNumber == 4){playingNumber = 1;}

    document.getElementById("tweeturl").href = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fmurgn.github.io/sadfrogroll/&text=sadfrog%20was%20rolling%20for%20" + number_format(count, 2) + "%20seconds!&related=murgntheurgn&hashtags=sadfrogroll"
    document.getElementById("counter").innerHTML = "He's been rolling for " + number_format(count, 2) + " seconds!";
}, 10)

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}

document.getElementById("musicplayer").volume = 0.2;

document.onclick= function(event) {
    if (event===undefined) event= window.event;
    play();
    playing = true;

};

function play() {
    var audio = document.getElementById("musicplayer");
    audio.play();
  }

  const playingLoop = setInterval(() => {
    playingNumber += 1
    var playingText = document.getElementById("songname");

    if(playing == true){
        if(playingNumber == 1){playingText.innerHTML = "Playing";}
        else if(playingNumber == 2){playingText.innerHTML = "Playing.";}
        else if(playingNumber == 3){playingText.innerHTML = "Playing..";}
        else if(playingNumber == 4){playingText.innerHTML = "Playing...";}
    }
  }, 1000)
