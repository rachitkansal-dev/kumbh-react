# Kumbh Mela Tourism Website

This project is a tourism website related to Kumbh Mela, featuring both a React frontend and a Node.js backend.

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the React application
- `backend/`: Contains the Node.js server

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm run install-all
   ```
3. Configure environment variables:
   - Navigate to the backend directory and create a `.env` file based on `.env.example`
   - Set your Cloudinary credentials, MongoDB URI, and session secret

## Running the Application

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

## Frontend

The frontend is a React application bootstrapped with Create React App. It includes features like:
- User authentication
- Blog posts
- Lost and found items
- Admin panel
- Tourist information

## Backend

The backend is a Node.js application built with Express. It provides APIs for:
- User management
- Blog posts
- Lost and found items
- File uploads

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
