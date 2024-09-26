document.getElementById('intro_form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const speciality = document.getElementById('speciality').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('datepicker').value;
    const massage = document.getElementById('massage').value; // Ensure this matches your HTML

    // Create the email data
    const templateParams = {
        name: name,
        email: email,
		phone: phone,
        speciality: speciality,
        date: date,
        massage: massage // Ensure this matches your HTML
    };


    // Send the email
    emailjs.send('service_4bozjrd', 'template_w6k01as', templateParams).then(
        (response) => {
			
			document.getElementById('name').value="";
			document.getElementById('email').value="";
			document.getElementById('speciality').value="";
			document.getElementById('phone').value="";
			document.getElementById('datepicker').value="";
			document.getElementById('massage').value="";

			alert("Your message has been sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
            // Optionally show a success message to the user
        },
        (error) => {
            console.log('FAILED...', error);
            // Optionally show an error message to the user
        }
    );
});



// Filter Function
