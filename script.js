// ===============================
// MOBILE MENU
// ===============================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close");

if (hamburger && mobileMenu && closeBtn) {

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

}


// ===============================
// TYPING EFFECT
// ===============================

const words = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "Prompt Engineer"
];

const typing = document.getElementById("typing");

if (typing) {

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;
                setTimeout(typeEffect, 1500);
                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex);
            charIndex--;

            if (charIndex < 0) {

                deleting = false;
                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}


// ===============================
// CURSOR GLOW
// ===============================

const glow = document.querySelector(".cursor-glow");

if (glow) {

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}


// ===============================
// PROFILE TILT
// ===============================

const profile = document.querySelector(".circle");

if (profile) {

    profile.addEventListener("mousemove", (e) => {

        const rect = profile.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        profile.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.03)`;

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";

    });

}


// ===============================
// SCROLL REVEAL (FIXED)
// ===============================

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("fade");

});

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            // Animate only once
            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"

});

sections.forEach(section => {

    observer.observe(section);

});


// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const nav = document.querySelector("nav");

if (nav) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            nav.style.background = "rgba(10,15,25,.82)";
            nav.style.backdropFilter = "blur(25px)";
            nav.style.borderColor = "rgba(0,217,255,.15)";

        } else {

            nav.style.background = "rgba(255,255,255,.05)";
            nav.style.borderColor = "rgba(255,255,255,.08)";

        }

    });

}


// ===============================
// BUTTON HOVER
// ===============================

document.querySelectorAll(".btn1,.btn2").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// EDUCATION TIMELINE
// ===============================

// ===============================
// ACCORDION EDUCATION TIMELINE
// ===============================
const educationCards = document.querySelectorAll(".edu-card");

educationCards.forEach(card => {
    // Select the upper header area inside our item wrapper
    const summaryBlock = card.querySelector(".edu-card-summary");

    summaryBlock.addEventListener("click", (e) => {
        // Prevent event bubble interference checks
        e.stopPropagation();

        const isCurrentlyActive = card.classList.contains("active");

        // Close all cards to ensure a clean accordion movement layout baseline
        educationCards.forEach(item => {
            item.classList.remove("active");
            const detailBlock = item.querySelector(".edu-info");
            if (detailBlock) detailBlock.style.maxHeight = null;
        });

        // If the clicked element wasn't open, toggle it open now
        if (!isCurrentlyActive) {
            card.classList.add("active");
            const targetDetail = card.querySelector(".edu-info");
            if (targetDetail) {
                // Dynamically calculates the high density content height space bounds
                targetDetail.style.maxHeight = targetDetail.scrollHeight + "px";
            }
        }
    });
});