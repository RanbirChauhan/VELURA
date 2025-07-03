
# Velura - E-commerce Website

Velura is a full-stack e-commerce web application designed to provide a seamless online shopping experience for users. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and deployed on Vercel, it features a responsive user interface for customers and a robust admin dashboard for product and order management.

## Who It’s For
Shoppers: Users can browse products by category, view detailed product pages, manage carts, place orders, and track their purchases.

Admin Users: The admin panel allows store managers to add/edit/delete products, manage inventory, and process orders.

Developers: A reference architecture for developers learning MERN stack deployment, authentication, and payment integration (e.g., Razorpay).

### Core Features
- User authentication (JWT-based)

- Product listing and filtering

- Shopping cart and checkout

- Razorpay integration for secure payments

- Admin dashboard for inventory and order management

- Protected routes and role-based access

- Environment-secured sensitive data (.env files ignored in Git)
## Appendix

A. Technologies Used
- Frontend: React.js, Tailwind CSS, Axios, React Router

- Backend: Node.js, Express.js, MongoDB (Mongoose)

- Authentication: JWT (JSON Web Tokens)

- Payment Gateway: Razorpay Integration

- Deployment: Vercel (Frontend), Vercel (Backend), MongoDB Atlas (Database)

## Features

1. 🌐 User-Facing Features

- User Authentication & Profile
    - Sign up, log in (JWT) 

- Product Catalog
    
    - Browse by category,subcategory

    - Search, filter (price)

    - Product detail pages with images and descriptions

- Shopping Cart

    - Add/remove items

    - Update quantities

- Checkout & Order Placement

    - Address input, order summary

    - Payment via Razorpay

- Order History

    - View past orders and statuses

2. 🏪 Admin Panel Features
- Admin Authentication (with role-based access)

- Product Management

    - Create, edit, delete products

    - Upload images and other metadata

- Inventory Control

    - Track stock levels

- Order Management

    - View, confirm, cancel orders

- User Management

    - List users, roles, and addresses
## Demo

User Interface - https://velura-seven.vercel.app/

Admin Panel - https://velura-admin-coral.vercel.app/




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Backend
MONGODB_URI = 

CLOUDINARY_API_KEY = 

CLOUDINARY_SECRET_KEY = 

CLOUDINARY_NAME = 

JWT_SECRET =

ADMIN_EMAIL = 

ADMIN_PASSWORD = 

RAZORPAY_KEY_SECRET = 

RAZORPAY_KEY_ID = 

### Razorpay
RAZORPAY_KEY_ID=

RAZORPAY_SECRET=

### Frontend
REACT_APP_BACKEND_URL=



## Deployment

All three frontend,backend and admin panels can be deployed to Vercel as separate projects:

Go to vercel.com and import each folder (backend,frontend,admin) as a new project.

## FAQ

#### What happens if the user is not logged in?
Unauthenticated users will be restricted from accessing protected routes such as:

- Checkout page

- Order history

- Admin dashboard 

- Payment Gateway

They will be redirected to the login page.

