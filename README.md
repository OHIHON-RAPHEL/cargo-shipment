<!-- INTARACTIVE BOOKING FORM -->

A multi-step cargo booking form built with React, featuring:

* Form validation using Yup & React Hook Form

* Dynamic pricing based on shipment type & weight

* Responsive UI with Tailwind CSS


<!-- PREREQUISITES -->

Before running the project, ensure you have the following installed:

* Node.js (v14+ recommended)

* npm (or yarn as an alternative)


<!-- INSTALLATION & SETUP -->

1. Clone the repository:
 * git clone https://github.com/OHIHON-RAPHEL/cargo-shipment.git
 
 * cd cargo-shipment

2. install depences

 * npm install

 * npm install -D vite


<!-- RUNING THE PROJECT LOCALLY -->

To start the development server, run:

* npm run dev (This will launch the app on http://localhost:5173/.) copy the url and paste in browser


<!-- PROJECT STRUCTURE -->

 cargo-shipment
├── src
│   ├── components
│   │   ├── StepOne.js  # User details form
│   │   ├── StepTwo.js  # Shipment details & pricing
│   │   ├── StepThree.js # Review & confirmation
│   ├── App.js         # Multi-step form logic
│   ├── index.js       # React entry point
│   ├── index.css      # Tailwind styles
├── package.json       # Dependencies & scripts
├── tailwind.config.js # Tailwind configuration
└── README.md          # Project instructions


<!-- FEATURES & ENHANCEMENT -->

✅ Multi-step Form Navigation
✅ Form Validation with Yup
✅ Dynamic Pricing Updates
✅ Responsive UI with Tailwind CSS