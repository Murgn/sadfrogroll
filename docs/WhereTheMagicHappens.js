var count = 0;
var readCount = 0;
const timer = setInterval(() => {
    count += 0.01;
    readCount == count;
    
    document.getElementById("tweeturl").href = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fmurgn.github.io/sadfrogroll/&text=sadfrog%20was%20rolling%20for%20" + number_format(count, 2) + "%20seconds!&related=murgntheurgn&hashtags=sadfrogroll"
    document.getElementById("counter").innerHTML = "He's been rolling for " + number_format(count, 2) + " seconds!";
}, 10)

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}

document.getElementById("musicplayer").volume = 0.2;
