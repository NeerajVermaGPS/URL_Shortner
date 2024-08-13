# URL Shortener

## Overview

This repository is part of my MERN Stack journey, where I developed a fully functional URL Shortener application using Express.js with server-side rendering via EJS. The project supports user authentication and authorization, with certain routes restricted to specific user roles (ADMIN or NORMAL user). The application also includes robust validation and security features, making it a major project in my learning path.

## Features

- **URL Shortening**: Users can shorten long URLs and get a custom short URL.
- **User Authentication**: Secure user registration and login using JWT (JSON Web Token) and bcrypt for password hashing.
- **Role-Based Authorization**: Certain routes are accessible only to users with specific roles (ADMIN or NORMAL user).
- **Server-Side Rendering**: The application uses EJS templates for dynamic content rendering on the server side.
- **Data Validation**: Comprehensive validation for user input using `express-validator`.
- **Session Management**: Uses cookies and JWT for managing user sessions.

## Project Structure

The project is organized as follows:

```
|-- config
|   |-- db.js                 # MongoDB connection configuration
|
|-- controllers
|   |-- staticRoutes.js       # Controller for static routes
|   |-- url.js                # Controller for URL management (shortening, redirecting)
|   |-- user.js               # Controller for user authentication and management
|
|-- middlewares
|   |-- authMiddleware.js     # Middleware for handling user authentication and authorization
|
|-- models
|   |-- urls.js               # Mongoose schema for URL data
|   |-- users.js              # Mongoose schema for User data
|
|-- public
|   |-- assets                # Static assets (images, icons, etc.)
|   |   |-- check.svg
|   |   |-- close.svg
|   |   |-- logo.png
|   |   |-- pwsh.svg
|   |-- styles                # CSS files for styling pages
|       |-- global.css
|       |-- home.css
|       |-- login.css
|       |-- signup.css
|
|-- routes
|   |-- staticRoutes.js       # Routes for static pages
|   |-- url.js                # Routes for URL operations
|   |-- user.js               # Routes for user-related operations
|
|-- services
|   |-- auth.js               # Service for handling authentication logic
|
|-- utils
|   |-- date.js               # Utility for date-related functions
|   |-- hashing.js            # Utility for password hashing
|   |-- shortid.js            # Utility for generating short IDs for URLs
|
|-- validators
|   |-- querySchemaValidator.js   # Validator for query parameters
|   |-- urlSchemaValidation.js    # Validator for URL data
|   |-- userSchemaValidation.js   # Validator for user data
|
|-- views
|   |-- home.ejs              # EJS template for home page
|   |-- login.ejs             # EJS template for login page
|   |-- signup.ejs            # EJS template for signup page
|
|-- .gitignore
|-- index.js                  # Entry point of the application
|-- package-lock.json
|-- package.json
```

## Installation

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or on a remote server

### Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/NeerajVermaGPS/URL_Shortner.git
   cd URL_Shortner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   PORT=3000
   JWT_SECRET_KEY=your-jwt-secret
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

5. **Access the application**:

   Visit `http://localhost:3000` in your browser to start using the URL Shortener.

## Dependencies

The project uses the following key dependencies:

- **bcrypt**: For hashing passwords before storing them in the database.
- **cookie-parser**: For parsing cookies attached to client requests.
- **dotenv**: For loading environment variables from a `.env` file.
- **ejs**: For server-side rendering of HTML templates.
- **express**: For handling HTTP requests and routing.
- **express-validator**: For validating incoming request data.
- **jsonwebtoken**: For handling JWT-based authentication.
- **mongoose**: For interacting with MongoDB databases.
- **uuid**: For generating unique identifiers for URLs.

## Key Features

### URL Shortening

- Users can input a long URL, and the application will generate a shorter version.
- The short URL redirects to the original long URL when accessed.

### Authentication and Authorization

- **User Registration & Login**: Securely register and authenticate users.
- **Role-Based Access**: Restrict access to certain routes based on user roles (ADMIN, NORMAL user).

### EJS Templating

- The project uses EJS for server-side rendering, allowing dynamic content to be served to the user.

### Middleware

- **AuthMiddleware**: Middleware for checking if a user is authenticated before accessing certain routes.

### Validation

- All user inputs are validated using `express-validator` to ensure data integrity and security.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, create a feature branch, and submit a pull request.

---
