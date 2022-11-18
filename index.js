console.log("running");
var oMarks = document.getElementById("obtainMarks");
var tMarks = document.getElementById("totalMarks");

var rShow = document.getElementById("textarea");
var checkBtn = document.getElementById("checkResult");
checkBtn.addEventListener("click" , check);
function check(){
    rShow.innerHTML = "You Obtained "+ ( oMarks.value * 100 / tMarks.value).toFixed(2) + "% Marks";
}
