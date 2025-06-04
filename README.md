# Responsive Form Project

## Overview
This project is a responsive web form designed to collect information from applicants. It includes various input fields such as names, occupations, contact details, and more. The form is built using HTML, CSS, and JavaScript, and is structured to connect to a backend database for data submission.

## Project Structure
```
responsive-form-project
├── src
│   ├── index.html         # HTML structure of the form
│   ├── styles
│   │   └── style.css      # CSS styles for the form
│   ├── scripts
│   │   └── main.js        # JavaScript for form validation and submission
│   └── api
│       └── submit.js      # JavaScript for handling form submission to the database
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Features
- Input fields for:
  - Name of Applicant
  - Father's Name
  - Father's Occupation (Radio buttons: Gov, Private)
  - Mother's Occupation (Radio buttons: Gov, Private)
  - Class/Course (Radio buttons: English Medium, Hindi Medium)
  - Aadhaar Card Number
  - Date of Birth (Calendar input)
  - Name of School and Address (Textarea)
  - Contact Number
  - Parent's Number
- Responsive design for optimal viewing on various devices.
- Client-side validation and interactivity using JavaScript.
- Backend integration for data submission.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd responsive-form-project
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Project
1. Open `src/index.html` in your web browser to view the form.
2. Fill out the form and submit to see the data handling in action.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.