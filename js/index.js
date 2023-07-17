// gsap.from("#right-about-us", {
//   x: 100,
//   opacity: 0,
//   delay: 1,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#right-about-us",
//     scroller: "body",
//     start: "top 50%",
//     end: "top 70%",
//     // markers : true,
//     scrub: true,
//   },
// });

// gsap.from("#left-about-us", {
//   x: -100,
//   opacity: 0,
//   duration: 2,
//   delay: 1,
//   scrollTrigger: {
//     trigger: "#left-about-us",
//     scroller: "body",
//     start: "top top",
//     end: "+=500",
//     // markers : true,
//     scrub: true,
//   },
// });

const menubtn = document.getElementById("menubtn");
const backToTopBtn = document.getElementById("back-to-top-btn");

const contactForm = document.getElementById("contactForm");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const visibleThreshold = 500;

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

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  console.log(name , email , phone , service , message)

  let Data = new FormData()
  Data.append("Name", name.value)
  Data.append("Email", email.value)
  Data.append("Phone", phone.value)
  Data.append("ServiceType", service.value)
  Data.append("Message", message.value) 
  Data.append("Date" , new Date())

  fetch("https://script.google.com/macros/s/AKfycbxz5QbIT2Sfj3ujeJ6wGc8jshB7XvQMdnQlTnTeC0Ca1Y2mjbcFjPRx4HVMXHuJteBO/exec",{
    method:'POST',
    body : Data
  })
  .then(res =>{
    if(res.ok){
        name.value = ""
        email.value = ""
        phone.value = ""
        service.value = ""
        message.value = ""
    }
  })
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
