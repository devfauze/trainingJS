const Character = require("./Character").default;

module.exports = class Mage extends Character{
    constructor(name, life, attack, defense, magic){
        super(name, life, attack, defense)
        this.magic = magic
    }

    attack(targetCharacter){
        targetCharacter.life -= (this.attack + this.magic) - targetCharacter.defense
    }

    heal(targetCharacter){
        targetCharacter.life += this.magic * 2
    }
}
