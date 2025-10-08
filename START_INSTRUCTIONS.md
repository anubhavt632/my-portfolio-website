# 🚀 Getting Started

## Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

## Step 2: Create Admin User
```bash
npm run create-admin
```

This will create an admin account with:
- **Email:** `admin@anubhav.com`
- **Password:** `Admin@123`

## Step 3: Start Backend Server
```bash
npm start
```
The backend will run on `http://localhost:5000`

## Step 4: Start Frontend (in a new terminal)
```bash
# Go back to project root
cd ..
npm run dev
```
The frontend will run on `http://localhost:8080`

## Step 5: Access Your Dashboard
1. Open `http://localhost:8080` in your browser
2. Click "Admin Login" in the navbar
3. Login with:
   - Email: `admin@anubhav.com`
   - Password: `Admin@123`
4. You'll be redirected to `/dashboard` where you can manage projects

## 📝 Important Notes
- Backend runs on port 5000
- Frontend runs on port 8080
- Change the admin password after first login for security
- The .env file is already configured with your MongoDB and Firebase credentials

## 🔧 Troubleshooting
- If port 5000 is busy, change PORT in `backend/.env`
- If port 8080 is busy, Vite will automatically suggest an alternative port
- Make sure MongoDB connection string is correct in `backend/.env`
