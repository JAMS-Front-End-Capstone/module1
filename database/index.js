// REQUIRES

const mongoose = require('mongoose');
const faker = require('faker');
const { reject } = require('bluebird');

// DATABASE INITIALIZATION

mongoose.connect('mongodb://attraction-overview-db/attraction', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log(`we're connected!`)
});

// MODEL

const attractionSchema = new mongoose.Schema({
  _id: String,
  attractionName: String,
  reviewCount: Number,
  averageRating: String,
  rank: Number,
  ranked: Number,
  category: String,
  tourCount: Number,
  tourCategories: String,
  greaterArea: String,
  reviews: Array, // review objects housing photo array
  photos: Array  // photo array housing review properties
});

const Attraction = new mongoose.model('Attraction', attractionSchema);

const seedDatabase = () => {
  const tours = ['Skinny cliff diving', 'Gang-free nightlife', 'Chimpanzee attacks', 'Literal shadow boxing', 'Air guitar lessons', 'Cello pudding', 'Mystery Pie', 'Solitaire Tournaments', 'Bear shelters']


  const tourString = generateTours(tours);
  const attraction = {
    _id: 1,
    attractionName: 'Punaauia Beach',
    reviewCount: faker.random.number({max:20, min: 3}),
    rank: faker.random.number({max: 3, min: 1}),
    ranked: faker.random.number({max: 11, min: 4}),
    category: 'Beaches',
    tourCount: faker.random.number({max: 15, min: 4}),
    tourCategories: tourString,
    greaterArea: 'Tahiti',
    reviews: []
  }
  for (let i = 0; i < attraction.reviewCount; i++) {
    // generating the body text for this review
    let body = []
    for (let j = 0; j < faker.random.number({max: 3, min: 1}); j++) {
      body.push(faker.lorem.sentences(faker.random.number({max: 4, min: 1})));
    }
    // generating the photo array for this review
    let photos = []
    let options = ['nature', 'animals', 'city', 'food']
    if (faker.random.number(2) === 1) {
      for (let j = 0; j < faker.random.number(7); j++) {
        let option = options[faker.random.number(3)];
        photos.push(faker.image.imageUrl(640, 480, option, true, true))
      }
    }
    // create the review with the nested docs
    let review = {
      id: faker.random.hexaDecimal(6),
      createdAt: faker.date.past(faker.random.number({max:9, min: 0})),
      rating: faker.random.number({max: 5, min: 1}),
      tagline: faker.lorem.sentence(),
      body: body.join('\n'),
      reviewer: {
        username: faker.internet.userName(),
        iconURL: faker.image.people(150, 150),
      },
      helpful: faker.random.number(50),
      photos: [...photos]
    }

    attraction.reviews.push(review)
  }

  attraction.averageRating = averageReviews(attraction.reviews);
  attraction.photos = [...buildPhotoArray(attraction.reviews)];
  Attraction.findOneAndUpdate({_id: attraction._id}, attraction, {j: true, new: true, upsert: true, useFindAndModify: false}).catch(err => console.log(err));
}


const averageReviews = (reviews) => {
  // get a real average rating score
  // rounded to the nearest half point
  // and multiplied by 10 as I'm only
  // using this to render a bubble graph
  // with that level of precision
  let totalReviews = reviews.length;
  let sumOfRatings = 0;

  for (let i = 0; i < totalReviews; i++) {
    sumOfRatings += reviews[i].rating;
  }

  let avgNum = Number.parseFloat(sumOfRatings/totalReviews).toPrecision(3);
  let avgRating = Math.round(avgNum).toString();
  if (avgNum % 1 >= 0.25 || avgNum % 1 < 0.75) {
    avgRating = Math.round(avgNum).toString() + "5"
  } else if (avgNum % 1 >= 0.75) {
    avgRating ++;
  }

  return avgRating;

}

const generateTours = (tours) => {
  const indexesUsed = []

  const generateToursRecursion = (tourString) => {
    if (tourString.length > 40) {
      return tourString.substr(0, tourString.length -2);
    } else {
      let i = faker.random.number({max: 8, min: 0});
      if (indexesUsed.includes(i)) {
        return generateToursRecursion(tourString);
      } else {
        let string = tours[i] + ", "
        tourString += string;
        indexesUsed.push(i);
        return generateToursRecursion(tourString);
      }
    }
  }

  let tourString = ''
  tourString = generateToursRecursion(tourString);
  return tourString;
}

const buildPhotoArray = (reviewArray) => {
  let reviews = [...reviewArray];
  let photos = [];
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].photos.length) {
      for (let j = 0; j < reviews[i].photos.length; j++) {
        photos.push({
          iconUrl: reviews[i].photos[j],
          userName: reviews[i].reviewer.username,
          createdAt: reviews[i].createdAt,
          rating: reviews[i].rating,
          tagline: reviews[i].tagline,
          helpful: reviews[i].helpful,
          imageURL: reviews[i].photos[j]
        });
      }
    }
  }
  return photos;
}

const findModel = () => {
  return new Promise((resolve, reject) => {
    let model = Attraction.find({})
    model.then((data) => {
      !data ? reject(new Error('Could not find model')) :
      resolve(data);
    });
  });
}

seedDatabase();

module.exports.findModel = findModel;
