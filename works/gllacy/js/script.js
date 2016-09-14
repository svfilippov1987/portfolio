// Инициализируем переменные

var mapShowFeedbackLink = document.querySelector("#show-feedback");
var popupFeedback = document.querySelector("#popup-feedback");
var popupFeedbackOverlay = document.querySelector(".feedback-popup-overlay");
var popupFeedbackCloseButton = document.querySelector("#close-feedback-popup");

// Показать окно

mapShowFeedbackLink.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.add("feedback-popup-show");
	popupFeedbackOverlay.classList.add("feedback-popup-overlay-show");
});

// Убрать окно

popupFeedbackCloseButton.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.remove("feedback-popup-show");
	popupFeedbackOverlay.classList.remove("feedback-popup-overlay-show");
});

popupFeedbackOverlay.addEventListener("click", function(event) {
	event.preventDefault();
	popupFeedback.classList.remove("feedback-popup-show");
	popupFeedbackOverlay.classList.remove("feedback-popup-overlay-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  if (popupFeedback.classList.contains("feedback-popup-show")) {
	popupFeedback.classList.remove("feedback-popup-show");
	popupFeedbackOverlay.classList.remove("feedback-popup-overlay-show");
  }
}
});

