import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running `);
    });
  } catch (err) {
    console.error('Failed to connect MongoDB:', err.message);
    process.exit(1);
  }
}

start();
