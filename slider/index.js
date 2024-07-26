const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
];

let currentImage = 0;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const addInitialImages = () => {
  let imageContainer = document.querySelector(".imageContainer");
  let result = "";

  images.forEach((image, index) => {
    if(currentImage===index){
    result=result+`<img src="${images[index]}" alt="" ></img>`
    }
    
  });
  imageContainer.innerHTML = result;
};




next.addEventListener("click", () => {
  currentImage = currentImage === images.length - 1 ? 0 : currentImage + 1;
  addInitialImages();
});
prev.addEventListener('click',()=>{
    currentImage = currentImage === 0 ? images.length-1 : currentImage -1;
    addInitialImages();

})


addInitialImages();