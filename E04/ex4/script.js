document.getElementById("sendBtn").addEventListener("click", function() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zipCode").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const info = document.getElementById("info").value;

    const output = `
        <p><strong>${firstName} ${lastName}</strong></p>
        <p>${address}, ${city} ${zipCode}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>${info}</p>
    `;

    document.getElementById("userInfo").innerHTML = output;
});
