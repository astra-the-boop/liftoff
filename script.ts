window.addEventListener("DOMContentLoaded", () => {
    const runway:HTMLDivElement = document.getElementById("runway") as HTMLDivElement;

    window.addEventListener("scroll", ()=>{
        const scroll: number = window.scrollY;
        const angle: number = 157-scroll*0.05;
        runway.style.transform = `rotateX(${angle}deg}`
    })
})