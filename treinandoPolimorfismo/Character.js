module.exports = class Character{
    constructor(name, life, attack, defense){
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }

    attack(targetCharacter){
        targetCharacter.life -= this.attack - targetCharacter.defense
    }
}