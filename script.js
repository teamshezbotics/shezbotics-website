//========================
// COUNTER
//========================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/120;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}
else{

counter.innerText=target;

}

}

update();

});
// Back To Top Button

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});
});
/* ===========================
      PRELOADER
=========================== */
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("preloader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 2500);

});
/* ===========================
   SCROLL REVEAL
=========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (
            revealTop < windowHeight - revealPoint ||
            section.id === location.hash.replace("#", "")
        ) {
            section.classList.add("active");
        }

    });

}
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// NAVIGATION LOADER
// =========================

const loader = document.getElementById("preloader");

// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('.nav-links a, .register-btn').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const loader = document.getElementById('preloader');

        if (loader) {
            loader.style.display = "flex";
        }

        setTimeout(() => {

            if (loader) {
                loader.style.display = "none";
            }

            if (target) {

    if(target.id === "contact"){
        target.classList.add("active");
    }

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

        }, 700); // transition duration

    });

});

/* ===== Hero → Courses Transition ===== */

const exploreBtn = document.querySelector(".btn-primary");
const hero = document.querySelector(".hero");
const courses = document.querySelector("#courses");

if (exploreBtn && hero && courses) {

    exploreBtn.addEventListener("click", function (e) {

        e.preventDefault();

        // Animate hero out
        hero.classList.add("hide");
        setTimeout(() => {
            hero.classList.remove("hide");
        }, 900);
    

        // Wait for animation
        setTimeout(() => {

            // Smooth scroll
            courses.scrollIntoView({
                behavior: "smooth"
            });

            // Reveal courses
            setTimeout(() => {
            
        
            });
        }, 500);

    });

}
const courseField = document.getElementById("selectedCourse");

const contactSection = document.getElementById("contact");

document.getElementById("basicEnroll").onclick = function (e) {
    e.preventDefault();

    courseField.value = "Basic Robotics";

    contactSection.classList.add("active");

setTimeout(() => {

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    setTimeout(() => {
        contactSection.classList.add("active");
    }, 300);

}, 250);

}

document.getElementById("intermediateEnroll").onclick = function (e) {
    e.preventDefault();

    courseField.value = "Intermediate Robotics";

    contactSection.classList.remove("show");

setTimeout(() => {

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    setTimeout(() => {
        contactSection.classList.add("show");
    }, 300);

}, 250);
}

document.getElementById("advancedEnroll").onclick = function (e) {
    e.preventDefault();

    courseField.value = "Advanced Robotics";

    contactSection.classList.remove("show");

setTimeout(() => {

    contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    setTimeout(() => {
        contactSection.classList.add("show");
    }, 300);

}, 250);
};

// ================= PROJECT MODAL =================

// Elements
const modal = document.getElementById("projectModal");
const enrollBtn = document.getElementById("projectEnroll");
const projectImage = document.getElementById("projectImage");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectLearn = document.getElementById("projectLearn");
const closeProject = document.querySelector(".close-project");

// Project Data
const projects = {

    aiProject: {
        image: "assets/project1.png",
        title: "AI Robot",
        description: "Learn AI, sensors, automation and robotics through practical projects.",
        learn: [
            "Arduino Programming",
            "Ultrasonic Sensors",
            "Servo Motors",
            "Robot Automation",
            "Hands-on AI Projects"
        ]
    },

    homeProject: {
        image: "assets/project2.png",
        title: "Smart Home",
        description: "Create IoT-based smart home systems using Arduino and ESP32.",
        learn: [
            "Home Automation",
            "Relay Modules",
            "ESP32",
            "WiFi Control",
            "Mobile App Control"
        ]
    },

    droneProject: {
        image: "assets/project3.png",
        title: "Drone Technology",
        description: "Explore drone electronics, flight systems and autonomous navigation.",
        learn: [
            "Drone Parts",
            "Flight Controller",
            "Motors & ESC",
            "Battery Systems",
            "Drone Assembly"
        ]
    },

    iotProject: {
        image: "assets/project4.png",
        title: "IoT Systems",
        description: "Connect hardware to the Internet using ESP32 and build real-world IoT applications.",
        learn: [
            "ESP32",
            "WiFi",
            "MQTT",
            "Cloud Communication",
            "Smart Devices"
        ]
    }

};
enrollBtn.addEventListener("click", function(e){

    e.preventDefault();

    modal.classList.remove("active");

    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });

});

// Open Modal
Object.keys(projects).forEach(id => {

    const btn = document.getElementById(id);

    if (!btn) return;

    btn.addEventListener("click", function () {

        const data = projects[id];

        projectImage.src = data.image;
        projectTitle.textContent = data.title;
        projectDescription.textContent = data.description;

        projectLearn.innerHTML = "";

        data.learn.forEach(item => {
            projectLearn.innerHTML += `<li>${item}</li>`;
        });

        modal.classList.add("active");

        enrollBtn.onclick = function (e) {
            e.preventDefault();
            modal.classList.remove("active");

            const courseDropdown = document.getElementById("selectedCourse");

            courseDropdown.value = data.title;
            courseDropdown.dispatchEvent(new Event("change"));

            document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        };

    });

});

// Close Button
if(closeProject){

    closeProject.onclick = function(){

        modal.classList.remove("active");

    }

}

// Close Outside
window.addEventListener("click",function(e){

    if(e.target === modal){

        modal.classList.remove("active");

    }

});
// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {
            course: document.getElementById("selectedCourse").value,
            name: document.querySelector('input[placeholder="Full Name"]').value,
            email: document.querySelector('input[placeholder="Email Address"]').value,
            phone: document.querySelector('input[placeholder="Phone Number"]').value,
            requirement: document.querySelector("textarea").value
        };

        try {

            const formData = new URLSearchParams();

formData.append("course", data.course);
formData.append("name", data.name);
formData.append("email", data.email);
formData.append("phone", data.phone);
formData.append("requirement", data.requirement);

await fetch("https://script.google.com/macros/s/AKfycbyLQQvkQAut-4fSTXtUtI4tT_7ctc9QpgQmqtufqZ5W5PD1mpP12Lr4Ts713Y_zqZSg4w/exec", {
    method: "POST",
    body: formData,
    mode: "no-cors"
});
            contactForm.reset();

            document.getElementById("successPopup").classList.add("show");

            setTimeout(() => {

                document.getElementById("successPopup").classList.remove("show");

            }, 2500);

        } catch (error) {

            alert("Something went wrong. Please try again.");

            console.error(error);

        }

    });

}
window.addEventListener("load", () => {

    const hash = location.hash;


    if(hash){

        const target = document.querySelector(hash);

        if(target){

            target.classList.add("active");

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "auto",
                    block: "start"
                });

            },100);

        }

    }

});   

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}