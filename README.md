# POS System Invoice Project

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Introduction

The POS System Invoice Project is a web-based application designed to manage invoices for a point-of-sale system. This project includes functionalities to add, view, and manage invoices efficiently. The frontend is built using React and Tailwind CSS, while the backend is powered by Node.js and Express with MongoDB for data storage.

## Features

- Add new invoices
- View invoice list with pagination
- Search invoices with autocomplete
- Display revenue time-series graph
- Responsive design

## Technologies

- **Frontend:**
  - React.js
  - Redux
  - Tailwind CSS
- **Backend:**
  - Node.js
  - Express.js
  - PostgreSQL
  - 
- **Other Tools:**
  - Axios for API requests
  - React Icons for UI components

## Setup

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/almadhanif/posSystem.git
    cd posSystem
    ```

2. **Install dependencies:**

    For the client:

    ```bash
    cd client
    npm install
    ```

    For the server:

    ```bash
    cd ../server
    npm install
    ```

3. **Configure the environment variables:**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT=5000
    ```

4. **Run the development server:**

    For the client:

    ```bash
    cd ../client
    npm start
    ```

    For the server:

    ```bash
    cd ../server
    npm start
    ```

## Usage

### Adding an Invoice

1. Navigate to the "Invoice" section from the sidebar.
2. Fill in the required details in the invoice form.
3. Click "Submit" to add the invoice.

### Viewing Invoices

1. Navigate to the "Dashboard" section from the sidebar.
2. View the list of invoices with pagination and search functionalities.

## API Endpoints

- **GET /api/invoices**: Retrieve all invoices with pagination.
- **POST /api/invoices**: Add a new invoice.
- **GET /api/invoices/:id**: Retrieve a specific invoice by ID.
- **PUT /api/invoices/:id**: Update a specific invoice by ID.
- **DELETE /api/invoices/:id**: Delete a specific invoice by ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
