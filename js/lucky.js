// 定义一个函数，用于获取用户的抽奖次数
function getLotteryCount() {
  var cookieArr = document.cookie.split(";");
  var lotteryCount = 1;
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (cookiePair[0].trim() == "抽奖次数") {
      lotteryCount = parseInt(cookiePair[1]);
    }
  }
  return lotteryCount;
}
function updateLotteryCount(count) {
  document.cookie = "抽奖次数=" + count + ";expires=Thu, 31 Dec 2020 23:59:59 UTC;path=/";
}

// 定义一个变量，表示当前用户的抽奖次数
var lotteryCount = getLotteryCount();

// 獲取中獎記錄元素
const winningContainer = document.getElementById('my-lucky-gift');
const h2Element = winningContainer.querySelector('h2');
const spanElement = document.getElementById('span1');
const spanTime = document.getElementById('span2');

const myLucky = new LuckyCanvas.LuckyWheel('#my-lucky', {
width: '300px',
height: '300px',
blocks: [{ padding: '10px', background: '#617df2' }],
prizes: [
    { background: '#e9e8fe', range: 20, fonts: [{ text: '牙线', top: '10%'}] },
    { background: '#b8c5f2', range: 20, fonts: [{ text: '洗衣液', top: '10%' }] },
    { background: '#e9e8fe', range: 20, fonts: [{ text: '面包', top: '10%' }] },
    { background: '#b8c5f2', range: 20, fonts: [{ text: '湿巾', top: '10%' }] },
    { background: '#e9e8fe', range: 20, fonts: [{ text: '螺蛳粉', top: '10%' }] },
    { background: '#b8c5f2', range: 20, fonts: [{ text: '米线', top: '10%' }] },
],
buttons: [{
    radius: '35%',
    background: '#8a9bf3',
    pointer: true,
    fonts: [{ text: '开始', top: '-10px' }]
}],
start: function () {
    // 添加限制用户抽奖次数的判断逻辑
    if (lotteryCount <= 0) {
        alert('您的抽奖次数已用完，请明天再来哦~');
        return;
    }
    
    //减少用户的抽奖次数
    lotteryCount--;
    updateLotteryCount(lotteryCount);

    // 开始游戏
    myLucky.play()
    // 使用定时器模拟接口
    setTimeout(() => {
    // 结束游戏
    myLucky.stop()
    }, 3000)
},
  end: function (prize) { // 游戏停止时触发
    const prizeText = prize.fonts[0].text;
    alert('恭喜中奖: ' + prizeText)

    // 显示中奖信息
    h2Element.innerText = '中奖信息';
    spanElement.innerHTML = `恭喜中奖：<strong>${prizeText}</strong>`;
    spanTime.textContent = `中奖时间：${new Date().toLocaleString()}`;

    // 加上 CSS 样式
    winningContainer.classList.add('won');
    spanTime.classList.add('won');

    // 存儲中獎記錄
    prize.timeStamp = new Date().toLocaleString();
    var prizeJson = JSON.stringify(prize);
    localStorage.setItem('prizeData', prizeJson);
}
});

window.onload = function () {
  // 判断用户是否已经抽过奖
  var lastDate = localStorage.getItem("lastDate");
  var today = new Date().toLocaleDateString();
  if (lastDate === today) {
      lotteryCount = 0;
  } else {
      localStorage.setItem("lastDate", today);
      lotteryCount = 1;
  }
};

// 定义一个函数，用于获取用户的中獎記錄
function getPrizeJson() {
  if (localStorage.getItem('prizeData')) {
  var prizeJson = localStorage.getItem('prizeData');
  var prize = JSON.parse(prizeJson);
  var prizeText = prize.fonts[0].text;
  var timeStamp = prize.timeStamp;
    
  // 显示中奖信息
  h2Element.innerText = '中奖信息';
    spanElement.innerHTML = `恭喜中奖：<strong>${prizeText}</strong>`;
    spanTime.textContent = `中奖时间：${timeStamp}`;

  // 加上 CSS 样式
  winningContainer.classList.add('won');
  spanTime.classList.add('won');
} else {
  return;
}
}
getPrizeJson();