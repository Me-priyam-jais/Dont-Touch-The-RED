let playersNameInputbox=document.querySelector("#players-name-inputbox");
let playersName=document.querySelector("#players-name");
const done_Btn=document.querySelector("#done-btn");
let player1Name;
let player2Name;
let player1turn=true;
let playercount=1;
let inputBoxStatement=document.getElementById("players-name-inputbox-text");
const turnSwitcher=()=>
{
if(player1turn===true)
{
player1turn=false;
}
else
{
player1turn=true;
}
}
const declareWinner=(currentPlayer1,player1,player2)=>
    {
        if(currentPlayer1===true)
        {
            gameOverStatement.innerHTML=`<span style="color:green; text-transform:capitalize;">${player2}</span> <span style="color:white;">Won This Game.Better Luck Next time</span> <span style="color:red; text-transform:capitalize;">${player1}</span>`;
        }
        else
        {
            gameOverStatement.innerHTML=`<span style="color:green; text-transform:capitalize;">${player1}</span> <span style="color:white;">Won This Game.Better Luck Next time</span> <span style="color:red; text-transform:capitalize;">${player2}</span>`;
        }
    }
twoPlayerMode.addEventListener("click",()=>
{
    modePopUp.style.display="none";
    playersNameInputbox.style.display="block";
    playersName.focus();
    done_Btn.addEventListener("click",()=>
    {
    if(playercount===1)
    { 
        player1Name=playersName.value;   
        playersNameInputbox.style.display="none";
        playersName.value="";
        inputBoxStatement.innerText="Enter Your Name Player-2";
        playersNameInputbox.style.display="block";
        playersName.focus();
        playercount++;
    }
    else
    {   
        playersNameInputbox.style.display="block";
        player2Name=playersName.value;
        playersNameInputbox.style.display="none";
        playersName.value=" ";
        playercount--;
    }
    });
keys.forEach(key => 
{
    key.addEventListener("click",gameStatusTracker=()=>
    {
        if(key.id==gameOverKey)
        {
        gameOverStatement.style.fontSize="medium";
        declareWinner(player1turn,player1Name,player2Name);
        loosePopUp.style.display="block";
        loosePopUp.style.backgroundColor="#101010";
        key.style.backgroundColor="red";
        fullPage.style.pointerEvents="none";
        loosePopUp.style.pointerEvents="auto";
        }
        else
        {
        key.style.backgroundColor="green";
        key.disabled=true;
        turnSwitcher();
        }
    }
)});
playersName.addEventListener("keydown",(event)=>
    {
    if(event.key==="Enter")
    {
    event.preventDefault();
    done_Btn.click();
    }
    })
});