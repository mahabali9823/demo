const submitForm = async (formData) => {
    try {
        const response = await fetch('https://your-api-endpoint.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        alert('Form submitted successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {
            applicantName: form.elements['applicantName'].value,
            fathersName: form.elements['fathersName'].value,
            fathersOccupation: form.elements['fathersOccupation'].value,
            mothersOccupation: form.elements['mothersOccupation'].value,
            classCourse: form.elements['classCourse'].value,
            aadhaarCardNumber: form.elements['aadhaarCardNumber'].value,
            dateOfBirth: form.elements['dateOfBirth'].value,
            schoolName: form.elements['schoolName'].value,
            address: form.elements['address'].value,
            contactNumber: form.elements['contactNumber'].value,
            parentsNumber: form.elements['parentsNumber'].value,
        };

        submitForm(formData);
    });
});