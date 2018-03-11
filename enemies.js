
'use strict';

function Enemy(){
    this.strength = 1;
    this.agility = 1;
    this.constitution = 1;
    this.name = "Enemy";
    this.health = this.constitution *50;
    this.damage = this.strength * 5;
    this.enemyNumber = 0;
    this.level = 0;
    
    this.getStrength = function(){
        return this.strength;
    }

    this.getAgility = function(){
        return this.agility;
    }

    this.getConstitution = function(){
        return this.constitution;
    }

    this.getName = function(){
        return this.name;
    }

    this.getHealth = function(){
        return this.health;
    }

    this.getDamage = function(){
        return this.damage;
    }

    this.getNumber = function(){
        return this.enemyNumber;
    }
}

function Wolf(){
    this.strength = 10;
    this.agility = 13;
    this.constitution = 8;
    this.health = this.constitution *10;
    this.damage = this.strength * 2;
    this.name = "Wolf";
    this.level = 1;
}

function Goblin(){
    this.strength = 12;
    this.agility = 10;
    this.constitution = 9;
    this.health = this.constitution *10;
    this.damage = this.strength * 2;
    this.name = "Goblin";
    this.level = 2;
}

Wolf.prototype = new Enemy();
Goblin.prototype = new Enemy();

var enemy1 = new Wolf();
var enemy2 = new Goblin();

var enemies = [];

enemies.push(enemy1);
enemies.push(enemy2);
