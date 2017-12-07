//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
// DOCUMENT READY FUNCTION
$(document).ready(function() {

//ARRAY OF CHOICES
var allChoices = ["rock",
        "paper",
        "scissors"
        ];

//FUNCTIONS
//HERO CHOICE
        $("#3").click(function() {
           var heroChoice = $("#heroChoice").val();
           console.log(heroChoice);
           $("#heroChoiceDisplay").text(heroChoice);

//COMPUTER CHOICE
        
        var choiceRoll = Math.floor(Math.random()*3);
        console.log(choiceRoll);
        console.log(allChoices[choiceRoll]);
        var computerChoice = allChoices[choiceRoll];
        $("#computerChoiceDisplay").text(computerChoice);
//CONDITIONAL TIES
        if(heroChoice === "rock" && computerChoice === "rock") {
                $("#judgementChoiceDisplay").text("Nobody!");
        } else if (heroChoice === "paper" && computerChoice === "paper"){
                $("#judgementChoiceDisplay").text("Nobody!");
        } else if (heroChoice === "scissors" && computerChoice === "scissors"){
                $("#judgementChoiceDisplay").text("Nobody!");
//CONDITIONAL HERO WINS
        } else if (heroChoice === "rock" && computerChoice === "scissors"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
        } else if (heroChoice === "paper" && computerChoice === "rock"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
        } else if (heroChoice === "scissors" && computerChoice === "paper"){
                $("#judgementChoiceDisplay").text("HERO WINS!");
//CONDITIONAL COMPUTER WINS
        } else if (heroChoice === "rock" && computerChoice === "paper"){
                $("#judgementChoiceDisplay").text("COMPUTER WINS!");
        } else if (heroChoice === "paper" && computerChoice === "scissors"){
                $("#judgementChoiceDisplay").text("COMPUTER WINS!");
        } else if (heroChoice === "scissors" && computerChoice === "rock"){
                $("#judgementChoiceDisplay").text("COKMPUTER WINS!");
        }
    });
});
//IF HERO TROLLING
        //if(heroChoice === "rock" && computerChoice === "rock") {
               //$("#judgementChoiceDisplay").text("WAW WEALLY!! STOP TROLLING!!");
        //}
        