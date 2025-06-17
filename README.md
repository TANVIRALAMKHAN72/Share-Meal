# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


# 🍽️ Share Meal - A Food Sharing Platform

**Share Meal** is a full-stack web application that connects food donors with those in need. It helps minimize food waste by allowing users to donate leftover meals and request food when needed. Built with **React**, **Firebase Auth**, **Express**, and **MongoDB**.

##  Live Website 

[Share Meal Live Site](https://keen-squirrel-09c3de.netlify.app/)

### Client (Frontend)
- React.js
- React Router
- Firebase Authentication
- DaisyUI + Tailwind CSS
- Axios, Toastify, Lottie
- Responsive UI

##  Authentication Features

- Email/Password Sign Up & Login
- Google OAuth Login
- Firebase Authentication
- Protected Routes with Firebase JWT Token

###  For Donors
- Add food items with image, quantity, pickup location & expiry
- Manage your donated foods (edit/delete)
- View request status for each food

###  For Food Seekers
- Browse available foods
- Request food by submitting reason
- View and manage your food requests (protected)
- 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
