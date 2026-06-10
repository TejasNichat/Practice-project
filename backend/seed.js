const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const createTestUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Delete existing test users
    await User.deleteMany({ email: { $in: ['admin@test.com', 'user@test.com'] } });
    console.log('Cleared existing test users');

    // Create admin user
    const adminUser = new User({
      username: 'admin',
      email: 'admin@test.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('✅ Admin created:');
    console.log('   Email: admin@test.com');
    console.log('   Password: admin123');

    // Create regular user
    const regularUser = new User({
      username: 'user',
      email: 'user@test.com',
      password: 'user123',
      role: 'user'
    });
    await regularUser.save();
    console.log('\n✅ User created:');
    console.log('   Email: user@test.com');
    console.log('   Password: user123');

    console.log('\n✅ All test users created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

createTestUsers();
