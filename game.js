var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0


$("h1").one("click", function () {
        $("h1").text("Level " + level);
        nextSequence();
    });




$(".btn").click(function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);

        playSound(userChosenColour);  
        animatePress(userChosenColour);

        checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(function () {
                nextSequence();
        }, 1000);

        } 
        }else {
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
                $("body").addClass("game-over");
                setTimeout(function(){
                        $("body").removeClass("game-over");
                    }, 200);   
                $("h1").text("Game over. Click Here To Restart");
                $("h1").css("textDecoration", "underline");
                $("h1").css("line-height", "4rem");
                $("h1").css("font-size", "1rem");
                $("h1").click(function() {
                        document.location.reload();
                });
                   
        }
    };




function nextSequence () {  
        
        userClickedPattern = [];
        level++;
        $("h1").text("Level " + level);
        var randomNumber = Math.floor(Math.random() *4); 
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);

        playSound(randomChosenColour);
        $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
};


function playSound(name) {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
};


function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        setTimeout(function(){
                $("#" + currentColour).removeClass("pressed");
            }, 200);
};







/* var once = $(document).on("keydown", function() {
    if(once.done) return;
    $("." + randomChosenColour).fadeOut(200).fadeIn(200);
    once.done = true;
});

var randomMp3 = randomChosenColour + ".mp3";
 
var sonido = $(document).on("keydown", function() {
        var audioColor = new Audio("sounds/" + randomMp3);
        audioColor.play();
        
});


$(".btn").click(function() {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour)

        playSound(userChosenColour);  
});



function playSound() {
        var colorClickeado = new Audio("sounds/" + userClickedPattern + ".mp3")
        colorClickeado.play();
}

 */
