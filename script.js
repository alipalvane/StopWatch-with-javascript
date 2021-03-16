let second = 0;
let min = 0;
let hour = 0;

let disSec = 0;
let disMin =0;
let disHour =0;

let interval = null;
let status = "stopped";

stopWatch = () =>{
    second++;

    if(second/60 === 1){
        second = 0;
        min++;

        if(min/60 === 1){
            min=0;
            hour++;
        }

    }

    if(second<10){
        disSec = "0" + second.toString();
    }else {disSec = second;}

    if(min<10){
        disMin = "0" + min.toString();
    }else {disMin = min;}

    if(hour<10){
        disHour = "0" + hour.toString();
    }else {disHour = hour;}

    document.getElementById('display').innerHTML = disHour + ':' + disMin + ':' + disSec;
}



start = () =>{
    if(status === "stopped"){
        interval = window.setInterval(stopWatch, 1000);
    }
}
stop = () => {
    clearInterval(interval);
}
reset = () =>{
    second=0;
    min=0;
    hour=0;
    document.getElementById('display').innerHTML = `00:00:00`
}