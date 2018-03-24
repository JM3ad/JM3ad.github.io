export class NameGenerator {
    constructor() { }

    getName() {
        const firstPart = firstParts[Math.floor(Math.random() * firstParts.length)];
        const secondPart = secondParts[Math.floor(Math.random() * secondParts.length)];
        return firstPart + secondPart;
    }
}

const firstParts = ["Aqua", "Drago", "Aero", "Veno", "Slimer", "Fiery", "Stinky", "Wobbly"];
const secondParts = ["fish", "jay", "moth", "fly", "key", "mess", "pile", "wonder", "feeler", "pillar", "ator"];