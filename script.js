const sliders = {
    slider_1 :  document.getElementById('slider_1'),
    slider_2 :  document.getElementById('slider_2'),
    slider_3 :  document.getElementById('slider_3'),
    
}
const navs ={
    nav_1 : document.getElementById('nav_1'),
    nav_2 : document.getElementById('nav_2'),
    nav_3 : document.getElementById('nav_3'),
}
const wrappers ={
    about__wrapper : document.getElementById('about__wrapper'),
    home__wrapper : document.getElementById('home__wrapper'),
    projects__wrapper : document.getElementById('projects__wrapper'),
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
const transition__ease = "all .3s ease .1s";
const default__value = "";
const no__value = "none";
const scroll__button = document.getElementById('scroll__button');




  
 document.addEventListener('keydown', function() {
    wrappers.about__wrapper.focus();
  });



if (wrappers.home__wrapper.style.display == default__value) {
    sliders.slider_2.style.backgroundColor= color__white;
    sliders.slider_2.style.transform= transform._1;
    hire.style.transform= transform._1_1;

}


console.log(document.querySelectorAll('a'))
   

function hovereffect_1() {
    sliders.slider_1.style.transition=transition__ease;
    sliders.slider_1.style.backgroundColor= color__white;
    sliders.slider_1.style.transform=transform._1;
    navs.nav_1.style.transition=transition__ease
    navs.nav_1.style.color= color__white;
    navs.nav_1.style.transform= transform._9;
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;


    sliders.slider_2.style.backgroundColor=default__value;
    sliders.slider_2.style.transform=default__value;    
    navs.nav_2.style.color=default__value;
    navs.nav_2.style.transform=default__value;
    navs.nav_2.innerHTML="Home";
    hire.style.transform=default__value;
   
   
   sliders.slider_3.style.backgroundColor=default__value;
   sliders.slider_3.style.transform=default__value;    
   navs.nav_3.style.color=default__value;
   navs.nav_3.style.transform=default__value;

   
   wrappers.about__wrapper.className="show";

   wrappers.home__wrapper.style.display=no__value ;
   wrappers.projects__wrapper.style.display=no__value; 
   wrappers.about__wrapper.style.display=default__value;
}
function hovereffect_2() {
    sliders.slider_2.style.backgroundColor= color__white;
    sliders.slider_2.style.transform=transform._1;
    sliders.slider_2.style.transition=transition__ease;
    navs.nav_2.style.transform=transform._9;
    
if (wrappers.home__wrapper.style.display !== default__value){
    wrappers.home__wrapper.className="show";
    hire.style.transition=transition__ease;
    hire.style.transform=transform._1_1;
}

navs.nav_2.innerHTML="Say Heyy!!"
    
    sliders.slider_1.style.backgroundColor=default__value;
    sliders.slider_1.style.transform=default__value;    
    navs.nav_1.style.color=default__value;
    navs.nav_1.style.transform=default__value;
    hire.style.backgroundColor=default__value;
    
    
    sliders.slider_3.style.backgroundColor=default__value;
    sliders.slider_3.style.transform=default__value;    
    navs.nav_3.style.color=default__value;
    navs.nav_3.style.transform=default__value;
    
    wrappers.home__wrapper.style.display=default__value;
    wrappers.projects__wrapper.style.display=no__value ;
    wrappers.about__wrapper.style.display=no__value; 

}
function hovereffect_3() {
    sliders.slider_3.style.backgroundColor = color__white;
    sliders.slider_3.style.transform = transform._1;
    sliders.slider_3.style.transition = transition__ease;
    navs.nav_3.style.color= color__white;
    navs.nav_3.style.transform = transform._9;
    navs.nav_3.style.transition = transition__ease;


    sliders.slider_2.style.backgroundColor = default__value;
    sliders.slider_2.style.transform= default__value; 
    navs.nav_2.style.transform = default__value;
    hire.style.transform = default__value;

navs.nav_2.innerHTML = "Home";
    
   
    sliders.slider_1.style.backgroundColor = default__value;
    sliders.slider_1.style.transform = default__value;    
    navs.nav_1.style.color = default__value;
    navs.nav_1.style.transform = default__value;
    
wrappers.projects__wrapper.className="show";
    
    wrappers.home__wrapper.style.display = no__value ;
    wrappers.projects__wrapper.style.display = default__value;
    wrappers.about__wrapper.style.display = no__value ;

}
const progress = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');

function updateProgress(percent) {
  const deg = percent * 3.6;
  if (percent > 50) {
    progress.classList.add('complete');
  }
  progress.style.transform = `rotate(${deg}deg)`;
  progressText.textContent = `${percent}%`;
}

updateProgress(75); // Example usage

function hello(){
    scroll__button.className ="";
}
function effect(){
   logo__3d.style.transform = transform._1_1;
    body.className="bg-change-2x";
    document.querySelector(".hello").style.transform = transform._1_1;
    
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
  }
  
function reset() {       
    logo__3d.style.transform = default__value
    body.style.backgroundImage= default__value;
    document.querySelector(".hello").style.transform = transform._1;
    scroll__button.classList.remove("hello");
    body.classList.remove("bg-change-2x");

} 


  