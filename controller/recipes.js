
require('dotenv').config();
const axios = require('axios');

exports.findByFoodName = function (req, res) {
  const foodName = req.query.food ? req.query.food : '';
  const url = `https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?calories=lte+600&health=vegetarian&q=${foodName}`;

  axios.get(url, {
    headers: {
      'X-Mashape-Key': process.env.X_MASHAP_KEY,
      Accept: 'application/json',
    },
  })
  .then(function (response) {
    const hits = response.data.hits;
    console.log(hits);
    res.send(hits);
  })
  .catch(function (error) {
    console.log(error);
  });
}
