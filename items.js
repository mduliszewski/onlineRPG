

  var affixnames = [
    "Blindness",
    "Bravery",
    "Burning",
    "Burrowing",
    "Conjuration",
    "Darkness",
    "Dawn",
    "Death",
    "Deception",
    "Defense",
    "Deflection",
    "Delerium",
    "Desire",
    "Despair",
    "Destruction",
    "Domination",
    "Doom",
    "Dragonslaying",
    "Dreaming",
    "Durability",
    "Dusk",
    "Evocation",
    "Fire",
    "Flame",
    "Freezing",
    "Fury",
    "Glory",
    "Growth",
    "Healing",
    "Heroism",
    "Hope",
    "Horror",
    "Ice",
    "Illusion",
    "Impact",
    "Imprisonment",
    "Incineration",
    "Insanity",
    "Invulnerability",
    "Invisibility",
    "Justice",
    "Life",
    "Light",
    "Lightlessness",
    "Lightning",
    "Love",
    "Madness",
    "Malice",
    "Mercy",
    "Midnight",
    "Obedience",
    "Peace",
    "Petrification",
    "Piercing",
    "Planeswalking",
    "Prophecy",
    "Rage",
    "Resurrection",
    "Retribution",
    "Seeking",
    "Shadow",
    "Shadowbinding",
    "Shattering",
    "Shieldbreaking",
    "Shielding",
    "Shocking",
    "Siege",
    "Sightblinding",
    "Silence",
    "Smiting",
    "Solidity",
    "Soul",
    "Soulbinding",
    "Soulcutting",
    "Spellbreaking",
    "Starlight",
    "Stealth",
    "Stonecutting",
    "Striking",
    "Sundering",
    "the Angel",
    "the Banshee",
    "the Centaur",
    "the Demon",
    "the Desert",
    "the Dragon",
    "the Dwarf",
    "the Elf",
    "the Elements",
    "the Fairie",
    "the Gargoyle",
    "the Genie",
    "the Ghost",
    "the Ghoul",
    "the Giant",
    "the Gnome",
    "the Goblin",
    "the God",
    "the Gremlin",
    "the Gryphon",
    "the Homunculus",
    "the Lich",
    "the Mermaid",
    "the Monster",
    "the Ogre",
    "the Orc",
    "the Titan",
    "the Troll",
    "the Vampire",
    "the Werebeast",
    "the Werewolf",
    "the Wight",
    "Thought",
    "Townsaving",
    "Treachery",
    "True Sight",
    "Twilight",
    "Valor",
    "Vengeance",
    "Void",
    "Warding",
    "Wayfinding",
    "Weightlessness",
    "Wind",
    "Winter",
    "Wisdom",
    "Woundhealing",
  ];


  var rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic"];
  var slots = ["helmet", "chest", "legs", "boots", "gloves", "ring", "necklace", "weapon", "secondWeapon", "cape", "trinket"];
  

  function generateItem(enemyLevel){
    itemRarity = "no";
    rndSlot = Math.floor(Math.random()*slots.length);
    rndAffix = Math.floor(Math.random()*affixnames.length);
    rndPower = Math.floor(Math.random()*10);
    generatedItem = {};

    rndNumber = Math.random();
    if(enemyLevel > 10 && enemyLevel < 20){
      if(rndNumber <= 0.7){
        itemRarity = rarities[0];
      }else{
        itemRarity = rarities[1];  
      }
    }
    else if(enemyLevel >= 20 && enemyLevel < 50){
      if(rndNumber <= 0.4){
        itemRarity = rarities[0];
      }else if(rndNumber > 0.4 && rndNumber < 0.8){
        itemRarity = rarities[1];  
      }else if(rndNumber >= 0.8 && rndNumber < 0.95){
        itemRarity = rarities[2];
      }else{
        itemRarity = rarities[3];
      }
    }
    else if(enemyLevel >= 50 && enemyLevel < 100){
      if(rndNumber <= 0.4){
        itemRarity = rarities[1];
      }else if(rndNumber > 0.4 && rndNumber < 0.8){
        itemRarity = rarities[2];  
      }else if(rndNumber >= 0.8 && rndNumber < 0.95){
        itemRarity = rarities[3];
      }else{
        itemRarity = rarities[4];
      }
    }
    else if(enemyLevel >= 100){
      if(rndNumber <= 0.2){
        itemRarity = rarities[1];
      }else if(rndNumber > 0.42 && rndNumber < 0.6){
        itemRarity = rarities[2];  
      }else if(rndNumber >= 0.6 && rndNumber < 0.85){
        itemRarity = rarities[3];
      }else if(rndNumber >= 0.85 && rndNumber < 0.97){
        itemRarity = rarities[4];
      }else{
        itemRarity = rarities[4];
      }
    }else{
      itemRarity = rarities[0];
    }

    generateItem.rarity = itemRarity;

    slot = slots[rndSlot];


    //item power
    if(generateItem.rarity == "Common"){
      generatedItem.power = rndPower*5 + 20;
      generatedItem.name = itemRarity + " " + slot;
    }
    else if(generateItem.rarity == "Uncommon"){
      generatedItem.power = rndPower*10 + 50;
      generatedItem.name = itemRarity + " " + slot;
    }
    else if(generateItem.rarity == "Rare"){
      generatedItem.power = rndPower*20 + 100;
      generatedItem.name = itemRarity + " " + slot + " of " + affixnames[rndAffix];
    } 
    else if(generateItem.rarity == "Epic"){
      generatedItem.power = rndPower*30 + 200;
      generatedItem.name = itemRarity + " " + slot + " of " + affixnames[rndAffix];
    } 
    else if(generateItem.rarity == "Legendary"){
      generatedItem.power = rndPower*50 + 500;
      generatedItem.name = itemRarity + " " + slot + " of " + affixnames[rndAffix];
    } 
    else if(generateItem.rarity == "Mythic"){
      generatedItem.power = rndPower*200 + 500;
      generatedItem.name = itemRarity + " " + slot + " of " + affixnames[rndAffix];
    }  
  

    for (var i = 1; i < 20; i++) {
      invcount = "i" + i;
      itemidcount = "#" + invcount;
      itemid = itemidcount + "S";
      if (jQuery.isEmptyObject(inventory[invcount])) {
        //allclasses = "item sprite " + generateditem.icon + " " + generateditem.rarity;
        //$(itemidcount).append("<img id='" + itemid + "'class='" + allclasses + "' '></img>");
        i = 50;
        inventory[invcount] = generatedItem;

      }
    }

  }
/*
  function printInventory(inventory){
    for(i = 0; i < inventory.length; i++ ){
      document.getElementById("gameLog").innerHTML += "Inventory slot number " + i + " contains "+inventory[i].name+"<br><br>";
    }
  }
*/
