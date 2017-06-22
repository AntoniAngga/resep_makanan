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
           res.redirect('/');
        });
};

let index = function (req,res) {
    res.render('index',{hallo : "haloo"})
};


module.exports = {
    twitterPost,
    index
};