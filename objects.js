const myGames = [
    {
        name: "Uno",
        type: "card",
        numberOfPLayers: 4,
        rating: 8,
        famFavorite: true,
        shortDescription: "a shedding-type card game where the goal is to be the first player to get rid of all cards by matching colors or numbers."
    },
    {
        name: "Mancala",
        type: "sow",
        numberOfPLayers: 2,
        rating: 6,
        famFavorite: false,
        shortDescription: "an ancient count and capture game where players move stones in rows of pits, aiming to collect the most pieces in their store(mancala) in counter-clockwise direction."
    },
    {
        name: "Monopoly: Super Mario",
        type: "board",
        numberOfPLayers: 4,
        rating: 10,
        famFavorite: true,
        shortDescription: "the classic Monopoly game with Nintendo's Super Mario theme; players navigate the Mushroom Kingdom buying, selling and trading locations using coins instead of cash."
    }
]
console.log("My Favorite Games ", myGames);

const whichGame = window.prompt("I have " + myGames.length + " games in my collection. Pick a number between 1-3 and I will tell you about that game.");
const selectedIndex = Number(whichGame)-1;
console.log("You selected" , myGames[whichGame-1].name);
window.alert ("You selected " + myGames[whichGame-1].name + " which is " + myGames[whichGame-1].shortDescription + " I give it a " + myGames[whichGame-1].rating + " out of 10.")