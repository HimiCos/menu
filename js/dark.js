// 增加暗色頁面
function toggleDarkMode() {
  var now = new Date();
  var hour = now.getHours();
  var body = document.body;
  var footer = document.getElementById('footer');
  if (hour >= 19 || hour < 6) { // 如果在晚上8点到早上6点之间
    body.setAttribute('data-theme', 'dark');
    footer.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'default');
  }
}
toggleDarkMode()