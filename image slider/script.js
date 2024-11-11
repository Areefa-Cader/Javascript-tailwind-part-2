const wrapper = document.querySelector('.wrapper');
const imageContainer = document.querySelector('.image-container');
const images = document.getElementsByTagName('img');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

// console.log(wrapper , imageContainer, images , leftBtn, rightBtn);
let imageIndex = 1;

intervalid = 1;

const autoSlide = ()=>{
    intervalid = setInterval(()=>
        slideImage(++imageIndex), 2000
    )
}

const slideImage = ()=>{
    console.log(imageIndex);
    
}