


var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

$(".menu_2").click(function () {
    password();
});

function password() {
    var pass = prompt("請輸入訪問密碼", "55554444");
    if (pass == "55554444") {
        one.style.display = "block";
    } else if (pass != null && pass != "") {
        alert("錯誤");
        one.style.display = "none";
        location.reload();
    }
}

//公司
$(".menu_2").click(function () {
    if (two.style.display == "block") {
        two.style.display = "none";
    } else if (three.style.display = "block") {
        three.style.display = "none";
    }
})

//一般
$(".menu_3").click(function () {
    if (one.style.display == "block") {
        two.style.display = "block";
        one.style.display = "none";
    } else if (three.style.display = "block") {
        two.style.display = "block";
        three.style.display = "none";
    }
})

//小程式
$(".menu_4").click(function () {
    if (two.style.display == "block") {
        two.style.display = "none";
        three.style.display = "block";
    } else if (one.style.display == "block") {
        one.style.display = "none";
        three.style.display = "block";
    } else {
        three.style.display = "block";
    }

})


