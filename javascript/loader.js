window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: 400, duration: 3.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 1.6, ease: 'power2.out'}, '-=1.6')
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=1.6')

    .to('.load-container', {opacity: 0, duration: .8, delay: 1.5})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })
}

// To the top 
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}