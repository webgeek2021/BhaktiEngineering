

// Home Page Animation Starts
let hero_timeline = gsap.timeline()

hero_timeline.from("#hero-title",{
  opacity : 0,
  duration : 1,
  yoyo:true,
  x : -1000,
})
hero_timeline.from("#hero-subtitle",{
  opacity : 0,
  duration : 1,
  yoyo:true,
  x : 1000,
},"-=1")
hero_timeline.from("#hero-btn",{
  opacity : 0,
  scale : 1.9,
  yoyo:true
})

// animation for about section start
const aboutUS = gsap.timeline({
  scrollTrigger:{
    trigger:"#about-us-container",
    markers  : true,
    start : "-50% 20% ",
    end : "+=20",
    scrub : 1
  }
})

aboutUS.addLabel("left-section").from("#left-about-us",{
  opacity : 0,
  x : -1000,
  duration : 1,
  yoyo : true,
  ease : "power.out"
})
aboutUS.addLabel("right-section").from("#right-about-us",{
  opacity : 0,
  x : 1000,
  duration : 1,
  yoyo : true,
  ease : "power.out"
})
// animation for about section end


// service section start
const serviceTL = gsap.timeline({
  scrollTrigger:{
    trigger : "#service-section",
    markers : true,
    start : "-20% 20%",
    end : "+=50",
    scrub : 1
  }
})

serviceTL.addLabel("card-one").from("#card-one",{
  opacity : 0,
  x : -1000,
  yoyo : true,
  ease : "circ",
  duration : 1,
})

serviceTL.addLabel("card-two").from("#card-two",{
  opacity : 0,
  x : 1000,
  yoyo : true,
  ease : "circ",
  duration : 1,
})

serviceTL.addLabel("card-logo-center").from("#card-logo-center",{
  opacity : 0,
  scale : 1.5,
  duration : 1,
}, "+=2")
// service section end

// contact section start

let contactUs = gsap.timeline({
  scrollTrigger : {
    trigger : "#contact-us-section",
    markers : true,
    start : "-40% 20%",
    end : "+=40",
    scrub : 1
  }
})

contactUs.addLabel("contact-us").from("#contact-form",{
  opacity : 0,
  scale : 1.5,
  yoyo : true,
})
// contact section end

// Home Page Animation Ends


// service Page Time Line Start

let servicePageTl = gsap.timeline({
  scrollTrigger : {
    trigger : "#service_page",
    markers : true,
    scrub : 1,
    start : "-40% 20%",
    end : "+=40",
  }
})

servicePageTl.addLabel("service-name").from(".service-name",{
  opacity : 0,
  x : -1000,
  yoyo : true,
})
// service Page Time Line End








const menubtn = document.getElementById("menubtn");
const backToTopBtn = document.getElementById("back-to-top-btn");
const contactForm = document.getElementById("contactForm");
const ToastContainer = document.getElementById("toast-container")

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

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          service.value = "Repair_Service"
          message.value = ""
          
          ToastContainer.style.display = "block"
          setTimeout(()=>{
            ToastContainer.style.display = "none"
          },(3000))

          
      }
    })
  });