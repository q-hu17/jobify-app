# Jobify MERN Stack Application

Welcome to the **Jobify** MERN Stack project, a full-stack web application built with MongoDB, Express, React, and Node.js. This application is designed to help users manage job applications and track their status. It offers a user-friendly interface with features such as secure authentication, CRUD operations, data visualization, and more.

## Project Overview

**Jobify** is a job tracking application that allows users to manage job applications efficiently. The application provides a clean and intuitive interface, with functionalities that ensure a seamless user experience.

**[Live Demo](https://jobify-app-poq7.onrender.com/)**

## Key Features

### Front-End Development

- **React with VITE**: The front-end is built with React, leveraging VITE for a fast and optimized development experience.
- **Global Styling**: Implemented global styles to maintain a consistent look and feel across all pages.
- **Responsive Pages**: Includes several pages such as Landing, Error, Register, and Dashboard for comprehensive user interaction.

### Routing

- **React Router 6.4+**: Utilized React Router for smooth navigation and nested routes, ensuring an intuitive user flow.

### Back-End Development

- **Express Server**: Developed a server-side application with Node.js and Express, using ES6 modules and "nodemon" for efficient development.
- **Database**: Set up a MongoDB database in the cloud using Atlas, designed routes and controllers, and ensured robust data management.

### Security and Authentication

- **Password Hashing**: Implemented secure user authentication by hashing passwords.
- **JWT Authentication**: Utilized JSON Web Tokens (JWT) for secure user authentication and authorization.

### API Management

- **Axios Integration**: Managed API requests using Axios, setting JWT tokens for secure interactions, and configured Axios for efficient data handling.

### CRUD Functionality

- **Full CRUD Operations**: Implemented complete Create, Read, Update, and Delete functionalities.
- **Permissions**: Set up server-side permissions to control access to resources.

### Advanced UI Features

- **Data Visualization**: Integrated charts and cards to provide a visually appealing and informative user interface.
- **Search and Filter**: Added search and filter functionalities to enhance user interaction.
- **Pagination**: Implemented pagination to handle large datasets efficiently.

### Testing and Error Handling

- **Thunder Client**: Conducted extensive API testing using Thunder Client.
- **Error Handling**: Set up comprehensive error handling in Express, using the "express-async-errors" package for streamlined debugging.

### Deployment

- **Render Deployment**: Deployed the full-stack application on Render, making it accessible for real-world use.

**[Live Demo](https://jobify-app-poq7.onrender.com/)**

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- VITE installed globally

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/q-hu17/jobify-app.git
   cd jobify-app
   ```
2. **Install dependencies for both the client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. **Set up environment variables:**

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. **Start the development servers:**
    - For the client(React app):
    ```bash
    cd client
    npm run dev
    ```
    - For the server(Express app):
    ```bash
    cd server
    npm run dev
    ```

### Running the Application
1. Client Side: Navigate to http://localhost:3000 to view the React front-end.
2. Server Side: Ensure the Express server is running on http://localhost:5000.

### Deployment
1. Set up a new service on Render for the server with the appropriate environment variables.
2. Set up another service for the client, ensuring that the server URL is correctly set in the client's environment variables.
3. Deploy both services, and your application will be live!
