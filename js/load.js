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
    }, 250*i);
}