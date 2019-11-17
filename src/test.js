import string from "./css";

const  player = {
    n:1,
    time:10,
    id:undefined,
    demo:document.querySelector('#demo'),
    demo2: document.querySelector('#demo2'),
    init:()=>{
        player.demo.innerText = string.substr(0, player.n);
        player.demo2.innerHTML = string.substr(0, player.n);
        player.play();
        player.bindEvents();
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents:()=>{
        for (let key in player.events){
            if (player.events.hasOwnProperty(key)){
                let value=player.events[key];
                document.querySelector(key).onclick=player[value];
            }

        }

    },
    draw: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        player.demo.innerText = string.substr(0, player.n);
        player.demo2.innerHTML = string.substr(0, player.n);
        player.demo.scrollTop = player.demo.scrollHeight
    },
    play:()=>{
        player.id = setInterval(player.draw,player.time);
    },
    pause:()=>{
        window.clearInterval(player.id);
    },
    slow:()=>{
        player.pause();
        player.time = 300;
        player.play();
    },
    normal:()=>{
        player.pause();
        player.time = 10;
        player.play();
    },
    fast:()=>{
        player.pause();
        player.time = 0;
        player.play();
    },

};

player.init();









