let scorenumber=0;
singlePlayerMode.addEventListener("click",()=>{
modePopUp.style.display="none";
scoreReader.style.display="inline-block";
scoreText.style.display="inline-block";
keys.forEach(key => {
key.addEventListener("click",gameStatusTracker=()=>{
    if(scorenumber<19)
    {
    if(key.id==gameOverKey)
    {
    loosePopUp.style.display="block";
    key.style.backgroundColor="red";
    fullPage.style.pointerEvents="none";
    loosePopUp.style.pointerEvents="auto";
    gameOverStatement.innerText+=scorenumber;
    }
    else
    {
    key.style.backgroundColor="green";
    scorenumber++;
    scoreReader.innerHTML=scorenumber;
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
    }
)});
});