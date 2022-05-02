
var arrBlink = [];
var arrClick = [];
var level = 0;

$(document).on("keypress", function () {
    if (level == 0) {
        blink();
    }
})

$("button").on("click", function () {
    if (level == 0) {
        setTimeout(blink,300);
    }
    else {
        var clickBtnId = $(this).attr("id");
        arrClick.push(clickBtnId);
        check(arrClick.length - 1);
        $(this).addClass("animation")
        setTimeout(function () {
            $("button").removeClass("animation")
        }, 50)
    }
})



function blink() {

    arrClick = [];
    level++;
    $("p").text("Level " + level)
    var i = Math.floor(Math.random() * 4);
    var flashBtnId = '#btn' + i;
    arrBlink.push(flashBtnId.slice(1, 5))
    $(flashBtnId).fadeOut(100).fadeIn(100);
}

function check(current) {
    if (arrClick[current] === arrBlink[current]) {
        if (arrClick.length === arrBlink.length) {
            setTimeout(blink, 1000)
        }
        gameOver = false;
    }

    else {
        gameover();
    }
}

function gameover() {
    arrBlink = [];
    level = 0;
    gameOver = true;

    $("body").addClass("gameover");
    $("p").text("Game over")
    setTimeout(function () {
        $("p").text("Press anything to start...")
        $("body").removeClass("gameover");
    }, 1200)
}