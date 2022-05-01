$(document).on("keypress", function () {

    var arrBlink = [];
    var arrClick = [];
    var gameOver = false;

    blink();

    function blink() {
        console.log(arrClick);
        var i = Math.floor(Math.random() * 4);
        var flashBtnId = '#btn' + i;
        arrBlink.push(flashBtnId.slice(1, 5))
        $(flashBtnId).fadeOut(50).fadeIn(50);
        click();
    }

    function click() {
        $("button").on("click", function () {
            var clickBtnId = $(this).attr("id");
            arrClick.push(clickBtnId);
            //console.log(arrClick)
            check();
        })
    }
 
    function check() {
        
        if (arrClick.length === arrBlink.length) {
            for (let index2 = 0; index2 < arrBlink.length; index2++) {
                if (arrBlink[index2] !== arrClick[index2]) {
                    gameOver = true;
                    console.log("game over")     
                    break;
                }
            }
            if (gameOver === false) {
                setTimeout(blink, 1000)
            }
        }
        else click();
    }
})