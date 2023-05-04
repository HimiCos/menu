// 增加暗色頁面
function toggleDarkMode() {
  // 獲取值或元素
  var now = new Date();
  var hour = now.getHours();

  var loading = document.getElementById('overlay');
  var body = document.body;
  var nav = document.getElementById('nav')
  var a = document.querySelector('a');
  var luckyTitle = document.getElementById('lucky-title-img');
  var gift = document.getElementById('my-lucky-gift.won');
  var summaryElement = document.querySelector('details summary');
  var content = document.getElementsByClassName('content')[0];
  var cardDescription = document.getElementsByClassName('card-description')[0];
  var footer = document.getElementById('footer');

  if (hour >= 19 || hour < 6) { // 如果在晚上8点到早上6点之间
    // 添加星空背景
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = './css/skynight.css';
    document.head.appendChild(newLink); 

    // 替换 darkLuckyTitle
    var darkLuckyTitlePath = './assets/dark-lucky-tilte.webp';
    if (luckyTitle) {
          luckyTitle.src = darkLuckyTitlePath;
    }
    
    // 添加暗色主题
    loading.setAttribute('data-theme', 'dark');
    body.setAttribute('data-theme', 'dark');
    nav.setAttribute('data-theme', 'dark');
    a.setAttribute('data-theme', 'dark');
    gift.setAttribute('data-theme', 'dark');
    summaryElement.setAttribute('data-theme', 'dark');
    content.setAttribute('data-theme', 'dark');
    cardDescription.setAttribute('data-theme', 'dark');
    footer.setAttribute('data-theme', 'dark');
  }
}
toggleDarkMode()