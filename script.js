const button=document.querySelectorAll('button');
let playerSelection ;
let result;
let score=0;
const res=document.getElementById('result');
const sco=document.getElementById('score')
button.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        playerSelection=button.id;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if(result=='win' && score<=5){
            score+=1;
        }
        else if(score>4){
            result='player won'
        }
        res.innerHTML=''+result;
        sco.textContent=score;
    })
})
function computerPlay(){
    let array=["Rock","Scissors","Paper"]
    let num=Math.floor(Math.random() * 3); 
    let cho=array[num]
    return cho
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection=='Rock' && computerSelection=='Paper'){
        result='lose'
        return 'you lose ! Paper beats Rock'
    }
    else if(playerSelection=='Rock' && computerSelection=='Scissors'){
        result='win'
        return 'you win ! Rock beats Scissors'
    }
    else if(playerSelection=='Rock' && computerSelection=='Rock'){
        result='Dual'
        return 'no one win'
    }
    else if(playerSelection=='Paper' && computerSelection=='Paper'){
        result='Dual'
        return 'no one win'
    }
    else if(playerSelection=='Paper' && computerSelection=='Rock'){
        result='win'
        return 'you win ! Paper beats Rock'
    }
    else if(playerSelection=='Paper' && computerSelection=='Scissors'){
        result='lose'
        return 'you lose ! Scissors beats Paper'
    }
    else if(playerSelection=='Scissors' && computerSelection=='Paper'){
        result='win'
        return 'you win ! Paper beats Scissore'
    }
    else if(playerSelection=='Scissors' && computerSelection=='Rock'){
        result='lose'
        return 'you lose ! Rock beats Scissore'
    }
    else if(playerSelection=='Scissors' && computerSelection=='Scissors'){
        result='Dual'
        return 'no one win'
    }
    else {
        result='error'
        return 'error , please try again'
    }
}
