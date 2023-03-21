// const sliders = {
//     slider_0 :  document.getElementById('slider_0'),
//     slider_1 :  document.getElementById('slider_1'),
//     slider_2 :  document.getElementById('slider_2'),
//     slider_3 :  document.getElementById('slider_3'),
//     slider_4 :  document.getElementById('slider_4'),
    
// }
const navs ={
    nav_0 : document.getElementById('nav_0'),
    nav_1 : document.getElementById('nav_1'),
    nav_2 : document.getElementById('nav_2'),
    nav_3 : document.getElementById('nav_3'),
    nav_4 : document.getElementById('nav_4'),
}
const wrappers ={
    about__wrapper : document.getElementById('about__wrapper'),
    home__wrapper : document.getElementById('home__wrapper'),
    projects__wrapper : document.getElementById('projects__wrapper'),
    pro__wrapper : document.getElementById('pro__wrapper'),
    con__wrapper : document.getElementById('con__wrapper'),
}

const transform ={
    _9 : "scale(0.9)",
    _1_1 : "scale(1.1)",
    _1 : "scale(1)",
}


const hire = document.getElementById('hire');
const body = document.querySelector('body'); 
const logo__3d = document.querySelector('.logo3d');
const color__white= "#e11d48";
const color__red= "#e11d48"
const transition__ease = "all .3s ease .1s";
const default__value = "";
const no__value = "none";




  
//  document.addEventListener('keydown', function() {
//     wrappers.about__wrapper.focus();
//     wrappers.about__wrapper.scrollLeft='10px';
//   });



if (wrappers.home__wrapper.style.display == default__value) {
    // sliders.slider_2.style.backgroundColor= color__white;
    // sliders.slider_2.style.transform= transform._1;
    hire.style.transform= transform._1_1;
   document.querySelector(".logosmall").style.display= no__value;

}


console.log(document.querySelectorAll('a'))
   

function hovereffect_0() {
    // sliders.slider_0.style.transition=transition__ease;
    // sliders.slider_0.style.backgroundColor= color__white;
    // sliders.slider_0.style.transform=transform._1;
    navs.nav_0.style.transition=transition__ease
    navs.nav_0.style.color= color__white;
    navs.nav_0.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;


    // sliders.slider_1.style.backgroundColor=default__value;
    // sliders.slider_1.style.transform=default__value;    
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;



    // sliders.slider_2.style.backgroundColor=default__value;
    // sliders.slider_2.style.transform=default__value;    
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
   
   
//    sliders.slider_3.style.backgroundColor=default__value;
//    sliders.slider_3.style.transform=default__value;    
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;


//    sliders.slider_4.style.backgroundColor=default__value;
//    sliders.slider_4.style.transform=default__value;    
   navs.nav_4.style.color=default__value;
   navs.nav_4.style.transform=default__value;

   
   wrappers.pro__wrapper.className="show";
   
   document.querySelector(".logosmall").style.display= default__value;

   wrappers.home__wrapper.style.display= no__value;
   wrappers.projects__wrapper.style.display= no__value; 
   wrappers.about__wrapper.style.display= no__value;
   wrappers.con__wrapper.style.display= no__value;
   wrappers.pro__wrapper.style.display= default__value;
}
function hovereffect_1() {
    // sliders.slider_1.style.transition=transition__ease;
    // sliders.slider_1.style.backgroundColor= color__white;
    // sliders.slider_1.style.transform=transform._1;
    navs.nav_1.style.transition=transition__ease
    navs.nav_1.style.color= color__white;
    navs.nav_1.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;

    // sliders.slider_0.style.backgroundColor=default__value;
    // sliders.slider_0.style.transform=default__value;    
    navs.nav_0.style.color=default__value;
    navs.nav_0.style.transform=default__value;

    // sliders.slider_2.style.backgroundColor=default__value;
    // sliders.slider_2.style.transform=default__value;    
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
   
   
//    sliders.slider_3.style.backgroundColor=default__value;
//    sliders.slider_3.style.transform=default__value;    
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;
   
//    sliders.slider_4.style.backgroundColor=default__value;
//    sliders.slider_4.style.transform=default__value;    
   navs.nav_4.style.color=default__value;
   navs.nav_4.style.transform=default__value;
   
   wrappers.about__wrapper.className="show";
   document.querySelector(".logosmall").style.display= default__value;

   wrappers.about__wrapper.style.display=default__value;
   wrappers.home__wrapper.style.display=no__value ;
   wrappers.projects__wrapper.style.display=no__value; 
   wrappers.pro__wrapper.style.display= no__value;
   wrappers.con__wrapper.style.display= no__value;

}
function hovereffect_2() {
    // sliders.slider_2.style.backgroundColor= color__white;
    // sliders.slider_2.style.transform=transform._1;
    // sliders.slider_2.style.transition=transition__ease;
    navs.nav_2.style.transform=transform._9;
    
if (wrappers.home__wrapper.style.display !== default__value){
    wrappers.home__wrapper.className="show";
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;
}

navs.nav_2.innerHTML="HIRE"
document.querySelector(".logosmall").style.display= no__value;
    
    // sliders.slider_0.style.backgroundColor=default__value;
    // sliders.slider_0.style.transform=default__value;    
    navs.nav_0.style.color=default__value;
    navs.nav_0.style.transform=default__value;


    // sliders.slider_1.style.backgroundColor=default__value;
    // sliders.slider_1.style.transform=default__value;    
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;
    
    
    // sliders.slider_3.style.backgroundColor=default__value;
    // sliders.slider_3.style.transform=default__value;    
    navs.nav_3.style.color=default__value;
    navs.nav_3.style.transform=default__value;
    
    // sliders.slider_4.style.backgroundColor=default__value;
    // sliders.slider_4.style.transform=default__value;    
    navs.nav_4.style.color=default__value;
    navs.nav_4.style.transform=default__value;


    wrappers.home__wrapper.style.display=default__value;
    wrappers.projects__wrapper.style.display=no__value ;
    wrappers.about__wrapper.style.display=no__value; 
    wrappers.pro__wrapper.style.display= no__value;
    wrappers.con__wrapper.style.display= no__value;
}
function hovereffect_3() {
    // sliders.slider_3.style.backgroundColor = color__white;
    // sliders.slider_3.style.transform = transform._1;
    // sliders.slider_3.style.transition = transition__ease;
    navs.nav_3.style.color= color__white;
    navs.nav_3.style.transform = transform._9;
    navs.nav_3.style.transition = transition__ease;


    // sliders.slider_0.style.backgroundColor = default__value;
    // sliders.slider_0.style.transform= default__value; 
    navs.nav_0.style.transform = default__value;
    navs.nav_0.style.color = default__value;
    

    // sliders.slider_2.style.backgroundColor = default__value;
    // sliders.slider_2.style.transform= default__value; 
    navs.nav_2.style.transform = default__value;
    hire.style.transform = default__value;

navs.nav_2.innerHTML = "Home";

document.querySelector(".logosmall").style.display= default__value;
    
   
    // sliders.slider_1.style.backgroundColor = default__value;
    // sliders.slider_1.style.transform = default__value;    
    navs.nav_1.style.color = default__value;
    navs.nav_1.style.transform = default__value;

    // sliders.slider_4.style.backgroundColor = default__value;
    // sliders.slider_4.style.transform = default__value;    
    navs.nav_4.style.color = default__value;
    navs.nav_4.style.transform = default__value;
    
wrappers.projects__wrapper.className="show";
    
    wrappers.home__wrapper.style.display = no__value ;
    wrappers.projects__wrapper.style.display = default__value;
    wrappers.about__wrapper.style.display = no__value ;
    wrappers.pro__wrapper.style.display= no__value;
    wrappers.con__wrapper.style.display= no__value;

}


function hovereffect_4() {
    // sliders.slider_4.style.transition=transition__ease;
    // sliders.slider_4.style.backgroundColor= color__white;
    // sliders.slider_4.style.transform=transform._1;
    navs.nav_4.style.transition=transition__ease
    navs.nav_4.style.color= color__white;
    navs.nav_4.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;


    // sliders.slider_1.style.backgroundColor=default__value;
    // sliders.slider_1.style.transform=default__value;    
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;



    // sliders.slider_2.style.backgroundColor=default__value;
    // sliders.slider_2.style.transform=default__value;    
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
    
   document.querySelector(".logosmall").style.display= default__value;
   
   
//    sliders.slider_3.style.backgroundColor=default__value;
//    sliders.slider_3.style.transform=default__value;    
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;


//    sliders.slider_0.style.backgroundColor=default__value;
//    sliders.slider_0.style.transform=default__value;    
   navs.nav_0.style.color=default__value;
   navs.nav_0.style.transform=default__value;

   
   wrappers.con__wrapper.className="show";

   wrappers.home__wrapper.style.display= no__value;
   wrappers.projects__wrapper.style.display= no__value; 
   wrappers.about__wrapper.style.display= no__value;
   wrappers.pro__wrapper.style.display= no__value;
   wrappers.con__wrapper.style.display= default__value;
}
console.log(document.querySelectorAll('.container'));




if(document.querySelector('.html__container').style.display == default__value){
    document.querySelector('.circle__html').style.transform= transform._1_1;
    document.querySelector('.circle__html').style.backgroundColor= color__red;
}

document.getElementById('btn__right').addEventListener('click' ,function(){
    if(document.querySelector('.html__container').style.display == default__value ){
        document.querySelector('.css__container').style.display= default__value;
        document.querySelector('.css__container').classList.add('show__one');
        document.querySelector('.circle__css').style.transform= transform._1_1;
        document.querySelector('.circle__css').style.backgroundColor= color__red;
        document.querySelector('.html__container').style.display = no__value;
        document.querySelector('.circle__html').style.transform= default__value;
        document.querySelector('.circle__html').style.backgroundColor= default__value;

    }
    else if(document.querySelector('.css__container').style.display == default__value){
        document.querySelector('.js__container').style.display= default__value;
        document.querySelector('.js__container').classList.add('show__one');
        document.querySelector('.circle__js').style.transform= transform._1_1;
        document.querySelector('.circle__js').style.backgroundColor= color__red;
        document.querySelector('.css__container').style.display = no__value;
        document.querySelector('.circle__css').style.transform= default__value;
        document.querySelector('.circle__css').style.backgroundColor= default__value;
    }
    else if(document.querySelector('.js__container').style.display == default__value){
        document.querySelector('.figma__container').style.display= default__value;
        document.querySelector('.figma__container').classList.add('show__one');
        document.querySelector('.circle__figma').style.transform= transform._1_1;
        document.querySelector('.circle__figma').style.backgroundColor= color__red;
        document.querySelector('.js__container').style.display = no__value;
        document.querySelector('.circle__js').style.transform= default__value
        document.querySelector('.circle__js').style.backgroundColor= default__value
    }
    else if(document.querySelector('.figma__container').style.display == default__value){
        document.querySelector('.html__container').style.display= default__value;
        document.querySelector('.html__container').classList.add('show__one');
        document.querySelector('.circle__html').style.transform= transform._1_1;
        document.querySelector('.circle__html').style.backgroundColor= color__red;
        document.querySelector('.figma__container').style.display = no__value;
        document.querySelector('.circle__figma').style.transform= default__value
        document.querySelector('.circle__figma').style.backgroundColor= default__value;
    }

    });


document.getElementById('btn__left').addEventListener("click" ,function(){

    if(document.querySelector('.html__container').style.display == default__value ){
        document.querySelector('.figma__container').style.display= default__value;
        document.querySelector('.figma__container').classList.add('show__one');
        document.querySelector('.circle__figma').style.transform= transform._1_1;
        document.querySelector('.circle__figma').style.backgroundColor= color__red;
        document.querySelector('.html__container').style.display = no__value;
        document.querySelector('.circle__html').style.transform= default__value
        document.querySelector('.circle__html').style.backgroundColor= default__value

    }
    else if(document.querySelector('.figma__container').style.display == default__value){
        document.querySelector('.js__container').style.display= default__value;
        document.querySelector('.js__container').classList.add('show__one');
        document.querySelector('.circle__js').style.transform= transform._1_1;
        document.querySelector('.circle__js').style.backgroundColor= color__red;
        document.querySelector('.figma__container').style.display = no__value;
        document.querySelector('.circle__figma').style.transform= default__value;
        document.querySelector('.circle__figma').style.backgroundColor= default__value;
    }
    else if(document.querySelector('.js__container').style.display == default__value){
        document.querySelector('.css__container').style.display= default__value;
        document.querySelector('.css__container').classList.add('show__one');
        document.querySelector('.circle__css').style.transform= transform._1_1;
        document.querySelector('.circle__css').style.backgroundColor= color__red;
        document.querySelector('.js__container').style.display = no__value;
        document.querySelector('.circle__js').style.transform= default__value;
        document.querySelector('.circle__js').style.backgroundColor= default__value;
    }
    else if(document.querySelector('.css__container').style.display == default__value){
        document.querySelector('.html__container').style.display= default__value;
        document.querySelector('.html__container').classList.add('show__one');
        document.querySelector('.circle__html').style.transform= transform._1_1;
        document.querySelector('.circle__html').style.backgroundColor= color__red;
        document.querySelector('.css__container').style.display = no__value;
        document.querySelector('.circle__css').style.transform= default__value
        document.querySelector('.circle__css').style.backgroundColor= default__value
    }
    
})



document.getElementById('project__btn__right').addEventListener('click' ,function(){
    if(document.querySelector('.mockup__ss').style.display == default__value ){
      document.querySelector('.mockup__ss__two').style.display= default__value;
      document.querySelector('.mockup__ss').style.display = no__value;
      document.querySelector('.project__details__two').style.display= default__value;
      document.querySelector('.project__details__one').style.display = no__value;
      document.querySelector('.project__details__two').classList.add('show__one');
      

      
    }
else if(document.querySelector('.mockup__ss__two').style.display == default__value ){
    document.querySelector('.mockup__ss').style.display= default__value;
    document.querySelector('.mockup__ss__two').style.display = no__value;
    document.querySelector('.project__details__one').style.display= default__value;
      document.querySelector('.project__details__two').style.display = no__value;
      document.querySelector('.project__details__one').classList.add('show__one');
}
});

document.getElementById('project__btn__left').addEventListener('click' ,function(){
    if(document.querySelector('.mockup__ss__two').style.display == default__value ){
        document.querySelector('.mockup__ss').style.display= default__value;
        document.querySelector('.mockup__ss__two').style.display = no__value;
        document.querySelector('.project__details__one').style.display= default__value;
        document.querySelector('.project__details__two').style.display = no__value;
        document.querySelector('.project__details__one').classList.add('show__one');
     

    }
else if(document.querySelector('.mockup__ss').style.display == default__value ){
    document.querySelector('.mockup__ss__two').style.display= default__value;
    document.querySelector('.mockup__ss').style.display = no__value;
    document.querySelector('.project__details__two').style.display= default__value;
    document.querySelector('.project__details__one').style.display = no__value;
    document.querySelector('.project__details__two').classList.add('show__one');



      document.querySelector('..project__details').classList.add('show__one');
}
});


function hello(){
    scroll__button.className ="";
}
function effect(){
   logo__3d.style.transform = transform._1_1;
    body.className="bg-change-2x";
    document.querySelector(".hello").style.transform = transform._1_1;
    
}

function reset() {       
    logo__3d.style.transform = default__value
    body.style.backgroundImage= default__value;
    document.querySelector(".hello").style.transform = transform._1;
    body.classList.remove("bg-change-2x");

} 


  