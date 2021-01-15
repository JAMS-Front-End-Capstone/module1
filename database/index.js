const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const attractionSchema = new mongoose.Schema({
  attractionId: Number,
  attractionName: String,
  reviewCount: Number,
  attractionRank: Array,
  category: String,
  tourCount: Number,
  greaterArea: String,
  reviews: [reviewSchema], // array of reviewIds (SEE BELOW)
});

const reviewSchema = new mongoose.Schema({
  reviewId: Number,
  createdAt: Date,
  attractionId: Number,
  rating: Number,
  tagline: String,
  body: String,
  user: [userSchema],
  iconUrl: String,
  helpful: Number,
  photos: Array
});

const userSchema = new mongoose.Schema({
  userId: Number,
  userName: String,
  iconURL: String
})

const attraction = new mongoose.model(attractionSchema);

db.on('error', console.error.bind(console, 'connection error: '));
db.once(open, () => {
  console.log(`we're connected!`)
});

// db.searchAttractions = db.query();

module.exports.db = db;
