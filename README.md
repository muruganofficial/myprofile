# Professional Full Stack Portfolio

A stunning, production-ready, single-page portfolio website showcasing modern web development techniques, premium UI/UX design, and a robust backend architecture.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Landing+Page)

## 🚀 Overview

This project is a high-performance personal portfolio built with a **MERN-like stack** (using Angular instead of React). It features a sleek, minimalist design with smooth animations, dark mode support, and a fully functional administrative backend for managing projects and profile data.

### ✨ Key Features

- **Premium UI/UX**: Modern minimalist design with glassmorphism, smooth scroll, and reveal animations.
- **Dynamic Theming**: Centralized SCSS system with dark/light mode and dynamic primary colors.
- **Responsive Design**: Fully optimized for all devices (Mobile, Tablet, Desktop).
- **Backend API**: Secure Node.js & Express API with MongoDB for data persistence.
- **Admin Dashboard**: Protected routes with JWT authentication for content management.
- **Resume Integration**: Easy-to-download resume functionality embedded in multiple locations.
- **Contact System**: Fully functional contact form with backend integration.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Angular 21 (v19/v21 experimental)
- **Styling**: Vanilla SCSS (Modular & Centralized)
- **Icons**: Custom SVG icons & Favicons
- **Notifications**: SweetAlert2
- **Testing**: Vitest

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: JWT, BcryptJS, Helmet
- **Environment**: Dotenv
- **Logging**: Morgan

---

## 📁 Project Structure

```text
myprofile/
├── backend/                # Express API
│   ├── src/                # Source code
│   │   ├── controllers/    # API Controllers
│   │   ├── models/         # Mongoose Schemas
│   │   ├── routes/         # API Route definitions
│   │   └── config/         # Database & Auth config
│   ├── server.js           # Entry point
│   └── seeder.js           # Database seeding script
├── frontend/               # Angular Application
│   ├── src/
│   │   ├── app/            # Feature & Shared components
│   │   │   ├── core/       # Singleton services & guards
│   │   │   ├── features/   # Page sections (Home, About, etc.)
│   │   │   └── shared/     # Reusable UI components
│   │   ├── assets/         # Images, Icons, Resume
│   │   └── styles/         # Global SCSS variables & mixins
│   └── angular.json        # Angular workspace config
└── README.md               # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Angular CLI](https://angular.dev/tools/cli)

### 1. Clone the repository
```bash
git clone https://github.com/muruganofficial/myprofile.git
cd myprofile
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend/` folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=30d
```
- Seed the database (optional):
```bash
npm run seed
```
- Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```
- Navigate to `https://myprofile-six-ivory.vercel.app`

---

## 👤 Author

**Murugan Amirthalingam**
- LinkedIn: [murugan-amirthalingam](https://www.linkedin.com/in/murugan-amirthalingam-4339063b3)
- GitHub: [@muruganofficial](https://github.com/muruganofficial)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
