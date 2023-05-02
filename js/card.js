// 實現滑動按壓卡片效果
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('touchstart', () => {
    card.style.transform = 'scale(0.95)';
  });

  card.addEventListener('touchend', () => {
    card.style.transform = 'scale(1)';
  });
});