import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import battleRoute from './routes/battle.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/battle', battleRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
