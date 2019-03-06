

//PROBLEM! How do I clear the crystal value array after each round?
//Can I use a for each loop for my clicks?





var score;
var wins = 0;
var losses = 0;
var randomNumber;
var crystalValueArray = [];

startGame();

function startGame() {
    //Computer generates a random number bewtween 19 and 120 and shows the user
    randomNumber = Math.floor(Math.random()*(102)+19);
    $("#random-number").text(randomNumber);
    console.log(randomNumber);
    //Computer generates a random point value for each crystal--not visible to user
    crystalValueArray = [];
    for (i = 0; i < 4; i++) {
        var crystalValue = Math.floor(Math.random()*(12)+1);
        crystalValueArray.push(crystalValue);
    }
    console.log(crystalValueArray);
    //Score is set to 0, wins and losses are carried from previous game
    score = 0;
    $("#score").text(score);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

//User clicks crystal--some number of points are added to the score
//Check to see if they have won or lost yet

//Evaluating each crystal click separately
// $("#crystal1").on("click", function() {
//     score += crystalValueArray[0];
//     $("#score").text(score);	
//     checkWin();
// })
// $("#crystal2").on("click", function() {
//     score += crystalValueArray[1];
//     $("#score").text(score);	
//     checkWin();
// })
// $("#crystal3").on("click", function() {
//     score += crystalValueArray[2];
//     $("#score").text(score);	
//     checkWin();
// })
// $("#crystal4").on("click", function() {
//     score += crystalValueArray[3];
//     $("#score").text(score);	
//     checkWin();
// })

//Evaluating each crystal click with the same loop
$(".crystal").on("click", function() {
    var crystalIndex = parseInt($(this).val());
    score += crystalValueArray[crystalIndex];
    $("#score").text(score);	
    checkWin();
})

//Win if your score matches computer's number--wins++
//Lose if youre score goes over random number--losses++
//Restart
function checkWin () {
    if (score === randomNumber) {
        wins++;
        $("#wins").text(wins);
        startGame();
    } else if (score > randomNumber) {
        losses++;
        $("#losses").text(losses);
        startGame();
    }
}






