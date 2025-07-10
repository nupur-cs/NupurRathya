import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';


// Load environment variables
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';

const app = express();

// CORS with env-based origin
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


app.use(session({
  secret: process.env.SESSION_SECRET || 'SecretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/subscribers', subscriberRoutes);

app.get('/', (_req, res) => res.send('✅ Flipr MERN backend is up!'));

export default app;
