# Portfolio Backend API

MERN Stack backend for portfolio website with authentication, project management, and contact form.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB URI from MongoDB Atlas
   - Generate a JWT secret (run: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
   - Add Firebase credentials for file storage
   - (Optional) Add Google OAuth credentials

3. **Database Setup**
   - Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster
   - Get your connection string and add it to `.env`
   - Create a database user with read/write permissions

4. **Create Admin User**
   After starting the server, you can create an admin user by sending a POST request:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "your-admin@email.com",
       "password": "your-secure-password",
       "name": "ANUBHAV KUMAR"
     }'
   ```
   
   Then update the user in MongoDB to set `isAdmin: true`

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Run Production Server**
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/google` - Google OAuth login

### Projects (Admin Only for Create/Update/Delete)
- `GET /api/projects` - Get all projects (supports query params: category, subcategory, featured)
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Admin only)
- `PUT /api/projects/:id` - Update project (Admin only)
- `DELETE /api/projects/:id` - Delete project (Admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (Admin only)
- `PUT /api/contact/:id` - Update contact status (Admin only)
- `DELETE /api/contact/:id` - Delete contact (Admin only)

## Project Categories
- Graphic Design
- Video Editing
- Web Development
- Electronics

## Firebase Integration

For image/video uploads, you'll need to integrate Firebase Storage in your frontend:

1. Install Firebase in frontend:
   ```bash
   npm install firebase
   ```

2. Initialize Firebase in your React app with the credentials from `.env`

3. Use Firebase Storage to upload files and get download URLs

4. Send the URLs to the backend when creating/updating projects

## Security Notes

- All admin routes are protected with JWT authentication
- Passwords are hashed using bcrypt
- HTTP-only cookies are used for token storage
- CORS is configured for your frontend URL
- Always use HTTPS in production
