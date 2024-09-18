# shopWave 

Welcome to the shopWave eCommerce Site! This project is a full-stack eCommerce application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse products, add them to their cart, and manage their orders.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (registration and login)
- Product listing with details
- Shopping cart functionality
- Order management
- Responsive design for mobile and desktop
- Admin panel for managing products and orders (optional)

## Technologies Used

- **Frontend**: React, Redux (for state management), Axios (for API calls), Bootstrap (for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for object modeling)
- **Environment**: dotenv for environment variable management

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (Node package manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/issa-char/shopWave-repo.git
   cd your-ecommerce-repo
   cd backend
   npm install
   MONGODB_URI=your_mongodb_connection_string //create .env file in the backend dir and add your MongoDB conn string
   node server.js // start the server
   ```

## Usage

Once both the backend and frontend servers are running, you can access the application in your web browser at http://localhost:3000. You can register a new account, log in, browse products, and manage your cart.
API Endpoints

Here are some of the key API endpoints available in the backend:

    GET /api/products - Retrieve a list of all products
    GET /api/products/:id - Retrieve details of a specific product
    POST /api/products - Create a new product (Admin only)
    PUT /api/products/:id - Update an existing product (Admin only)
    DELETE /api/products/:id - Delete a product (Admin only)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

    Fork the project
    Create your feature branch (git checkout -b feature/YourFeature)
    Commit your changes (git commit -m 'Add some feature')
    Push to the branch (git push origin feature/YourFeature)
    Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for checking out the MERN eCommerce Site! If you have any questions or feedback, feel free to reach out. 

