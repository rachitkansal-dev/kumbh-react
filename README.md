# Kumbh Mela Tourism Website

A comprehensive tourism platform for Kumbh Mela, featuring user authentication, blog posts, lost and found services, attraction details, and more.

![Kumbh Mela](frontend/src/images/Kumbh-Mela.webp)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Frontend Components](#frontend-components)
- [State Management](#state-management)
- [Authentication Flow](#authentication-flow)
- [File Upload](#file-upload)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Kumbh Mela Tourism Website is a full-stack web application designed to provide information and services for tourists planning to visit the Kumbh Mela festival. It includes features for users to browse tourist attractions, read and share blog posts, report and claim lost items, contact administrators, and more.

## Features

### User-Facing Features

- **User Authentication**
  - Sign up/login with email
  - Password reset via email with secure tokens
  - User profile management
  - OTP verification

- **Blog System**
  - View blogs about Kumbh Mela
  - Create, edit, and delete blogs (authenticated users)
  - Comment on blogs
  - Like blogs and comments

- **Lost and Found Services**
  - Report lost items
  - Report found items
  - Claim items with verification process
  - Search functionality for lost/found items

- **Tourist Information**
  - Tourist attractions
  - Guides and travel tips
  - FAQs about Kumbh Mela
  - Information about Prayagraj

- **Other Features**
  - Contact form
  - User feedback
  - Mobile-responsive design
  - Image uploads for blogs and lost/found items

### Admin Features

- Admin dashboard
- Manage users
- Moderate blogs and comments
- Process lost and found claims
- Review user feedback

## Tech Stack

### Frontend

- **React**: UI library for building the user interface
- **React Router DOM**: For client-side routing
- **Context API**: For state management
- **React Quill**: Rich text editor for blog creation
- **React Helmet**: For managing document head
- **CSS**: Custom styling

### Backend

- **Node.js**: JavaScript runtime environment
- **Express**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object Data Modeling (ODM) library
- **bcrypt**: For password hashing
- **Express Session**: For session management
- **Nodemailer**: For sending emails
- **Multer**: For handling file uploads
- **Cloudinary**: For cloud-based image management
- **dotenv**: For environment variable management

## Project Structure

The project is organized into two main directories:

### Frontend Structure

```
frontend/
├── public/           # Static files
├── src/              # Source files
│   ├── components/   # React components
│   ├── context/      # Context API files
│   ├── css/          # CSS stylesheets
│   ├── images/       # Image assets
│   ├── blogData/     # Static blog data
│   ├── App.js        # Main app component
│   └── index.js      # Entry point
```

### Backend Structure

```
backend/
├── models/           # Database models
├── routes/           # API routes
├── middleware/       # Custom middleware
├── public/           # Static assets
├── index.js          # Server entry point
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kumbh-mela-tourism-website.git
   cd kumbh-mela-tourism-website
   ```

2. Install dependencies for the entire project:
   ```bash
   npm run install-all
   ```

   This will install dependencies for the root project, frontend, and backend.

3. Configure environment variables (see [Environment Variables](#environment-variables) section)

4. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=8080
MONGODB_URI=mongodb://localhost:27017/kumbh_mela
SESSION_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password
```

## Available Scripts

In the project directory, you can run:

### `npm run install-all`

Installs dependencies for the root project, frontend, and backend.

### `npm start`

Runs both the frontend and backend concurrently.
- Frontend will be available at [http://localhost:3000](http://localhost:3000)
- Backend will be available at [http://localhost:8080](http://localhost:8080)

### `npm run start-frontend`

Runs only the frontend application in development mode.

### `npm run start-backend`

Runs only the backend server.

### `npm run build`

Builds the frontend application for production to the `frontend/build` folder.

## API Endpoints

### User Routes

- `POST /signup`: Register a new user
- `POST /login`: User login
- `POST /logout`: User logout
- `GET /getuser`: Get current user data
- `PUT /updateuser`: Update user profile
- `POST /forgot`: Initiate password reset
- `POST /reset/:token`: Reset password with token
- `POST /verify`: Verify OTP

### Blog Routes

- `GET /blog`: Get all blogs
- `GET /blog/:id`: Get a specific blog
- `POST /blog`: Create a new blog
- `PUT /blog/:id`: Update a blog
- `DELETE /blog/:id`: Delete a blog
- `POST /blog/:id/like`: Like a blog
- `POST /blog/:id/comment`: Add a comment to a blog
- `DELETE /blog/:id/comment/:commentId`: Delete a comment

### Lost and Found Routes

- `GET /lf`: Get all lost/found items
- `POST /lf`: Report a lost/found item
- `GET /lf/:id`: Get a specific item
- `PUT /lf/:id`: Update an item
- `DELETE /lf/:id`: Delete an item
- `POST /lf/:id/claim`: Claim an item

## Database Models

### User Model

- name: String (required)
- email: String (required)
- password: String (required)
- phoneNumber: String (required)
- address: String (required)
- isAdmin: Boolean (default: false)
- resetPasswordToken: String
- resetPasswordExpires: Date
- blogs: Array of Blog IDs
- comments: Array of Comment IDs

### Blog Model

- title: String (required)
- place: String (required)
- body: String (required)
- likes: Number (default: 0)
- comments: Array of Comment IDs
- likedBy: Array of User IDs
- author: String (required)
- author_id: User ID
- image: String

### Lost/Found Item Model

- landf: String (lost/found)
- title: String
- type: String
- description: String
- location: String
- date: Date
- photo: String
- contact: String
- name: String
- email: String

## Frontend Components

The application includes over 30 React components, including:

- **Authentication**: Login, SignUp, ResetPassword
- **User Dashboard**: Profile, EditProfile
- **Blog System**: Blog, BlogReview, UserBlog
- **Lost and Found**: Homelf, Finder, ClaimItem
- **Information**: About, Attractions, Faq, Guide, Prayagraj
- **UI Elements**: Navbar, Footer, Showcase, Loading

## State Management

The application uses React Context API for state management with three main contexts:

- **UserContext**: Manages user authentication and profile data
- **BlogContext**: Manages blog posts, comments, and interactions
- **LfContext**: Manages lost and found items

## Authentication Flow

1. User registers with email and password
2. Password is hashed with bcrypt before storing
3. On login, user receives a session cookie
4. For password reset:
   - User requests a reset token via email
   - Token expires after a set time
   - User creates a new password with the valid token

## File Upload

The application uses Multer and Cloudinary for file uploads:

1. Images are uploaded to Cloudinary
2. Image URLs are stored in the database
3. Images are optimized automatically by Cloudinary

## Deployment

To deploy the application:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Set up environment variables on your hosting platform

3. Deploy the backend to a Node.js hosting service (Heroku, Vercel, etc.)

4. Deploy the frontend build to a static hosting service (Netlify, Vercel, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
