// Set divs to hidden until loaded
const contentBoxes = document.getElementsByClassName('content-box');

// Set all content-boxes to transparent until full page loaded
for (var i = 0; i < contentBoxes.length; i++) {
    contentBoxes[i].classList.add('hidden');
}

// Only show the content boxes once the whol DOM has loaded
window.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < contentBoxes.length; i++) {
        makeVisible(i);
    }
})

// Remove the hidden class and add visible, initiating the animation of the content boxes showing up
function makeVisible(i) {
    setTimeout(() => {
        contentBoxes[i].classList.add('visible');
        contentBoxes[i].classList.remove('hidden');
    }, 500*i);
}