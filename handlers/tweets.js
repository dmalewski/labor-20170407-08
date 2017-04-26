// handlers/tweets.js

module.exports = (req, res) => {
    
    //
    // Rendern des `tweets` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('tweets', {
        title: `Tweets`,
        greeting: `Hallo! Hier gibt' Tweets!`
    });
};