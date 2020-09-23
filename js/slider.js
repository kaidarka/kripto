const links = document.querySelectorAll('.projects__link'),
slides = document.querySelectorAll('.slider__item')



const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeLinks = n => {
    for(link of links){
        link.classList.remove('active');
    }
    links[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeLinks(ind);
}

links.forEach((item, link) => {
    item.addEventListener('click', ()=>{
        index = link;
        prepareCurrentSlide(index);
    })
});
