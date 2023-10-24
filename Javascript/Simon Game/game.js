gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern = [];
var i=0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var name = "./sounds/" + randomChosenColour + ".mp3";
    playSound(name);   
    userClickedPattern = [];
    i++;
}

function playSound(name) {
    const audio = new Audio(name);
    audio.play();
}

function animatePress(currentColour){
    $(currentColour).addClass("pressed");
}

function startOver(){
    i = 0;
    gamePattern = [];
    $("h1").text("Game over, Press A Key to Start");
}

$(document).keypress(function(e) {
    if (e.key === 'a') {
        nextSequence();
        $("h1").text("Level " + i);

    }
})

$(".btn").click (function(e) {
    $(e.target).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var userChosenColour = $(e.target).attr("id");
    userClickedPattern.push(userChosenColour);

    var name = "./sounds/" + userChosenColour + ".mp3";
    playSound(name)

    animatePress(e.target);
    setTimeout(function() {
        $(e.target).removeClass("pressed");
    }, 100)
    
    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[gamePattern.length - 1]) {
        console.log("correct!");
        // console.log(userClickedPattern);
        // console.log(gamePattern);
        // console.log(userClickedPattern[userClickedPattern.length - 1]);
        // console.log(gamePattern[gamePattern.length - 1]);
        setTimeout( function() {
            nextSequence();
        }, 1000);
        
    }

    else{
        $("body").addClass("game-over");

        setTimeout( function() {
            $("body").removeClass("game-over");
        }, 200);
        console.log("false!");

        var name = "./sounds/wrong.mp3";
        playSound(name)

        startOver();
    }
    
    });

