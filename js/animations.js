/* ==========================================
   REVEAL
========================================== */

const reveals=document.querySelectorAll(

".about,.skill-card,.timeline-item,.project-card,.leadership-card,.certificate-card,.contact-container"

);

function reveal(){

    const trigger=window.innerHeight-120;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/* ==========================================
   PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-right");

    if(hero){

        hero.style.transform=`translateY(${window.scrollY*0.08}px)`;

    }

});