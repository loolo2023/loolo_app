const scrollButton1 = document.getElementById("scrollButton1");
const scrollButton2 = document.getElementById("scrollButton2");
const myForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton")

const scrollToForm = () => {
  myForm.scrollIntoView({ behavior: "smooth" });
};

scrollButton1.addEventListener("click", () => {
  scrollToForm();
});

scrollButton2.addEventListener("click", () => {
  scrollToForm();
});

const validateForm = () => {
  const requiredInputs = myForm.querySelectorAll("input[required]");

  for (const input of requiredInputs) {
    if (!input.value.trim()) {
      return;
    }
  }

  myForm.submit();
};

