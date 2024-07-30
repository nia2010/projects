function start(){
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let time = h + ":" + m + ":" + s
    document.getElementById("dates").innerHTML = time
    let d = new Date()
    let ndate = d.toDateString()
    document.getElementById("days").innerHTML = ndate
}
setInterval(start, 1000)