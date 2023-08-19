const menuBtn = document.querySelector("#menu-burger");
const menu = document.querySelector(".menu");

menuBtn.addEventListener('click' , function() {
    menu.classList.toggle('off');
});


/*const s1next = document.querySelector("#slider1-next");
const s1prev = document.querySelector("#slider1-prev");
const slider1 = document.querySelector(".slider1-content");
let imgWidth = document.querySelector(".s1img").clientWidth;
let slide = 0;

s1next.addEventListener('click' , function(){
    slide = slide - imgWidth;
    slider1.style.left = slide +"px" ;
    console.log("clicked" + slide);
    if(slide <= (imgWidth*37)*-1){
        slide = 0;
        slider1.style.left = 0 +"px" ;
    }
});

s1prev.addEventListener('click' , function(){
    if(slide < 0){
    slide = slide + imgWidth;
    slider1.style.left = slide +"px" ;
    console.log("clicked");
    }
});*/
/*
const s1next = document.querySelector("#slider1-next");
const s1prev = document.querySelector("#slider1-prev");
const slider1 = document.querySelector(".slider1-content");
let slide = 0;

s1next.addEventListener('click' , function(){
    let imgWidth = document.querySelector(".s1img").offsetWidth;
    slide = slide - (imgWidth/40);
    slider1.style.left = slide +"px" ;
    console.log("clicked" + slide);
    if(slide <= imgWidth*-1){
        slide = 0;
        slider1.style.left = 0 +"px" ;
    }
});

s1prev.addEventListener('click' , function(){
    let imgWidth = document.querySelector(".s1img").clientWidth;
    if(slide < 0){
    slide = slide + (imgWidth/40);
    slider1.style.left = slide +"px" ;
    console.log("clicked");
    }
});





const s2next = document.querySelector("#slider2-next");
const s2prev = document.querySelector("#slider2-prev");
const slider2 = document.querySelector(".slider2-content");
let imgWidth2 = document.querySelector(".s2img").naturalWidth;
let slide2 = 0;

s2next.addEventListener('click' , function(){
    slide2 = slide2 - (imgWidth2/40);
    slider2.style.left = slide2 +"px" ;
    console.log("clicked" + slide2);
    if(slide2 <= imgWidth2*-1){
        slide2 = 0;
        slider2.style.left = 0 +"px" ;
    }
});

s2prev.addEventListener('click' , function(){
    if(slide2 < 0){
    slide2 = slide2 + (imgWidth2/40);
    slider2.style.left = slide2 +"px" ;
    console.log("clicked");
    }
});





const s3next = document.querySelector("#slider3-next");
const s3prev = document.querySelector("#slider3-prev");
const slider3 = document.querySelector(".slider3-content");
let img3 = document.querySelector(".s3img");
let imgWidth3 = img3.width;
let slide3 = 0;

s3next.addEventListener('click' , function(){
    slide3 = slide3 - (imgWidth3/31);
    slider3.style.left = slide3 +"px" ;
    console.log("clicked" + slide3);
    if(slide3 <= imgWidth3*-1){
        slide3 = 0;
        slider3.style.left = 0 +"px" ;
    }
});

s3prev.addEventListener('click' , function(){
    if(slide3 < 0){
    slide3 = slide3 + (imgWidth3/31);
    slider3.style.left = slide3 +"px" ;
    console.log("clicked");
    }
});





const s4next = document.querySelector("#slider4-next");
const s4prev = document.querySelector("#slider4-prev");
const slider4 = document.querySelector(".slider4-content");
let imgWidth4 = document.querySelector(".s4img").width;
let slide4 = 0;

s4next.addEventListener('click' , function(){
    slide4 = slide4 - (imgWidth4/21);
    slider4.style.left = slide4 +"px" ;
    console.log("clicked" + slide4);
    if(slide4 <= imgWidth4*-1){
        slide4 = 0;
        slider4.style.left = 0 +"px" ;
    }
});

s4prev.addEventListener('click' , function(){
    if(slide4 < 0){
    slide4 = slide4 + (imgWidth4/21);
    slider4.style.left = slide4 +"px" ;
    console.log("clicked");
    }
});





const s5next = document.querySelector("#slider5-next");
const s5prev = document.querySelector("#slider5-prev");
const slider5 = document.querySelector(".slider5-content");
let imgWidth5 = document.querySelector(".s5img").width;
let slide5 = 0;

s5next.addEventListener('click' , function(){
    slide5 = slide5 - (imgWidth5/32);
    slider5.style.left = slide5 +"px" ;
    console.log("clicked" + slide5);
    if(slide5 <= imgWidth5*-1){
        slide5 = 0;
        slider5.style.left = 0 +"px" ;
    }
});

s5prev.addEventListener('click' , function(){
    if(slide5 < 0){
    slide5 = slide5 + (imgWidth5/32);
    slider5.style.left = slide5 +"px" ;
    console.log("clicked");
    }
});
*/
