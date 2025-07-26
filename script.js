
function toggleStickyHeader() {
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', toggleStickyHeader);
window.onload = toggleStickyHeader;

document.querySelectorAll('.navibar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


window.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});


const form = document.querySelector('form');
const inputFields = document.querySelectorAll('.input-field input, .textarea-field textarea');

form.addEventListener('submit', (e) => {
    let isValid = true;

    inputFields.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});


inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
    });
});



const typewriterElement = document.getElementById('typewriter');
const professions = ["Graphic Designer", "UI/UX Designer","Infographic Designer", "Web Developer", "App Developer"];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentProfession = professions[professionIndex];

    if (!isDeleting) {
   
        typewriterElement.textContent = currentProfession.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentProfession.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); 
        } else {
            setTimeout(typeWriter, 100); 
        }
    } else {
     
        typewriterElement.textContent = currentProfession.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length; 
            setTimeout(typeWriter, 500); 
        } else {
            setTimeout(typeWriter, 50); 
        }
    }
}

typeWriter();