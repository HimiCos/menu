// 增加暗色頁面
function toggleDarkMode() {
  var now = new Date();
  var hour = now.getHours();
  var body = document.body
  if (hour >= 19 || hour < 6) { // 如果在晚上8点到早上6点之间
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}
toggleDarkMode()