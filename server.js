const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import database connection

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);   


db.connect(); // Connect to database

app.listen(port, () => console.log(`Server started on port ${port}`));