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

/**
 * Define Global Variables
 * 
*/
const navigationMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


// build the nav
for (const section of sections) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('menu__link');
    link.innerHTML = section.getAttribute('data-nav');
    link.dataset.nav = section.id; 
    listItem.appendChild(link);
    navigationMenu.appendChild(listItem);
  }
 

  

// Add class 'active' to section when near top of viewport
window.onscroll=function makeActive(){
    for ( sec of sections) {
        const box = sec.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        const VALUE = 150; 
        if (box.top <= VALUE && box.bottom >= VALUE) {
            sec.classList.add("active");
        //apply active state on current section and corresponding Nav link
        } else {
        //Remove active state from other section and corresponding Nav link
        sec.classList.remove("active");
        }
    }
}


// Scroll to anchor ID using scrollTO event
document.addEventListener('click', (menu) => {
    if (menu.target.matches('.menu__link')) {
      menu.preventDefault();
      const targetId = menu.target.dataset.nav;
      if (targetId) {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          location.hash = targetId;
        }, 200);
      }
    }
  });
 

