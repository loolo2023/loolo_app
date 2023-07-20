const scrollButton1 = document.getElementById("scrollButton1");
const scrollButton2 = document.getElementById("scrollButton2");
const myForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

const scrollToForm = () => {
  myForm.scrollIntoView({ behavior: "smooth" });
};

scrollButton1.addEventListener("click", () => {
  scrollToForm();
});

scrollButton2.addEventListener("click", () => {
  scrollToForm();
});

function validateForm() {
  const requiredInputs = myForm.querySelectorAll("input[required]");

  for (const input of requiredInputs) {
    if (!input.value.trim()) {
      return false;
    }
  }
  return true;
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (validateForm()) {
    submitButton.disabled = true;

    const formData = {
      gender: document.getElementById("genderSelect").value,
      lookingForGender: document.getElementById("genderSelect2").value,
      payer: document.getElementById("genderSelect3").value,
      location: document.getElementById("input4").value,
      birthdate: document.getElementById("input5").value,
      email: document.getElementById("input6").value,
    };
    axios
      .post(
        `https://script.google.com/macros/s/AKfycbwmrqjfFaZRnEICWuwMzFrc4G_5HYHv8tUVNkeJ_6-bynCfwMlnU5EVVRW3kmNe-nCg/exec?p1=${formData.gender}&p2=${formData.lookingForGender}&p3=${formData.payer}&p4=${formData.location}&p5=${formData.birthdate}&p6=${formData.email}`
      )
      .then((response) => {
        console.log("Data saved to Google Sheets!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  }
}

submitButton.addEventListener("click", handleFormSubmit);
