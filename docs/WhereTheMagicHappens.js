var count = 0;
const timer = setInterval(() => {
    count += 0.01;
     document.getElementById("counter").innerHTML = "He's been rolling for " + number_format(count, 2) + " seconds!";
}, 10)

function number_format(val, decimals){
    val = parseFloat(val);
    return val.toFixed(decimals);
}