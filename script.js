const cards = [
    { name: "The Fool", image: "images/fool.jpg", meaning: "New beginnings, innocence, adventure." },
    { name: "The Magician", image: "images/magician.jpg", meaning: "Power, skill, concentration." },
    { name: "The High Priestess", image: "images/high_priestess.jpg", meaning: "Intuition, wisdom, secrets." },
    { name: "The Empress", image: "images/empress.jpg", meaning: "Femininity, beauty, nature." },
    { name: "The Emperor", image: "images/emperor.jpg", meaning: "Authority, structure, control." },
    { name: "The Hierophant", image: "images/hierophant.jpg", meaning: "Tradition, conformity, morality." },
    { name: "The Lovers", image: "images/lovers.jpg", meaning: "Love, union, relationships." },
    { name: "The Chariot", image: "images/chariot.jpg", meaning: "Control, willpower, victory." },
    { name: "Strength", image: "images/strength.jpg", meaning: "Courage, bravery, confidence." },
    { name: "The Hermit", image: "images/hermit.jpg", meaning: "Introspection, solitude, guidance." },
    { name: "Wheel of Fortune", image: "images/wheel_of_fortune.jpg", meaning: "Luck, karma, life cycles." },
    { name: "Justice", image: "images/justice.jpg", meaning: "Fairness, truth, law." },
    { name: "The Hanged Man", image: "images/hanged_man.jpg", meaning: "Suspension, restriction, letting go." },
    { name: "Death", image: "images/death.jpg", meaning: "Endings, change, transformation." },
    { name: "Temperance", image: "images/temperance.jpg", meaning: "Balance, moderation, patience." },
    { name: "The Devil", image: "images/devil.jpg", meaning: "Bondage, addiction, materialism." },
    { name: "The Tower", image: "images/tower.jpg", meaning: "Upheaval, sudden change, chaos." },
    { name: "The Star", image: "images/star.jpg", meaning: "Hope, faith, rejuvenation." },
    { name: "The Moon", image: "images/moon.jpg", meaning: "Illusion, fear, anxiety." },
    { name: "The Sun", image: "images/sun.jpg", meaning: "Happiness, success, positivity." },
    { name: "Judgement", image: "images/judgement.jpg", meaning: "Judgement, rebirth, inner calling." },
    { name: "The World", image: "images/world.jpg", meaning: "Completion, accomplishment, travel." }
];

const cardElement = document.getElementById('card-image');
const cardNameElement = document.getElementById('card-name');
const cardMeaningElement = document.getElementById('card-meaning');
const drawButton = document.getElementById('draw-button');

drawButton.addEventListener('click', drawCard);

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];

    cardElement.src = card.image;
    cardNameElement.textContent = card.name;
    cardMeaningElement.textContent = card.meaning;
}
