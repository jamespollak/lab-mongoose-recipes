const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

//Iteration 2 - Create a recipe

const newRecipe = Recipe.create({
  title: 'Indian Chickpea Curry',
  level: 'Easy Peasy',
  ingredients: ['2 jars of Chickpeas', '2 Large Tomatoes', '2 White Onions', '1 Fresh Chilli', 'Tumeric', 'Ginger', 'Salt', 'Pepper', 'Garlic', 'Masala Powder', 'Mustard Seeds'],
  cuisine: 'Indian',
  dishType: 'Dish',
  image: 'https://yupitsvegan.com/wp-content/uploads/2017/11/coconut-chickpea-curry-vegan-22.jpg',
  duration: 30,
  creator: 'James Pollak'
}).then(recipe => {
  console.log(this.title)
})
  .catch(err => { console.log('Could not add a new recipe', err) });

//Iteration 3 - Insert Many recipes

Recipe.insertMany(data)
  .then(recipe => {
    console.log(this.title)
  })
  .catch(err => { console.log('Could not insert these recipes', err) });

//Iteration 4 - Update recipe

const updateRecipe = Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
  .then(recipe => {
    console.log('Success!')
  })
  .catch(err => { console.log('Could not update this recipe', err) });

//Iteration 5 - Remove a recipe

const removeRecipe = Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(recipe => {
    console.log('Success!')
  })
  .catch(err => { console.log('Could not update this recipe', err) });

//Iteration 6 - Close the Database

mongoose.connection.close()
  .then(() => {
    console.log('DB connection to Mongo was closed!');
  }).catch(err => {
    console.error('Error disconnecting from mongo', err);
  });
