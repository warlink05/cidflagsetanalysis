function summarizeFlagset(str){
    const flagArray = str.split(" ");
    let i = 0;
    let blockText = '';
    //console.log("WIP Sections:");
    while(i < flagArray.length){
        let section = flagArray[i];
        //console.log(section);
        switch(section.charAt(0)){
            case 'O':
                //Section: Done!
                blockText = blockText.concat("<h2>Objectives</h2> ",objectiveParse(section.substring(1)));//,parseKey(section.substring(1)));
                console.log("Objectives");
                break;
            case 'K':
                //Section: Done!
                blockText = blockText.concat("<h2>Key Items</h2> ",parseKey(section.substring(1)));
                break;
            case 'P':
                //Section: Done!
                blockText = blockText.concat("<h2>Pass</h2>",parsePass(section.substring(1)));
                break;
            case 'C':
                //Section: Done!
                blockText = blockText.concat("<h2>Characters</h2>",characterParse(section.substring(1)));
                break;
            case 'T':
                //Section: Done!
                blockText = blockText.concat("<h2>Treasure</h2>",treasureParse(section.substring(1)));
                break;
            case 'S':
                //Section: Done!
                blockText = blockText.concat("<h2>Shops</h2>",shopParse(section.substring(1)));
                break;
            case 'B':
                //Section: Done!
                blockText = blockText.concat("<h2>Bosses</h2>",bossParse(section.substring(1)));
                break;
            case 'E':
                //Section: Done!
                blockText = blockText.concat("<h2>Encounters</h2>",encountersParse(section.substring(1)));
                break;
            case 'G':
                //Section: Done!
                blockText = blockText.concat("<h2>Glitches</h2>",glitchParse(section.substring(1)));
                break;
        }
        i++;
    }

    //Others section
    const otherArray = str.split("-");
    
    let otherFlag = false;
    let kitCounter = 0;
    let kitStr = '';
    let vanillaStr = '';
    let noStr = '';
    let spoonStr = '';
    let expStr = '';
    let smithStr = '';
    let foolStr = '';
    let spoilStr = '';
    i = 1;
    while(i < flagArray.length){
        let section = otherArray[i];
        i++;
        if(section === undefined)
            continue;
        if(section.includes("kit")){
            otherFlag = true;
            kitCounter++;
            kitStr = kitStr.concat("<li>",kitParse(section),"</li>")
            //console.log(kitParse(section));
            continue;
        }
        if(section.includes("noadamants")){
            otherFlag = true;
            noStr = noStr.concat("<li><b>No Adamant Armors</b>: Trading the Pink Tail in the Adamant Grotto instead grants a strong item.</li>");
            continue;
        }
        if(section.includes("nocursed")){
            otherFlag = true;
            noStr = noStr.concat("<li><b>No Cursed Rings</b></li>");
            continue;
        }
        if(section.includes("spoon")){
            otherFlag = true;
            spoonStr = "<li><b>Edward can equip the Spoon</b></li>";
            continue;
        }
        if(section.includes("smith")){
            otherFlag = true;
            if(section.includes("alt")){
                smithStr = "<li><b>Kokol crafts a tandom tier 7/8 item</b></li>";
            }
            if(section.includes("super")){
                smithStr = "<li><b>Kokol crafts a weapon from FF4 Advance</b></li>";
            }
            continue;
        }

        if(section.includes("exp")){
            otherFlag = true;
            expStr = expParse(section);
            continue;
        }


        if(section.includes("vanilla")){
            otherFlag = true;
            vanillaStr = vanillaParse(section);
            continue;
        }


        if(section.includes("vintage")){
            otherFlag = true;
            foolStr = foolStr.concat("<li><b>Vintage Battlefield</b>: Enables a special cosmetic hack.</li>");
            continue;
        }
        if(section.includes("pushbtojump")){
            otherFlag = true;
            foolStr = foolStr.concat("<li><b>Press B to Jump</b>: Enables a gameplay hack. Does not affect randomized placement of progression items</li>");
            continue;
        }
        if(section.includes("wacky")){
            otherFlag = true;
            foolStr = foolStr.concat("<li><b>Wacky Challenge</b></li><ul><li>Guidingway will introduce but not explain the challenge.</li><li>");
            if(section.includes(":random")){
                foolStr = foolStr.concat("A random challenge will be selected");
            }else{
                foolStr = foolStr.concat("The selected wacky challenge: <b>",wackyParse(section),"</b>");
            }
            foolStr = foolStr.concat("</li></ul>");
            continue;
        }

        if(section.includes("spoil")){
            console.log("Spoilers");
            const spoilerArray1 = section.split(":");
            //console.log(spoilerArray1[1]);
            const spoilerArray = spoilerArray1[1].split(",");
            let j = 0;
            let partial = false;
            while(j < spoilerArray.length){
                let spoiler = spoilerArray[j];
                j++;
                if(spoiler === undefined)
                    continue;

                if(spoiler.includes("all")){
                    spoilStr = spoilStr.concat("<li><b>Full spoiler log</b></li>");
                    continue;
                } else if(!partial){
                    spoilStr = spoilStr.concat("<li><b>Partial spoiler log</b></li>");
                    partial = true;    
                }

                if(spoiler.includes("keyitems")){
                    spoilStr = spoilStr.concat("<li><b>Spoil key items</b></li>");
                    continue;
                }
                if(spoiler.includes("rewards")){
                    spoilStr = spoilStr.concat("<li><b>Spoil quest rewards</b></li>");
                    continue;
                }
                if(spoiler.includes("char")){
                    spoilStr = spoilStr.concat("<li><b>Spoil characters</b></li>");
                    continue;
                }
                if(spoiler.includes("treasure")){
                    spoilStr = spoilStr.concat("<li><b>Spoil all treasure chests</b></li>");
                    continue;
                }
                if(spoiler.includes("miabs")){
                    spoilStr = spoilStr.concat("<li><b>Spoil monster-in-a-box chests</b></li>");
                    continue;
                }
                if(spoiler.includes("shops")){
                    spoilStr = spoilStr.concat("<li><b>Spoil shops</b></li>");
                    continue;
                }
                if(spoiler.includes("bosses")){
                    spoilStr = spoilStr.concat("<li><b>Spoil bosses</b></li>");
                    continue;
                }
                if(spoiler.includes("misc")){
                    spoilStr = spoilStr.concat("<li><b>Include misc spoilers</b></li>");
                    continue;
                }
                if(spoiler.includes("sparse")){
                    spoilStr = spoilStr.concat("<li><b>Replace random lines in log with \"????\"</b> - Keep ",spoiler.substring(6),"% of spoilers visible</li>");
                    continue;
                }
            }
            continue;
        }



        //console.log(section);
    }
    let otherStr = '';
    if(otherFlag == true){
        otherStr = otherStr.concat("<h2>Other</h2><ul>");
        if(kitCounter > 0)
            otherStr = otherStr.concat("<li><b>Starter Kits</b> - Allow you to begin the game with additional items in your inventory.<ul>",kitStr,"</ul></li>");
        if(noStr.length > 0)
            otherStr = otherStr.concat(noStr);
        if(spoonStr.length > 0)
            otherStr =  otherStr.concat(spoonStr);
        if(smithStr.length > 0)
            otherStr = otherStr.concat(smithStr);
        if(expStr.length > 0)
            otherStr = otherStr.concat(expStr);
        if(vanillaStr.length > 0)
            otherStr = otherStr.concat(vanillaStr);
        if(foolStr.length > 0)
            otherStr = otherStr.concat(foolStr);

        otherStr = otherStr.concat("</ul>");
    }
    blockText = blockText.concat(otherStr);
    
    if(spoilStr.length > 0){
        blockText = blockText.concat("<h2>Spoiler</h2><ul>",spoilStr,"</ul>");

    }
    

//    console.log(flagArray);
    return blockText;
}

function modeParse(str){
    const modeArray1 = str.split(":");
    const modeArray = modeArray1[1].split(",");
    let modeString = "";
    let j = 0;
    while(j < modeArray.length){
        let mode = modeArray[j];
        j++;
        if(mode.includes("classicforge")){
            modeString = modeString.concat("<li><b>Classic Forge-the-Crystal</b>: Bring the Adamant and Legend Sword to Kokkol to complete this objective. In this mode, the Excalibur will not be given by Kokkol; instead the Excalibut replaces the Crystal in the pool of Key items. This mode forces the <b><em>Owin:crystal</em></b> flag to be on.</li>");      
            continue;
        }
        if(mode.includes("classicgiant")){
            modeString = modeString.concat("<li><b>Classic Giant%</b>: Defeat the Giant of Bab-il to complete this objective. In this mode, there is no character reward for finishing the Giant.</li>");      
            continue;
        }
        if(mode.includes("fiends")){
            modeString = modeString.concat("<li><b>Fiends%</b>: Defeat Milon, Milon Z., Kainazzo, Valvalis, Rubicant, and Elements to complete this mode.</li>");      
            continue;
        }
        if(mode.includes("fiends")){
            modeString = modeString.concat("<li><b>Fiends%</b>: Defeat Milon, Milon Z., Kainazzo, Valvalis, Rubicant, and Elements to complete this mode.</li>");      
            continue;
        }
        if(mode.includes("dkmatter")){
            modeString = modeString.concat("<li><b>Dark Matter Hunt</b>: 45 Dark Matters are randomly placed in chests (MIABs excluded); bring 30 of them to Kory in Agart to complete this objective.</li>");      
            continue;
        }

    }    
    return modeString;
}

function randomObjParse(str){
    const randomSplit = str.split(":");
    let randomList = randomSplit[1];
    const randomArray = randomList.split(",");
    let randomStr = "";
    let i = 0;
    let retrictObj = false;
    while(i < randomArray.length){
        let randomItem = randomArray[i];
        if(i == 1){
            randomStr = randomStr.concat("<li><b>Restrict allowed random objective types</b></il><ul>");
        }
        i++;
        if(!isNaN(parseInt(randomItem))){
            randomStr = randomStr.concat("<li><b>Add ",randomItem," random objectives</b></il>");
            continue;
        }

        if(randomItem.includes("tough_quest")){
            randomStr = randomStr.concat("<li><b>Tough quest allowed</b>: Refers only to more difficult, later-game quest objectives.</il>");
            retrictObj = true;
            continue;
        }
        
        if(randomItem.includes("quest") && !randomItem.includes("tough")){
            randomStr = randomStr.concat("<li><b>Any quest allowed</b></il>");
            retrictObj = true;
            continue;
        }

        if(randomItem.includes("boss")){
            randomStr = randomStr.concat("<li><b>Boss hunts allowed</b></il>");
            retrictObj = true;
            continue;
        }
        if(randomItem.includes("char")){
            randomStr = randomStr.concat("<li><b>Character hunts allowed</b></il>");
            retrictObj = true;
            continue;
        }

    }
    if(retrictObj){
        randomStr = randomStr.concat("</ul>");
    }
    return randomStr;
}

function customObjectiveList(str){
    let customStr = "";
    const objectiveArray = str.split('/');

    let i = 0;
    while(i < objectiveArray.length){
        let objective = objectiveArray[i];
        i++;
        const sectionArray = objective.split(":");
        if(!isNaN(parseInt(sectionArray[0]))){
            customStr = customStr.concat("<li><b>",listObjective(sectionArray[1]),"</b></il>");
            continue;
        }

    }
    if(customStr.length == 0){
        return "";
    }
    let returnStr = "<li><b>Custom Obectives</b>: Duplicate objectives will be omitted, a character objective is met when requirements to gain the character have been fulfilled; do not to actually to add them to the party, starting characters do not count towards charfacter objectives, and setting the Pass quest objective with no other P flags will force <em><b>Pkey</b></em> to be enabled.<ul>";

    return returnStr.concat(customStr,"</ul>");

}

function objectiveParse(str){
    let objectiveString = "<ul>";
    const objectiveArray = str.split('/');

    let modeStr = "";
    let randomStr = "";
    let reqStr = "";
    let winStr = "";
    let customStr = customObjectiveList(str);

    let i = 0;
    while(i < objectiveArray.length){
        let objective = objectiveArray[i];
        i++;
        if(objective.includes("none")){
            return "No objectives. Obtain the Crystal and then defeat Zeromus to win the game.";      
        }

        if(objective.includes("mode:")){
            modeStr = modeStr.concat("<li><b>Objective Modes</b><ul>",modeParse(objective),"</ul></li>");
            continue;
        }

        if(objective.includes("random:")){
            randomStr = randomStr.concat("<li><b>Random Objectives</b><ul>",randomObjParse(objective),"</ul></li>");
            continue;
        }

        if(objective.includes("req:")){
            const req = objective.split(":");
            let number = req[1];
            if(number.includes("all")){
                reqStr = reqStr.concat("<li><b>Complete all objectives for reward.</b></li>");
            } else{
                reqStr = reqStr.concat("<li><b>Complete ",number," objectives for reward.</b></li>");
            }
            continue;
        }

        if(objective.includes("win:game")){
            winStr = winStr.concat("<li><b>Completing objectives wins the game</b>: Complete the required number of objectives to immediately win the game. Zeromus cannot be fought in this mode.</li>");      
            continue;
        }
        if(objective.includes("win:crystal")){
            winStr = winStr.concat("<li><b>Completing objectives awards the Crystal</b>: Complete the required number of objectives to get the Crystal, then defeat Zeromus to win the game.</li>");
            continue;      
        }



    }
    return objectiveString = objectiveString.concat(modeStr,customStr,randomStr,reqStr,winStr,"</ul>");
}

function characterPool(str){
    
    if(!str.includes("maybe") && !str.includes("distinct") && !(str.includes("no:") || str.includes("only:")) && str.includes("restrict") ){
        return '';
    }
    let charStr = "<ul>";

    if(str.includes("maybe")){
        charStr = charStr.concat("<li><b>Characters not guaranteed to appear</b>: Randomizer will not try to include every eligible character in the game at least once. Some eligible characters may not appear</li>");
    }
    if(str.includes("distinct")){ //9
        let subStr1 = str.substring(str.search("distinct:"));
        let subStr2 = subStr1.substring(0,subStr1.search("/"));
        let distinctStr =  subStr2.substring(subStr2.search(":")+1);
        charStr = charStr.concat("<li><b>",distinctStr," distinct characters</b></li>");
    }
    if(str.includes("only:")){
        let onlyStr = str.substring(str.search("only:"));
        let onlyStr2 = onlyStr.substring(0,onlyStr.search("/"));
        let onlyStr3 =  onlyStr2.substring(onlyStr2.search(":")+1);
        charStr = charStr.concat("<li><b>Only include the following characters</b>: ",charArrToStrAnd(onlyStr3),"</li>");
    }
    if(str.includes("no:")){
        let noStr = str.substring(str.search("no:"));
        let noStr2 = noStr.substring(0,noStr.search("/"));
        let noStr3 =  noStr2.substring(noStr2.search(":")+1);
        charStr = charStr.concat("<li><b>Exclude the following characters</b>: ",charArrToStrAnd(noStr3),"</li>");
    }
     
    if(str.includes("restrict")){
        let restrictStr = str.substring(str.search("restrict:"));
        let restrictStr2 = restrictStr.substring(0,restrictStr.search("/"));
        let restrictStr3 =  restrictStr2.substring(restrictStr2.search(":")+1);
        charStr = charStr.concat("<li><b>Restricted characters</b> - The following characters will be place in later-game positions: ",charArrToStrAnd(restrictStr3),"</li>");
    }
    return charStr.concat("</ul>");
}

function charArrToStrAnd(str){
    const charArray = str.split(',');
    let charStr = '';
    let i =0;
    while(i<charArray.length){
        let character = charArray[i];
        i++;
        if(i == 1){
            charStr = listCharacter(character); 
        } else if (i == charArray.length){
            charStr = charStr.concat(", and ",listCharacter(character));
        } else {
            charStr = charStr.concat(", ",listCharacter(character));
        }
    }
    return charStr;
}

function charArrToStrOr(str){
    const charArray = str.split(',');
    let charStr = '';
    let i =0;
    while(i<charArray.length){
        let character = charArray[i];
        i++;
        if(i == 1){
            charStr = listCharacter(character); 
        } else if (i == charArray.length){
            charStr = charStr.concat(", or ",listCharacter(character));
        } else {
            charStr = charStr.concat(", ",listCharacter(character));
        }
    }
    return charStr;
}

function listObjective(str){
    switch(str){
        case "char_cecil":
            return "Get Cecil";
        case "char_kain":
            return "Get Kain";
        case "char_rydia":
            return "Get Rydia";
        case "char_tellah":
            return "Get Tellah";
        case "char_edward":
            return "Get Edward";
        case "char_rosa":
            return "Get Rosa";
        case "char_yang":
            return "Get Yang";
        case "char_palom":
            return "Get Palom";
        case "char_porom":
            return "Get Porom";
        case "char_cid":
            return "Get Cid";
        case "char_edge":
            return "Get Edge";
        case "char_fusoya":
            return "Get FuSoYa";
        case "boss_dmist":
            return "Defeat D.Mist";
        case "boss_officer":
            return "Defeat Officer";
        case "boss_octomamm":
            return "Defeat Octomamm";
        case "boss_antlion":
            return "Defeat Antlion";
        case "boss_waterhag":
            return "Defeat Waterhag (boss version)";
        case "boss_mombomb":
            return "Defeat MomBomb";
        case "boss_fabulgauntlet":
            return "Defeat the Fabul Gauntlet";
        case "boss_milon":
            return "Defeat Milon";
        case "boss_milonz":
            return "Defeat Milon Z.";
        case "boss_mirrorcecil":
           return "Defeat D.Knight";
        case "boss_guard":
            return "Defeat the Guards (boss)";
        case "boss_karate":
            return "Defeat Karate";
        case "boss_baigan":
          return "Defeat Baigan";
        case "boss_kainazzo":
            return "Defeat Kainazzo";
        case "boss_darkelf":
            return "Defeat the Dark Elf (dragon form)";
        case "boss_magus":
           return "Defeat the Magus Sisters";
        case "boss_valvalis":
            return "Defeat Valvalis";
        case "boss_calbrena":
            return "Defeat Calbrena";
        case "boss_golbez":
           return "Defeat Golbez";
        case "boss_lugae":
            return "Defeat Dr. Lugae";
        case "boss_darkimp":
            return "Defeat the Dark Imps (boss)";
        case "boss_kingqueen":
           return "Defeat K.Eblan and Q.Eblan";
        case "boss_rubicant":
            return "Defeat Rubicant";
        case "boss_evilwall":
            return "Defeat EvilWall";
        case "boss_asura":
            return "Defeat Asura";
        case "boss_leviatan":
            return "Defeat Leviatan";
        case "boss_odin":
            return "Defeat Odin";
        case "boss_bahamut":
            return "Defeat Bahamut";
        case "boss_elements":
            return "Defeat Elements";
        case "boss_cpu":
            return "Defeat CPU";
        case "boss_paledim":
            return "Defeat Pale Dim";
        case "boss_wyvern":
            return "Defeat Wyvern";
        case "boss_plague":
            return "Defeat Plague";
        case "boss_dlunar":
           return "Defeat the D.Lunars";
        case "boss_ogopogo":
            return "Defeat Ogopogo";
        case "quest_mistcave":
            return "Defeat the boss of the Mist Cave";
        case "quest_waterfall":
            return "Defeat the boss of the Waterfall";
        case "quest_antlionnest":
            return "Complete the Antlion Nest";
        case "quest_hobs":
            return "Rescue the hostage on Mt. Hobs";
        case "quest_fabul":
            return "Defend Fabul";
        case "quest_ordeals":
           return "Complete Mt. Ordeals";
        case "quest_baroninn":
            return "Defeat the bosses of Baron Inn";
        case "quest_baroncastle":
           return "Liberate Baron Castle";
        case "quest_magnes":
            return "Complete Cave Magnes";
        case "quest_zot":
            return "Complete the Tower of Zot";
        case "quest_dwarfcastle":
            return "Defeat the bosses of Dwarf Castle";
        case "quest_lowerbabil":
            return "Defeat the boss of Lower Bab-il";
        case "quest_falcon":
            return "Launch the Falcon";
        case "quest_sealedcave":
            return "Complete the Sealed Cave";
        case "quest_monsterqueen":
            return "Defeat the queen at the Town of Monsters";
        case "quest_monsterking":
            return "Defeat the king at the Town of Monsters";
        case "quest_baronbasement":
            return "Defeat the Baron Castle basement throne";
        case "quest_giant":
            return "Complete the Giant of Bab-il";
        case "quest_cavebahamut":
            return "Complete Cave Bahamut";
        case "quest_murasamealtar":
            return "Conquer the vanilla Murasame altar";
        case "quest_crystalaltar":
            return "Conquer the vanilla Crystal Sword altar";
        case "quest_whitealtar":
            return "Conquer the vanilla White Spear altar";
        case "quest_ribbonaltar":
            return "Conquer the vanilla Ribbon room";
        case "quest_masamunealtar":
            return "Conquer the vanilla Masamune altar";
        case "quest_burnmist":
            return "Burn village Mist with the Package";
        case "quest_curefever":
            return "Cure the fever with the SandRuby";
        case "quest_unlocksewer":
            return "Unlock the sewer with the Baron Key";
        case "quest_music":
            return "Break the Dark Elf's spell with the TwinHarp";
        case "quest_toroiatreasury":
            return "Open the Toroia treasury with the Earth Crystal";
        case "quest_magma":
            return "Drop the Magma Key into the Agart well";
        case "quest_supercannon":
            return "Destroy the Super Cannon";
        case "quest_unlocksealedcave":
            return "Unlock the Sealed Cave";
        case "quest_bigwhale":
            return "Raise the Big Whale";
        case "quest_traderat":
            return "Trade away the Rat Tail";
        case "quest_forge":
            return "Have Kokkol forge Legend Sword with Adamant";
        case "quest_wakeyang":
            return "Wake Yang with the Pan";
        case "quest_tradepan":
            return "Return the Pan to Yang's wife";
        case "quest_tradepink":
            return "Trade away the Pink Tail";
        case "quest_pass":
            return "Unlock the Pass door in Toroia";
    }
    return "";
}


function listCharacter(str){
    if(str.includes("cecil")){ 
        return "Cecil";
    }
    if(str.includes("kain")){ 
        return "Kain";
    }
    if(str.includes("rydia")){ 
        return "Rydia";
    }
    if(str.includes("tellah")){ 
        return "Tellah";
    }
    if(str.includes("edward")){ 
        return "Edward";
    }
    if(str.includes("rosa")){ 
        return "Rosa";
    }
    if(str.includes("yang")){ 
        return "Yang";
    }
    if(str.includes("palom")){ 
        return "Palom";
    }
    if(str.includes("porom")){ 
        return "Porom";
    }
    if(str.includes("cid")){ 
        return "Cid";
    }
    if(str.includes("edge")){ 
        return "Edge";
    }
    if(str.includes("fusoya")){ 
        return "Fusoya";
    }
    if(str.includes("any")){ 
        return "any of the 12 characters";
    }
    return '';
}

function characterParse(str){
    let characterStr = "<ul>";
    let charPool = characterPool(str);
    const characterArray = str.split('/');
    let i = 0;
    while(i<characterArray.length){
        let character = characterArray[i];
        i++;

        if(character.includes("vanilla")){
            characterStr = characterStr.concat("<li><b>No character randomization</b></li>");
            continue;
        }

        if(character.includes("standard")){
            characterStr = characterStr.concat("<li><b>Randomize characters</b>: Characters join your party in the same locations as the original game, but the character you meet there is randomized. The randomizer will try to prevent more powerful characters (Fusoya and Edge, by default) or characters indicated as restricted from appearing in early-game positions.",charPool,"</li>");
            continue;
        }
        if(character.includes("relaxed")){
            characterStr = characterStr.concat("<li><b>Randomize characters (Relaxed)</b>: Characters join your party in the same locations as the original game, but the character you meet there is randomized. Unlike the standard randomization, characters are equally likely to appear in any position.",charPool,"</li>");
            continue;
        }



        if(character.includes("nofree")){
            characterStr = characterStr.concat("<li><b>No free characters</b>: Characters will not join your party in the Watrery Pass, Damcyan, Mysidia, or Mt. Ordeals.</li>");
            continue;
        }
        if(character.includes("noearned")){
            characterStr = characterStr.concat("<li><b>No earned characters</b>: Characters will not join your party in Kaipo, Mt. Hobs, Baronm, Zot, the Dwarf Castle, Cave Eblan, the Lunar Palace, or the Giant of Bab-il.</li>");
            continue;
        }

        if(character.includes("start:not_")){
            let startStr =  character.substring(character.search(":")+1);
            characterStr = characterStr.concat("<li><b>Modify starting character pool</b> - The starting character will be selected as normal according to the other flag settings, modified by removing the following options: ",charArrToStrAnd(startStr),"</li>");
            continue;    
        }

        if(character.includes("start:")){
            let startStr =  character.substring(character.search(":")+1);
            characterStr = characterStr.concat("<li><b>Define starting character pool</b> - The starting character will be choosen among the following options, regardless of other flag settings: ",charArrToStrOr(startStr),"</li>");
            continue;    
        }

        if(character.includes("j:spells")){
            characterStr = characterStr.concat("<li><b>Characters learn J-spells</b>: White mages will learn Armor, Shell, and Dispel. All mages lear spells at the levels they would in FF4j.</li>");
            continue;
        }
        if(character.includes("j:abilities")){
            characterStr = characterStr.concat("<li><b>Characters have J-commands</b>: Characters retain the battle commands from FF4j that were removed in FF4us.</li>");
            continue;
        }
        if(character.includes("nekkie")){
            characterStr = characterStr.concat("<li><b>Characters start with limited gear</b>: Characters start with a random low-level weapon and no armor. (Duplicate characters will have the same starting gear.)</li>");
            continue;
        }
        if(character.includes("nodupes")){
            characterStr = characterStr.concat("<li><b>Duplibate characters not allowed</b>: If a duplicate character tries to join your party, nothing happens</li>");
            continue;
        }
        if(character.includes("bye")){
            characterStr = characterStr.concat("<li><b>Dismissed characters are irretrievable</b>: Dismissed characters cannot be retrieved</li>");
            continue;
        }

        if(character.includes("party:")){
            characterStr = characterStr.concat("<li><b>Maximum party size ",character.charAt(6),"</b></li>");
            continue;
        }

        if(character.includes("permajoin")){
            characterStr = characterStr.concat("<li><b>Characters can't be dismissed</b>: You have the choice of whether to accept each new party member, but once your party is full, you cannot recruit anyone else.</li>");
            continue;
        }

        if(character.includes("permadeath")){
            characterStr = characterStr.concat("<li><b>Permadeath</b>: Party members that are \"swoon\" at the end of any battle are permanently removed from the game. Does not apply to cutscene/story battles you are allowed to lose.</li>");
            continue;
        }
        if(character.includes("permadeader")){
            characterStr = characterStr.concat("<li><b>Permadeader</b>: Party members that are swoon or stone at the end of any battle are permanently removed from the game. This includes the cutscene/story battles that you are normally allowed to lose; now you will game over if your party wipes during these battles.</li>");
            continue;
        }


        if(character.includes("hero")){
            characterStr = characterStr.concat("<li><b>Hero Challenge</b><ul><li>The starting character is your hero.</li><li>The hero is the only instance of that character available (unless other flags force it).</li><li>The hero cannot be dismissed.</li><li>The hero fights the Mt. Ordeals mirror room boss alone.</li><li>Kokkol will craft an FF4 Advance weapon usable by the hero.</li><li>The hero gains EXP even if incapacitated.</li><li>The hero is your agility anchor.</li><li>The hero is exempt from permadeath.</li></ul></li>");
            continue;
        }
    }
    return characterStr.concat("</ul>");
}

function bossParse(str){
    let bossStr = "<ul>";
    const bossArray = str.split('/');
    let bossUnsafe = str.includes("unsafe");
    let i = 0;
    while(i < bossArray.length){
        let boss = bossArray[i];
        i++
        if(boss.includes("vanilla")){
            bossStr = bossStr.concat("<li><b>No boss randomization</b></li>");
            continue;
        }
        if(boss.includes("standard")){
            bossStr = bossStr.concat("<li><b>Randomize bosses</b>: The positions of bosses are shuffled. Boss stats are roughly scaled to match the battle it's replaceing");
            if(bossUnsafe)
                bossStr = bossStr.concat("<ul><li><b>No safety checks</b>: Path to the underworld may require defeating the most difficult bosses.</li></ul>");
            bossStr = bossStr.concat("</li>");
            continue;
        }
        if(boss.includes("nofree")){
            bossStr = bossStr.concat("<li><b>No free bosses</b>: All boss battle enemies have the \"boss bit\" set. The alternate win conditions are removed from the D.Knight, Karate, K/Q Eblan, and WateHag fights.</li>");
            continue;
        }
        if(boss.includes("gauntlet")){
            bossStr = bossStr.concat("<li><b>Alt Gauntlet</b>: Replaces the Fabul Gauntlet boss with five unscaled normal enemy encounters from the nearby area.</li>");
            continue;
        }
        if(boss.includes("whyburn")){
            bossStr = bossStr.concat("<li><b>Disable Wyvern's opening MegaNuke</b></li>");
            continue;
        }
        if(boss.includes("whichburn")){
            bossStr = bossStr.concat("<li><b>Replace Wyvern's opening MegaNuke with random attack</b>: The replacement attack will be weaker than MegaNuke (unless <b><em>Bunsafe</em></b> is enabled, in which case it may not be) </li>");
            continue;
        }
    }
    return bossStr.concat("</ul>");
}

function keepParse(str){
    if(!str.includes("doors") && !str.includes("behemoths") && !str.includes("danger")){
        return '';

    }
    let keepStr = "<ul>";
    if(str.includes("doors")){
        keepStr = keepStr.concat("<li><b>Preserve TrapDoor fights</b></li>");

    }
    if(str.includes("behemoths")){
        keepStr = keepStr.concat("<li><b>Preserve forced Behemoth fights</b></li>");
    }
    if(str.includes("danger")){
        keepStr = keepStr.concat("<li><b>Keep dangerous encounters</b>: Back attacks and \"Surprised!\" encounters will occur.</li>");
    }
    return keepStr.concat("</ul>");
}

function encountersParse(str){
    let encounterString = "<ul>";
    const encounterArray = str.split('/');
    let keepStr = keepParse(str);
    let i = 0;
    while(i < encounterArray.length){
        let encounter = encounterArray[i];
        i++;
        if(encounter.includes("vanilla")){
            encounterString = encounterString.concat("<li><b>Original encounter rate</b></li>");
            continue;
        }
        if(encounter.includes("toggle")){
            encounterString = encounterString.concat("<li><b>Random encounters can be toggled</b>: Enabled/Disabled from the in-game Custom menu",keepStr,"</li>");
            continue;
        }
        if(encounter.includes("reduce")){
            encounterString = encounterString.concat("<li><b>Random encounters reduced by 50%</b>",keepStr,"</li>");
            continue;
        }
        if(encounter.includes("noencounters")){
            encounterString = encounterString.concat("<li><b>No random encounters</b>",keepStr,"</li>");
            continue;
        }

        if(encounter.includes("danger")){
            continue;
        }

        if(encounter.includes("sirens")){
            encounterString = encounterString.concat("<li><b>Remove Sirens from drop/sneak tables</b></li>");
            continue;
        }
        if(encounter.includes("jdrops")){
            encounterString = encounterString.concat("<li><b>US Version drop/sneak tables</b></li>");
            continue;
        }
        if(encounter.includes("cantrun")){
            encounterString = encounterString.concat("<li><b>Can't run from battles</b></li>");
            continue;
        }
        if(encounter.includes("noexp")){
            encounterString = encounterString.concat("<li><b>No EXP for random encounters</b>: Bosses and monster-in-a-box fights still award EXP</li>");
            continue;
        }
    }
    encounterString = encounterString.concat("</ul>");
    return encounterString;
}

function wackyParse(str){
    if(str.includes("afflicted")){ 
        return "Afflicted";
    }
    if(str.includes("battlescars")){ 
        return "Battle Scars";
    }
    if(str.includes("bodyguard")){ 
        return "The Bodyguard";
    }
    if(str.includes("enemyunknown")){ 
        return "Enemy Unknown";
    }
    if(str.includes("musical")){ 
        return "Final Fantasy IV: The Musical";}

    if(str.includes("fistfight")){ 
        return "Fist Fight";
    }
    if(str.includes("floorislava")){ 
        return "The Floor Is Made Of Lava";
    }
    if(str.includes("forwardisback")){ 
        return "Forward is the New Back";
    }
    if(str.includes("friendlyfire")){ 
        return "Friendly Fire";
    }
    if(str.includes("gottagofast")){ 
        return "Gotta Go Fast";
    }
    if(str.includes("batman")){ 
        return "Holy Onomatopoeias, Batman!";
    }
    if(str.includes("imaginarynumbers")){ 
        return "Imaginary Numbers";
    }
    if(str.includes("isthisrandomized")){ 
        return "Is This Even Randomized?";
    }
    if(str.includes("kleptomania")){ 
        return "Kleptomania";
    }
    if(str.includes("menarepigs")){ 
        return "Men Are Pigs";
    }
    if(str.includes("misspelled")){ 
        return "Misspelled";
    }
    if(str.includes("biggermagnet")){ 
        return "A Much Bigger Magnet";
    }
    if(str.includes("mysteryjuice")){ 
        return "Mystery Juice";
    }
    if(str.includes("neatfreak")){ 
        return "Neat Freak";
    }
    if(str.includes("nightmode")){ 
        return "Night Mode";
    }
    if(str.includes("omnidextrous")){ 
        return "Omnidextrous";
    }
    if(str.includes("payablegolbez")){ 
        return "Payable Golbez";
    }
    if(str.includes("saveusbigchocobo")){ 
        return "Save Us, Big Chocobo!";
    }
    if(str.includes("sixleggedrace")){ 
        return "Six-Legged Race";
    }
    if(str.includes("skywarriors")){ 
        return "The Sky Warriors";
    }
    if(str.includes("worthfighting")){ 
        return "Something Worth Fighting For";
    }
    if(str.includes("tellahmaneuver")){ 
        return "The Tellah Maneuver";
    }
    if(str.includes("3point")){ 
        return "The 3-Point System";
    }
    if(str.includes("timeismoney")){ 
        return "Time is Money";
    }
    if(str.includes("darts")){ 
        return "World Championship of Darts";
    }
    if(str.includes("unstackable")){ 
        return "Unstackable";
    }
    if(str.includes("zombies")){ 
        return "Zombies!!!";
    }
}

function shopUnsafe(str){
    if(str.includes("unsafe")){
        return "<ul><li>The following items are not guarantteed:<ul><li>Cure2 and Life potions in an ungated shop.</li><li>StarVeils and ThorRages in an ungated shop (unless excluded with Sno:j).</li><li>Cure3 potions \in a gated shop if there are no white mages available in the seed. </li></ul></li></ul>";
    }
    return "";
}

function shopParse(str){
    let shopString = "<ul>";
    const shopArray = str.split('/');
    let i = 0;
    while(i < shopArray.length){
        let shop = shopArray[i];
        i++;
        if(shop.localeCompare("vanilla") == 0){
            shopString = shopString.concat("<li>There is no shop randomization.</li>");
            continue;
        }
        if(shop.localeCompare("shuffle") == 0){
            shopString = shopString.concat("<li><b>Shuffle Shops</b>: The same items are available for sale in shops as in original FF4, but their locations are shuffled. This randomization is weighted so that overworld shop items tend to remain on the overworld, and similarly for underworld/moon shops.</li>");
            continue;
        }
        if(shop.localeCompare("standard") == 0){
            shopString = shopString.concat("<li><b>Standard Shops Randomization</b>: A basic randomization, allowing items of moderate strength to appear in shops, and weighted to place stronger items in later-game shops.",shopUnsafe(str),"</li>");
            continue;
        }
        if(shop.localeCompare("pro") == 0){
            shopString = shopString.concat("<li><b>Pro Shops Randomization</b>: A skill-testing randomization, limiting the strength of available items, and weighted to place stronger items in shops gated behind key items.",shopUnsafe(str),"</li>");
            continue;
        }
        if(shop.localeCompare("wild") == 0){
            shopString = shopString.concat("<li><b>Wild Shops Randomization</b>: An unrestricted randomization, allowing equal chance for items to appear in any shop, including the most powerful items.",shopUnsafe(str),"</li>");
            continue;
        }
        if(shop.localeCompare("cabins") == 0){
            shopString = shopString.concat("<li>Shops sell only cabins.</li>");
            continue;
        }
        if(shop.localeCompare("empty") == 0){
            shopString = shopString.concat("<li>Shops sell nothing.</li>");
            continue;
        }

        if(shop.localeCompare("unsafe") == 0){
            //shopString = shopString.concat("<li>The following items are not guarantteed:<ul><li>Cure2 and Life potions in an ungated shop.</li><li>StarVeils and ThorRages in an ungated shop (unless excluded with Sno:j).</li><li>Cure3 potions \in a gated shop if there are no white mages available in the seed. </li></ul></li>");
            continue;
        }
        if(shop.localeCompare("free") == 0){
            shopString = shopString.concat("<li><b>Shop items are free</b></li>");
            continue;
        }
        if(shop.includes("sell")){
            if(shop.includes("quarter")){
                shopString = shopString.concat("<li><b>Items sell for 1/4 price.</b></li>");
                continue;
            }
            if(shop.includes("0")){
                shopString = shopString.concat("<li><b>Items sell for 0 GP.</b></li>");
                continue;
            }
            continue;
        }
        if(shop.includes("no:")){
           shopString = shopString.concat("<li>The following will <b>not be sale in shops</b>:<ul>");
            if(shop.includes("j")){
                shopString = shopString.concat("<li><b>J-Items</b></li>");

            }
            if(shop.includes("apples")){
                shopString = shopString.concat("<li><b>Apples & Soma Drops</b></li>");
            }
            if(shop.includes("sirens")){
                shopString = shopString.concat("<li><b>Sirens</b></li>");
            }
            if(shop.includes("life")){
                shopString = shopString.concat("<li><b>Life potions</b></li>");
            }
            shopString = shopString.concat("</ul></li>");
            continue;
        }
    }
    shopString = shopString.concat("</ul>");
    return shopString;

}

function kitParse(str){
    if(str.includes("basic")){
        return "<b>Basic Kit</b>: An assortment of basic utility potions and items.";
    }
    
    if(str.includes("better")){
        return "<b>Better Kit</b>: An assortment of basic utility potions and items, and a few extra special-use combat items for sticky situations.";
    }
    
    if(str.includes("loaded")){
        return "<b>Loaded Kit</b>: A wide array of utility potions and items.";
    }
    
    if(str.includes("cata")){
        return "<b>Cata Kit</b>: 3 Life potions and a StarVeil.";
    }
    
    if(str.includes("freedom")){
        return "<b>Freedom Kit</b>: 10 Life potions, 3-5 StarVeils, 1-2 Sirens, and 10 ThorRages.";
    }
    
    if(str.includes("cid")){
        return "<b>Cid Kit</b>: 5 Cure2 potions, a Bacchus wine, a Unihorn, and a tier 4-5 axe.";
    }
    
    if(str.includes("yang")){
        return "<b>Yang Kit</b>: 2 CatClaws.";
    }
    
    if(str.includes("money")){
        return "<b>Money Kit</b>: 20000-80000 GP.";
    }
    
    if(str.includes("grabbag")){
        return "<b>Grab Bag Kit</b>: 8 random tier 1-5 items.";
    }
    
    if(str.includes("miab")){
        return "<b>Monster-in-a-box Kit</b>: 3 HrGlass2s, 3 MuteBells, and an Assassin Dagger.";
    }
    
    if(str.includes("archer")){
        return "<b>Archer Kit</b>: A tier 4-6 bow, and 20 of a tier 3-6 arrow.";
    }
    
    if(str.includes("fabul")){
        return "<b>Fabul Kit</b>: A Black Sword.";
    }
    
    if(str.includes("castlevania")){
        return "<b>Castlevania Kit</b>: A tier 3-5 whip and 3 Crosses.";
    }
    
    if(str.includes("summon")){
        return "<b>Summon Kit</b>: A random summon orb.";
    }
    
    if(str.includes("notdeme")){
        return "<b>\"Not Deme\" Kit</b>: 3 Cure3 potions, 2 Elixirs, and an Illusion.";
    }
    
    if(str.includes("meme")){
        return "<b>Meme Kit</b>: A Ninja Shirt and a Drain Spear.";
    }
    
    if(str.includes("defense")){
        return "<b>Defense Kit</b>: Dragoon Armor and a Diamond Helm.";
    }
    
    if(str.includes("mist")){
        return "<b>Mist Kit</b>: 10 Dancing Daggers, a Tiara, and a Change Rod.";
    }
    
    if(str.includes("mysidia")){
        return "<b>Mysidia Kit</b>: 70 each of Cure2, Life, Heal and Ether1 potions, a Gaea Hat, a Paladin Shield, and a Silver Ring.";
    }
    
    if(str.includes("baron")){
        return "<b>Baron Kit</b>: 10 Headbands, 10 Karate gis, a Thunder Claw, and a Thunder Rod.";
    }
    
    if(str.includes("dwarf")){
        return "<b>Dwarf Kit</b>: A Wizard Hat and Wizard Robe, 10 Rune Rings, a Dwarf Axe, an Elixir, and a Strength Ring.";
    }
    
    if(str.includes("eblan")){
        return "<b>Eblan Kit</b>: An Ice Brand and a Blizzard Spear.";
    }
    
    if(str.includes("99")){
        return "<b>99 Kit</b>: 99 of a random item.";
    }
    
    if(str.includes("libra")){
        return "<b>Libra Kit</b>: 50 Bestiaries. (A Bestiary has the same effect as Peep, but works against bosses (excluding Zeromus), which can be helpful for new players.)";
    }
    
    if(str.includes("green")){
        return "<b>Green Kit</b>: A grab bag of items selected individually by FE devs without any coordination whatsoever.";
    }
    
    if(str.includes("random")){
        return "<b>Random Kit</b>: One of the other kit options, selected at random.";
    }
}

function vanillaParse(str){
    let vanillaStr = "<li><b>Restore Vanilla Behaviors</b><ul>";
    // fusoya,agility,hobs,growup,fashion,traps,giant,z
    if(str.includes("fusoya")){
        vanillaStr = vanillaStr.concat("<li><b>FuSoYa</b>: Joins with 1900 HP and full spellset.</li>");    
    }
        
    if(str.includes("agility")){
        vanillaStr = vanillaStr.concat("<li><b>Agility Anchoring</b>: If present, the first Cecil in your party in slot order (middle, top, bottom, top-middle, bottom-middle) will be the agility anchor. Note that this overrides the <b><em>Chero</em><b> agility effect.</li>"); 
    }
        
    if(str.includes("hobs")){
        vanillaStr = vanillaStr.concat("<li><b>Hobs Spell</b>: Rydia will learn Fire1 at Mt. Hobs.</li>");
    }
            
    if(str.includes("growup")){
        vanillaStr = vanillaStr.concat("<li><b>Dwarf Castle Summons</b>: When she ages, Rydia will learn the vanilla summons: Mist, Indra, Jinn, Shiva, and Titan.</li>");    
    }
            
    if(str.includes("fashion")){
        vanillaStr = vanillaStr.concat("<li><b>Fashion</b>: Each character's battle palette will be the original colors.</li>");    
    }
            
    if(str.includes("miabs")){
        vanillaStr = vanillaStr.concat("<li><b>Monster-in-a-Box Locations</b>: Monster-in-a-Box chests remain in their original positions.</li>");    
    }
            
    if(str.includes("giant")){
        vanillaStr = vanillaStr.concat("<li><b>Giant</b>: Removes the added exit at the start of the Giant of Bab-il. The only way to leave is by defeating the boss at the CPU.</li>");    
    }
            
    if(str.includes("z")){
        vanillaStr = vanillaStr.concat("<li><b>Z Sprite</b>: Preserve Zeromus' original battle sprite post transformation.</li>");    
    }
    return vanillaStr.concat("</ul></li>");    
}

function expParse(str){
    let expStr = "<li><b>Restore Vanilla EXP Distribution</b><ul>";
    if(str.includes("split")){
        expStr = expStr.concat("<li><b>Split EXP distribution</b>: Earn EXP is divided among surviving party members.</li>");
    }
    if(str.includes("noboost")){
        expStr = expStr.concat("<li><b>No Low-Level EXP Boost</b>: In a full party, low-level party members (at least 5 levels below the median level) will not earn double EXP.</li>");
    }
    if(str.includes("nokeybonus")){
        expStr = expStr.concat("<li><b>No EXP bonus after 10 Key Items</b>: No Double EXP when 10 key items have been collected.</li>");
    }
    return expStr.concat("</ul></li>");
}

function subChest(str){
    if(!str.includes("sparse") && !str.includes("maxtier")){
        return "";

    }
    let chestString = '<ul>';
    const chestArray = str.split('/');
    let i = 0;
    while(i < chestArray.length){
        let chest = chestArray[i];
        i++;
        if(chest.includes("sparse")){
            chestString = chestString.concat("<li><b>Only ",chest.substring(7),"% of the chests are filled.</b></li>");
            continue;
        }
        if(chest.includes("maxtier")){
            chestString = chestString.concat("<li><b>Chests comntain tier ",chest.substring(8)," items at best</b></li>");
            continue;
        }
    }
    return chestString.concat("</ul>");
}

function treasureParse(str){
    let treasureString = '<ul>';
    const treasureArray = str.split('/');
    let i = 0;
    while(i < treasureArray.length){
        let treasure = treasureArray[i];
        /*

        if(i > 0){
            treasureString = treasureString.concat(" ");
        }
        */
        i++;
        if(treasure.localeCompare("vanilla") == 0){
            treasureString = treasureString.concat("<li><b>There is no chest randomization.</b>",subChest(str),"</li>");
            continue;
        } 
        if(treasure.localeCompare("shuffle") == 0){
            treasureString = treasureString.concat("<li><b>Shuffle Chest</b>: Treasure contents are the same as in original FF4, but their positions are shuffled. This randomization is weighted so that overworld treasures tend to remain in the overworld, and similarly for underworld/moon treasures.",subChest(str),"</li>");
            continue;
        }
        if(treasure.localeCompare("standard") == 0){
            treasureString = treasureString.concat("<li><b>Standard Chest Randomization</b>: A basic randomization, allowing items of reasonable strength to appear. Items are equally likely to appear in any chest regardless of location.",subChest(str),"</li>");
            continue;
        } 
        if(treasure.localeCompare("pro") == 0){
            treasureString = treasureString.concat("<li><b>Pro Chest Randomization</b>: A skill-testing randomization, limiting the strength of available items, and weighted to favor stronger items in later-game and infrequently-visited areas.",subChest(str),"</li>");
            continue;
        } 
        if(treasure.localeCompare("wild") == 0){
            treasureString = treasureString.concat("<li><b>Wild Chest Randomization</b>: An unrestricted randomization, allowing equal chance for items to appear in any chest, including the most powerful items.",subChest(str),"</li>");
            continue;
        } 
        if(treasure.localeCompare("wildish") == 0){
            treasureString = treasureString.concat("<li><b>Wild-ish Chest Randomization</b>: Allows items of any strength to appear, including the most powerful items, but uses location-based weighting like the pro randomization.",subChest(str),"</li>");
            continue;
        } 
        if(treasure.localeCompare("empty") == 0){
            treasureString = treasureString.concat("<li><b>Chests are empty.</b></li>");
            continue;
        } 
        if(treasure.includes("no:j")){
            treasureString = treasureString.concat("<li><b>No J-Items in chests</b></li>");
            continue;
        }
        if(treasure.includes("junk")){
            treasureString = treasureString.concat("<li><b>Keep junk</b>: Poor-quality items are kept in chests.</li>");
            continue;
        }
        if(treasure.includes("money")){
            treasureString = treasureString.concat("<li><b>Everything is junk</b>: All chests contain an equivalent amount of GP of their assigned contents, based on sell price (monster-in-a-box chests excluded).</li>");
            continue;
        }
    }
    return treasureString.concat("</ul>");
}

function parseKey(str){
    let keyString = "<ul>";
    const keyArray = str.split('/');
    let i = 0;
    while(i < keyArray.length){
        let key = keyArray[i];
        i++;
        if(key.localeCompare("vanilla") == 0){
            keyString = keyString.concat("<li>No key item randomization.</li>");
            continue;
        } 
        if(key.localeCompare("nofree") == 0){
            keyString = keyString.concat("<li><b>No free key item in Toroia</b>: Edward in Toroia will not give you a key item. Instead, a key item may be earned from Rydia's mom in Mist, who will appear after you have found and defeated the Mist Dragon.</li>");
            continue;
        }
        if(key.localeCompare("summon") == 0){
            keyString = keyString.concat("<li><b>Mix with summon quest rewards</b>: Key items may be awarded by the Sylphs, the king and queen of the Feymarch, Odin's throne, and Cave Bahamut.</li>");
            continue;
        }
        if(key.localeCompare("moon") == 0){
            keyString = keyString.concat("<li><b>Mix with moon boss rewards</b>: Key items may be awarded by the bosses of the Lunar Subterrane.</li>");
            continue;
        }
        if(key.localeCompare("main") == 0){
            keyString = keyString.concat("<li><b>Randomize key items</b>: The locations of key items are shuffled amongst each other.</li>");
            continue;
        }
        if(key.localeCompare("miab") == 0){
            keyString = keyString.concat("<li><b>Mix with monster-in-a-box chests</b>: This excludes monster-in-a-box in the Lunar Subterrane unless also using <b><em>Kmoon</em></b> or <b><em>Kunsafe</em></b>.</li>");
            continue;
        }
    }

    if(str.includes("force:magma")){
        keyString = keyString.concat("<li><b>Guarantee underworld access via Magma Key</b>: Guaranteed that there is a path to the underworld via the Magma Key, without needing to use the Hook route through Cave Eblan.</li>");
    }
    if(str.includes("force:hook")){
        keyString = keyString.concat("<li><b>Force underworld access via Hook route</b>: Guaranteed that the Hook route through Cave Eblan is the only way to access the underworld.</li>");
    }
    if(str.includes("unsafe")){
        keyString = keyString.concat("<li><b>No safety checks</b>: <ul><li>Your path to the underworld may gated by going to the moon.</li><li>If <b><em>Kmiab</em></b> is enabled, key items may appear in the Lunar Subterrane monster-in-a-box chests.</li></ul></li>");
    }
        
    
    return keyString.concat("</ul>");
}

function routeParse(str){
    if(!str.includes("force:hook") && !str.includes("force:magma")){
        return "";

    }
    if(str.localeCompare("force:magma") == 0){
        return "<li><b>Guarantee underworld access via Magma Key</b>: Guaranteed that there is a path to the underworld via the Magma Key, without needing to use the Hook route through Cave Eblan.</li>";
    }
    if(str.localeCompare("force:hook") == 0){
        return "<li><b>Force underworld access via Hook route</b>: Guaranteed that the Hook route through Cave Eblan is the only way to access the underworld.</li>";
    }
}

function parsePass(str){
    let passString = '';
    const passArray = str.split('/');
    let i = 0;
    while(i < passArray.length){
        let pass = passArray[i];

        if(pass.localeCompare("none") == 0){
            // there is no pass, abort and exit out of here.
            return "Pass will be absent from the seed.";
        }

        if(i == 0){
            passString = passString.concat("Pass is present in the seed. It can be found in the following:<br /><ul>");
        }


        // if(i > 0){
        //     passString = passString.concat(" ");
        // }

        if(pass.localeCompare("shop") == 0){
            passString = passString.concat("<li>One random item shop in the game will sell a Pass.</li>");
        } 
        else if(pass.localeCompare("key") == 0){
            passString = passString.concat("<li>A Pass is added into the pool of key items.</li>");
        }
        else if(pass.localeCompare("chest") == 0){
            passString = passString.concat("<li>Passes are placed in three random treasure chests. (They not placed on the moon & giant).</li>");
        }
        // shop key chest
        i++;
    }
    passString = passString.concat("</ul>");
    return passString;
}

function glitchParse(str){
    let glitchString = '';
    const glitchArray = str.split('/');
    let i = 0;
    while(i < glitchArray.length){
        let glitch = glitchArray[i];

        if(glitch.localeCompare("none") == 0){
            // All glitches are turned off, abort and exit out of here.
            return "No glitches are turned on.";
        }

        if(i == 0){
            glitchString = "The following glitches are turned on and act as they do in the original FF4:<ul>";
        }
        if(glitch.localeCompare("dupe") == 0){
            glitchString = glitchString.concat("<li><b>Item Duplication</b></li>");
        } 
        else if(glitch.localeCompare("mp") == 0){
            glitchString = glitchString.concat("<li><b>MP Underflow</b></li>");
        } 
        else if(glitch.localeCompare("warp") == 0){
            glitchString = glitchString.concat("<li><b>Dwarf Castle Warp</b></li>");
        }
        else if(glitch.localeCompare("life") == 0){
            glitchString = glitchString.concat("<li><b>Life Glitch</b></li>");
        }
        else if(glitch.localeCompare("sylph") == 0){
            glitchString = glitchString.concat("<li><b>Sylph MP Glitch</b><ul><il>Sylph will only deduct MP from the caster if they are in the middle party slot.</il></ul></li>");
        }
        else if(glitch.localeCompare("backrow") == 0){
            glitchString = glitchString.concat("<li><b>Backrow Glitch</b></li>");
        }
        else if(glitch.localeCompare("64") == 0){
            glitchString = glitchString.concat("<li><b>64-Floor Glitch</b></li>");
        }  
        // shop key chest
        i++;
    }
    glitchString = glitchString.concat("</ul>");
    return glitchString;
}
