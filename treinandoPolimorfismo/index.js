const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const haast = new Mage ('Haast', 300, 40, 30, 95)
const talon = new Thief ('Talon', 150, 60, 10)
const pantheon = new Warrior('Pantheon', 400, 30, 50, 90)

console.table({haast, talon, pantheon})

pantheon.switchStance()
talon.attack(haast)

console.table({haast, talon, pantheon})

