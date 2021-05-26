let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');
let cloud =  document.getElementById('cloud');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    text.style.top =  value  * -0.4 +'px';
    bird1.style.left = value * 1 + 'px';
    bird2.style.left = value * -1 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    cloud.style.left = value + 0.5+'px';
})