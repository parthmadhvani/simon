var gameOver = false;

var arr1 = [];
var arr2 = [];
main();

function main() {

    var i = Math.floor(Math.random() * 4);
    var btnId = '#btn' + i
    $(btnId).fadeOut(50).fadeIn(50);
    var id1 = 'btn' + i
    arr1.push(id1);
    click();
    console.log(arr1);
}

function click() {
    {
        $("button").on("click", function () {
            var id2 = $(this).attr("id");
            arr2.push(id2);
            console.log(arr2);
        });

        check();
    }

    function check() {
        for (let index2 = 0; index2 < arr2.length+1; index2++) {
            if (arr1[index2] !== arr2[index2]) {
                gameOver = true;
                console.log("Game over")
                break;
            }
        }
        if (gameOver === false) {
            main();
        }
    }
}



// var i = Math.floor(Math.random() * 4);
// var btnId = '#btn' + i
// var id1 = 'btn' + i
// arr1.push(id1);
// console.log(arr1)

// $("button").on("click", function () {
//     var id2 = $(this).attr("id");
//     arr2.push(id2);
//     console.log(arr2)

//     for (let index = 0; index < arr1.length; index++) {
//         if (arr1[index]===arr2[index]) {
//             console.log(true)
//         }

//     }
// });

