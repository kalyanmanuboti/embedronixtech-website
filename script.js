/* OPEN FORM INSTEAD OF ALERT */
function contactAlert() {
    document.getElementById("quoteForm").style.display = "flex";
}

/* CLOSE FORM */
function closeForm() {
    document.getElementById("quoteForm").style.display = "none";
}

/* SMOOTH SCROLL */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* SUCCESS MESSAGE AFTER SUBMIT */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container form");
    const msg = document.getElementById("successMsg");

    if (form) {
        form.addEventListener("submit", function () {
            setTimeout(() => {
                msg.style.display = "block";
            }, 500);
        });
    }
});

/* FADE-IN ANIMATION */
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
});
function openCareerForm() {
    document.getElementById("careerForm").style.display = "flex";
}

function closeCareerForm() {
    document.getElementById("careerForm").style.display = "none";
}

/* SUCCESS MESSAGE */
document.addEventListener("DOMContentLoaded", function () {
    const careerForm = document.querySelector("#careerForm form");
    const msg = document.getElementById("careerSuccess");

    if (careerForm) {
        careerForm.addEventListener("submit", function () {
            setTimeout(() => {
                msg.style.display = "block";
            }, 500);
        });
    }
});