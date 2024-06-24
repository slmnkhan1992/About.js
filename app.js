const h4 = document.querySelector("#description h4");
const info = document.querySelector("#info");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.innerHTML == "Vision") {
      h4.innerHTML = "Vision";
      info.innerHTML =
        "The vision of the Karakoram Highway (KKH) is to serve as a vital artery of connectivity, enhancing trade and cultural exchange between Pakistan and China. It aims to promote regional development by facilitating easier access to remote areas and fostering economic opportunities along its route. The KKH embodies a commitment to international cooperation and infrastructure development, symbolizing a link that transcends geographical barriers and fosters mutual understanding between nations.";
      buttons[0].classList.add("style");
      buttons[1].classList.remove("style");
      buttons[2].classList.remove("style");

    } else if (button.innerHTML == "History") {
      h4.innerHTML = "History";
      info.innerHTML = "TThe Karakoram Highway (KKH) is a marvel of engineering completed in 1979, linking Pakistan's Gilgit-Baltistan region with China's Xinjiang province. It spans over 1,300 kilometers through the rugged Karakoram mountain range, crossing high-altitude passes like the Khunjerab Pass at over 4,600 meters. Originally built for strategic and trade purposes, it has since facilitated cultural exchange and economic growth between Pakistan and China, becoming a symbol of international cooperation and connectivity in one of the world's most challenging terrains.";
      buttons[1].classList.add("style");
      buttons[0].classList.remove("style");
      buttons[2].classList.remove("style");

    } else if (button.innerHTML == "Goals") {
      h4.innerHTML = "Goals";
      info.innerHTML = "Enhancing regional connectivity and accessibility between Pakistan and China.      Facilitating trade and economic growth by improving transportation link. Pomoting tourism and cultural exchange along its route.Ensuring infrastructure resilience and safety in challenging mountainous terrain. Serving as a symbol of bilateral cooperation and friendship between the two nations.";
      buttons[0].classList.remove("style");
      buttons[1].classList.remove("style");
      buttons[2].classList.add("style");
    }
  });
});
