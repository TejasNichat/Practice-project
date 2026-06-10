# Quick Start Guide

## ✅ What's Been Created

### Frontend (Angular)
- ✅ Login page with form validation
- ✅ Register page for new users  
- ✅ Welcome User dashboard
- ✅ Welcome Admin dashboard
- ✅ JWT authentication service
- ✅ Route guards for protected pages
- ✅ HTTP interceptor for token attachment
- ✅ Role-based access control

### Backend (Node.js + Express)
- ✅ Express server setup
- ✅ MongoDB connection configured
- ✅ User authentication routes (register/login)
- ✅ JWT token generation
- ✅ Password hashing with bcryptjs
- ✅ Auth middleware for protected routes
- ✅ CORS configuration

## 🚀 To Get Started

### Step 1: Start MongoDB
Make sure MongoDB is running on your system.

```bash
# Windows - if using MongoDB Community
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in backend/.env
```

### Step 2: Start Backend Server
```bash
cd backend
npm start
```
✅ Server runs on `http://localhost:5000`

### Step 3: Start Frontend Application
```bash
cd frontend
npm start
```
✅ App opens on `http://localhost:4200`

## 📝 First Test

1. **Register a new account**
   - Click "Register" link
   - Fill in username, email, password
   - Submit

2. **Login**
   - Use your credentials
   - You'll see the **Welcome User** dashboard

3. **Create Admin User** (Optional)
   - Connect to MongoDB
   - Find your user document
   - Change role from "user" to "admin"
   - Login again
   - You'll see the **Welcome Admin** dashboard

## 🔑 Login Flow

```
User Input
    ↓
Login Component (validates form)
    ↓
Auth Service (sends to backend)
    ↓
Backend API (checks credentials, returns token)
    ↓
Auth Service (saves token in localStorage)
    ↓
Router (redirects based on role)
    ↓
Welcome User/Admin Page
```

## 📦 Project Files Summary

**Frontend Structure:**
```
frontend/src/app/
├── components/        # UI components
│   ├── login/
│   ├── register/
│   ├── welcome-user/
│   └── welcome-admin/
├── services/         # Auth service
├── guards/          # Route protection
├── interceptors/    # Token attachment
└── app.routes.ts    # Routing config
```

**Backend Structure:**
```
backend/
├── server.js        # Main app
├── models/User.js   # MongoDB schema
├── routes/auth.js   # API endpoints
├── middleware/auth.js # JWT verification
└── .env            # Configuration
```

## 🔐 Security Highlights

- Passwords are hashed with bcryptjs
- JWT tokens expire in 24 hours
- Tokens automatically attached to API requests
- Route guards prevent unauthorized access
- Role-based redirection after login

## 📱 Page Routes

| Route | Component | Protected | Role |
|-------|-----------|-----------|------|
| `/login` | LoginComponent | ❌ | - |
| `/register` | RegisterComponent | ❌ | - |
| `/user` | WelcomeUserComponent | ✅ | user |
| `/admin` | WelcomeAdminComponent | ✅ | admin |

## 🛠️ Common Commands

```bash
# Frontend
cd frontend
npm start        # Start dev server
npm build        # Build for production
npm test         # Run tests

# Backend
cd backend
npm start        # Start server
npm install      # Install dependencies
```

## 💡 Tips

1. **Check browser console** for any errors
2. **Check backend logs** if API calls fail
3. **Clear localStorage** if having token issues
4. **Verify MongoDB** is running
5. **Use admin account** to test admin dashboard

## 📚 Next Steps

1. Create test accounts in both roles
2. Test login/logout functionality
3. Verify protected routes work
4. Check role-based redirects
5. Explore code to understand the flow

## ⚠️ Important Notes

- Change `JWT_SECRET` in `.env` for production
- Use MongoDB Atlas for production deployment
- Enable HTTPS in production
- Implement rate limiting for production
- Add email verification for user accounts

---

**You're all set! Happy coding! 🎉**
