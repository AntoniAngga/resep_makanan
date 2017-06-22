const OAuth = require('oauth');
require('dotenv').config();
const oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.ConsumerKey,
    process.env.ConsumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
);

const db_ingredient = require('../models/resepMakanan');


let twitterPost = function (req,res) {
    let twitterData = req.body;
    const encoded = encodeURIComponent(twitterData.txtTwitter);
    const url = `https://api.twitter.com/1.1/statuses/update.json?status=${encoded}`;
    oauth.post(url,
        process.env.AccessToken, //test user token
        process.env.AccessTokenSecret, //test user secret
        req.params.txtStatus,
        "txt",
        function (e, data){
            if (e) {
                console.error(e);
            }
            
            let newingredient = new db_ingredient ({
              name : twitterData.txtTwitter,
              ingredient : twitterData.ingredientLines
            });
            
            newingredient.save(err => {
              if (err) {
                console.log(err);
              } else {
                res.redirect('/')
              }
            })
        });
    
};

let index = function (req,res) {
    db_ingredient.find({},(err,result)=>{
      if (err) {
        console.log(err.message);
      }
    res.render('index',{result : result});
    })
};


module.exports = {
    twitterPost,
    index
};