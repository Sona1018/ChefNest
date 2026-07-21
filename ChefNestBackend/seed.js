const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import Models
const User = require('./models/User.Model');
const Chef = require('./models/Chef.Model');
const Blog = require('./models/Blog.Model');
const Service = require('./models/Services.Model');
const Testimonial = require('./models/Testimonial.Model');
const Crousel = require('./models/Crousel.Model');
const Gallery = require('./models/Gallery.Model');
const Join = require('./models/Join.Model');
const FoodGaller = require('./models/FoodgGall.Model');
const Home = require('./models/HomeImage.Model');

const MONGODB_URL = process.env.MONGO_URI || process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/chefNest';

async function seedDB() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGODB_URL}...`);
    await mongoose.connect(MONGODB_URL);
    console.log('MongoDB Connected successfully.');

    // Clear existing data
    console.log('Clearing old collections...');
    await User.deleteMany({});
    await Chef.deleteMany({});
    await Blog.deleteMany({});
    await Service.deleteMany({});
    await Testimonial.deleteMany({});
    await Crousel.deleteMany({});
    await Gallery.deleteMany({});
    await Join.deleteMany({});
    await FoodGaller.deleteMany({});
    await Home.deleteMany({});
    console.log('Old collections cleared.');

    // 1. Seed User
    console.log('Seeding admin user...');
    const hashedPassword = await bcrypt.hash('chefnest', 12);
    const adminUser = new User({
      name: 'Admin ChefNest',
      email: 'admin@chefnest.com',
      password: hashedPassword
    });
    await adminUser.save();
    console.log('Admin user seeded: admin@chefnest.com / chefnest');

    // 2. Seed Chefs
    console.log('Seeding Chefs...');
    const chefsData = [
      {
        name: 'Chef Ranveer Brar',
        Address: '12 Luxury Heights, Sector 54',
        profilepic: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
        default_cook_image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&h=600&fit=crop',
        city: 'Gurgaon',
        state: 'Haryana',
        area: 'Sector 54',
        country: 'India',
        pincode: '122002',
        email: 'ranveer@chefnest.com',
        phone: '9876543210',
        experience: '15 Years',
        verified: true,
        starRating: 4.9,
        totalRatings: 184,
        language: ['English', 'Hindi', 'Punjabi'],
        veg: true,
        nonVeg: true,
        aboutCook: 'Specializes in Indian Fusion, Awadhi traditional cuisine, and luxury plating. Loves to create experiential dinners.',
        cuisineRatings: [
          { cuisine: 'North Indian', rating: 5 },
          { cuisine: 'Awadhi', rating: 5 },
          { cuisine: 'Continental', rating: 4 }
        ],
        availableLocations: ['Sector 54', 'DLF Phase 5', 'Golf Course Road'],
        availability: [{ start: '07:00 AM', end: '11:00 PM' }],
        housesServed: 340
      },
      {
        name: 'Chef Shipra Khanna',
        Address: 'Emerald Hills, Sector 65',
        profilepic: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop',
        default_cook_image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
        city: 'Gurgaon',
        state: 'Haryana',
        area: 'Sector 65',
        country: 'India',
        pincode: '122018',
        email: 'shipra@chefnest.com',
        phone: '9876543211',
        experience: '9 Years',
        verified: true,
        starRating: 4.8,
        totalRatings: 112,
        language: ['English', 'Hindi'],
        veg: true,
        nonVeg: true,
        aboutCook: 'Winner of MasterChef, specializing in modern Italian, baking, French pastry, and wellness-focused meal preps.',
        cuisineRatings: [
          { cuisine: 'Italian', rating: 5 },
          { cuisine: 'French Patisserie', rating: 5 },
          { cuisine: 'Healthy Salads', rating: 4 }
        ],
        availableLocations: ['Sector 65', 'Sohna Road', 'Nirvana Country'],
        availability: [{ start: '08:00 AM', end: '09:00 PM' }],
        housesServed: 210
      },
      {
        name: 'Chef Kunal Kapur',
        Address: '15 Rosewood Villas, Sushant Lok',
        profilepic: 'https://randomuser.me/api/portraits/men/32.jpg',
        default_cook_image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=600&fit=crop',
        city: 'Gurgaon',
        state: 'Haryana',
        area: 'Sushant Lok 1',
        country: 'India',
        pincode: '122009',
        email: 'kunal@chefnest.com',
        phone: '9876543212',
        experience: '12 Years',
        verified: true,
        starRating: 4.7,
        totalRatings: 96,
        language: ['Hindi', 'English'],
        veg: true,
        nonVeg: false,
        aboutCook: 'Dedicated to organic and vegan culinary styles, traditional regional Indian foods, and culinary masterclasses.',
        cuisineRatings: [
          { cuisine: 'South Indian', rating: 4 },
          { cuisine: 'Mughlai', rating: 5 },
          { cuisine: 'Rajasthani', rating: 5 }
        ],
        availableLocations: ['Sushant Lok 1', 'Sector 45', 'DLF Phase 4'],
        availability: [{ start: '06:00 AM', end: '08:00 PM' }],
        housesServed: 180
      }
    ];
    await Chef.insertMany(chefsData);
    console.log('Chefs seeded successfully.');

    // 3. Seed Blogs
    console.log('Seeding Blogs...');
    const blogsData = [
      {
        title: 'The Art of Plating: How to make home food look gourmet',
        content: 'Plating is more than just stacking food. It is about harmony of colors, height on the plate, and using negative space to emphasize your culinary creation. In this article, Chef Ranveer explains how to use kitchen tweezers and rich sauces to create restaurant-level presentations at your dinner table.',
        category: 'Culinary Tips',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=500&fit=crop'
      },
      {
        title: 'Why Fresh Herbs Elevate Every Home-Cooked Meal',
        content: 'Dry spices have their place, but nothing matches the vibrant, aromatic punch of fresh herbs. From adding basil in the final minutes of a marinara, to garnishing with fresh cilantro or microgreens, herbs inject essential oils that completely transform the aroma profile.',
        category: 'Ingredients',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=500&fit=crop'
      },
      {
        title: 'Mastering the Sauté: Heat Control Secrets',
        content: 'The most common mistake home cooks make is overcrowding the pan and panicking when they see moisture. Sautéing requires high heat and a dry environment. Learn the difference between smoking point of oils and how to choose the right cookware for your daily sautéing.',
        category: 'Technique',
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=500&fit=crop'
      }
    ];
    await Blog.insertMany(blogsData);
    console.log('Blogs seeded successfully.');

    // 4. Seed Services
    console.log('Seeding Services...');
    const servicesData = [
      {
        servicename: 'One-Time Cook',
        description: 'Book a professional chef for a single lunch or dinner. Perfect for busy days or special occasions where you want to enjoy a hot, premium meal without cooking.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop'
      },
      {
        servicename: 'Monthly Subscription Cook',
        description: 'A dedicated home chef who prepares fresh home meals daily, tailored exactly to your dietary choices, allergies, spice levels, and fitness goals.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop'
      },
      {
        servicename: 'Gourmet Party Chef',
        description: 'Host an unforgettable dinner party. Our premium culinary artist takes care of menu planning, shopping, live cooking, plating, and leaving your kitchen pristine.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop'
      }
    ];
    await Service.insertMany(servicesData);
    console.log('Services seeded successfully.');

    // 5. Seed Testimonials
    console.log('Seeding Testimonials...');
    const testimonialsData = [
      {
        name: 'Aishwarya Sen',
        content: 'ChefNest changed how we dine at home. The monthly subscription chef knows exactly how much salt we like and prepares amazing, clean-tasting meals every evening. Exceptional service!',
        profileimage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
      },
      {
        name: 'Vikramaditya Roy',
        content: 'We hired a party chef for my wife’s birthday. The menu, plating, and taste were absolutely outstanding. The guest experience was premium and totally hassle-free. Five stars!',
        profileimage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
      },
      {
        name: 'Rohan Malhotra',
        content: 'Superb concept. Booking a one-time gourmet chef is easier than booking a cab. Clean prep, incredible food, and a neat kitchen left behind.',
        profileimage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
      }
    ];
    await Testimonial.insertMany(testimonialsData);
    console.log('Testimonials seeded successfully.');

    // 6. Seed Carousel
    console.log('Seeding Carousel...');
    const carouselData = [
      {
        title: 'Luxury Culinary Artists At Your Home',
        content: 'Experience restaurant-style gastronomy cooked fresh in the comfort of your kitchen by top-rated certified chefs.',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&h=600&fit=crop',
        action: 'Book Now'
      },
      {
        title: 'Curated Taste, Masterful Preparation',
        content: 'Custom meal plans tailored precisely to your health goals, allergies, and flavour preferences.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&h=600&fit=crop',
        action: 'Explore Subscriptions'
      }
    ];
    await Crousel.insertMany(carouselData);
    console.log('Carousel seeded successfully.');

    // 7. Seed Gallery
    console.log('Seeding Gallery...');
    const galleryData = [
      {
        name: 'Fine Dining Experiences',
        content: 'Pictures of dishes served by our premium party chefs.',
        galleryImages: [
          'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=450&fit=crop',
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop',
          'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=450&fit=crop'
        ]
      }
    ];
    await Gallery.insertMany(galleryData);
    console.log('Gallery seeded successfully.');

    // 8. Seed Join Us
    console.log('Seeding Join Us block...');
    const joinData = [
      {
        title: 'Grow Your Culinary Career',
        content: 'Become a ChefNest culinary partner. Earn a premium income, decide your own working hours, and cook for elite clients in your preferred locations.',
        image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&h=500&fit=crop'
      }
    ];
    await Join.insertMany(joinData);
    console.log('Join Us block seeded.');

    // 9. Seed FoodGaller
    console.log('Seeding FoodGaller items...');
    const foodGallerData = [
      { image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=800&fit=crop' },
      { image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop' }
    ];
    await FoodGaller.insertMany(foodGallerData);
    console.log('FoodGaller items seeded.');

    // 10. Seed Home Categories
    console.log('Seeding Home category suggestions...');
    const homeData = [
      {
        title: 'Single-Friendly Nutritious Meals',
        content: 'Clean, healthy portion sizes with high-protein and zero hassle.',
        category: 'For Singles',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop'
      },
      {
        title: 'Wholesome Multi-Course Family Meals',
        content: 'Traditional dinners with perfect hygiene for kids and elders alike.',
        category: 'For Families',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop'
      },
      {
        title: 'Budget-Friendly, Energy-Rich Recipes',
        content: 'Quick, filing meals suitable for student budgets and fast schedules.',
        category: 'For Students',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop'
      },
      {
        title: 'Intimate Candlelit Dynamic Dinners',
        content: 'Sophisticated cuisine styles curated for date nights and anniversaries.',
        category: 'For Couples',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop'
      }
    ];
    await Home.insertMany(homeData);
    console.log('Home categories seeded.');

    console.log('DATABASE SEEDING COMPLETED SUCCESSFULLY 🎉');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDB();
