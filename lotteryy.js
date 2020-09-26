function randomNumber() {
  var x = Math.floor(Math.random() * 10 + 10);
  document.getElementById("random").innerHTML = x;
  document.getElementById("changetext").style.fontSize = 80;
  document.getElementById("changetext").innerHTML = "HERE IS YOUR LOTTERY NUMBER";
  document.getElementById("retry").innerHTML = "RETRY";
}
function condition() {
  var rslt = document.getElementById("numinput").value;
  if (rslt == 12 || rslt == 15 || rslt == 19) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("incheckdiv").style.display = "none";
  } /*else if (rslt == 15) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("incheckdiv").style.display = "none";
  } else if (rslt == 19) {
    document.getElementById("winner").style.display = "block";
    document.getElementById("incheckdiv").style.display = "none";
  }*/ else {
    document.getElementById("looser").style.display = "block";
    document.getElementById("incheckdiv").style.display = "none";
  }
}
