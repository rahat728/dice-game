window.addEventListener('load', (e) => {
    sectionFirst.style.display = 'block';
    sectionSecond.style.display = 'none';
    warning.style.display = 'none';
    points = 0;
});


let sectionFirst = document.getElementById('sectionFirst');
let sectionSecond = document.getElementById('sectionSecond');
let playNow = document.getElementById('playNow');
let showRules= document.getElementById('showRules');
let show = document.getElementById('show');
let resetScore = document.getElementById('resetScore');
let dice = document.getElementById('dice');
let score = document.getElementById('score');
let myChoiceNumber = document.querySelectorAll('.roll');
let computerDice = null;
let myDice = null;
let points = '0'

playNow.addEventListener('click', function() {
    sectionFirst.style.display = 'none';
    sectionSecond.style.display = 'block';
});

show.innerHTML = '';

showRules.addEventListener('click', () => {
    show.innerHTML = '<p class="text-danger text-end"><i class="fa-solid fa-circle-xmark fs-3" onclick="hideRules();"></i></p><div class="bgColor bg-gradient rounded p-4"><h5>How to play Dice Game</h5><p>Select any number <br> Click on dice image <br> After click on dice number you will get same point as dice <br> If you get wrong guess then 2 point will be deducted</p></div>';
});

function hideRules() {
    show.innerHTML = '';
}

resetScore.addEventListener('click', function() {
    sectionFirst.style.display = 'block';
    sectionSecond.style.display = 'none';
    points = 0;
    score.innerText = `${points}`;
});

myChoiceNumber.forEach(function(button) {
    button.addEventListener('click', function() {
        myDice= this.getAttribute('value');
        warning.style.display = 'none';
        console.log(`My Dice ${myDice}`);
    });
});

dice.addEventListener('click', () => {
    if(myDice != null) {
        computerDice = Math.floor(Math.random()*6 + 1);
        dice.src = `pic/dice_${(computerDice)}.png`;
        console.log(`Computer Dice ${computerDice}`);
        scoreCard();
    }
    else {
        warning.style.display = 'block';
        return;
    }
});

function scoreCard() {
    if (myDice == computerDice) {
        points += computerDice;
    }
    else {
        points -= 2;
    }

    score.innerText = `${points}`;
    myDice = null;
    computerDice = null;
}