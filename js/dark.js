function toggleDarkMode() {
  var now = new Date();
  var hour = now.getHours();
  var body = document.body;

  if (hour >= 19 || hour < 6) {
    // 添加星空背景
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = './css/skynight.css';
    document.head.appendChild(newLink); 
    
    // 添加暗色主题
    body.setAttribute('data-theme', 'dark');
  }
}
toggleDarkMode()