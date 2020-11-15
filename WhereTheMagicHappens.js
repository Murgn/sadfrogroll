var count = 0;
var readCount = 0;
var playing = false;
var playingNumber = 0;
const timer = setInterval(() => {
    count += 0.01;
    readCount == count;
    
    if(playingNumber == 4){playingNumber = 1;}

    document.getElementById("tweeturl").href = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fmurgn.github.io/sadfrogroll/&text=sadfrog%20was%20rolling%20for%20" + number_format(count, 2) + "%20seconds!&related=murgntheurgn&hashtags=sadfrogroll"
    document.getElementById("counter").innerHTML = number_format(count, 2)
}, 10)

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}

class music {
    constructor(music) {
        this.audioElement = document.getElementById("audio")
        this.nowPlayingElement = document.getElementById("nowplaying")
        this.audioElement.volume = 0.2;
        this.music = music;
        this.idx = -1;
    }

    GoToNext() {
        this.idx++;

        if (this.idx > this.music.length-1) {
            this.idx = 0;
        }
        this.Play(this.idx)
    }

    Play(index) {
        this.nowPlayingElement.innerHTML = this.music[index]['name']
        this.audioElement.src = "Music/" + this.music[index]['audio']
        this.audioElement.play();
    }
}
