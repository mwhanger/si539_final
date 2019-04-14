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

});
