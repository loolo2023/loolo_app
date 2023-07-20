const submitButton = document.getElementById("submitButton");

function handleFormSubmit(event) {
  event.preventDefault();

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
    });
}

submitButton.addEventListener("click", handleFormSubmit);
