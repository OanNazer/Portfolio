// DARK MODE
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  const icon = themeToggle.querySelector('i');

  if(document.body.classList.contains('light-mode')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// SCROLL ANIMATION
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', revealElements);

function revealElements(){
  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add('active');
    }
  });
}

revealElements();