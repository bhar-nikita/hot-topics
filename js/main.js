
var $wrapper = document.querySelector(".main");
  var $tabs = document.querySelectorAll("nav ul li a");

var text = {};

fetch("./partials/home.html")
  .then(function (res) {
    return res.text();
  })
  .then(function (data) {
    $wrapper.innerHTML = data;
  })

var digital = function (url) {

  if (!text[url]) {

    fetch(url)
      .then(function (res) {
        return res.text();
      })
      .then(function (data) {
        text[url] = data;
        $wrapper.innerHTML = text[url];
      });
  } else {
    $wrapper.innerHTML = text[url];
  }
};


const ClickEvent = function (event) {

  event.preventDefault();

  let press = event.target.href;

  digital(press);

};

for (let i = 0; i < $tabs.length; i++) {

  $tabs[i].addEventListener("click", ClickEvent);

}