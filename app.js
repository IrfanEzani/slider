const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.slide img')

const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const auto = document.getElementById('auto')

//counter
let counter = 1;
const size = images[0].clientWidth; 


function moveRight() {
    if (counter > images.length -1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function moveLeft() {
    if (counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextbtn.addEventListener('click', () => {
    moveRight();
});

prevbtn.addEventListener('click', ()=> {
    moveLeft();
});

auto.addEventListener('click', () => {
    setInterval(() => {
        moveRight()
    }, 2000);
})

slide.addEventListener('transitionend', () => {
    if (images[counter].id == 'lastclone') {
        slide.style.transition = "none";
        counter = images.length - 2; //reach the same image(not cloned image)
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id == 'firstclone') {
        console.log(counter, images.length)
        slide.style.transition = "none";
        counter = images.length - counter; //reach the same image(not cloned image) --> 6-5 = 1, get back to first image
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

})

