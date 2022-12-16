const slides = document.querySelectorAll(".slide");
// const prevButton = document.getElementsByClassName("left-btn")
// const nextButton = document.getElementsByClassName("right-btn")
console.log(slides.length)
let count = 0;


slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

const goPrev = ()=>{
    if(count===0){
        count=slides.length;
    }
    count--;
    slideImage()
}
const goNext = ()=>{
    count++;
    if(count===slides.length){
        count=0;
    }
    slideImage()
}
const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count *100}%)`
    })
}

// setInterval(() => {
//     count++;
//     if(count===slides.length){
//         count=0;
//     }
//     slideImage();
// }, 3000);