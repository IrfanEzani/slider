const slide = document.querySelector('.slide')
const images = document.querySelectorAll('.slide img')

const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')

//counter
let counter = 1;
const size = images[0].clientWidth; 

nextbtn.addEventListener('click', () => {
    if (counter >= images.length -1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevbtn.addEventListener('click', ()=> {
    if (counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

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

