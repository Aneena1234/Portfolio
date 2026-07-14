/* ==========================================
   LOADER
========================================== */

const loader = document.getElementById("loader");
const percentage = document.getElementById("percentage");

let progress = 0;

const loading = setInterval(() => {

    progress++;

    percentage.textContent = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.classList.add("loader-hide");

            setTimeout(() => {

                loader.style.display = "none";

            },700);

        },300);

    }

},18);