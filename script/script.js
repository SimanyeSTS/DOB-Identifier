document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const idNumber = document.getElementById('idNumber').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (idNumber.length !== 13 || isNaN(idNumber)) {
        resultDiv.innerHTML = '<p id="error">Please enter a valid 13-digit numerical ID.</p>';
        return;
    }

    const year = idNumber.substring(0, 2);
    const month = idNumber.substring(2, 4);
    const day = idNumber.substring(4, 6);
    const genderCode = idNumber.substring(6, 7);
    const gender = genderCode < 5 ? 'Female' : 'Male';

    const birthYear = parseInt(year) > 22 ? '19' + year : '20' + year;

    resultDiv.innerHTML = `
        <p>Day/Month/Year: ${day}/${month}/${birthYear}</p>
        <p>Gender: ${gender}</p>
    `;
});
