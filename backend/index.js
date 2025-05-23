const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const {checkCloudinaryConnection} = require('./middleware')
require('dotenv').config();

const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const lfRouter = require('./routes/lf');

const PORT = process.env.PORT || 8080;

// Setting up paths and middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

checkCloudinaryConnection();

const dbUrl = process.env.MONGODB_URI;

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: process.env.STORE_SECRET
    }
});

// Secure session setup
app.use(session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 } 
}));

// MongoDB connection
mongoose.connect(dbUrl)
    .then(() => console.log('MongoDB connected'))
    .catch(e => console.error('Error connecting to MongoDB'));

// Use routers
app.use('', userRouter);
app.use('/blog', blogRouter);
app.use('/lf', lfRouter);

app.get('*', (req, res) => {
    res.status(500).json({ error: "Api not available" });
});

app.listen(PORT, () => {
    console.log(`Website running at: http://localhost:${PORT}/`);
});
