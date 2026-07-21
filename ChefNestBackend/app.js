const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/db');
const NotificationRoutes = require('./routes/Notification.Routes');
const UserRoutes = require('./routes/User.route');
const BlogRoutes = require('./routes/Blog.route');
const TestimonialRoutes = require('./routes/Testimonial.route');
const GalleryRoutes = require('./routes/Gallery.route');
const CrouselRoutes = require('./routes/Crousel.route');
const BookingRoutes = require('./routes/Booking.routes');
const chefRoutes = require('./routes/Chef.route');
const Connect = require('./routes/Connect.route');
const ContactRoutes = require('./routes/Contact.route'); //  NEW
const ServiceRoutes = require('./routes/Service.route');
const HomeRoutes = require('./routes/HomePage.route');
const InvestorContactRoutes = require('./routes/InvestorContact.route');
const Investor = require('./routes/Investor.route');
const FoodRoutes = require('./routes/Food.route');
const JoinRoutes = require('./routes/Join.route');
const FoodGallRoutes = require('./routes/FoodGall.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

connectDB();

app.get('/', (req, res) => {
  res.send({ message: 'Awesome it works 🐻' });
});

// Routes
app.use('/auth', UserRoutes);
app.use('/blog', BlogRoutes);
app.use('/testimonial', TestimonialRoutes);
app.use('/gallery', GalleryRoutes);
app.use('/crousel', CrouselRoutes);
app.use('/chef', chefRoutes);
app.use('/InvestorContactRoutes', InvestorContactRoutes);
app.use('/ser', ServiceRoutes);
app.use('/home', HomeRoutes);
app.use('/investor', Investor);
app.use('/booking', BookingRoutes);

app.use('/connect', Connect);          // Existing module
app.use('/contact', ContactRoutes);    //  NEW Contact API
app.use('/notification', NotificationRoutes);
app.use('/foodGall', FoodGallRoutes);
app.use('/food', FoodRoutes);
app.use('/join', JoinRoutes);
app.use('/investContact', InvestorContactRoutes);

app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});