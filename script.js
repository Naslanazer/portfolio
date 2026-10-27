/* =========================
   SETUP
========================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================
   SMOOTH SCROLL (LENIS)
========================= */


const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.8
});


lenis.on("scroll", ScrollTrigger.update);


function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}


gsap.ticker.add((time)=>{

    lenis.raf(time * 1000);

});


gsap.ticker.lagSmoothing(0);




/* =========================
   CUSTOM CURSOR
========================= */


const cursor =
document.querySelector(".cursor");


const outline =
document.querySelector(".cursor-outline");


const blur =
document.querySelector(".cursor-blur");



document.addEventListener(
"mousemove",
(e)=>{


    cursor.style.left =
    e.clientX+"px";


    cursor.style.top =
    e.clientY+"px";



    outline.style.left =
    e.clientX-22+"px";


    outline.style.top =
    e.clientY-22+"px";



    blur.style.left =
    e.clientX-125+"px";


    blur.style.top =
    e.clientY-125+"px";


});





const hoverItems =
document.querySelectorAll(
"a,button,.project-card,.skill-card"
);



hoverItems.forEach(item=>{


    item.addEventListener(
    "mouseenter",
    ()=>{


        outline.style.transform =
        "scale(1.8)";


        outline.style.borderColor =
        "#00E5FF";


    });


    item.addEventListener(
    "mouseleave",
    ()=>{


        outline.style.transform =
        "scale(1)";


        outline.style.borderColor =
        "white";


    });


});








/* =========================
   PAGE INTRO ANIMATION
========================= */


gsap.from("nav",{

    y:-80,

    opacity:0,

    duration:1

});



gsap.from(".hero p",{

    y:40,

    opacity:0,

    duration:1,

    delay:.3

});



gsap.from(".hero h1",{

    y:80,

    opacity:0,

    duration:1,

    delay:.6

});



gsap.from(".hero h3",{

    y:40,

    opacity:0,

    duration:1,

    delay:.9

});



gsap.from(".explore-btn",{

    scale:.5,

    opacity:0,

    duration:.8,

    delay:1.2

});








/* =========================
   SECTION REVEALS
========================= */


gsap.utils.toArray(".chapter-content")
.forEach(section=>{


    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 75%"

        },


        y:80,

        opacity:0,

        duration:1.2


    });


});








/* =========================
   SCROLL PROGRESS
========================= */


const progress =
document.querySelector(".progress-bar");


window.addEventListener(
"scroll",
()=>{


const scrollTop =
document.documentElement.scrollTop;


const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;



progress.style.width =
(scrollTop/height)*100+"%";


});








/* =========================
   FLOATING SKILLS
========================= */


gsap.utils.toArray(".skill-card")
.forEach((card,index)=>{


    gsap.to(card,{

        y:20,

        duration:2+index*.3,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"


    });


});









/* =========================
   PROJECT 3D TILT
========================= */


document.querySelectorAll(".project-card")
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX-rect.left;


const y =
e.clientY-rect.top;



const rotateX =
(y-rect.height/2)/20;



const rotateY =
(rect.width/2-x)/20;



card.style.transform = `

perspective(1000px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;



});




card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});









/* =========================
   MAGNETIC BUTTON
========================= */


document.querySelectorAll(
".contact-button,.explore-btn"
)
.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();


const x =
e.clientX-rect.left-rect.width/2;


const y =
e.clientY-rect.top-rect.height/2;



button.style.transform =
`

translate(
${x*.15}px,
${y*.15}px
)

`;



});




button.addEventListener(
"mouseleave",
()=>{


button.style.transform="";


});


});








/* =========================
   ACTIVE NAVIGATION
========================= */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener(
"scroll",
()=>{


let current="";


sections.forEach(section=>{


const top =
section.offsetTop-250;


if(scrollY>=top){

current =
section.id;

}


});



navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add("active");

}


});


});
