// Kitten Images
const kittenImages = [
    "https://placekitten.com/300/200",
    "https://placekitten.com/400/300",
    "https://placekitten.com/500/300",
    "https://placekitten.com/350/250",
    "https://placekitten.com/450/350"
];

// Fun Kitten Facts
const funFacts = [
    "Kittens sleep 12-16 hours a day!",
    "Kittens have 26 bones in their tails!",
    "Kittens start walking after 3 weeks of age.",
    "A group of kittens is called a kindle.",
    "Kittens are born with blue eyes, and their color changes as they grow."
];

// Inject kitten images into the gallery
const gallery = document.getElementById('kitten-gallery');
kittenImages.forEach(imgSrc => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = "Cute kitten";
    gallery.appendChild(imgElement);
});

// Inject fun facts into the list
const factsList = document.getElementById('fun-facts');
funFacts.forEach(fact => {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    factsList.appendChild(listItem);
});
