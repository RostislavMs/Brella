const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const loginClick = document.getElementById("loginClick");

loginClick.addEventListener("click", () => {
  loginButton.classList.toggle("active");
  loginButton.classList.toggle("hidden");
  registerButton.classList.toggle("active");
  registerButton.classList.toggle("hidden");
  loginClick.classList.toggle("rotate");
});

$(document).ready(function () {
  var headerMobile = $(".header_mobile");
  $(".hamburger").on("click", function () {
    headerMobile.addClass("is-active");
  });
  $(".hamburger_exit").on("click", function () {
    headerMobile.removeClass("is-active");
  });
});