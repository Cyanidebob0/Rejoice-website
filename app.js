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