let loosePopUp=document.querySelector("#Winning-Pop-Up");
const Loader=document.querySelector("#Game-Container");
let fullPage=document.querySelector("#body");
let modePopUp=document.querySelector("#mode-selevtor");
let restarter=document.querySelector("#Restart-btn");
let keys=document.querySelectorAll(".Game-btns");
let gameOverKey;
let gameOverStatement=document.querySelector("#Loosing-Text");
let singlePlayerMode=document.querySelector("#single-player-mode-btn");
let twoPlayerMode=document.querySelector("#two-player-mode-btn");
let scoreReader=document.querySelector("#score");
let scoreText=document.querySelector("#scoreText");
document.addEventListener("DOMContentLoaded",()=>
    {
        gameOverKey=Math.floor(Math.random()*20)+1;
        console.log(gameOverKey);
    });
restarter.addEventListener("click",()=>
    {
    document.location.href="index.html";
    });