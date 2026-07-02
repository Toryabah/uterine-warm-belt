/*=============================
 PRE LOADER
==============================*/


window.addEventListener("load",function(){

    document.getElementById("preloader").style.display="none";

});



/*=============================
 FAQ ACCORDION
==============================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});


/*=============================
 STICKY HEADER EFFECT
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.padding = "12px 8%";
        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.1)";

    }else{

        header.style.padding = "18px 8%";
        header.style.background = "rgba(255,255,255,.85)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


/*=============================
 SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=============================
 SCROLL REVEAL ANIMATION
==============================*/

const reveals = document.querySelectorAll(
".problem, .solution, .feature-card, .card, .pricing, .order-form, .testimonia-card"
);

const revealOnScroll = () => {

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

reveals.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/*=============================
 BACK TO TOP BUTTON
==============================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});


/*==================================
 EVERGREEN COUNTDOWN TIMER
===================================*/

// Countdown duration (15 minutes)
const countdownMinutes = 15;

// Check if an end time already exists
let endTime = localStorage.getItem("offerEndTime");

if (!endTime) {
    endTime = new Date().getTime() + countdownMinutes * 60 * 1000;
    localStorage.setItem("offerEndTime", endTime);
}

function updateCountdown() {

    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {

        // Restart the timer automatically
        endTime = new Date().getTime() + countdownMinutes * 60 * 1000;
        localStorage.setItem("offerEndTime", endTime);

        return;
    }

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    document.getElementById("hours").textContent = "00";
    document.getElementById("days").textContent = "00";

}

updateCountdown();

setInterval(updateCountdown, 1000);


/* STOCK DEMO ONLY */

const stock = document.getElementById("stock");

let qty = 18;

setInterval(()=>{

    if(qty > 5){

        qty--;

        stock.textContent = qty;

    }

},30000);