'use strict'

/////////////////////////////
// IMAGE EXPAND MODAL
/* const imageModal = (function() {
    const modal = document.querySelector('.modal');
    const previews = Array.from(document.querySelectorAll('.img-container img'));
    const modalImage = document.querySelector('.full-img');
    const modalText = document.querySelector('.caption');

    // Pop up modal 
    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            modal.classList.add('open');
            modalImage.classList.add('open')

            // Change image
            const modalImageSrc = preview.getAttribute('data-original');
            modalImage.src = `./img/large/${modalImageSrc}`;

            // Change text
            const altText = preview.alt;
            modalText.textContent = altText;
        });
    });

    // Close modal 
    if (modal) {
        modal.addEventListener('click' , e => {
            if (e.target.classList.contains('open')) {
                modal.classList.remove('open');
                modalImage.classList.remove('open');
            };
        });
    }
})(); */


/////////////////////////////
// MOUSE CURSOR 
/* const mouseCursor = (function(){
    const mouseCursor = document.querySelector('.cursor');
    const navLinks = document.querySelectorAll('.nav-links li');

    const cursor = e => {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    };

    window.addEventListener('mousemove', cursor);

    navLinks.forEach(link => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            link.classList.remove('hovered-link');
        });
        
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            link.classList.add('hovered-link');
        });
    });
})(); */


/////////////////////////////
// FANCY TEXT
/* const fancyText = (function() {
    const text = document.querySelector('.text');
    const splitText = text.textContent.split("");
    text.textContent = "";

    // Add span to each character
    for (let i = 0; i < splitText.length; i ++) {
        text.innerHTML += `<span>${splitText[i]}</span>`;
    };

    // Give an animation
    const onTick = () => {
        const span = document.querySelectorAll('span')[character];
        span.classList.add('fade-in');
        character++;

        // Finish animation
        if (character === splitText.length) {
            complete();
            return;
        };
    };

    let character = 0;
    let timer = setInterval(onTick, 50);

    const complete = () => {
        clearInterval(timer);
        timer = null;
    };
})(); */


/////////////////////////////
// NAV COLOR BOX 
/* const navColorBox = (function(){
    const sections = document.querySelectorAll('.nav-colorBox section');
    const colorBox = document.querySelector('.colorBox');
    const gradients = [
        'linear-gradient(to right top, #f46b45, #eea849)',
        'linear-gradient(to right top, #005c97, #363795)',
        'linear-gradient(to right top, #e53935, #e35d5b)'
    ];

    const options = {
        threshold: 0.7  // 70%
    };

    const navCheck = entries => {
        entries.forEach(entry => {
            // Match current section and nav
            const className = entry.target.className;    
            const activeAnchor = document.querySelector(`[data-page=${className}]`);
            const gradientIndex = entry.target.getAttribute('data-index');

            // Set intersection rectangle of nav
            const coords = activeAnchor.getBoundingClientRect();
            const directions = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            };

            // Animate
            if (entry.isIntersecting) {
                colorBox.style.setProperty('left', `${directions.left}px`);
                colorBox.style.setProperty('top', `${directions.top}px`);
                colorBox.style.setProperty('width', `${directions.width}px`);
                colorBox.style.setProperty('height', `${directions.height}px`);
                colorBox.style.background = gradients[gradientIndex]; 
            };
        });
    };

    // Createing intersection observer
    const observer = new IntersectionObserver(navCheck, options);

    // Targeting an element to be observed
    sections.forEach(section => {
        observer.observe(section); 
    });
})(); */


/////////////////////////////
// FADE IN HEADER IMAGE
/* const fadeInHeader = (function() {
    const bgImage = document.querySelector('.bg');

    window.addEventListener('scroll', () => {
        bgImage.style.opacity = 1 - +window.pageYOffset/550+'';
        bgImage.style.top = +window.pageYOffset+'px';
        bgImage.style.backgroundPositionY = - +window.pageYOffset/2+'px';
    });
})();  */


/////////////////////////////
// AIRPOD VIDEO ANIMATION
/* const airpodVideo = (function() {
    const intro = document.querySelector('.intro');
    const video = document.querySelector('video');
    const text = document.querySelector('h1');
    const section = document.querySelector('section');
    
    // Scroll Magic
    const controller = new ScrollMagic.Controller();

    // Scenes of Video
    const scene = new ScrollMagic.Scene({
        duration: 6000,                                     // Video duration is 6s, 
        triggerElement: intro,
        triggerHook: 0                                      // Position to start or end ab animation
    })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

    // Video Animation
    let accelAmount = 0.1;                                // Frame cut 
    let scrollPosition = 0;
    let delay = 0;

    scene.on('update', e => {                               // On scroll (Event listener)
        scrollPosition = e.scrollPos / 1000;                // It became 6s by diving 1000. not 6 ms.
    });

    setInterval(() => {
        delay += (scrollPosition - delay) * accelAmount; 
        video.currentTime = delay;
    }, 33.3);


    // Scenes of text
    const textAnimation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});

    let secondScene = new ScrollMagic.Scene({
        duration: 3000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnimation)
    .addTo(controller);

})(); */



/////////////////////////////
// FULL PAGE ANIMATION 
// fullPage, tweenMax, and timeline max
/* const fullPage = (function() {

    new fullpage('#full-page', {
        autoScrolling: true,
        navigation: true,
        onLeave: (origin, destination, direction) => {
            const section = destination.item;
            const title = section.querySelector('h1');                                  // It applies entire h1
            const timeLine = new TimelineMax({delay: 0.5});
            timeLine.fromTo(title, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1});    // target, duration, from, to

            // It applies specific section
            if (destination.index === 1) {
                const chairs = document.querySelectorAll('.chair');
                const des = document.querySelector('.description');

                timeLine
                    .fromTo(chairs, 0.5, { x: '100%' }, { x: '-35%' })
                    .fromTo(des, 0.7, { y: 50, opacity: 0 }, { y: 0, opacity: 1})
                    .fromTo(chairs[0], 0.7, { opacity: 0 }, { opacity: 1 })
                    .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
                    .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 })
            };
        } 
    });

})(); */


/////////////////////////////
// PAGE ANIMATION WITH GSAP 1
/* const pageAnimation = (function(){
    const hero = document.querySelector('.hero');
    const slider = document.querySelector('.slider');
    const logo = document.querySelector('#logo');
    const menu = document.querySelector('.menu');
    const headline = document.querySelector('.headline');

    const timeline = new TimelineMax();
    
    timeline
        .fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
        .fromTo(hero, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
        .fromTo(slider, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, "-=1.2") // overlap or gaps ("+=1")
        .fromTo(logo, 0.5, { opacity: '0', x: '30' }, { opacity: '1', x: '0', ease: Power2.easeInOut }, "-=0.5")    
        .fromTo(menu, 0.5, { opacity: '0', x: '30' }, { opacity: '1', x: '0', ease: Power2.easeInOut }, "-=0.5")  
        .fromTo(headline, 0.5, { opacity: '0', x: '30' }, { opacity: '1', x: '0', ease: Power2.easeInOut }, "-=0.5")     
})(); */


///////////////////////////////////////////
// PAGE ANIMATION WITH GSAP 2
/* const navAnimation = (function() {
    const navBtn = document.querySelector('.nav-btn');
    const cover = document.querySelector('.cover');
    const nav = document.querySelector('nav');
    const navOpen = document.querySelector('.nav-open');

    const timeline = new TimelineMax( { paused: true, reversed: true });

    // Animate 
    timeline
        .to(cover, 1, { width: '60%', ease: Power2.easeOut })
        .to(nav, 1, { height: '100%', ease: Power2.easeOut }, '-= 0.5')
        .fromTo(navOpen, 0.5, { opacity: 0, x: '50', ease: Power2.easeOut }, { opacity: 1, x: '0', onComplete: function() { navOpen.style.pointerEvents = 'auto'} } ) // onComplete: it runs after finish animation

    // Prevent animation when animation is active
    navBtn.addEventListener('click', e => {
        if (!timeline.isActive()) toggleTween(timeline);
    });

    const toggleTween = tween => {
        tween.reversed() ? tween.play() : tween.reverse();
    };
})(); */


///////////////////////////////////////////
// BLENGDING IMAGE ANIMATION 
// TweenMax, Hover-effect, Three js
/* const blendingImage = (function(){
    new hoverEffect({
        parent: document.querySelector('.distortion'),     
        intensity: 0.1,
        image1: '../img/blending/blending-1.jpg',
        image2: '../img/blending/blending-2.jpg',
        displacementImage: '../img/blending/blender.png'        // Blending Image
    });
})(); */


///////////////////////////////////////////
// BUBBLE NAVIGATION
/* const bubbleNav = (function(){
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {

        // Bubble nav
        navLinks.classList.toggle('open');

        // Fade li items
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    });
})(); */



///////////////////////////////////////////
// GSAP ANIMATION 3
/* const pageAnimation = (function(){
    const section = document.querySelector('section');
    const landing = document.querySelector('.landing');
    const image = document.querySelector('.image-container');
    const blackBox = document.querySelector('.blackBox');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('nav');

    const timeline = new TimelineMax( { delay: '.5' });

    timeline
        .fromTo(section, 1, { width: '100%', ease: Power2.easeOut }, { width: '70%', ease: Power2.easeInOut })
        .fromTo(blackBox, 1.5, {opacity: '0', x: '-300'}, {opacity: 1, x: '500'})
        .to(blackBox, 1, {opacity: '0', ease: Power2.easeOut}, '-=1')
        .fromTo(landing, 1, {opacity: '0', y: '50%', ease: Power2.easeOut}, {opacity: '1', y: '-50%', ease: Power2.easeOut}, '-=1')
        .to(image, 1, {width: '40%', ease: Power2.easeInOut}, '-=.8')
        .fromTo(nav, 1, {opacity: 0, y: '50%'}, {opacity: 1, y: '0%'}, '-=.7')
        .to(logo, .5, {fontSize: '2rem', ease: Power2.easeInOut}, '-=.5')
})();  */



///////////////////////////////////////////
// SCROLL MAGIC & GSAP ANIMATION 
/* const scrollMoveIcon = (function(){

    const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: 100, y: -20 },
            { x: 300, y: 10 },
            { x: 500, y: 100 },
            { x: 750, y: -100 },
            { x: 350, y: -50 },
            { x: 600, y: 100 },
            { x: 800, y: 0 },
            { x: window.innerWidth, y: -250 }
        ]
    };

    // TweenMax
    const tween = new TimelineMax();

    tween.add(
        TweenMax.to('.plane', 1, {
            bezier: flightPath,
            ease: Power1.easeInOut
        })
    );

    // ScrollMagic
    const controller = new ScrollMagic.Controller();
    
    const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 5000,
        triggerHook: 0
    })
    .setTween(tween)
    .setPin('.animation')
    .addIndicators()
    .addTo(controller);
})();

 */



///////////////////////////////////////////
// SCROLL MAGIC IMAGE REVEAL
/* const sections = Array.from(document.querySelectorAll('.section'));

sections.forEach(section => {
    const imageContainer = section.querySelector('.image-box');
    const text = section.querySelector('.textBox');
    const image = section.querySelector('.image-box img');

    const controller = new ScrollMagic.Controller();
    const tween = new TimelineMax();

    tween
    //.fromTo(section, .7, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })
    .fromTo(imageContainer, .5, { width: '0' }, { width: '100%', ease: Power2.easeInOut })
    .fromTo(image, .5, { width: '0' }, { width: '100%', ease: Power2.easeInOut}, '-=.3')
    .fromTo(text, .5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut })


    const sectionScene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.5
    })
    .setTween(tween)
    .addIndicators()
    .addTo(controller)
}); */



///////////////////////////////////////////
// GSAP 3 TEXT REVEAL
/* const gsap3 = (function(){
    //gsap.from('.content', { opacity: 0, duration: 1, y: -50, ease: 'elastic(1, 0.3)' })
    // Prevent creating scroll bar (x or y) -> Use backgroundPosition: '200px 0'; (bg-image)

    const rule = CSSRulePlugin.getRule('span::after');
    const tl = gsap.timeline({ defaults: {duration: 1 }});
    
    tl
    .from('.anim1', { opacity: 0, y: -50, stagger: 0.6 })
    .to(rule, { cssRule: { scaleY: 0}, duration: 1.8 }, '-=2')
    .from('.img-container', { opacity: 0, y: 30 , duration: 1, delay: 0.5 }, '-=1.5')

    // Toggle
    document.querySelector('#cta').addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
})(); */


///////////////////////////////////////////
// Parallax Page with scrollMagic
/* const parallaxPage = (function() {
    const aboutTitle = document.querySelector('.about-title');
    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: aboutTitle,
        triggerHook: 0,
        duration: '200%'
    })
    .setPin(aboutTitle)
    .addIndicators()
    .addTo(controller)
})(); */


///////////////////////////////////////////
// NAVBAR ANIMATION ON PAGE SCROLL
/* const navScroll = (function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            const id = section.getAttribute('id');
            const activeNav = document.querySelector(`a[href="#${id}"]`);

            // Clear nav links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add animation
            activeNav.classList.add('active');
        });
    });
})(); */



///////////////////////////////////////////
// CHANGE BACKGROUND COLOR ON SCROLL
/* const changeBg = (function () {
    const section = document.querySelector('section');
    const background = document.querySelectorAll('.page');
    const controller = new ScrollMagic.Controller();

    background.forEach((page, index) => {
        const scene = new ScrollMagic.Scene({
                triggerElement: page,
                offset: 50
            })
            .setClassToggle(section, `scrolled-${index}`)
            .addIndicators()
            .addTo(controller)
    });
})(); */

///////////////////////////////////////////
// TEXT REAVEL ANIMATION
const  paths = document.querySelectorAll("#logo path");

paths.forEach(function(path){
    path.style.strokeDasharray = path.getTotalLength()+ 'px';
    path.style.strokeDashoffset = path.getTotalLength() + 'px';
    path.style.animation = "anim 2s ease forwards";
});