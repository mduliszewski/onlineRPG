
'use strict';



class Class {
    get strengthModifier() {
        return 1;
    }

    get inteligenceModifier() {
        return 1;
    }

    get wisdomModifier() {
        return 1;
    }

    get constitutionModifier() {
        return 1;
    }

    get agilityModifier() {
        return 1;
    }

}

//override necessary traits for classes
class Warrior extends Class {
    get strengthModifier() {
        return 1.5;
    }

    get constitutionModifier() {
        return 1.3;
    }

    get agilityModifier() {
        return 1.1;
    }

}

class Wizard extends Class {
    get strengthModifier() {
        return 0.9;
    }

    get inteligenceModifier() {
        return 1.5;
    }

    get wisdomModifier() {
        return 1.5;
    }

}

class Assasin extends Class {
    get strengthModifier() {
        return 1.1;
    }

    get agilityModifier() {
        return 1.5;
    }

    get inteligenceModifier() {
        return 1.2;
    }
}

class Necromancer extends Class {
    get strengthModifier() {
        return 1.1;
    }

    get constitutionModifier() {
        return 0.9;
    }

    get inteligenceModifier() {
        return 1.5;
    }

    get wisdomModifier() {
        return 1.4;
    }
}



class Race {
    get strengthModifier() {
        return 1;
    }

    get inteligenceModifier() {
        return 1;
    }

    get wisdomModifier() {
        return 1;
    }

    get constitutionModifier() {
        return 1;
    }

    get agilityModifier() {
        return 1;
    }
}

class Human extends Race {
    get strengthModifier() {
        return 1.2
    }
    get inteligenceModifier() {
        return 1.3;
    }
    get wisdomModifier() {
        return 1.2;
    }

    get constitutionModifier() {
        return 1.2;
    }

    get agilityModifier() {
        return 1.2;
    }
}

class Elf extends Race {
    get strengthModifier() {
        return 1.2;
    }
    get inteligenceModifier() {
        return 1.3;
    }
    get wisdomModifier() {
        return 1.6;
    }

    get agilityModifier() {
        return 1.6;
    }
}

class Orc extends Race {
    get strengthModifier() {
        return 1.6;
    }
    get inteligenceModifier() {
        return 0.8;
    }
    get wisdomModifier() {
        return 0.8;
    }

    get constitutionModifier() {
        return 1.2;
    }

}

class Halfling extends Race {
    get strengthModifier() {
        return 0.8;
    }
    get wisdomModifier() {
        return 1.2;
    }
    get agilityModifier() {
        return 1.2;
    }
}

class Dwarf extends Race {
    get strengthModifier() {
        return 1.4;
    }
    get inteligenceModifier() {
        return 0.8;
    }
    get constitutionModifier() {
        return 2;
    }
    get agilityModifier() {
        return 0.8;
    }
}

var character = {
    level: 1,
    gold: 0,
    experience: 0,
    enemyCounter: 0,
    summoninterval: 10000,
    enemyLvl: 1,
    race: null,
    //class: new Class(),
    //race: new Race(),

    skills: {
        strength: 10, //*this.class.strengthModifier,
        inteligence: 10, //* this.class.inteligenceModifier,
        wisdom: 10, //* this.class.wisdomModifier,
        constitution: 10, //* this.class.constitutionModifier,
        agility: 10, //* this.class.agilityModifier,
    },

    health: 100,

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

function assignClassSkillModifiers(aCharacter) {

    character.skills.strength = 10 * character.class.strengthModifier * character.race.strengthModifier;
    character.skills.inteligence = 10 * character.class.inteligenceModifier * character.race.inteligenceModifier;
    character.skills.wisdom = 10 * character.class.wisdomModifier * character.race.wisdomModifier
    character.skills.constitution = 10 * character.class.constitutionModifier * character.race.constitutionModifier;
    character.skills.agility = 10 * character.class.agilityModifier * character.race.agilityModifier;
}


//CHARACTER CREATION
if (window.location.href == "file:///C:/Users/Michal/OneDrive/Portfolio/Projects/onlineRPG/characterCreation.html") {
    var chosenClass = document.getElementById("selectedClass").value;
    var chosenRace = document.getElementById("selectedRace").value;

    //templete character
    if (chosenClass == "warrior" && chosenRace == "Human") {
        character.class = new Warrior();
        character.race = new Human();
        assignClassSkillModifiers(character);
        updateHealthAndDamage(character);

        updateAtrributeLabels();
    }

    //Choosing class on page
    document.getElementById("selectedClass").onchange = function () {
        var chosenClass = document.getElementById("selectedClass").value;

        if (chosenClass == "warrior") {
            character.class = new Warrior();
            assignClassSkillModifiers(character);
            character.damage = character.skills.strength * character.level;
        }
        else if (chosenClass == "wizard") {
            character.class = new Wizard();
            assignClassSkillModifiers(character);
        }
        else if (chosenClass == "assasin") {
            character.class = new Assasin();
            assignClassSkillModifiers(character);
        }
        else if (chosenClass == "necromancer") {
            character.class = new Necromancer();
            assignClassSkillModifiers(character);
        }

        updateHealthAndDamage(character);

        updateAtrributeLabels();
    }
    //choosing race on page
    document.getElementById("selectedRace").onchange = function () {
        var chosenRace = document.getElementById("selectedRace").value;

        if (chosenRace == "Human") {
            character.race = new Human();
            assignClassSkillModifiers(character);
        }
        if (chosenRace == "Elf") {
            character.race = new Elf();
            assignClassSkillModifiers(character);
        }
        if (chosenRace == "Orc") {
            character.race = new Orc();
            assignClassSkillModifiers(character);
        }
        if (chosenRace == "Halfling") {
            character.race = new Halfling();
            assignClassSkillModifiers(character);
        }
        if (chosenRace == "Dwarf") {
            character.race = new Dwarf();
            assignClassSkillModifiers(character);
        }
        updateHealthAndDamage(character);

        updateAtrributeLabels();
    }

    document.getElementById("beginButton").onclick = function () {
        save();
        window.location.href = "file:///C:/Users/Michal/OneDrive/Portfolio/Projects/onlineRPG/mainGame.html";

    }
}

function updateAtrributeLabels() {
    document.getElementById("strText").textContent = "Strength = " + Math.round(character.skills.strength).toFixed(0);
    document.getElementById("conText").textContent = "Constitution = " + Math.round(character.skills.constitution).toFixed(0);
    document.getElementById("intText").textContent = "Inteligence = " + Math.round(character.skills.inteligence).toFixed(0);
    document.getElementById("wisText").textContent = "Wisdom = " + Math.round(character.skills.wisdom).toFixed(0);
    document.getElementById("agText").textContent = "Agility = " + Math.round(character.skills.agility).toFixed(0);
    document.getElementById("dmgText").textContent = "Current damage = " + Math.round(character.damage).toFixed(0);
    document.getElementById("hpText").textContent = "Current health = " + Math.round(character.health).toFixed(0);
}

function updateAtrributeLabels2() {
    document.getElementById("strText2").textContent = "Strength = " + Math.round(character.skills.strength).toFixed(0);
    document.getElementById("conText2").textContent = "Constitution = " + Math.round(character.skills.constitution).toFixed(0);
    document.getElementById("intText2").textContent = "Inteligence = " + Math.round(character.skills.inteligence).toFixed(0);
    document.getElementById("wisText2").textContent = "Wisdom = " + Math.round(character.skills.wisdom).toFixed(0);
    document.getElementById("agText2").textContent = "Agility = " + Math.round(character.skills.agility).toFixed(0);
    document.getElementById("dmgText2").textContent = "Current damage = " + Math.round(character.damage).toFixed(0);
    document.getElementById("hpText2").textContent = "Current health = " + Math.round(character.health).toFixed(0);
}

function updateHealthAndDamage(aCharacter) {

    if (character.class instanceof Warrior) {
        character.damage = character.skills.strength * character.level;
    }
    else if (character.class instanceof Wizard) {
        character.damage = character.skills.wisdom * character.level;
    }
    else if (character.class instanceof Assasin) {
        character.damage = character.skills.agility * character.level;
    }
    else if (character.class instanceof Necromancer) {
        character.damage = character.skills.inteligence * character.level;
    }

    character.health = character.level * character.skills.constitution * 10;
}

function updateEnemyLabels(enemy){
    document.getElementById("enemyName").textContent = "Your Enemy is: "+enemies[waveCount].getName();
    document.getElementById("enemyDmg").textContent = enemies[waveCount].getName() +" deals "+ Math.round(enemies[waveCount].getDamage()).toFixed(0)+" damage per hit!";
    document.getElementById("enemyHealth").textContent = enemies[waveCount].getName() +" health is: " + Math.round(enemies[waveCount].getHealth()).toFixed(0);
}




if (window.location.href == "file:///C:/Users/Michal/OneDrive/Portfolio/Projects/onlineRPG/index.html") {

    document.getElementById("loadButton").onclick = function () {
        load();
        window.location.href = "file:///C:/Users/Michal/OneDrive/Portfolio/Projects/onlineRPG/mainGame.html";

    }
}

var waveCount = 0;
//MAIN GAME
if(window.location.href == "file:///C:/Users/Michal/OneDrive/Portfolio/Projects/onlineRPG/mainGame.html"){
    enemy = enemies[waveCount];
    load();
    updateEnemyLabels();
    updateAtrributeLabels2();

    document.getElementById("fightButton").onclick = function () {
        fight(character, enemies[waveCount]);
        updateEnemyLabels();
    }

}







var enemy = {}

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



function save() {

    var save = {
        character1: character,
        enemy1: enemies[waveCount],
        inventory1: inventory,
    }

    localStorage.setItem("save", JSON.stringify(save));
}


function load() {

    var savedGame = JSON.parse(localStorage.getItem("save"));

    if (savedGame != undefined && savedGame != null) {
        character = savedGame.character1;
        inventory = savedGame.inventory1;
    }
}
var priority = "";

function attack(character, enemy) {

    if (priority == "character") {
        enemy.health -= character.damage;
        window.alert("Your enemy has "+ enemy.getHealth()+" health left!");
        priority = "enemy";
    } else {
        character.health -= enemy.getDamage();
        window.alert("You have now "+character.health+" health left!");
        priority = "character";
    }
}

function fight(character, enemy) {

    if (character.skills.agility > enemy.getAgility()) {
        priority = "character";
    } else {
        priority = "enemy";
    }

    while (character.health > 0 && enemy.getHealth() > 0) {

        attack(character, enemy);
        updateAtrributeLabels2();
    }
    if(enemy.getHealth()<=0){
        waveCount++;
        //save();
    }

}