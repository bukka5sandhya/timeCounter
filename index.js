var timerEle = document.getElementsByClassName("timer");
var timings = 30;
var i =0;
var  myinterval = setInterval(timeOut,1000);
function timeOut(){
    if((timings*60-i)%60>=10){
        timerEle[0].innerHTML = parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
    }
    else{
        timerEle[0].innerHTML = parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
    }
    i++;
}