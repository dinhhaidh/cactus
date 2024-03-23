$(document).ready(function () {
    $("#nav-toggle").click(function(){
      $("#nav-menu").addClass("show-menu");
    });
    $("#nav-close").click(function(){
      $("#nav-menu").removeClass("show-menu");
    });
    // $("#nav__link").click(function(){
    //   $('.active-link').removeClass("show-menu");
    // });

     // khi kích vào nav__link nó sẽ ẳn đi
  $('.nav__item a').click(function(){
    $("#nav-menu").removeClass("show-menu");
  });

  $(window).scroll(function(){
    $("#header").toggleClass("blur-header", $(this).scrollTop() >= 50);
    $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
  })
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }                                                    
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  // reset: true
})
sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`) //hiệu ứng dưới lên trên
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500}) //hiệu ứng trên xuống
sr.reveal(`.new__card`, {delay: 500, interval: 100}) //hiệu ứng trên xuống dần dần
sr.reveal(`.shop__card`, {interval: 100}) //hiệu ứng trên xuống dần dần


