function convertCurrency() {
  var fromm = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var xmlhttp = new XMLHttpRequest();
  var url =
    "http://data.fixer.io/api/latest?access_key=32537a2587f6bab022439a99c2811ef1&symbols=" +
    fromm +
    "," +
    to;

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = xmlhttp.responseText;
      var jsResult = JSON.parse(result);

      var oneUnit = jsResult.rates[to] / jsResult.rates[fromm];
      var amount = document.getElementById("fromAmount").value;
      document.getElementById("ToAmount").value = (oneUnit * amount).toFixed(3);
    }
  };
}
