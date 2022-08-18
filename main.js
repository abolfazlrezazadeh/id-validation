function myFunction() {
    var xnumber = document.getElementById("number1").value;
    var result = "true";

    if (xnumber <= 0) {
      result = "false";
      document.getElementById("number1").style.border = "1px solid red";
      document.getElementById("demo").style.color = "red";
    }
    document.getElementById("demo").innerHTML = result;
  }
  function tgCheckCodemeli(codemeli) {
    var amount = 0;
    for (var i = 0; i < 9; i++) amount += codemeli.substr(i, 1) * (10 - i);
    var ctrlnumber = codemeli.substr(9, 1);
    var bagimande = amount % 11;
    var natige = (document.getElementById("number1").style.borderColor =
      "red");
    if (bagimande < 2) {
      if (bagimande == ctrlnumber) natige = true;
    } else {
      if (11 - bagimande == ctrlnumber)
        natige = document.getElementById("number1").style.borderColor =
          "green";
    }
  }