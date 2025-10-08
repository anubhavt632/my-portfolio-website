import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.model.js';

dotenv.config();

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@anubhav.com' });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email: admin@anubhav.com');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('Admin@123', 10);
    const adminUser = await User.create({
      name: 'Anubhav Kumar',
      email: 'admin@anubhav.com',
      password: hashedPassword,
      isAdmin: true
    });

    console.log('✅ Admin user created successfully!');
    console.log('==================================');
    console.log('Email: admin@anubhav.com');
    console.log('Password: Admin@123');
    console.log('==================================');
    console.log('⚠️  Please change this password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdminUser();
