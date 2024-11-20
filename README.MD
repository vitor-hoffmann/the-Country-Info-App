# The Country Info App

This project consists of a **frontend** and **backend** application that work together to provide country-related information, such as population data, bordering countries, and flags.

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow the steps below to run the application locally.

### Clone the Repository

```bash
git clone <repository-url>
cd the-Country-Info-App```
Setting Up the Backend
Navigate to the Backend Directory:

```bash
cd backend```
Install Dependencies:

```bash
npm install```
Configure Environment Variables: Create a .env file in the backend directory and add the following variables:

env
```# Backend Server Port
PORT=5000

# External API URLs
NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_POPULATION_API=https://countriesnow.space/api/v0.1/countries/population
COUNTRIES_FLAG_API=https://countriesnow.space/api/v0.1/countries/flag/images
COUNTRIES=https://date.nager.at/api/v3/AvailableCountries```
Run the Backend: Start the backend server with:

```bash
npm run dev```
The backend will run at http://localhost:5000.

Setting Up the Frontend
Navigate to the Frontend Directory:

```bash
cd frontend```
Install Dependencies:

```bash
npm install```
Configure Environment Variables: Create a .env file in the frontend directory and add the following variable:

env
```NEXT_PUBLIC_API_URL=http://localhost:5000```
Run the Frontend: Start the frontend server with:

```bash
npm run dev```
The frontend will run at http://localhost:3000.


Notes
Ensure that both the backend and frontend servers are running simultaneously for the app to work correctly.
If you encounter any issues, verify that your .env files are correctly set up.
Enjoy exploring The Country Info App! 🌍
