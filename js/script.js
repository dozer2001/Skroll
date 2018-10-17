'use strict';
let main = document.querySelector('.main'),
    click = document.querySelector('#click');

click.style.width = '70px';
click.style.height = '50px';
click.style.textAlign = 'center';
main.style.textAlign = 'center';
main.style.backgroundColor = '#353131';

function scroll() {
    let body = document.querySelector('body'),
        hight = body.scrollHeight,
        timeInterval = setInterval(skroling, 50);


    function skroling() {
        scrollBy(0, 10);
    }

}

click.addEventListener('click', function () {
    scroll()
});
