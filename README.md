# 💬 Chat App
A modern **full-stack real-time chat application** built with **Node.js, Express, MongoDB, Socket.IO, and JavaScript**. The application provides secure authentication, instant messaging, image sharing, cloud media storage, and email notifications with a clean and scalable architecture.

# ✨ Features

### 🔐 User Authentication
- Secure user registration and login
- JWT-based authentication
- Protected routes using authentication middleware
- Password hashing for enhanced security

---

### 💬 Real-Time Messaging
- Instant message delivery with **Socket.IO**
- Live chat updates without refreshing the page
- Real-time online communication

### 🖼️ Media Uploads
- Upload profile pictures
- Share images inside conversations
- Cloudinary integration for optimized media storage

---

### 📧 Email Notifications
- Email services powered by **Resend**
- Reusable email templates
- User communication and notification support

---

### 🗄️ Database Management
- MongoDB database integration
- Structured User and Message models
- Persistent chat history

---

# 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | JavaScript, HTML, CSS, PostCSS, ESLint |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Real-Time Communication** | Socket.IO |
| **Authentication** | JWT |
| **Cloud Storage** | Cloudinary |
| **Email Service** | Resend |

## Repository StructureThe
**application is structured into two main directories:**  
**/backend:** Contains the server logic, including controllers, database models, routing, email templates, and third-party library configurations. 
**/frontend:** Contains the client-side code, configuration files (PostCSS, ESLint), and public assets like login and signup graphics.  

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ayush94Kumar/Chat_App
cd chat-app
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a **`.env`** file inside the **backend** directory.

```env
PORT=

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESEND_API_KEY=

CLIENT_URL=
```

> Replace the above values with your own credentials.

---

# ▶️ Running the Application

## Start Backend

```bash
cd backend
npm run dev
```

or

```bash
npm start
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---
