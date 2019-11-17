import string from "./css";
let n = 1;
let time=10;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let draw=function () {
    n += 1;
    if (n > string.length){
        window.clearInterval(id);
        return;
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop=scrollHeight;
};

let play=()=>{
    return setInterval(draw, time);
};
let pause=()=>{
    window.clearInterval(id);
};
let id=play();

btnPause.onclick=()=>{
    pause();
};
btnPlay.onclick=()=>{
    id=play();
};
btnSlow.onclick=()=>{
    pause();
    time=300;
    id=play();
};
btnNormal.onclick=()=>{
    pause();
    time=10;
    id=play();
};

btnFast.onclick=()=>{
    pause();
    time=0;
    id=play();
};




