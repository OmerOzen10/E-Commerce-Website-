const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closee = document.getElementById('close');

const MainImg = document.getElementById("MainImg");
const smallImages = document.querySelectorAll(".small-img");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (closee) {
    closee.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

smallImages.forEach(function(smallImage) {
    smallImage.addEventListener("click", function() {
        MainImg.src = smallImage.src;
    });
});
