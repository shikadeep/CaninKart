const express = require('express');
const app = express();
const cors = require('cors');
// const multer = require('multer');
const path = require('path');
//env fie
const dotenv = require('dotenv');
dotenv.config();
const port = 5000;
const countryRouter = require('./Routes/CountryRouter');
const StateRouter = require('./Routes/State.routes');
const DistrictRouter = require('./Routes/DistrictRoutes')
const adminRoutes = require("./Routes/Admin")
const blogRoutes = require('./Routes/blogRoutes')
const contactRoutes = require('./Routes/contactRoutes')

require('./Models/db');

//middleware
app.use(cors());

//Routes
// API Routes
app.use('/countries', countryRouter);
app.use('/state', StateRouter);
app.use('/district', DistrictRouter)

app.use("/api/admin", adminRoutes);
// app.use('/api/blogs' , blogRoutes)
app.use('/api/cnt', contactRoutes);

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/blogs', blogRoutes);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Blog API is running');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});