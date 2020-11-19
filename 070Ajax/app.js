(function () {
  document.getElementById("knap").onclick = async () => {
    let response = await fetch("https://dawa.aws.dk/landsdele/");
    let ul = document.getElementById("lst");
    let data = await response.json();
    for (var i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = data[i].nuts3 + " " + data[i].navn;
      ul.appendChild(li);
    }
  };
})();
