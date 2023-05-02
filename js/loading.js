const pageLoadTime = Math.floor(Math.random() * 1000) + 1000
const increment = (100 / ((pageLoadTime-50) / 20)).toFixed(0); 

document.addEventListener("DOMContentLoaded", function () {
  let overlay = document.getElementById("overlay");
  let progressBar = document.getElementById("progress-bar");
  let progress = 0;

  var intervalId = setInterval(function () {
  progress += Number(increment);
      progressBar.innerHTML = progress + "%";
  if (progress >= 100) {
    clearInterval(intervalId);
    progressBar.innerHTML = "100%"; // 在這裡設置百分之百
  }
}, 20);

  function hideOverlay() {
    overlay.style.display = "none";
  }

  // 設置計時器 1-2內 秒鐘後隱藏 loading 動畫
  setTimeout(hideOverlay, pageLoadTime);
});