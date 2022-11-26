'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🍌 No Number';
    }
    else
        if (guess === secretNumber) {
            document.querySelector('.score').value = score;
            document.querySelector('.message').textContent = 'Correct Number';
            document.body.style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            let newScore = score;
            if (newScore > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = newScore;
            }

        }
        else if (guess != secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈  Too High' : '📉 Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '💥You lost the game';
                document.querySelector('.score').textContent = 0;
                document.body.style.backgroundColor = 'red';
            }

        }

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈  Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.body.style.backgroundColor = 'red';
    //     }

    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //         document.body.style.backgroundColor = 'red';
    //     }


    // }

})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    score = 20;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
})



