

var character = {
    level: 1,
    gold: 0,
    experience: 0,
    enemyCounter: 0,
    summoninterval: 10000,
    enemyLvl: 1,
    health: constitution*20*level,
    race: null,
    class: null,
    classModifier: {
        if(class == "wizard"){

        }
    }
    damage: classModifier * 10,

    skills: {
        strength:10,
        inteligence:10,
        wisdom:10,
        constitution:10,
        agility:10,
    },
  
    head: {},
    chest: {},
    legs: {},
    boots: {},
    gloves: {},
    ring: {},
    necklace: {},
    weapon: {},
    secondWeapon: {},
    cape: {},
    trinket: {},
}

var enemy = {
    level: waveCount,
    health: this.level*500,
    damage: this.level*15,
    skills: {
        strength:10,
        inteligence:10,
        wisdom:10,
        constitution:10,
        agility:10,
    }
}

var inventory = {
    i1: {},
    i2: {},
    i3: {},
    i4: {},
    i5: {},
    i6: {},
    i7: {},
    i8: {},
    i9: {},
    i10: {},
    i11: {},
    i12: {},
    i13: {},
    i14: {},
    i15: {},
    i16: {},
    i17: {},
    i18: {},
    i19: {},
    i20: {},
   
  }
  
  var waveCount = 1;


function save(){
    var save = {
        character1: character,
        enemy1: enemy,
        inventory1: inventory,
    }

    localStorage.setItem("save", JSON.stringify(save));
}


function load(){
    var savedGame = JSON.parse(localStorage.getItem("save"));

    if(savedGame != undefined && savedGame != null){
        character = savedGame.character1;
        inventory = savedGame.inventory1;
    }
}

function attack(attacker, defender){
    defender.health -= attacker.damage;
}

function fight(){
    while(character.health >0 && enemy.health > 0){
        if(character.skills.agility > enemy.skills.agility){

        }
    }
}