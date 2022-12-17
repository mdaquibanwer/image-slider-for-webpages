const slides1 = document.querySelectorAll(".slide1");
const slides2 = document.querySelectorAll(".slide2");

let count1 = 0; // for first design
let count2 = 0; // for second design

// for first design
slides1.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

const goPrev = ()=>{
    if(count1===0){
        count1=slides1.length;
    }
    count1--;
    slideImage()
}
const goNext = ()=>{
    count1++;
    if(count1===slides1.length){
        count1=0;
    }
    slideImage()
}
const slideImage = ()=>{
    slides1.forEach((slide)=>{
        slide.style.transform = `translateX(-${count1 *100}%)`
    })
}
// for second design
slides2.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

const slideImage2 = ()=>{
    slides2.forEach((slide)=>{
        slide.style.transform = `translateX(-${count2 *100}%)`
    })
}

setInterval(() => {
    count2++;
    if(count2===slides2.length){
        count2=0;
    }
    slideImage2();
}, 3000);