The Country Info App
This project consists of a frontend and backend application that work together to provide country-related information, such as population data, bordering countries, and flags.

Prerequisites
Ensure you have the following installed on your machine:

Node.js (LTS version recommended)
npm (comes with Node.js)
Getting Started
Follow the steps below to run the application locally.

Clone the Repository
bash
Copy code
git clone <repository-url>
cd the-Country-Info-App
Setting Up the Backend
Navigate to the Backend Directory:

bash
Copy code
cd backend
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables: Create a .env file in the backend directory and add the following variables:

env
Copy code

# Backend Server Port

PORT=5000

# External API URLs

NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_POPULATION_API=https://countriesnow.space/api/v0.1/countries/population
COUNTRIES_FLAG_API=https://countriesnow.space/api/v0.1/countries/flag/images
COUNTRIES=https://date.nager.at/api/v3/AvailableCountries
Run the Backend: Start the backend server with:

bash
Copy code
npm run dev
The backend will run at http://localhost:5000.

Setting Up the Frontend
Navigate to the Frontend Directory:

bash
Copy code
cd frontend
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables: Create a .env file in the frontend directory and add the following variable:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000
Run the Frontend: Start the frontend server with:

bash
Copy code
npm run dev
The frontend will run at http://localhost:3000.

Running the Project
Start the Backend:

bash
Copy code
cd backend
npm run dev
Start the Frontend:

bash
Copy code
cd frontend
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

Folder Structure
bash
Copy code
the-Country-Info-App/
├── backend/ # Backend application (Express.js)
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies
│ └── server.js # Backend entry point
├── frontend/ # Frontend application (Next.js)
│ ├── .env # Environment variables
│ ├── package.json # Frontend dependencies
│ └── app/ # Next.js App Directory
├── README.md # Project instructions
Notes
Ensure that both the backend and frontend servers are running simultaneously for the app to work correctly.
If you encounter any issues, verify that your .env files are correctly set up.
Enjoy exploring The Country Info App! 🌍
