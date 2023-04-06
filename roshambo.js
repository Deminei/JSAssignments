let hands = ['rock', 'paper', 'scissors']; // I gotta remember to comment or I'll catch my own hands when i forget what these do!

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3]; // gethand with uh math randomizer function
}

let player1 = {
  name: "Player One", //player 1 object with 'name' and getHand properties
  getHand: getHand
};

let player2 = {
  name: "Player Two",  //player 2 object with 'name' and getHand properties
  getHand: getHand
};

function playRound(player1, player2) {  // in this function, the player objects argue with their hands, till only one survives
  let player1Hand = player1.getHand();
  let player2Hand = player2.getHand();

  let winner = null;  //NaNi
  if (player1Hand === player2Hand) { // 'if' player hands are the same resulting in a tie
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log("It's a tie.");
  } else if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "paper" && player2Hand === "rock") ||  // 'else if' all combos for player one as winner 
    (player1Hand === "scissors" && player2Hand === "paper")
  ) {
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log(player1.name + " wins!"); //returns hands and player one as winner!
    winner = player1;
  } else {
    console.log(player1.name + " played " + player1Hand + ".");
    console.log(player2.name + " played " + player2Hand + ".");
    console.log(player2.name + " wins!"); //  'else' returns hands and player two as winner!
    winner = player2;
  }// leaping lizards that was a lot T.T
  
  return winner;
}
let winner = playRound(player1, player2);  //brain hUrT 