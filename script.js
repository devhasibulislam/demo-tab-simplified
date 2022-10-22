const layout1 = document.querySelector(".layout1-boundary");
const layout2 = document.querySelector(".layout2-boundary");
const layout3 = document.querySelector(".layout3-boundary");
const LayoutSwitchingButton = document.querySelectorAll(".SwitchLayout");
for (let i = 0; i < LayoutSwitchingButton.length; i++) {
  layout1.classList.remove("hidden");
  LayoutSwitchingButton[0].classList.add("active");
  if (LayoutSwitchingButton[0]) {
    LayoutSwitchingButton[0].addEventListener("click", function () {
      LayoutSwitchingButton[0].classList.add("active");
      LayoutSwitchingButton[1].classList.remove("active");
      LayoutSwitchingButton[2].classList.remove("active");
      layout1.classList.remove("hidden");
      layout2.classList.add("hidden");
      layout3.classList.add("hidden");
    });
  }
  if (LayoutSwitchingButton[1]) {
    LayoutSwitchingButton[1].addEventListener("click", function () {
      LayoutSwitchingButton[1].classList.add("active");
      LayoutSwitchingButton[0].classList.remove("active");
      LayoutSwitchingButton[2].classList.remove("active");
      layout2.classList.remove("hidden");
      layout1.classList.remove("layout1-boundary");
      layout1.classList.add("hidden");
      layout3.classList.add("hidden");
    });
  }
  if (LayoutSwitchingButton[2]) {
    LayoutSwitchingButton[2].addEventListener("click", function () {
      LayoutSwitchingButton[2].classList.add("active");
      LayoutSwitchingButton[0].classList.remove("active");
      LayoutSwitchingButton[1].classList.remove("active");
      layout3.classList.remove("hidden");
      layout1.classList.remove("layout1-boundary");
      layout1.classList.add("hidden");
      layout2.classList.add("hidden");
    });
  }
}
