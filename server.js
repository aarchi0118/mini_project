import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'



dotenv.config();


const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected to mongoDB'))
.catch(err=> console.error('failed connection'));


app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  
  app.use('/api/users', userRoutes);
  
  app.listen(3000, () => console.log('Server running on port 3000'));
