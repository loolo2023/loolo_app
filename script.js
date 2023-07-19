const scrollButton1 = document.getElementById('scrollButton1');
const scrollButton2 = document.getElementById('scrollButton2');
const myForm = document.getElementById('contactForm');

const scrollToForm = () => {
  myForm.scrollIntoView({ behavior: 'smooth' });
};

scrollButton1.addEventListener('click', scrollToForm);
scrollButton2.addEventListener('click', scrollToForm);





