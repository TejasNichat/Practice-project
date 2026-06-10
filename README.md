# Full-Stack Angular + Node.js Authentication Application

A complete authentication system with JWT tokens, MongoDB database, and role-based access control (Admin/User).

## Project Structure

```
├── frontend/          # Angular 19+ SPA
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   ├── welcome-user/
│   │   │   │   └── welcome-admin/
│   │   │   ├── services/
│   │   │   │   └── auth.service.ts
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   ├── app.routes.ts
│   │   │   └── app.config.ts
│   │   └── main.ts
│   └── package.json
│
└── backend/           # Express.js API Server
    ├── models/
    │   └── User.js
    ├── routes/
    │   └── auth.js
    ├── middleware/
    │   └── auth.js
    ├── server.js
    ├── .env
    └── package.json
```

## Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

## Backend Setup

### 1. Install MongoDB

**Option A: Local MongoDB**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get your connection string
- Update `MONGODB_URI` in `.env`

### 2. Configure Environment

Edit `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/auth_app
JWT_SECRET=your_super_secret_jwt_key_change_in_production
PORT=5000
```

### 3. Start Backend Server

```bash
cd backend
npm start
```

Server will run on `http://localhost:5000`

## Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm start
# or
ng serve
```

Application will open at `http://localhost:4200`

## Features

### Authentication
- **User Registration**: Create new user accounts
- **User Login**: Secure login with email/password
- **JWT Tokens**: Token-based authentication
- **Password Hashing**: bcryptjs for secure password storage

### Authorization
- **Auth Guard**: Protect routes with authentication
- **Role-Based Access**: Separate admin and user interfaces
- **Token Interceptor**: Automatically attach JWT to API requests

### User Interfaces

#### Login Page
- Email and password input
- Login/Register toggle
- Form validation
- Error handling

#### Welcome User Dashboard
- Display user information
- User-specific features
- Logout functionality

#### Welcome Admin Dashboard
- Admin panel with statistics
- User management options
- System settings
- Security features
- Logout functionality

## API Endpoints

### Authentication Routes

#### Register User
```
POST /api/auth/register
Body: {
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"  // optional, defaults to 'user'
}
Response: {
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": { id, username, email, role }
}
```

#### Login
```
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": { id, username, email, role }
}
```

#### Get Current User
```
GET /api/auth/me
Headers: Authorization: Bearer <token>
Response: User object (without password)
```

## Testing the Application

### Test User Account (Create via Register)
```
Username: testuser
Email: user@example.com
Password: Password@123
```

### Test Admin Account (Create via Register then manually update in MongoDB)
```
Username: admin
Email: admin@example.com
Password: Admin@123
Role: admin
```

### Manual Test Steps

1. **Register a new user**
   - Go to `http://localhost:4200/register`
   - Fill in credentials and register

2. **Login as user**
   - Go to `http://localhost:4200/login`
   - Use your credentials
   - You'll be redirected to `/user` (Welcome User)

3. **Create admin user** (MongoDB)
   - Connect to MongoDB
   - Insert document with role: "admin"
   - Login with admin credentials
   - You'll be redirected to `/admin`

4. **Logout**
   - Click logout button
   - Redirected to login page
   - Token cleared from localStorage

## Security Features

✅ Password Hashing (bcryptjs)
✅ JWT Token-based Authentication
✅ Protected Routes with Guards
✅ Role-based Authorization
✅ CORS Configuration
✅ Secure HTTP Interceptor
✅ Token Expiration (24 hours)

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  username: String (unique, required),
  email: String (unique, required, lowercase),
  password: String (hashed, required),
  role: String (enum: ['user', 'admin'], default: 'user'),
  createdAt: Date (default: now)
}
```

## Environment Variables

### Backend `.env`
```env
MONGODB_URI          # MongoDB connection string
JWT_SECRET           # Secret key for JWT signing
PORT                 # Server port (default: 5000)
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify network connectivity to MongoDB

### JWT Token Errors
- Clear browser localStorage
- Re-login to get new token
- Check token expiration

### CORS Issues
- Ensure backend is running on port 5000
- Check frontend URL in backend CORS config
- Update `.env` if using different ports

### Port Already in Use
```bash
# Backend (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Frontend (Windows)
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

## File Modifications

### Created Components
- `src/app/components/login/login.component.ts`
- `src/app/components/register/register.component.ts`
- `src/app/components/welcome-user/welcome-user.component.ts`
- `src/app/components/welcome-admin/welcome-admin.component.ts`

### Created Services
- `src/app/services/auth.service.ts`

### Created Guards
- `src/app/guards/auth.guard.ts`

### Created Interceptors
- `src/app/interceptors/auth.interceptor.ts`

### Backend Files
- `backend/server.js` - Main server file
- `backend/models/User.js` - MongoDB User model
- `backend/routes/auth.js` - Authentication routes
- `backend/middleware/auth.js` - JWT verification middleware
- `backend/.env` - Environment variables

## Next Steps (Optional Enhancements)

- [ ] Add password reset functionality
- [ ] Implement email verification
- [ ] Add refresh token mechanism
- [ ] Create user profile management
- [ ] Add activity logging
- [ ] Implement rate limiting
- [ ] Add two-factor authentication
- [ ] Create admin user management UI
- [ ] Add user search and filtering
- [ ] Implement session management

## License

ISC

## Support

For issues or questions, check:
1. Browser console for errors
2. Backend server logs
3. MongoDB connection status
4. JWT token validity
