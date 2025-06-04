// JavaScript code for handling form validation, submission, and interactivity

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicantForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            const formData = new FormData(form);
            submitForm(formData);
        }
    });
});

function validateForm() {
    const name = document.getElementById('applicantName').value;
    const fatherName = document.getElementById('fatherName').value;
    const aadhaarNumber = document.getElementById('aadhaarNumber').value;
    const dob = document.getElementById('dob').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const parentNumber = document.getElementById('parentNumber').value;

    if (!name || !fatherName || !aadhaarNumber || !dob || !contactNumber || !parentNumber) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Additional validation can be added here (e.g., regex for Aadhaar, phone numbers)

    return true;
}

function submitForm(formData) {
    fetch('/api/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Form submitted successfully!');
            document.getElementById('applicantForm').reset();
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
}