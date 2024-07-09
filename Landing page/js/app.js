/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



//Define Global Variables
let listOfSections = document.querySelectorAll("section");
let nav = document.querySelector(".navbar__menu");

// build the nav
let ul1 = document.createElement('ul');
ul1.id = "navbar__list";
nav.insertBefore(ul1, nav.firstChild);




//create the links and append them to the navbar
 for (let section of listOfSections) {
   let sectionId = section.id;
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', "#"+sectionId);
    a.innerHTML = section.dataset.nav;
   
    a.setAttribute('id', "#"+sectionId);
    li.appendChild(a);
    a.classList.add("menu__link");
    ul1.appendChild(li);
    
}
//create the bars
let ulBars = document.createElement('ul');
ulBars.classList.add("hamburger");
for(let i=0; i<3 ; i++){
  let li = document.createElement('li');
  li.classList.add('bar');
  ulBars.appendChild(li);
}
nav.appendChild(ulBars);
//Responsive nav bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#navbar__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active_bar");
    navMenu.classList.toggle("active_bar");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".menu__link");

navLink.forEach(n => n.addEventListener("click", closeMenu)
  );

function closeMenu() {
    hamburger.classList.remove("active_bar");
    navMenu.classList.remove("active_bar");
}


// Add class 'active' to section when near top of viewport
 function makeActive(){
  
  
    for (let section of listOfSections) {
        const box = section.getBoundingClientRect();
        const VALUE= 150;
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= VALUE && box.bottom >= VALUE) {
            section.classList.add("your-active-class");
           
        } else {
            section.classList.remove("your-active-class");
         
        }
     }
} 

   
     
     
document.addEventListener("scroll",  makeActive);

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
let scrollLinks = document.querySelectorAll('a[href^="#"]');
  const scrollOffset = 150;
  

  scrollLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      
      console.log(anchor);
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      if (target) {
        
        let targetOffset = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
       
      
        target.focus();
      }
    });
  });

  




// Add an active state to your navigation items when a section is in the viewport
const navlinks = document.querySelectorAll('header nav a');
 
   
  function activeLink(){
    listOfSections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 170;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
     
      if(top >=offset && top<= offset+height){
        navlinks.forEach(links =>{
  
          links.classList.remove("active");
          document.querySelector('header nav a[href*=' + id + ']').classList.add("active")
        })
      }


    
    }
      ); 
      

  };

  
      
  
    
 

  /* a button to scroll to the top */

  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
  activeLink();
};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// make a sticky navbar 
/*let hideNav;
document.addEventListener("scroll", () => {
    nav.style.display = "block";
    clearTimeout(hideNav);
    if (window.pageYOffset > 500) {
        hideNav = setTimeout(() => {
            nav.style.display = "none";
        }, 1600);
    }
}); */
