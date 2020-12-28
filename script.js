var nav = $("#navigation");
var modal = $("#mene-modal");

$(document).ready(function () {
  $("#slide-up-title").addClass("active");
  $("#slide-up-description").addClass("active");

  $("#slide-up-image img").on("load", function () {
    $("#slide-up-image").addClass("active");
  });
});

$(window).on("scroll", function (e) {
  if (window.scrollY > 50) {
    nav.addClass("scroll");
  } else {
    nav.removeClass("scroll");
  }
});

$("button#menu").on("click", function () {
  modal.fadeIn();
});

$("button#close").on("click", function () {
  modal.fadeOut();
});
