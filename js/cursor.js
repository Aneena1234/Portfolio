/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.project-card,.skill-card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("grow");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("grow");

    });

});