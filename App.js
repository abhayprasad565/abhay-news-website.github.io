// define property to change heading
let title = document.querySelector("title");
var link = document.querySelector("link[rel*='icon']");
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {


        // Create a new favicon URL
        title.textContent = "Hey Come Back !!";
        var newFaviconUrl = "img/pray.png";

        // Set the 'href' attribute of the <link> element to the new favicon URL
        link.href = newFaviconUrl;
    } else {
        title.textContent = "Portfolio | Abhay Kumar";
        var newFaviconUrl = "img/Abhay-bitmoji.png";
        link.href = newFaviconUrl;
    }
});








// define on scroll parralax
let text = document.querySelector("#parallax-text");
let mountain1 = document.querySelector("#m1");
let tree2 = document.querySelector("#t2");
let mountain2 = document.querySelector("#m2");
let tree1 = document.querySelector("#t1");
let man = document.querySelector("#man");
let plants = document.querySelector("#plants");
let introCard = document.querySelector(".intro-card");
let skillscard = document.querySelector(".skills-container");

window.addEventListener("scroll", () => {   // select the value scrolled 

    // parallax animation
    let value = window.scrollY;





    // animation for  intro card
    let top = window.scrollY;



    parallaxAnimate(top);
    introCardAnimate(top);
    skillcardAnimate(top);
    educationCardAnimate(top);


});

function parallaxAnimate(value) {
    parallaxY = ((screen.width) / 100);
    if (screen.width > 900) parallaxY *= 5;
    else parallaxY *= 80;
    text.style.marginTop = value * 1.5 + 'px';
    text.style.opacity = (100) - value * 0.5 + '%';

    mountain1.style.top = (parallaxY) + value * (-0.1) + 'px';
    mountain2.style.top = (parallaxY) + value * (-0.1) + 'px';


    plants.style.bottom = value * -0.01 + 'px';
    tree2.style.left = (-100) + value * +0.2 + 'px';
    tree2.style.bottom = value * -0.1 + 'px';
    man.style.left = (-250) + value * (0.4) + 'px';
}

// animation for skills card
function skillcardAnimate(top) {

    let skillsOffSet = skillscard.offsetTop - 500;
    let skillsHeight = skillscard.offsetHeight;
    if (top >= skillsOffSet && top < skillsOffSet + skillsHeight || ((top < skillsOffSet + skillsHeight + 500 && top > skillsOffSet))) {

        if (!skillscard.classList.contains("show-animate")) {
            console.log("skills added class");
            skillscard.classList.add("show-animate");
        }

    }
    else if (top > skillsOffSet + skillsHeight + 500 || top < skillsOffSet) {
        if (skillscard.classList.contains("show-animate")) {
            console.log("skills remove class");
            skillscard.classList.remove("show-animate");
        }
    }
}

// animation for intro card
function introCardAnimate(top) {
    let offset = introCard.offsetTop - 500;
    let height = introCard.offsetHeight;
    if (top >= offset && top < offset + height || (top < offset + height + 500 && top > offset)) {

        if (!introCard.classList.contains("show-animate")) {
            console.log("added class");
            introCard.classList.add("show-animate");
        }

    }
    else if (top > offset + height + 500 || top < offset) {
        if (introCard.classList.contains("show-animate")) {
            console.log("removed class");
            introCard.classList.remove("show-animate");
        }
    }
}


// animate the education section
let edsection = document.querySelector(".education");
let edcards = document.querySelectorAll(".education-card");
function educationCardAnimate(top) {
    let offset = edsection.offsetTop - 500;
    let height = edsection.offsetHeight;
    if (top >= offset && top < offset + height || (top < offset + height + 500 && top > offset)) {

        if (!edcards[0].classList.contains("show-animate")) {
            console.log("added education class");
            for (card of edcards)
                card.classList.add("show-animate");
        }

    }
    else if (top > offset + height + 500 || top < offset) {
        if (edcards[0].classList.contains("show-animate")) {
            console.log("ed card removed");
            for (card of edcards)
                card.classList.remove("show-animate");
        }
    }
}






let projects = document.querySelectorAll(".project-card");
for (card of projects) {
    card.addEventListener("click", function () {
        console.log(window.location.href = this.getAttribute("link"));
    })
}

function sendMail() {
    let params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#emails").value,
        phone: document.querySelector("#phone").value,
        message: document.querySelector("#message").value + "sent by " + document.querySelector("#emails").value
    }
    const serviceId = "service_tjjusg9";
    emailjs.send(serviceId, "template_71acm9t", params)
        .then(
            res => {

                alert("your message was sent");
            }
        ).catch((err) => console.log(err));
}











