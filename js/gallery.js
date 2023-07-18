
const photo1 = "../assets/gallery/photo1.png";
const photo2 = "../assets/gallery/photo2.png";
const photo3 = "../assets/gallery/photo3.png";
const photo4 = "../assets/gallery/photo4.png";
const photo5 = "../assets/gallery/photo5.png";
const photo6 = "../assets/gallery/photo6.png";
const photo7 = "../assets/gallery/photo7.png";


const videoUrls = [
    "https://www.youtube.com/embed/EyOD8CohvRs",
    "https://www.youtube.com/embed/EXq6Du0kwJg",
    "https://www.youtube.com/embed/BYhFVwfANqc",
    "https://www.youtube.com/embed/lnJTfrqYfMU"
]
const galleryPhotos = [
    {
        title: "photo1",
        image: photo1
    },
    {
        title: "photo2",
        image: photo2
    },
    {
        title: "photo3",
        image: photo3
    },
    {
        title: "photo4",
        image: photo4
    },
    {
        title: "photo5",
        image: photo5
    },
    {
        title: "photo6",
        image: photo6
    },
    {
        title: "photo7",
        image: photo7
    }
]


const getPhotos = ()=>{
    let photoImageContainer = document.getElementById("photo-image-container")

    galleryPhotos.forEach((photo)=>{
        const card = 
            `<div class="image-container c-pointer">
                <img src=${photo.image} alt=${photo.title} />
                <div class="image-text">
                    <div class="text">${photo.title}</div>
                </div>
            </div>`
        
            photoImageContainer.innerHTML += card
    })
}

const getVideos = ()=>{
    let videoContainer = document.getElementById("vedio-container")

    videoUrls.forEach((video)=>{
        const frame = `<iframe src=${video} class="frame"></iframe>`
        
        videoContainer.innerHTML += frame
    })

}

getPhotos()
getVideos()