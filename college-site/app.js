let text = document.getElementById('text');
let earth = document.getElementById('earth-png');
let moon = document.getElementById('moon-png');
let btn = document.getElementById('btn');
let planet = document.getElementById('planet-png');
let orbit = document.getElementById('orbit-png');
let rocket = document.getElementById('rocket-png');
let header = document.getElementById('header');
  
window.addEventListener('scroll', function(){

let value = window.scrollY;
    
text.style.top = 50 + value * -0.1 + '%';

earth.style.top = 10 + value * -0.2 + 'px';
earth.style.top = value * 1.3 + 'px';

moon.style.top = 50 + value * -0.5 + 'px';
moon.style.left = value * 1.5 + 'px';

btn.style.marginTop = value * 1.5 + 'px';

planet.style.top = value * -0.5 + 'px';
planet.style.left = value * -1.5 + 'px';

orbit.style.top = value * 0.25 + 'px';

rocket.style.top = 10 + value * +0.2 + 'px';
rocket.style.top = value * -4 + 'px';

header.style.top = value * 0.5 + 'px';
});

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

