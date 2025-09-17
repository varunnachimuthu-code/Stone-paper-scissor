/*let score = JSON.parse(localStorage.getItem('score'));

        if (!score) {
            score = {
                Wins: 0,
                losses: 0,
                ties: 0
            }; 
        }*/

        let score = JSON.parse(localStorage.getItem('score'))  ||  {
                Wins: 0,
                losses: 0,
                ties: 0
            };

        updateScoreElement();
        let isautoplaying = false;
        let intervalid;
        function autoplay(){
            if(!isautoplaying) {
                intervalid = setInterval(function(){
                const playerMove = pickComputerMove();
                playGame(playerMove);
            },2000);
            isautoplaying = true;
            } else {
                clearInterval(intervalid);
                isautoplaying = false;
                querySelector
            }
           
        }

        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';
            if (playerMove === 'scissors') {
                if (computerMove === 'Rock') {
                    result = 'You Loose.';
                } else if (computerMove === 'Paper') {
                    result = 'You Win.';
                } else if (computerMove === 'scissors') {
                    result = 'Tie.';
                }

            } else if (playerMove === 'Paper') {

                if (computerMove === 'Rock') {
                    result = 'You Win.';
                } else if (computerMove === 'Paper') {
                    result = 'Tie.';
                } else if (computerMove === 'scissors') {
                    result = 'You Loose.';
                }

            } else if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie.';
                } else if (computerMove === 'Paper') {
                    result = 'You Loose.';
                } else if (computerMove === 'scissors') {
                    result = 'You Win.';
                }
            }

            if (result === 'You Win.') {
                score.Wins += 1;
            } else if (result === 'You Loose.') {
                score.losses += 1;
            } else if (result === 'Tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score' ,JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML =` You <img src="${playerMove}-emoji.png" class="move-icon" >
        <img src ="${computerMove}-emoji.png"class="move-icon">Computer`;

           
            
/*alert(`You picked ${playerMove}. Computer picked ${computerMove}.  ${result}.
Wins:${score.Wins} Losses:${score.losses} Ties:${score.ties}`); */


        }

        function updateScoreElement(){
             document.querySelector('.js-score').innerHTML =  `Wins:${score.Wins} Losses:${score.losses} Ties:${score.ties}`;

        }

        function pickComputerMove() {

            let computerMove = '';


            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'Rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'Paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }
            return computerMove;

        }


