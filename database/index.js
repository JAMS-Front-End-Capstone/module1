// REQUIRES

const mongoose = require('mongoose');
const faker = require('faker');

// DATABASE INITIALIZATION

mongoose.connect('mongodb://localhost/attractions', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log(`we're connected!`)
});

db.onLoad = () => {
  console.log('Loaded')
}

// MODEL

const attractionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  attractionName: String,
  reviewCount: Number,
  attractionRank: Array,
  category: String,
  tourCount: Number,
  greaterArea: String,
  reviews: Array
  /*       of these objects:
    {
      createdAt: Date,
      rating: Number,
      tagline: String,
      body: String,
      reviewer: {
        username: String,
        iconURL: String
      },
      helpful: Number,
      photos: [Array]
    } */
});
const Attraction = new mongoose.model('Attraction', attractionSchema);

const seedDatabase = () => {
  const attraction = {
    attractionName: 'Punaauia Beach',
    reviewCount: faker.random.number({max: 70, min: 13}),
    attractionRank: [faker.random.number(3), faker.random.number({max: 11, min: 4})],
    category: 'Beaches',
    tourCount: faker.random.number(15),
    greaterArea: 'Tahiti',
    reviews: []
  }
  for (let i = 0; i < attraction.reviewCount; i++) {
    // generating the body text for this review
    let body = []
    for (let j = 0; j < faker.random.number(3); j++) {
      body.push(faker.lorem.sentences(faker.random.number(3)));
    }
    // generating the photo array for this review
    let photos = []
    let options = ['nature', 'animals', 'city', 'food']
    for (let j = 0; j < faker.random.number(7); j++) {
      let option = options[faker.random.number({max: 3, min: 0})];
      photos.push(faker.image.imageUrl(640, 480, option, true, true))
    }
    // create the review with the nested docs
    let review = {
      createdAt: faker.date.past(faker.random.number({max:9, min: 0})),
      rating: faker.random.number({max: 5, min: 1, }),
      tagline: faker.lorem.sentence(),
      body: body.join('\n'),
      reviewer: {
        username: faker.internet.userName(),
        iconURL: faker.image.people(150, 150),
      },
      helpful: faker.random.number(80),
      photos: [...photos]
    }

    attraction.reviews.push(review)
  }

  Attraction.findOneAndUpdate({_id: attraction._id}, attraction, {j: true, new: true, upsert: true}).catch(err => console.log(err));

  return attraction;
}

const attraction = seedDatabase();

module.exports.attraction = attraction;
