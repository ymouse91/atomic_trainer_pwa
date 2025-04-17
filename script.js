
window.onerror = function(message, source, lineno, colno, error) {
    alert(`Virhe: ${message}\nSijainti: ${source}\nRivi: ${lineno}, Sarake: ${colno}`);
};

function updateDateTime() {
    document.getElementById("datetime").textContent = new Date().toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

const cardRanges = {
    "A♣️": [[[19, 37], 37], [[47, 47], 94]],
    "2♣️": [[[10, 19], 19], [[28, 46], 56]],
    "3♣️": [[[5, 11], 11], [[32, 47], 64]],
    "4♣️": [[[13, 25], 25], [[39, 47], 78]],
    "5♣️": [[[24, 47], 48], [[24, 47], 48]],
    "6♣️": [[[12, 24], 24], [[12, 24], 24]],
    "7♣️": [[[21, 41], 41], [[45, 47], 90]],
    "8♣️": [[[18, 35], 35], [[18, 35], 35]],
    "9♣️": [[[22, 43], 43], [[44, 47], 88]],
    "10♣️": [[[13, 26], 26], [[13, 26], 26]],
    "J♣️": [[[17, 34], 34], [[17, 34], 34]],
    "Q♣️": [[[19, 38], 38], [[19, 38], 38]],
    "K♣️": [[[3, 5], 5], [[35, 47], 70]],
    "A♠️": [[[1, 2], 2], [[1, 2], 2]],
    "2♠️": [[[7, 14], 14], [[7, 14], 14]],
    "3♠️": [[[15, 30], 30], [[15, 30], 30]],
    "4♠️": [[[14, 27], 27], [[14, 27], 27]],
    "5♠️": [[[18, 36], 36], [[18, 36], 36]],
    "6♠️": [[[25, 47], 49], [[25, 47], 49]],
    "7♠️": [[[6, 12], 12], [[6, 12], 12]],
    "8♠️": [[[2, 3], 3], [[36, 47], 72]],
    "9♠️": [[[2, 4], 4], [[2, 4], 4]],
    "10♠️": [[[26, 47], 51], [[26, 47], 51]],
    "J♠️": [[[14, 28], 28], [[14, 28], 28]],
    "Q♠️": [[[8, 15], 15], [[30, 47], 60]],
    "K♠️": [[[26, 47], 52], [[26, 47], 52]],
    "A♦️": [[[17, 33], 33], [[17, 33], 33]],
    "2♦️": [[[15, 29], 29], [[15, 29], 29]],
    "3♦️": [[[23, 46], 46], [[23, 46], 46]],
    "4♦️": [[[11, 21], 21], [[27, 43], 54]],
    "5♦️": [[[4, 7], 7], [[34, 47], 68]],
    "6♦️": [[[9, 18], 18], [[9, 18], 18]],
    "7♦️": [[[16, 32], 32], [[16, 32], 32]],
    "8♦️": [[[23, 45], 45], [[46, 47], 86]],
    "9♦️": [[[16, 31], 31], [[16, 31], 31]],
    "10♦️": [[[22, 44], 44], [[22, 44], 44]],
    "J♦️": [[[3, 6], 6], [[3, 6], 6]],
    "Q♦️": [[[20, 39], 39], [[46, 47], 92]],
    "K♦️": [[[10, 20], 20], [[10, 20], 20]],
    "A♥️": [[[4, 8], 8], [[4, 8], 8]],
    "2♥️": [[[8, 16], 16], [[8, 16], 16]],
    "3♥️": [[[5, 9], 9], [[33, 47], 66]],
    "4♥️": [[[11, 22], 22], [[11, 22], 22]],
    "5♥️": [[[20, 40], 40], [[20, 40], 40]],
    "6♥️": [[[1, 1], 1], [[1, 1], 1]],
    "7♥️": [[[7, 13], 13], [[31, 47], 62]],
    "8♥️": [[[24, 47], 47], [[24, 47], 47]],
    "9♥️": [[[5, 10], 10], [[5, 10], 10]],
    "10♥️": [[[21, 42], 42], [[21, 42], 42]],
    "J♥️": [[[12, 22], 23], [[38, 47], 76]],
    "Q♥️": [[[9, 17], 17], [[29, 47], 58]],
    "K♥️": [[[25, 46], 50], [[25, 46], 50]]
};

const cards = Object.keys(cardRanges);
const cardDropdown = document.getElementById("cardDropdown");
const numberDropdown = document.getElementById("numberDropdown");
const peek = document.getElementById("peek");
const sparkleContainer = document.getElementById("sparkleContainer");

function populateDropdowns() {
    cards.forEach(card => {
        let option = document.createElement("option");
        option.textContent = card;
        cardDropdown.appendChild(option);
    });
    updateNumberDropdown();
}

function updateNumberDropdown() {
    while (numberDropdown.firstChild) {
        numberDropdown.removeChild(numberDropdown.firstChild);
    }

    for (let i = 1; i <= 52; i++) {
        let option = document.createElement("option");
        option.textContent = i;
        numberDropdown.appendChild(option);
    }
}

function getRandomNumberInRanges(ranges) {
    let validNumbers = [];
    ranges.forEach(range => {
        if (Array.isArray(range[0])) {
            range = range[0];
        }
        for (let i = range[0]; i <= range[1]; i++) {
            validNumbers.push(i);
        }
    });
    if (validNumbers.length > 0) {
        return validNumbers[Math.floor(Math.random() * validNumbers.length)];
    }
    return null;
}

function randomizeCard() {
    const selectedNumber = parseInt(numberDropdown.value);
    const validCards = cards.filter(card => {
        const ranges = cardRanges[card].map(range => range[0]);
        return ranges.some(range => range && selectedNumber >= range[0] && selectedNumber <= range[1]);
    });
    if (validCards.length) {
        cardDropdown.value = validCards[Math.floor(Math.random() * validCards.length)];
    }
    updatePeek();
    triggerSparkle();
}

function randomizeNumber() {
    const selectedCard = cardDropdown.value;
    if (!selectedCard) return;

    const numberOptions = getRandomNumberInRanges(cardRanges[selectedCard].map(range => Array.isArray(range[0]) ? range[0] : range));

    if (numberOptions) {
        numberDropdown.value = numberOptions;
    }

    updatePeek();
    triggerSparkle();
}

function randomizeCardAndNumber() {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    cardDropdown.value = randomCard;
    const validNumbers = [];
    cardRanges[randomCard].forEach(range => {
        for (let i = range[0][0]; i <= range[0][1]; i++) {
            validNumbers.push(i);
        }
    });
    numberDropdown.value = validNumbers[Math.floor(Math.random() * validNumbers.length)];
    updatePeek();
    triggerSparkle();
}

function updatePeek() {
    const selectedCard = cardDropdown.value;
    const selectedNumber = parseInt(numberDropdown.value);
    const ranges = cardRanges[selectedCard];
    let peekText = "";
    let desimaali = "";
    ranges.forEach((range) => {
        const rangeStart = range[0][0];
        const rangeEnd = range[0][1];
        const secretNumber = range[1];
        if (selectedNumber >= rangeStart && selectedNumber <= rangeEnd) {
            if (secretNumber - selectedNumber === 0) {
                desimaali = "0,00";
            } else {
                desimaali = ((secretNumber - selectedNumber) / 100).toFixed(2);
            }
            peekText = `Popularity of this combination is currently ${desimaali}${numberDropdown.value - (secretNumber - selectedNumber)}%`;
        }
    });
    peek.textContent = peekText;
    peek.classList.toggle('visible', peekText !== "");
}

function triggerSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${Math.random() * window.innerHeight}px`;
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

cardDropdown.addEventListener("change", updatePeek);
numberDropdown.addEventListener("change", updatePeek);

document.addEventListener("DOMContentLoaded", function () {
    populateDropdowns();
    randomizeCardAndNumber();
});
