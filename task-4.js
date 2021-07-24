const buttonRef = document.querySelector('.js-button');
const handleBtnClck = function () {
  console.log('клик кнопки');
};
buttonRef.addEventListener('click', handleBtnClck);

window.navigator.geolocation.getCurrentPosition();
