// handlers/root.js

module.exports = (req, res) => {
    
    //
    // Rendern des `home` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('home', {
        title: 'Home',
        greeting: `Hallo! Hier sind die Links:`,
        about: `Hier geht's zu: about`,
        tweets: `Hier geht's zu: tweets`
    });
};