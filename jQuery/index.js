$(document).ready(function () {

    // $("h1").css("color", "red");
    document.querySelector("h1");

    // for one or all the buttons
    $("button");

    //getter
    console.log($("h1").css("font-size"));

    //setter
    console.log($("h1").css("color", "blue"));
    $("h1").css("color", "blue");

    $("h1").addClass("big-title margin-50");

    $("h1").removeClass("big-title");

    console.log($("h1").hasClass("margin-50"));

    $("h1").text("Bye");

    $("button").text("Don't click Me");

    $("button").html("<em>Click Me!!</em>");

    // attributes
    // getter
    console.log($("img").attr("src").textContent == "Something");
    console.log($("img").attr("src"));

    // set
    console.log($("a").attr("href", "https://www.yahoo.com"));


    //ADDING EVENT LISTENERS
    $("h1").click(function () {
        $("h1").css("color", "purple");
    })

    // previously with vanilla js
    for (var i = 0; i < 5; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function () {
            document.querySelector("h1").style.color = "pink";
        });
    }

    for (var i = 0; i < document.querySelectorAll(".icon").length; i++) {
        document.querySelectorAll(".icon")[i].style.backgroundColor = "white";
    }

    // with jQuery
    $("button").click(function () {
        $("h1").css("color", "pink");
    });

    $("input").keypress(function (event) {
        console.log(event.key);
    });

    $("input").keypress(function (event) {
        $("h1").text(event.key);
    });


    $("h1").on("mouseover", function () {
        $("h1").css("color", "purple");
    });

    // adding html elements on the fly with jQuery
    $("h1").before("<button>New</button>");

    $("h1").after("<button>Madala <br></button>");

    $("h1").prepend("<button>Hoza Friday</button>");
    $("h1").append("<button>Hoza Monday</button>");

    // animation
    $("button").on("click", function () {
        $("h1").hide();
    });

    $("button").on("click", function () {
        $("h1").fadeOut();
    });

    $("button").on("click", function () {
        $("h1").fadeIn();
    });

    $("button").on("click", function () {
        $("h1").fadeToggle();
    });

    $("button").on("click", function () {
        $("h1").slideUp();
    });

    $("button").on("click", function () {
        $("h1").slideDown();
    });

    $("button").on("click", function () {
        $("h1").slideToggle();
    });

    // creating custom animations, use animate (use numeric values (2nd value on the parenthesis))

    $("button").on("click", function () {
        $("h1").animate({
            opacity: 0.5
        })
    })
});