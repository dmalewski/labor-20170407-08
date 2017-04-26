// handlers/about.js

module.exports = (req, res) => {
    
    //
    // Rendern des `about` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('about', {
        title: `About me`,
        greeting: `Hallo! Infos zu mir`,
        name: 'Name: Diana Malewski',
        alter: `Alter: 23`,
        farbe: `Lieblingsfarbe: hellblau, brombeer`,
        jahreszeit: `Lieblings-Jahreszeit: Frühling`,
        zahl: `Lieblingszahl: 8`,
        tier: `Lieblingstier: Hund, Fuchs, Gecko`,
        text: `Ich bin Diana, IFI Studentin im 6. Semester an der HS Bremen und schreibe einen 
        tollen Text für die "about"-Seite :D`,
    });
};