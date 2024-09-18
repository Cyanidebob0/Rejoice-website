function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();


function mouseMove() {
    let cursor = document.querySelector("#cursor");

    document.querySelector("#p1-content").addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 0.5,
        })
    })


    document.querySelector("#p1-content").addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            scale: 1,
            opacity: 1,
            duration: 0.5
        })
    })



    document.querySelector("#p1-content").addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            scale: 0,
            opacity: 0,
            duration: 1,

        })
    })

}
mouseMove();

function ScrollAnimations() {

    gsap.from(".moveUp1", {
        y: 120,
        stagger: 0.1,
        duration: 0.5,
        delay: 1,
        scrollTrigger: {
            trigger: "#page-2",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            scrub: 3
        }
    })

    gsap.from(".moveUp2", {
        y: 120,
        stagger: 0.1,
        duration: 0.5,
        delay: 1,
        scrollTrigger: {
            trigger: "#page-3",
            scroller: "#main",
            start: "top 70%",
            end: "top 67%",
            scrub: 3
        }
    })

    gsap.from(".moveUp3", {
        y: 120,
        stagger: 0.1,
        duration: 0.5,
        delay: 1,
        scrollTrigger: {
            trigger: "#page-4",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            scrub: 3
        }
    })

    gsap.from(".moveUp4", {
        y: 120,
        stagger: 0.1,
        duration: 0.5,
        delay: 1,
        scrollTrigger: {
            trigger: "#page-6",
            scroller: "#main",
            start: "top 50%",
            end: "top 47%",
            scrub: 3
        }
    })

}
ScrollAnimations();

function page4Animation() {
    gsap.to(".dot circle", {
        duration: 4,
        delay: 0.5,
        ease: "power1.inOut",
        motionPath: {
            path: "#verticalPath",
            align: "#verticalPath",
            alignOrigin: [0.5, 0.5]
        },
        scrollTrigger: {
            trigger: "#page-5",
            scroller: "#main",
            start: "top 60%",
            end: "top 57%",
            scrub: 5,
        }
    });



}
page4Animation();

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
         autoplay: {
             delay: 1000,
             disableOnInteraction:true,
         },
         speed: 35000,
    });
}
swiper();


let tl=gsap.timeline()

tl.from("#loader h3",{
    x:60,
    opacity:0,
    duration:1,
    stagger:0.1,
})

tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1,
})

tl.to("#loader",{
    duration:0.4,
    opacity:0
})

tl.to("#loader",{
    duration:0.2,
    display:"none",
})

