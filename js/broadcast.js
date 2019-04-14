document.addEventListener('DOMContentLoaded', function(e) {
    console.log('DOM Fully Loaded');

    // Broadcast Bar & Cookies Based on YouTube Tutorial and CodePen Example from Web-Crunch
    // https://www.youtube.com/watch?v=L-K6qLvLsbE
    // https://codepen.io/webcrunchblog/pen/ajMevx
    // Also, a W3 Schools tutorial with similar functions
    // https://www.w3schools.com/js/js_cookies.asp
    var broadcast = document.querySelector('.broadcastbar');
    var closeBroadcast = document.querySelector('.hide-broadcast-target');
    var cookie = readCookie('hide_broadcast_bar');

    if (cookie == "true") {
      broadcast.style.display = "none";
    }

    closeBroadcast.addEventListener('click', function(e) {
    if(cookie != "true") {
      broadcast.style.display = "none";
      createCookie('hide_broadcast_bar', "true", 7);
    }
    e.preventDefault();
  });

    function createCookie(name, value, days) {
    if(days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
    console.log(document.cookie);
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

    }
    return null;
  }

});
