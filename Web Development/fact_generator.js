// const facts = [
//     "Bananas are berries, but strawberries aren't!",
//     "Honey never spoils. Archaeologists have found 3000-year-old honey in tombs!",
//     "Octopuses have three hearts and blue blood.",
//     "A day on Venus is longer than a year on Venus.",
//     "Cows have best friends and get stressed when separated.",
//     "Wombat poop is cube-shaped!",
//     "The Eiffel Tower can be 15 cm taller during the summer due to heat expansion."
// ];

// function generateFact() {
//     const randomIndex = Math.floor(Math.random() * facts.length);
//     document.getElementById("fact").innerText = facts[randomIndex];
// }


    async function generateFact() {
        try {
            const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
            const data = await response.json();
            document.getElementById("fact").innerText = data.text;
        } catch (error) {
            document.getElementById("fact").innerText = "Oops! Could not fetch a fact. Try again!";
        }
    }

