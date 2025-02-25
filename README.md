# User Authentication and Post Management API

This is a full-stack backend project that provides user authentication and post management functionality. The project implements common authentication features like signup, signin, and password reset. Additionally, it supports creating, updating, and deleting posts for authenticated users.

## Features

### User Authentication
- **Signup:** Allows users to create a new account by providing their email and password.
- **Signin:** Users can log in with their email and password to obtain a JSON Web Token (JWT) for authentication.
- **Signout:** Clears the user's authentication cookie and logs them out.
- **Email Verification:** Sends a verification code to the user's email to confirm their account.
- **Forgot Password:** Sends a reset code to the user's email to reset their password.
- **Change Password:** Authenticated and verified users can update their password.

### Post Management
- **Create Post:** Authenticated users can create new posts with a title and description.
- **Update Post:** Users can update their own posts with new information.
- **Delete Post:** Users can delete their own posts.
- **View Posts:** Paginated posts listing.
- **Single Post View:** View details of a single post.

## Technologies Used
- **Node.js:** Backend server environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing user and post data.
- **JWT (JSON Web Tokens):** For user authentication and session management.
- **Bcrypt.js:** For password hashing and verification.
- **Nodemailer:** For sending verification and password reset emails.
- **Joi:** For input validation.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB.

## Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB database instance

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mhbipul/authentication_crud_node.git
   cd authentication_crud_node
