const Character = require("./Character").default;

module.exports = class Thief extends Character{
    attack(targetCharacter){
        targetCharacter.life -= (this.attack - targetCharacter.defense) * 2
    }
}
