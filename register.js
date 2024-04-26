changeval();

function changeval() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let randomString = "";
   for (let i = 0; i < 8; i++) {
      randomString += chars[Math.floor(Math.random() * chars.length)];
   }
   document.getElementById("autoread").value = randomString;
}

function valcheck(id) {
   let check = null;
   let space = /\s/g;
   if (document.getElementById(id).value == "") {
      document.getElementById(id + "info").innerHTML = "필수 입력 항목";
      document.getElementById("done").disabled = true;
      document.getElementById("done").style.backgroundColor = "pink";
   } else if (space.test(document.getElementById(id).value)) {
      document.getElementById(id + "info").innerHTML = "공백 제거";
      document.getElementById("done").disabled = true;
      document.getElementById("done").style.backgroundColor = "pink";
   } else {
      document.getElementById(id + "info").innerHTML = "";
      switch (id) {
         case "id":
            check = /^[a-zA-Z0-9_]{3,10}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "영문자, 숫자, _만 입력 가능, 최소 3자 이상";
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "pw":
            check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "영문자, 숫자, 특수문자를 포함하여 6-12자";
               document.getElementById("done").disabled = true;
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "pwcheck":
            check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;
            if (document.getElementById(id).value != document.getElementById("pw").value) {
               document.getElementById(id + "info").innerHTML = "비밀번호 다름";
               document.getElementById("done").disabled = true;
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "nickname":
            check = /^[a-zA-Z0-9ㄱ-힣]{2,10}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "공백x 한글,영문,숫자 2~4자";
               document.getElementById("done").disabled = true;
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "homeNumber":
         case "phoneNumber":
            check = /^[0-9]{1,20}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "-를 제외한 번호만 입력";
               document.getElementById("done").disabled = true;
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "auto":
            if (document.getElementById(id).value != document.getElementById(id + "read").value) {
               document.getElementById(id + "info").innerHTML = "입력 값 다름";
               document.getElementById("done").disabled = true;
               document.getElementById("done").style.backgroundColor = "pink";
            } else {
               document.getElementById(id + "info").innerHTML = "";
               document.getElementById("done").disabled = false;
               document.getElementById("done").style.backgroundColor = "#ff4465";

            }
            break;
      }
   }
}
