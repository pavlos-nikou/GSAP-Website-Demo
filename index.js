spanizeText = text => {
    let newText = ""
    let splitText = text.split("")
    splitText.forEach(letter => {
        newText += `<span class="spanedText">${letter}</span>`
    })
    return newText
}

// wrap leters of paragraphs with the class spans into spans
let animatedTxt = document.querySelectorAll(".spans")
animatedTxt.forEach(element => {
    element.innerHTML = spanizeText(element.innerText)
});

const timeline1 = gsap.timeline({ defaults: { duration: 1 } })
timeline1.from(".contentBox1", { y: "-100%" })
timeline1.from(".titlePrt", { opacity: 0, stagger: 0.3, duration: 1 })
timeline1.from("#mainImage", { opacity: 0, scale: 0.8 }, "<")
timeline1.from(".spanedText", { opacity: 0, stagger: 0.02 })


gsap.from(".spec", { opacity: 0, stagger: 0.2, duration: 4, ease: "circle.in" })
const specTimeline = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, delay: 2 })
specTimeline.to(".spec", { opacity: 0, stagger: 0.2, delay: 2, duration: 0.5 })
specTimeline.to(".spec", { x: "-308%", duration: 0 })
specTimeline.to(".spec", { opacity: 1, stagger: 0.2 })
specTimeline.to(".spec", { opacity: 0, stagger: 0.2, delay: 2, duration: 0.5 })
specTimeline.to(".spec", { x: "0%", duration: 0 })
specTimeline.to(".spec", { opacity: 1, stagger: 0.2, delay: 2, duration: 0.5 })
gsap.from(".vive", { scrollTrigger: { trigger: ".contentBox3", start: "top bottom", end: "top top", scrub: 0.5 }, y: "-100vh", opacity: 0.2, scale: 1.3, ease: "circle.in" })
gsap.from(".sensorRight", { scrollTrigger: { trigger: ".contentBox3", start: "center bottom", end: "top top", scrub: 1 }, opacity: 0, x: 200, y: -100 })
gsap.from(".sensorLeft", { scrollTrigger: { trigger: ".contentBox3", start: "center bottom", end: "top top", scrub: 1 }, opacity: 0, x: -200, y: -100 })
gsap.from(".controllerLeft", { scrollTrigger: { trigger: ".contentBox3", start: "center bottom", end: "top top", scrub: 3 }, opacity: 0, x: -200, y: -100 })
gsap.from(".controllerRight", { scrollTrigger: { trigger: ".contentBox3", start: "center bottom", end: "top top", scrub: 3 }, opacity: 0, x: 200, y: -100 })