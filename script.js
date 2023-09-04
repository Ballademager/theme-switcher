const sel = document.querySelector("select");

sel.addEventListener("change", clrSwitch);

function clrSwitch() {
  if (sel.value === "light") {
    document.querySelector("body").dataset.theme = "light";
  } else if (sel.value === "dark") {
    document.querySelector("body").dataset.theme = "dark";
  } else if (sel.value === "hawaii") {
    document.querySelector("body").dataset.theme = "hawaii";
  }
}
