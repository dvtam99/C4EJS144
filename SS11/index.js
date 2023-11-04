// setInterval(() => {
//     renderClock()
// }, 1000);

let audio = new Audio("http://soundbible.com/grab.php?id=1252&type=mp3")


// setTimeout(() => {
//     renderClock()
// }, 1000);
const listAlarms = []
const tempAlarm = { hour: "", minute: "" }
function onHourChange(event) {
    let value = event.target.value
    if (value >= 0 && value <= 23) {
        //do some thing
        tempAlarm.hour = value
    } else {
        alert("Hour must in 0 - 23. Your entered " + value)
        event.target.value = ""
    }
}

function onMinuteChange(event) {
    let value = event.target.value
    if (value >= 0 && value <= 59) {
        //do some thing
        tempAlarm.minute = value

    } else {
        alert("Minute must in 0 - 59. Your entered " + value)
        event.target.value = ""
    }
}

function onClickBtnAdd() {

    console.log(tempAlarm)
    let obj = {...tempAlarm}
    listAlarms.push(obj)
    console.log(listAlarms)
    let temArr = listAlarms.map(el=>{debugger 
        return "<br>-  "+el.hour+" : "+el.minute})
    document.getElementById("list-alarm").innerHTML = temArr

}

function renderClock() {
    let date = new Date()
    let hour = date.getHours()
    document.getElementById("cl-hour").innerText = hour
    let minute = date.getMinutes()
    document.getElementById("cl-minute").innerText = minute
    let second = date.getSeconds()
    document.getElementById("cl-second").innerText = second

    listAlarms.forEach(el => {
        if( el.hour == hour && el.minute == minute){
            // audio.
            audio.play()
        }
        
    });
}


function playAudio(){

    audio.play()
}


setInterval(function() {
	renderClock()
}, 1000) // khoang thoi gian ngan nhat de ham

// 1000 ms = 1s

