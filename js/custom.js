
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);

  
const load = () => {
    
  const geoText = document.querySelector('.geo-text');

  if (geoText && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
          geoText.textContent = 'Hey! We also deliver to ' + data.city;
        });
    });
  }
}

document.addEventListener('DOMContentLoaded', load);
