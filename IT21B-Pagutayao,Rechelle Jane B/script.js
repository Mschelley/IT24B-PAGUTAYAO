
const outputDiv = document.createElement('div');
outputDiv.id = 'output';
document.body.appendChild(outputDiv);


class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    }

    bloom() {
        return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }

    fragrance() {
        if (this.isFragrant) {
            return `The ${this.name} is pleasant.`;
        } else {
            return `The ${this.name} is not pleasant.`;
        }
    }

    colorDisplay() {
        return `The ${this.name} has a bright beautiful ${this.color} color.`;
    }
}


const Sunflower = new Flower('Sunflower', 'yellow', 'summer', true);


document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = `
        <p>${Sunflower.bloom()}</p>
        <p>${Sunflower.fragrance()}</p>
        <p>${Sunflower.colorDisplay()}</p>
    `;
});

document.dispatchEvent(new Event('DOMContentLoaded'));
