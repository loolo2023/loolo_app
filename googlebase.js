const spreadsheetId = '1mvjzroCKQEKnzbUPpU9KGqlre_rBw6Qom6Uf-AkLwn8';
const submitButton = document.getElementById('submitButton');

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('track');

function doPost(e) {
  var params = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), params.page]);
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'row': params }));
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = {
    gender: document.getElementById('genderSelect').value,
    lookingForGender: document.getElementById('genderSelect2').value,
    payer: document.getElementById('genderSelect3').value,
    location: document.getElementById('input4').value,
    birthdate: document.getElementById('input5').value,
    email: document.getElementById('input6').value
  };

  console.log(formData);

  const apiKey = 'AIzaSyBpLN2x8fpko_DSmkrrorzppsjKn-fRl_4';

  axios.post(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=RAW`, {
    range: 'Sheet1',
    majorDimension: 'ROWS',
    values: [Object.values(formData)],
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('Data saved to Google Sheets!');
    document.getElementById('contactForm').reset();
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });
}