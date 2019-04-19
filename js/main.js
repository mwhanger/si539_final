document.addEventListener('DOMContentLoaded', function(e) {
    console.log('DOM Fully Loaded');
    window.addEventListener('beforeprint', function(e) {
      loc = window.location;
      foot = document.querySelector('footer').innerHTML;
      console.log(loc);
      document.querySelector('footer').innerHTML += "<br><img src=http://chart.googleapis.com/chart?cht=qr&chs=80x80&choe=UTF-8&chld=H&chl=" + loc +">";
      window.addEventListener('afterprint', function(e) {
        document.querySelector('footer').innerHTML = foot;
      })
    })

    var icon = document.querySelector("#icon")
    icon.addEventListener('click', function(e) {
    console.log('Hamburger icon clicked');
    // var x = document.getElementById("myTopnav");
    var x = document.getElementsByTagName("nav")[0];
    console.log(x);
    // if (x.className === "topnav") {
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
  })

});
