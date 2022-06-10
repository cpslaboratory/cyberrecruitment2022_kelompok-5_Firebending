setInterval(function () {
    fetch("https://firebending.herokuapp.com/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("gass").innerHTML = res.KadarGass;
        document.getElementById("indikator").innerHTML = res.Indikator;
      });
  }, 1000);