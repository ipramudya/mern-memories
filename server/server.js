/* Core Depedency */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/* Own Depedency */
import routes from './route/posts.js';

/* Initializing Variables of App */
dotenv.config();
const app = express();
const URI = process.env.MONGODB_URI;
const PORT = 5000 || process.env.PORT;

/* Default Express Middleware Starts Here */
app.use(express.json({ limit: '30mb' })); // Parse JSON body
app.use(express.urlencoded({ limit: '30mb', extended: true })); // Parse URL-encoded bodie
app.use(cors()); // Disabling CORS policy
app.use('/posts', routes);

/* Connect to MongoDB */
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected...');

    /* Running Express App when connected */
    app.listen(PORT, (error) => {
      if (error) console.log(error.message);
      console.log(`Server runs on port ${PORT}, http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Connection Failure');
    console.log(error);
  });
