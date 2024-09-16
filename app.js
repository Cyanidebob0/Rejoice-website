function mouseMove() {
    let cursor = document.querySelector("#cursor");

    document.querySelector("#p1-content").addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 1,
        })
    })


    document.querySelector("#p1-content").addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            scale: 1,
            opacity: 1,
            duration: 1
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

gsap.from(".moveUp",{
    y:120,
    stagger:0.2,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:"#page-2",
        scroller:"body",
        start:"top 50%",
        end:"top 100%",
        scrub:4
    }
})