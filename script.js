'use strict'

// objects containing selectors 

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
    skill__wrapper : document.getElementById('skill__wrapper'),
    contact__wrapper : document.getElementById('contact__wrapper'),
}
const transform ={
    _9 : "scale(0.9)",
    _1_1 : "scale(1.1)",
    _1 : "scale(1)",
}
const trackingDots = {
    html : document.querySelector('.circle__html'),
    css : document.querySelector('.circle__css'),
    js : document.querySelector('.circle__js'),
    figma : document.querySelector('.circle__figma'),
}
const skillContainers = {
 htmlSkillContainer : document.querySelector('.html__container'),
 cssSkillContainer : document.querySelector('.css__container'),
 jsSkillContainer : document.querySelector('.js__container'),
 figmaSkillContainer : document.querySelector('.figma__container'),
}
const screenshot ={
    ss__one : document.querySelector('.mockup__ss'),
    ss__two : document.querySelector('.mockup__ss__two'),
}
const projectCard = {
    projectOne :document.querySelector('.project__details__one'),
    projectTwo :document.querySelector('.project__details__two'),
}
// general selectors 

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




// tabs 

if (wrappers.home__wrapper.style.display == default__value) {
    // sliders.slider_2.style.backgroundColor= color__white;
    // sliders.slider_2.style.transform= transform._1;
    hire.style.transform= transform._1_1;
   document.querySelector(".logosmall").style.display= no__value;

}
function hovereffect_0() {
    navs.nav_0.style.transition=transition__ease
    navs.nav_0.style.color= color__white;
    navs.nav_0.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;

   
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;


 
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
   
    
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;

 
   navs.nav_4.style.color=default__value;
   navs.nav_4.style.transform=default__value;

   
   wrappers.skill__wrapper.className="show";
   
   document.querySelector(".logosmall").style.display= default__value;

   wrappers.home__wrapper.style.display= no__value;
   wrappers.projects__wrapper.style.display= no__value; 
   wrappers.about__wrapper.style.display= no__value;
   wrappers.contact__wrapper.style.display= no__value;
   wrappers.skill__wrapper.style.display= default__value;
}
function hovereffect_1() {
    navs.nav_1.style.transition=transition__ease
    navs.nav_1.style.color= color__white;
    navs.nav_1.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;

    navs.nav_0.style.color=default__value;
    navs.nav_0.style.transform=default__value;
  
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
     
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;
   
   navs.nav_4.style.color=default__value;
   navs.nav_4.style.transform=default__value;
   
   wrappers.about__wrapper.className="show";
   document.querySelector(".logosmall").style.display= default__value;

   wrappers.about__wrapper.style.display=default__value;
   wrappers.home__wrapper.style.display=no__value ;
   wrappers.projects__wrapper.style.display=no__value; 
   wrappers.skill__wrapper.style.display= no__value;
   wrappers.contact__wrapper.style.display= no__value;

}
function hovereffect_2() {
    navs.nav_2.style.transform=transform._9;
    
if (wrappers.home__wrapper.style.display !== default__value){
    wrappers.home__wrapper.className="show";
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;
}

navs.nav_2.innerHTML="HIRE"
document.querySelector(".logosmall").style.display= no__value;
    
    navs.nav_0.style.color=default__value;
    navs.nav_0.style.transform=default__value;

  
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;
    
    
    navs.nav_3.style.color=default__value;
    navs.nav_3.style.transform=default__value;
      
    navs.nav_4.style.color=default__value;
    navs.nav_4.style.transform=default__value;


    wrappers.home__wrapper.style.display=default__value;
    wrappers.projects__wrapper.style.display=no__value ;
    wrappers.about__wrapper.style.display=no__value; 
    wrappers.skill__wrapper.style.display= no__value;
    wrappers.contact__wrapper.style.display= no__value;
}
function hovereffect_3() {
    navs.nav_3.style.color= color__white;
    navs.nav_3.style.transform = transform._9;
    navs.nav_3.style.transition = transition__ease;


    navs.nav_0.style.transform = default__value;
    navs.nav_0.style.color = default__value;
    
    navs.nav_2.style.transform = default__value;
    hire.style.transform = default__value;

navs.nav_2.innerHTML = "Home";

document.querySelector(".logosmall").style.display= default__value;
    
      
    navs.nav_1.style.color = default__value;
    navs.nav_1.style.transform = default__value;
  
    navs.nav_4.style.color = default__value;
    navs.nav_4.style.transform = default__value;
    
wrappers.projects__wrapper.className="show";
    
    wrappers.home__wrapper.style.display = no__value ;
    wrappers.projects__wrapper.style.display = default__value;
    wrappers.about__wrapper.style.display = no__value ;
    wrappers.skill__wrapper.style.display= no__value;
    wrappers.contact__wrapper.style.display= no__value;

}
function hovereffect_4() {
    navs.nav_4.style.transition=transition__ease
    navs.nav_4.style.color= color__white;
    navs.nav_4.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;

   
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;


  
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
    
   document.querySelector(".logosmall").style.display= default__value;
   
   
 
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;


 
   navs.nav_0.style.color=default__value;
   navs.nav_0.style.transform=default__value;

   
   wrappers.contact__wrapper.className="show";

   wrappers.home__wrapper.style.display= no__value;
   wrappers.projects__wrapper.style.display= no__value; 
   wrappers.about__wrapper.style.display= no__value;
   wrappers.skill__wrapper.style.display= no__value;
   wrappers.contact__wrapper.style.display= default__value;
}


// skills slider 

if(skillContainers.htmlSkillContainer.style.display == default__value){
    trackingDots.html.style.transform= transform._1_1;
    trackingDots.html.style.backgroundColor= color__red;
}

document.getElementById('btn__right').addEventListener('click' ,function(){
    if(skillContainers.htmlSkillContainer.style.display == default__value ){
        skillContainers.cssSkillContainer.style.display= default__value;
        skillContainers.cssSkillContainer.classList.add('show__one');
        trackingDots.css.style.transform= transform._1_1;
        trackingDots.css.style.backgroundColor= color__red;
        skillContainers.htmlSkillContainer.style.display = no__value;
        trackingDots.html.style.transform= default__value;
        trackingDots.html.style.backgroundColor= default__value;

    }
    else if(skillContainers.cssSkillContainer.style.display == default__value){
        skillContainers.jsSkillContainer.style.display= default__value;
        skillContainers.jsSkillContainer.classList.add('show__one');
        trackingDots.js.style.transform= transform._1_1;
        trackingDots.js.style.backgroundColor= color__red;
        skillContainers.cssSkillContainer.style.display = no__value;
        trackingDots.css.style.transform= default__value;
        trackingDots.css.style.backgroundColor= default__value;
    }
    else if(skillContainers.jsSkillContainer.style.display == default__value){
       skillContainers.figmaSkillContainer.style.display= default__value;
        skillContainers.figmaSkillContainer.classList.add('show__one');
        trackingDots.figma.style.transform= transform._1_1;
        trackingDots.figma.style.backgroundColor= color__red;
        skillContainers.jsSkillContainer.style.display = no__value;
        trackingDots.js.style.transform= default__value
        trackingDots.js.style.backgroundColor= default__value
    }
    else if(skillContainers.figmaSkillContainer.style.display == default__value){
        skillContainers.htmlSkillContainer.style.display= default__value;
        skillContainers.htmlSkillContainer.classList.add('show__one');
        trackingDots.html.style.transform= transform._1_1;
        trackingDots.html.style.backgroundColor= color__red;
       skillContainers.figmaSkillContainer.style.display = no__value;
        trackingDots.figma.style.transform= default__value
        trackingDots.figma.style.backgroundColor= default__value;
    }

    });


document.getElementById('btn__left').addEventListener("click" ,function(){

    if(skillContainers.htmlSkillContainer.style.display == default__value ){
       skillContainers.figmaSkillContainer.style.display= default__value;
        skillContainers.figmaSkillContainer.classList.add('show__one');
        trackingDots.figma.style.transform= transform._1_1;
        trackingDots.figma.style.backgroundColor= color__red;
        skillContainers.htmlSkillContainer.style.display = no__value;
        trackingDots.html.style.transform= default__value
        trackingDots.html.style.backgroundColor= default__value

    }
    else if(skillContainers.figmaSkillContainer.style.display == default__value){
        skillContainers.jsSkillContainer.style.display= default__value;
        skillContainers.jsSkillContainer.classList.add('show__one');
        trackingDots.js.style.transform= transform._1_1;
        trackingDots.js.style.backgroundColor= color__red;
       skillContainers.figmaSkillContainer.style.display = no__value;
        trackingDots.figma.style.transform= default__value;
        trackingDots.figma.style.backgroundColor= default__value;
    }
    else if(skillContainers.jsSkillContainer.style.display == default__value){
        skillContainers.cssSkillContainer.style.display= default__value;
        skillContainers.cssSkillContainer.classList.add('show__one');
        trackingDots.css.style.transform= transform._1_1;
        trackingDots.css.style.backgroundColor= color__red;
        skillContainers.jsSkillContainer.style.display = no__value;
        trackingDots.js.style.transform= default__value;
        trackingDots.js.style.backgroundColor= default__value;
    }
    else if(skillContainers.cssSkillContainer.style.display == default__value){
        skillContainers.htmlSkillContainer.style.display= default__value;
        skillContainers.htmlSkillContainer.classList.add('show__one');
        trackingDots.html.style.transform= transform._1_1;
        trackingDots.html.style.backgroundColor= color__red;
        skillContainers.cssSkillContainer.style.display = no__value;
        trackingDots.css.style.transform= default__value
        trackingDots.css.style.backgroundColor= default__value
    }
    
})


// projects slider 

document.getElementById('project__btn__right').addEventListener('click' ,function(){
    if(screenshot.ss__one.style.display == default__value ){
      screenshot.ss__two.style.display= default__value;
      screenshot.ss__one.style.display = no__value;
      projectCard.projectTwo.style.display= default__value;
      projectCard.projectOne.style.display = no__value;
      projectCard.projectTwo.classList.add('show__one');
      

      
    }
else if(screenshot.ss__two.style.display == default__value ){
    screenshot.ss__one.style.display= default__value;
    screenshot.ss__two.style.display = no__value;
    projectCard.projectOne.style.display= default__value;
      projectCard.projectTwo.style.display = no__value;
      projectCard.projectOne.classList.add('show__one');
}
});

document.getElementById('project__btn__left').addEventListener('click' ,function(){
    if(screenshot.ss__two.style.display == default__value ){
        screenshot.ss__one.style.display= default__value;
        screenshot.ss__two.style.display = no__value;
        projectCard.projectOne.style.display= default__value;
        projectCard.projectTwo.style.display = no__value;
        projectCard.projectOne.classList.add('show__one');
     

    }
else if(screenshot.ss__one.style.display == default__value ){
    screenshot.ss__two.style.display= default__value;
    screenshot.ss__one.style.display = no__value;
    projectCard.projectTwo.style.display= default__value;
    projectCard.projectOne.style.display = no__value;
    projectCard.projectTwo.classList.add('show__one');

}
});


function effect(){
    body.className="bg-change-2x";
    document.querySelector(".hello").style.transform = transform._1_1;
    
}

function reset() {       
    body.style.backgroundImage= default__value;
    document.querySelector(".hello").style.transform = transform._1;
    body.classList.remove("bg-change-2x");

} 


  