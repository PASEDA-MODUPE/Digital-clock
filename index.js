
document.title = "DIGITAL CLOCK"

function startTime(params) {
let hours = document.querySelector("#hours")
let minutes = document.querySelector("#min")
let seconds = document.querySelector("#sec")


let time = new Date


hours.innerHTML = time.getHours();
minutes.innerHTML = time.getMinutes();
seconds.innerHTML = time.getSeconds();

}

setInterval(startTime,1)

let meridian = document.querySelector("#meridian")

if(hours=12) {
    meridian.innerHTML = "pm"
    
}

if(hours > 12){
    hours -= 12
    hours.innerHTML = hours
} 

if(seconds.innerHTML < 10){
    seconds.innerHTML = "0" + seconds.innerHTML
}

if(minutes.innerHTML < 10){
minutes.innerHTML = "0" + minutes.innerHTML
}


