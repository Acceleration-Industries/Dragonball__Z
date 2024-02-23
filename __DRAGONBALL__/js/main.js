function replaceEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}
let characters = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];
document.addEventListener('DOMContentLoaded', function() {
    const characterChoice = document.getElementById('character_choice');
    const characterImage = document.getElementById('characterImage');
    const signatureMove = document.getElementById('signatureMove');
    const characters = {
        Goku: { image: './__DRAGONBALL__/static/photos/Goku.png', move: 'Kamehameha' },
        Vegeta: { image: './__DRAGONBALL__/static/photos/Vegeta.png', move: 'Final Flash' },
        Trunks: { image: './__DRAGONBALL__/static/photos/Trunks.png', move: 'Burning Attack' },
        Krillin: { image: './__DRAGONBALL__/static/photos/Krillin.png', move: 'Destructo Disc' },
        Gohan: { image: './__DRAGONBALL__/static/photos/Gohan.png', move: 'Masenko' },
        Picollo: { image: './__DRAGONBALL__/static/photos/Picollo.png', move: 'Special Beam Cannon' },
    };
    characterChoice.addEventListener('change', function() {
        const selectedCharacter = characterChoice.value;
        const characterData = characters[selectedCharacter];
        if (characterData) {
            characterImage.src = characterData.image;
            characterImage.style.display = 'block';
            signatureMove.textContent = `Signature Move: ${characterData.move}`;
            signatureMove.style.display = 'block';
        } else {
            characterImage.style.display = 'none';
            signatureMove.style.display = 'none';
        }     
if (characterData) {
    characterImage.src = characterData.image;
    characterImage.style.display = 'block';
    signatureMove.textContent = `Signature Move: ${characterData.move}`;
    signatureMove.style.display = 'block';
    closeButton.style.display = 'block';
} else {
    characterImage.style.display = 'none';
    signatureMove.style.display = 'none';
    closeButton.style.display = 'none';
}

    });
});
document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function() {
        document.getElementById('characterImage').style.display = 'none';
        document.getElementById('signatureMove').style.display = 'none';
        closeButton.style.display = 'none';
    });
});