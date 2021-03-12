$(function () {
  $.scrollUp({
    scrollDistance: 50,
    scrollFrom: "top",
    scrollSpeed: 1000,
    scrollText: "Scroll to top",
    scrollImg: true,
  });
});

const text = document.querySelector("div").textContent;
for (let i = 1; i <= 12; i++) {
  document.write("<br>" + text + "<br>");
}
