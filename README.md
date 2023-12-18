Book Store E-Commerce Web Application


1. Introduction

An e-commerce web application built to provide users with a seamless shopping experience for purchasing books. This report outlines the design choices, architecture, and a user guide for the application.

2. Design Choices

2.1 Front-end (React JS)

Component-Based Architecture: The front-end is designed using React JS, following a component-based architecture for modular and reusable UI elements.

Responsive Design: The user interface is designed to be responsive, ensuring optimal viewing and interaction across various devices and screen sizes.

State Management: React state is efficiently utilized to manage the dynamic behavior of components, enhancing the overall user experience.


2.2 Back-end (Node.js)

RESTful API: The back-end is built using Node.js, providing a RESTful API for product, cart, and order management.

User Authentication: Robust user authentication and authorization mechanisms are implemented for secure access to user-specific features.

MongoDB Integration: MongoDB is used to store product details, user data, and cart information.


2.3 Database (MongoDB)

Schema Design: MongoDB is employed to store product details, user data, and cart information using well-defined schemas for efficient data retrieval.

Scalability: The database is designed with scalability in mind to accommodate the potential growth of the product catalog and user base.

3. User Guide

Install dependencies: npm install
Run the development server: npm start
Open http://localhost:3000 in your browser.

4. Features Overview

User Authentication: Sign up, log in, and log out securely.

Product Catalog: Browse categories, view new arrivals, and filter products.

Wishlist Management: Add/remove items to/from the wishlist.

Cart Management: Add/remove items, change quantity, and apply coupons.

Order Processing: View order summary and track orders.

Search Functionality: Search books by name and author.


5. Conclusion

E-commerce web application is designed with a user-centric approach, focusing on a responsive and intuitive user interface. The modular architecture ensures maintainability and scalability, providing a reliable and efficient e-commerce solution.
