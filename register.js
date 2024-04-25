function valcheck(id) {
   let check = null;
   let space = /\s/g;
   if (document.getElementById(id).value == "") {
      document.getElementById(id + "info").innerHTML = "필수 입력 항목";
   } else if (space.test(document.getElementById(id).value)) {
      document.getElementById(id + "info").innerHTML = "공백 제거";
   } else {
      switch (id) {
         case "id":
            check = /^[a-zA-Z0-9_]{3,20}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "영문자, 숫자, _만 입력 가능, 최소 3자 이상";
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "pw":
         case "pwcheck":
            check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "영문자, 숫자, 특수문자를 포함하여 6-12자";
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
         case "nickname":
            check = /^(?=.*[a-zA-Z0-9ㄱ-힣]).{2,4}$/;
            if (!check.test(document.getElementById(id).value)) {
               document.getElementById(id + "info").innerHTML = "공백x 한글,영문,숫자 2~4자";
            } else {
               document.getElementById(id + "info").innerHTML = "";
            }
            break;
      }
   }
}