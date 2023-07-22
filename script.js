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
    const errorSpan = input.nextElementSibling;
    if (!input.value.trim()) {
      errorSpan.style.display = "block";
      return false;
    } else {
      errorSpan.style.display = "none";
    }
  }

  return true;
}
function displayModal() {
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (validateForm()) {
    submitButton.disabled = true;
    submitButton.classList.add("disabled");
    submitButton.classList.remove("active");
    const formData = {
      gender: document.getElementById("genderSelect").value,
      lookingForGender: document.getElementById("genderSelect2").value,
      payer: document.getElementById("genderSelect3").value,
      price: document.getElementById("input4").value,
      location: document.getElementById("input5").value,
      birthdate: document.getElementById("input6").value,
      email: document.getElementById("input7").value,
    };
    axios
      .post(
        
        `https://script.google.com/macros/s/AKfycbwbfsn_m8q6Ic67vlobx_jIBU0Azg4oI3wT5ZdNWXUoAM_xSjQisXqkgYCBzoxFpJsv/exec?p1=${formData.gender}&p2=${formData.lookingForGender}&p3=${formData.payer}&p4=${formData.price}&p5=${formData.location}&p6=${formData.birthdate}&p7=${formData.email}`
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
        submitButton.classList.remove("disabled");
        submitButton.classList.add("active");
        displayModal();
      });
  }
}

submitButton.addEventListener("click", handleFormSubmit);

submitButton.addEventListener("touchstart", () => {
  submitButton.style.backgroundColor = "#FFAE88";
  submitButton.style.border = "1px solid #FFAE88";
});

submitButton.addEventListener("touchend", () => {
  submitButton.style.backgroundColor = "#ff6381";
  submitButton.style.border = "1px solid #ff6381";
});
