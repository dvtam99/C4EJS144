// setInterval(() => {
//     renderClock()
// }, 1000);


// function renderClock() {
//     let date = new Date()
//     let hour = date.getHours()
//     document.getElementById("hour").innerText = hour
//     let minute = date.getMinutes()
//     document.getElementById("minute").innerText = minute
//     let second = date.getSeconds()
//     document.getElementById("second").innerText = second
// }


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

