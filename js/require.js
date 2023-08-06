gsap.registerPlugin(ScrollTrigger);

const menubtn = document.getElementById("menubtn");
const backToTopBtn = document.getElementById("back-to-top-btn");
const contactForm = document.getElementById("contactForm");
const ToastContainer = document.getElementById("toast-container");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const visibleThreshold = 400;

  if (scrollY > visibleThreshold) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

menubtn.addEventListener("click", () => {
  const options = document.getElementById("option-li");

  if (options.classList.contains("show-options")) {
    options.classList.remove("show-options");
    menubtn.classList.remove("animate-humberger");
  } else {
    menubtn.classList.add("animate-humberger");
    options.classList.add("show-options");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

if(contactForm){
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  // console.log(name, email, phone, service, message);

  let Data = new FormData();
  Data.append("Name", name.value);
  Data.append("Email", email.value);
  Data.append("Phone", phone.value);
  Data.append("ServiceType", service.value);
  Data.append("Message", message.value);
  Data.append("Date", new Date());

  fetch(
    "https://script.google.com/macros/s/AKfycbxz5QbIT2Sfj3ujeJ6wGc8jshB7XvQMdnQlTnTeC0Ca1Y2mjbcFjPRx4HVMXHuJteBO/exec",
    {
      method: "POST",
      body: Data,
    }
  ).then((res) => {
    if (res.ok) {
      name.value = "";
      email.value = "";
      phone.value = "";
      service.value = "Repair_Service";
      message.value = "";

      ToastContainer.style.display = "block";
      setTimeout(() => {
        ToastContainer.style.display = "none";
      }, 3000);
    }
  });
});

}

const scrubValue = 4;
let hero_timeline = gsap.timeline();

hero_timeline.to("#loading_screen", {
  duration : 5,
  yoyo : true,
});

hero_timeline.from(".wavy-text",{
  x: -100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power4.out',
},"-=5");

hero_timeline.to("#loading_screen",{
  opacity : 0
});
hero_timeline.to(document.querySelector("header"),{
  opacity : 1,
  duration : 1,
})
hero_timeline.to("#home-page", {
  opacity : 1,
  duration: 1,
},"-=1");

hero_timeline.from("#hero-title", {
  opacity: 0,
  duration: 1,
  yoyo: true,
  x: -1000,
});

hero_timeline.from(
  "#hero-subtitle",
  {
    opacity: 0,
    duration: 1,
    yoyo: true,
    x: 1000,
  },
  "-=1"
);

hero_timeline.from("#hero-btn", {
  opacity: 0,
  scale: 1.9,
  yoyo: true,
});

// animation for about section start
const aboutUsContainerRight = document.querySelector("#right-about-us");
const aboutUsContainerleft = document.querySelector("#left-about-us");

if (aboutUsContainerRight && aboutUsContainerleft) {
  gsap.from(aboutUsContainerRight, {
    opacity: 0,
    x: 1000,
    duration: 1,
    yoyo: true,
    ease: "power.out",
    scrollTrigger: {
      trigger: "#about-us-container",
      start: "top center",
      end: eval(50 % -100),
      scrub: scrubValue,
    },
  });

  gsap.from(
    aboutUsContainerleft,
    {
      opacity: 0,
      x: -1000,
      duration: 1,
      yoyo: true,
      ease: "power.out",
      scrollTrigger: {
        trigger: "#about-us-container",
        start: "top center",
        end: eval(50 % -100),
        scrub: scrubValue,
      },
    },
    "-=1"
  );
}

const cardOne = document.querySelector("#card-one");
const cardTwo = document.querySelector("#card-two");
const logo = document.querySelector("#card-logo-center");

if (cardOne && cardTwo && logo) {
  const cards = [
    { title: cardOne, x: -1000 },
    { title: cardTwo, x: 1000 },
  ];
  // console.log("IN - 1");
  gsap.utils.toArray(cards).forEach((card) => {
    // console.log("IN - 2", card);
    gsap.from(card.title, {
      opacity: 0,
      x: card.x,
      yoyo: true,
      ease: "circ",
      duration: 1,
      scrollTrigger: {
        trigger: card.title,
        start: "top center",
        end : eval(50% - 100),
        scrub: scrubValue,
      },
    });
  });

  gsap.from(
    logo,
    {
      opacity: 0,
      yoyo: true,
      duration: 1,
      scrollTrigger: {
        trigger: logo,
        start: "top center",
        end: () => `+=${logo.offsetHeight}`,
        scrub: scrubValue,
      },
    },
    "-=1"
  );

  // // contact section start

  const contactFormSection = document.querySelector(".contact-us-container")

  if(contactFormSection){
    gsap.from(contactFormSection , {
      opacity : 0,
      duration : 1,
      scrollTrigger : {
        trigger : contactFormSection,
        start : "-40% 20%",
        end : "+=40",
        scrub : scrubValue,
      }
    })
    
  }

}
