const computerImg = document.getElementById('computerImg');
const userImg = document.getElementById('userImg');
const textResult = document.getElementById('textResult');
const optionImgs = document.querySelectorAll('.optionImg i');
const iconChoices = [`fa-regular fa-hand-back-fist text-5xl text-blue-900 rotate-90` ,`fa-regular fa-hand text-5xl text-blue-900 rotate-90`,`fa-regular fa-hand-scissors fa-flip-horizontal text-5xl text-blue-900  ` ];
const iconChoices2 = [`fa-regular fa-hand-back-fist text-5xl text-blue-900 -rotate-90`, `fa-regular fa-hand fa-rotate-270 text-5xl text-blue-900`,`fa-regular fa-hand-scissors text-5xl text-blue-900  `];


optionImgs.forEach((icon , index)=>{
    icon.addEventListener('click', ()=>{
        const userChoice = iconChoices[index];
        console.log(userChoice);
        
        const computerChoice = getComputerChoice();
        displayChoices(userChoice , computerChoice);
        const result = getResult(userChoice, computerChoice);
        textResult.textContent = result;
    });
});

function getComputerChoice(){
    const choices= iconChoices2;
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log(choices[randomIndex]);

    return choices[randomIndex];
    
    
}

function displayChoices(userChoice , computerChoice){
    userImg.className = `text-8xl text-blue-900 ${userChoice}`;
    computerImg.className = `text-8xl text-blue-900  ${computerChoice}`;
}

function getResult(userChoice , computerChoice){
    const userIndex = iconChoices.indexOf(userChoice);
    const computerIndex = iconChoices2.indexOf(computerChoice);
    if(userIndex === computerIndex){
       
        return "It's a Tie"
    }else if(
        (userIndex === 0 && computerIndex === 2) ||
        (userIndex === 2 && computerIndex === 1) ||
        (userIndex === 1 && computerIndex === 0) 

    ){
       
        return " You're Won!!!"

    }else{
       
        return "You're Lost!!!"
    }
}





{/* <i class="fa-regular fa-hand fa-flip-horizontal"></i>
<i class="fa-regular fa-hand fa-rotate-270"></i> */}