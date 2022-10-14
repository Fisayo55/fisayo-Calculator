const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
const parentEl = document.querySelector(".container");
const screen = document.querySelector("#input");
const equal = document.querySelector(".btn-answer");
const clear = document.querySelector(".btn-clear");

darkMode.addEventListener("click", function (e) {
  document.body.classList.add("dark-theme");
});

lightMode.addEventListener("click", function (e) {
  document.body.classList.remove("dark-theme");
});

(function () {
  // using event delegation to  select buttons
  parentEl.addEventListener("click", function (e) {
    let value = e.target.closest(".btn-press").dataset.set;
    if (!value) return;
    screen.value += value;
  });

  // onclick on equals to to display answers
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  //clear answer field
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
