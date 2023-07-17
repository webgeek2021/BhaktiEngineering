
// import { RepairingService , DesignService} from "../utils/data";

const RepairingService = {
    title : "Diamond Machinery Part Repairing",
    services : [
    {
        title: "Precision Restord Ball Screw Repairing  Solutions",
        content: "Trust our experts to restore the precision and functionality of your diamond machinery's ball screws, ensuring smooth operation and enhanced performance.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    },
    {
        title: "Enhanced Cutting Precision: Sarine Machine Motor Stage Tilting",
        content: "Our skilled technicians provide specialized services for shearing machine motor stage tilting, enabling enhanced cutting precision for your operations.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    },{
        title : "Sarine Machine Motor Repairing",
        content : "Ensure the reliability and efficiency of your shearing machine's motor with our expert repair solutions, tailored to meet your specific requirements",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    },
    {
        title : "Precision Restord Ball Screw Repairing  Solutions",
        content : "Trust our experts to restore the precision and functionality of your diamond machinery's ball screws, ensuring smooth operation and enhanced performance.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    },
    {
        title : "Precision Restord Ball Screw Repairing  Solutions",
        content : "Trust our experts to restore the precision and functionality of your diamond machinery's ball screws, ensuring smooth operation and enhanced performance.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    },
    {
        title : "Precision Restord Ball Screw Repairing  Solutions",
        content : "Trust our experts to restore the precision and functionality of your diamond machinery's ball screws, ensuring smooth operation and enhanced performance.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"],
    }],
    
}

const DesignService = {
    title : "Design Solution",
    services : [
    {
        title : "Transform Ideas into Visual Masterpieces: 2D Design Services",
        content : "Our expert 2D design services help you transform your ideas into captivating visual masterpieces, tailored to your specific requirements.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"]
    },
    {
        title : "Immersive 3D Design Experience: Unleash Creativity with 3D Design",
        content : "Immerse yourself in the world of three-dimensional design as we bring your vision to life with our cutting-edge 3D design solutions.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"]
    },
    {
        title : "Precision and Durability: Unleash the Potential of Sheet Metal",
        content : "Unlock the potential of sheet metal with our precision-crafted designs that ensure durability and superior performance",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"]
    },
    {
        title : "Uncover New Possibilities: Reverse Engineering Solutions",
        content : "Harness the power of reverse engineering to uncover new possibilities and breathe new life into your existing components.",
        cardImage : ["../assets/gallery/photo1.png" , "../assets/gallery/photo1.png"]
    }
],

}

const getRepairHolder = ()=>{
    let repairHolder = document.getElementById("repair-holder")

    let cardHolderParent = document.createElement("div")
    cardHolderParent.classList.add("container") 
    cardHolderParent.classList.add("service-cards-holder")
    
    let holderTitle = document.createElement("div")
    holderTitle.innerText = RepairingService.title
    holderTitle.classList.add("text-center")
    holderTitle.classList.add("serive-name")

    cardHolderParent.appendChild(holderTitle)

    let cardHolder = document.createElement("div")
    cardHolder.classList.add("service-holder")

    RepairingService.services.forEach((service)=>{

        const images = service.cardImage.map((image)=>{
            return(
                `<img src=${image} class="image"/>`
            )
        })
        const card = `
        <div class="d-flex align-items-start service-page-card">
            <img src="../assets/Icons/arrow-right.svg" alt="" class="icon"/>
            <div class="paragraph-holder">
                <div class="para-content">
                    <p class="title">${service.title}</p>
                    <p class="content">${service.content}</p>
                </div>
                <div class="d-flex align-items-center image-arr-container" id="image-arr-container">${images}</div>
            </div>
        </div>
        `

        cardHolder.innerHTML += card
    })
    cardHolderParent.appendChild(cardHolder)
    repairHolder.appendChild(cardHolderParent)
} 

const getDesignHolder = ()=>{
    let designHolder = document.getElementById("design-holder")

    let cardHolderParent = document.createElement("div")
    cardHolderParent.classList.add("container") 
    cardHolderParent.classList.add("service-cards-holder")
    
    let holderTitle = document.createElement("div")
    holderTitle.innerText = DesignService.title
    holderTitle.classList.add("text-center")
    holderTitle.classList.add("serive-name")

    cardHolderParent.appendChild(holderTitle)

    let cardHolder = document.createElement("div")
    cardHolder.classList.add("service-holder")

    DesignService.services.forEach((service)=>{

        const images = service.cardImage.map((image)=>{
            return(
                `<img src=${image} class="image"/>`
            )
        })
        const card = `
        <div class="d-flex align-items-start service-page-card">
            <img src="../assets/Icons/arrow-right.svg" alt="" class="icon"/>
            <div class="paragraph-holder">
                <div class="para-content">
                    <p class="title">${service.title}</p>
                    <p class="content">${service.content}</p>
                </div>
                <div class="d-flex align-items-center image-arr-container" id="image-arr-container">${images}</div>
            </div>
        </div>
        `

        cardHolder.innerHTML += card
    })
    cardHolderParent.appendChild(cardHolder)
    designHolder.appendChild(cardHolderParent)

}

getRepairHolder()
getDesignHolder()