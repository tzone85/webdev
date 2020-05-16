
// document.querySelector("button").addEventListener("click", handleClick);
//
//
// function handleClick() {
//     alert("I got clicked");
// }


// using annonimous functions
// document.querySelectorAll("button").addEventListener("click", function handleClick() {
//     alert("I got clicked");
// });
//
//
// if (document.querySelector("button")) {
//     document.querySelector("button").addEventListener("click", function () {
//         alert("clicked again");
//     })
// }


// Detecting button Press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;

        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;

        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var active_button = document.querySelector("."+currentKey);

    active_button.classList.add("pressed");

    // implemented two different ways of doing this with setTimeout and setInterval

    // setInterval(function () {
    //     active_button.classList.remove("pressed");
    // }, 200);

    setTimeout(function () {
        active_button.classList.remove("pressed");
    }, 200);
}

// audio.play();