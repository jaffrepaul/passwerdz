document.addEventListener('DOMContentLoaded', () => {
  const start = document.getElementById('start');
  start.addEventListener('click', () => {
    toggleClasses(document.getElementById('start-screen'), 'hide', 'show');
    toggleClasses(document.getElementById('game-screen'), 'hide', 'show');
  });

  const toggleClasses = (element, ...classNames) => {
    classNames.forEach(className => element.classList.toggle(className));
  };
});
