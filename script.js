const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");

  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});
function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;
  // giving the hands their functions
  secondHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minuteHand.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  hourHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
}
// calling the function with the time frame
setInterval(getTime, 1000);

getTime();
