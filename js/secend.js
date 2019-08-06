
  let vm = new Vue({
    el: "#page2",
    data: data,
  
    methods: {
  
      //公司
      password() {
        var one = document.querySelector("#one");
        var two = document.querySelector("#two");
        var three = document.querySelector("#three");
        var pass = prompt("請輸入訪問密碼", "");
        //密碼設定
        if (pass == "55554444") {
          one.style.display = "block";
        } else if (pass != null && pass != "") {
          alert("錯誤");
          one.style.display = "none";
          location.reload();
        }
  
        if (two.style.display == "block") {
          two.style.display = "none";
        } else if (three.style.display = "block") {
          three.style.display = "none";
        }
      },//---------公司
  
      //一般
      numbertwo() {
        var one = document.querySelector("#one");
        var two = document.querySelector("#two");
        var three = document.querySelector("#three");
  
        if (one.style.display == "block") {
          two.style.display = "block";
          one.style.display = "none";
        } else if (three.style.display = "block") {
          two.style.display = "block";
          three.style.display = "none";
        }
      },//-------一般
  
      //小程式
      numberthree() {
        var one = document.querySelector("#one");
        var two = document.querySelector("#two");
        var three = document.querySelector("#three");
  
        if (two.style.display == "block") {
          two.style.display = "none";
          three.style.display = "block";
        } else if (one.style.display == "block") {
          one.style.display = "none";
          three.style.display = "block";
        } else {
          three.style.display = "block";
        }
      },//---------小程式
  


    }//methods
  })
  
  
  