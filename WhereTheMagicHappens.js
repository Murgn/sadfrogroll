var count = 0;
var readCount = 0;
var playing = false;
const timer = setInterval(() => {
    count += 0.01;
    readCount == count;

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

    Stop(){
        this.audioElement.pause();
        playing = false;
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
const audio = new music([
    {name: "The Seatbelts - Cats on Mars", audio: "The Seatbelts - Cats on Mars.mp3"},
    {name: "Dan Salvato - Dreams of Love and Literature", audio: "Dan Salvato - Dreams of Love and Literature.mp3"},
    {name: "Milky Chance - Stolen Dance", audio: "Milky Chance - Stolen Dance.mp3"},
    {name: "Febbs! - It's Okay", audio: "Febbs! - It's Okay.mp3"},
    {name: "alt-J - Breezeblocks", audio: "alt-J - Breezeblocks.mp3"},
    {name: "Febbs! - Cupcakes", audio: "Febbs! - Cupcakes.mp3"},
    {name: "Porter Robinson - Goodbye To A World", audio: "Porter Robinson - Goodbye To A World.mp3"},
    {name: "Yu-Ching Fei - Yi Jian Mei", audio: "Yu-Ching Fei - Yi Jian Mei.mp3"},
    {name: "Vicetone - Astronomia", audio: "Vicetone - Astronomia.mp3"},
    {name: "Ouse - ｆａｒｃｒｙツ", audio: "Ouse - ｆａｒｃｒｙツ.mp3"},
    {name: "Men At Work - Down Under", audio: "Men At Work - Down Under.mp3"},
    {name: "INZO - Overthinker", audio: "INZO - Overthinker.mp3"},
    {name: "Absofacto - Dissolve", audio: "Absofacto - Dissolve.mp3"},
    {name: "Capital Cities - Safe And Sound", audio: "Capital Cities - Safe And Sound.mp3"}]);
document.onclick= function(event) {
    if (event===undefined) event= window.event;
    if(playing==false) audio.GoToNext();
    playing = true;
    
    document.getElementById("playing").innerHTML = "Playing ";
};
setInterval(() => {
    if(playing == false){
        document.getElementById("nowplaying").innerHTML = "Click anywhere to play music!"
        document.getElementById("playing").innerHTML = "";}
}, 1)


// to find js particles goto desktop and find js canvas particles.txt