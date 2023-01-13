const slider = document.querySelector('.classes');
let isDown = false;
let startX;
let scrollLeft;
let isMoving = false;


slider.addEventListener('mousedown', function (event)  {
    isDown = true;
    slider.classList.add('active');
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function (event)  {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', function (event)  {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', function (event)  {
    if(!isDown) return;
    isMoving = true;
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;

});
//preventDefaul wont work on mouseup/down to disable click after moving slider
//after moving waith 500ms and then link will be clickable
slider.onmousemove = (function() {
    var onmousestop = function() {
        isMoving = false;
    }, thread;

    return function() {
        clearTimeout(thread);
        thread = setTimeout(onmousestop, 500);
    };
})();

slider.addEventListener('click', function (event)  {
    if(!isMoving) return;
    event.preventDefault();
});

var scroll = new Scroll();