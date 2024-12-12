const Loader=document.querySelector("#Game-Container");
let keys=document.querySelectorAll(".Game-btns");
let restarter=document.querySelector("#Restart-btn");
let loosePopUp=document.querySelector("#Winning-Pop-Up");
let fullPage=document.querySelector("#body");
let gameOverStatement=document.querySelector("#Loosing-Text");
let gameOverKey;
let score=0;
let scoreReader=document.querySelector("#score");
restarter.addEventListener("click",()=>
{
document.location.href="index.html";
})
document.addEventListener("DOMContentLoaded",()=>
{
    gameOverKey=Math.floor(Math.random()*20)+1;
    console.log(gameOverKey);
})
keys.forEach(key => {
key.addEventListener("click",()=>{
if(score<19)
{
if(key.id==gameOverKey)
{
loosePopUp.style.display="block";
key.style.backgroundColor="red";
fullPage.style.pointerEvents="none";
loosePopUp.style.pointerEvents="auto";
gameOverStatement.innerText+=score;
}
else
{
key.style.backgroundColor="green";
score++;
scoreReader.innerHTML=score;
key.disabled=true;
}
}
else
{
loosePopUp.style.display="block";
fullPage.style.pointerEvents="none";
loosePopUp.style.pointerEvents="auto";
loosePopUp.style.backgroundColor="green";
gameOverStatement.innerText=`You Won The Game !`;
}
})
});
