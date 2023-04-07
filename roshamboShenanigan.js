let hands = ['rock', 'paper', 'scissors'];

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

let player1 = {
  name: "Player One",
  getHand: getHand
};

let player2 = {
  name: "Player Two",
  getHand: getHand
};

function playRound(player1, player2) {
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();
  let winner = null;

  if (player1Hand === player2Hand) {
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log("It's a tie.");
  } else if ((player1Hand === "rock" && player2Hand === "scissors") ||
             (player1Hand === "paper" && player2Hand === "rock") ||
             (player1Hand === "scissors" && player2Hand === "paper")) {
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log(player1.name + " wins!");
    winner = player1;
  } else {
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log(player2.name + " wins!");
    winner = player2;
  }
  return winner;
}

function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
      let roundWinner = playRound(player1, player2);
      if (roundWinner === player1) {
        player1Wins++;
      } else if (roundWinner === player2) {
        player2Wins++;
      }
    }

    if (player1Wins >= playUntil) {
        console.log(player1.name + " wins the game!");
      return player1;
    } else {
      console.log(player2.name + " wins the game!");
      return player2;
    }
  }
  playGame(player1, player2, 5);

function playTournament(player1, player2, player3, player4, playUntil) {
  let firstRoundWinner = playGame(player1, player2, playUntil);
  let secondRoundWinner = playGame(player3, player4, playUntil);
  let tournamentWinner = playGame(firstRoundWinner, secondRoundWinner, playUntil);

  console.log(tournamentWinner.name + " is the world champion!");
}

playTournament(player1, player2, { name: "Player Three", getHand: getHand }, { name: "Player Four", getHand: getHand }, 5);