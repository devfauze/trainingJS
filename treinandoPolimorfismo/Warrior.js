const Character = require("./Character").default;

module.exports = class Warrior extends Character{
    constructor(name, life, attack, defense, shield){
        super(name, life, attack, defense)
        this.shield = shield
        this.stance = 'attacking'
    }

    attack(targetCharacter){
        if(this.stance === 'attacking'){
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === 'attacking'){
            this.stance = 'defending'
            this.defense += this.shield
        } else {
            this.stance = 'attacking'
            this.defense -= this.shield
        }
    }
}

