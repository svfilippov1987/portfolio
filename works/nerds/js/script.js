// Интерактивная карта

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 59.938794, lng: 30.315202},
    scrollwheel: false,
    zoom: 16
  });
  var marker = new google.maps.Marker({
  position: {lat: 59.938794, lng: 30.323083},
  map: map,
  icon: 'img/map-marker.png'
});
}

// Всплывающее окно

// Инициализируем переменные

var mapShowFeedbackLink = document.querySelector("#show-feedback");
var popupFeedback = document.querySelector("#feedback-popup");
var popupFeedbackOverlay = document.querySelector(".popup-overlay");
var popupFeedbackCloseButton = document.querySelector("#close-feedback-popup");

// Показать окно

mapShowFeedbackLink.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.add("show");
	popupFeedbackOverlay.classList.add("show");
});

// Убрать окно

popupFeedbackCloseButton.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.remove("show");
	popupFeedbackOverlay.classList.remove("show");
});

popupFeedbackOverlay.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.remove("show");
	popupFeedbackOverlay.classList.remove("show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  if (popupFeedback.classList.contains("show")) {
	popupFeedback.classList.remove("show");
	popupFeedbackOverlay.classList.remove("show");
  }
}
});

