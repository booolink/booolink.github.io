


var one = document.querySelector("#one");
var two = document.querySelector("#two");

$(".menu_2").click(function () {
    password();
});
function password() {
    var pass = prompt("請輸入訪問密碼", "");
    if (pass == "55554444") {
        one.style.display = "block";
    } else if (pass != null && pass != "") {
        alert("錯誤");
        one.style.display = "none";
        location.reload();
    }
}

$(".menu_3").click(function () {
    if (one.style.display == "block") {
        two.style.display = "block";
        one.style.display = "none";
    } else {
        two.style.display = "block";
    }
})

$(".menu_2").click(function () {
    if (two.style.display == "block") {
        two.style.display = "none";
    } else {
        two.style.display == "block";
    }
})


