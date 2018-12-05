    app = [];

   
    app.condition             = [];

    app.condition.generated_relatives = 1; // Generate connected tables for speeding up development.

    app.condition.source_type = [];
    app.condition.Reference_type  = [];
    app.condition.target_type = [];
  
    app.condition.source_type.name = [];
    app.condition.Reference_type.name  = [];
    app.condition.target_type.name = [];
  
    app.condition.source_type.tooltip = [];
    app.condition.Reference_type.tooltip  = [];
    app.condition.target_type.tooltip = [];
  
    app.condition.source_type.param1 = [];
    app.condition.source_type.param2 = [];
    app.condition.source_type.param3 = [];
    app.condition.source_type.param4 = [];
    app.condition.source_type.param5 = [];
    app.condition.source_type.param6 = [];
  
    app.condition.Reference_type.param1 = [];
    app.condition.Reference_type.param2 = [];
    app.condition.Reference_type.param3 = [];
    app.condition.Reference_type.param4 = [];
  
    app.condition.target_type.param1 = [];
    app.condition.target_type.param2 = [];
    app.condition.target_type.param3 = [];
  
    app.condition.source_type.paramTooltip1 = [];
    app.condition.source_type.paramTooltip2 = [];
    app.condition.source_type.paramTooltip3 = [];
    app.condition.source_type.paramTooltip4 = [];
    app.condition.source_type.paramTooltip5 = [];
    app.condition.source_type.paramTooltip6 = [];
  
    app.condition.source_type.flagger1 = [];
    app.condition.source_type.flagger2 = [];
    app.condition.source_type.flagger3 = [];
    app.condition.source_type.flagger4 = [];
    app.condition.source_type.flagger5 = [];
    app.condition.source_type.flagger6 = [];
  
    app.condition.Reference_type.paramTooltip1 = [];
    app.condition.Reference_type.paramTooltip2 = [];
    app.condition.Reference_type.paramTooltip3 = [];
    app.condition.Reference_type.paramTooltip4 = [];
  
    app.condition.target_type.paramTooltip1 = [];
    app.condition.target_type.paramTooltip2 = [];
    app.condition.target_type.paramTooltip3 = [];
  
    app.condition.comment = [];
    app.condition.comment.action = [];
    app.condition.comment.event  = [];
    app.condition.comment.target = [];
  

    /* ACTION NAMES */
    app.condition.source_type.name[0]   = "CONDITION_SOURCE_TYPE_NONE";
    app.condition.source_type.name[1]   = "CREATURE_LOOT_TEMPLATE";
    app.condition.source_type.name[2]   = "DISENCHANT_LOOT_TEMPLATE";
    app.condition.source_type.name[3]   = "FISHING_LOOT_TEMPLATE";
    app.condition.source_type.name[4]   = "GAMEOBJECT_LOOT_TEMPLATE";
    app.condition.source_type.name[5]   = "ITEM_LOOT_TEMPLATE";
    app.condition.source_type.name[6]   = "MAIL_LOOT_TEMPLATE";
    app.condition.source_type.name[7]   = "MILLING_LOOT_TEMPLATE";
    app.condition.source_type.name[8]   = "PICKPOCKETING_LOOT_TEMPLATE";
    app.condition.source_type.name[9]   = "PROSPECTING_LOOT_TEMPLATE";
    app.condition.source_type.name[10]  = "REFERENCE_LOOT_TEMPLATE";
    app.condition.source_type.name[11]  = "SKINNING_LOOT_TEMPLATE";
    app.condition.source_type.name[12]  = "SPELL_LOOT_TEMPLATE";
    app.condition.source_type.name[13]  = "SPELL_IMPLICIT_TARGET";
    app.condition.source_type.name[14]  = "GOSSIP_MENU";
    app.condition.source_type.name[15]  = "GOSSIP_MENU_OPTION";
    app.condition.source_type.name[16]  = "CREATURE_TEMPLATE_VEHICLE";
    app.condition.source_type.name[17]  = "SPELL";
    app.condition.source_type.name[18]  = "SPELL_CLICK_EVENT";
    app.condition.source_type.name[19]  = "QUEST_AVAILABLE";

    app.condition.source_type.name[21]  = "VEHICLE_SPELL";
    app.condition.source_type.name[22]  = "SMART_EVENT";
    app.condition.source_type.name[23]  = "NPC_VENDOR";
    app.condition.source_type.name[24]  = "SPELL_PROC";
    app.condition.source_type.name[25]  = "TERRAIN_SWAP";
    app.condition.source_type.name[26]  = "PHASE";
   
  
    /* EVENT NAMES */
    app.condition.Reference_type.name[0]  = "CONDITION_NONE";
    app.condition.Reference_type.name[1]  = "CONDITION_AURA";
    app.condition.Reference_type.name[2]  = "CONDITION_ITEM";
    app.condition.Reference_type.name[3]  = "CONDITION_ITEM_EQUIPPED";
    app.condition.Reference_type.name[4]  = "CONDITION_ZONEID";
    app.condition.Reference_type.name[5]  = "CONDITION_REPUTATION_RANK";
    app.condition.Reference_type.name[6]  = "CONDITION_TEAM";
    app.condition.Reference_type.name[7]  = "CONDITION_SKILL";
    app.condition.Reference_type.name[47] = "CONDITION_QUESTSTATE";
    app.condition.Reference_type.name[48] = "CONDITION_QUEST_OBJECTIVE_COMPLETE";
    // app.condition.Reference_type.name[8]  = "CONDITION_QUESTREWARDED";
    // app.condition.Reference_type.name[9]  = "CONDITION_QUESTTAKEN";
    app.condition.Reference_type.name[10] = "CONDITION_DRUNKENSTATE";
    app.condition.Reference_type.name[11] = "CONDITION_WORLD_STATE";
    app.condition.Reference_type.name[12] = "CONDITION_ACTIVE_EVENT";
    app.condition.Reference_type.name[13] = "CONDITION_INSTANCE_INFO";
    // app.condition.Reference_type.name[14] = "CONDITION_QUEST_NONE";
    app.condition.Reference_type.name[15] = "CONDITION_CLASS";
    app.condition.Reference_type.name[16] = "CONDITION_RACE";
    app.condition.Reference_type.name[17] = "CONDITION_ACHIEVEMENT";
    app.condition.Reference_type.name[18] = "CONDITION_TITLE";
    app.condition.Reference_type.name[19] = "CONDITION_SPAWNMASK";
    app.condition.Reference_type.name[20] = "CONDITION_GENDER";
    app.condition.Reference_type.name[21] = "CONDITION_UNIT_STATE";
    app.condition.Reference_type.name[22] = "CONDITION_MAPID";
    app.condition.Reference_type.name[23] = "CONDITION_AREAID";
    app.condition.Reference_type.name[24] = "CONDITION_CREATURE_TYPE";
    app.condition.Reference_type.name[25] = "CONDITION_SPELL";
    app.condition.Reference_type.name[26] = "CONDITION_PHASEMASK";
    app.condition.Reference_type.name[27] = "CONDITION_LEVEL";
    // app.condition.Reference_type.name[28] = "CONDITION_QUEST_COMPLETE";
    app.condition.Reference_type.name[29] = "CONDITION_NEAR_CREATURE";
    app.condition.Reference_type.name[30] = "CONDITION_NEAR_GAMEOBJECT";
    app.condition.Reference_type.name[31] = "CONDITION_OBJECT_ENTRY_GUID";
    app.condition.Reference_type.name[32] = "CONDITION_TYPE_MASK";
    app.condition.Reference_type.name[33] = "CONDITION_RELATION_TO";
    app.condition.Reference_type.name[34] = "CONDITION_REACTION_TO";
    app.condition.Reference_type.name[35] = "CONDITION_DISTANCE_TO";
    app.condition.Reference_type.name[36] = "CONDITION_ALIVE";
    app.condition.Reference_type.name[37] = "CONDITION_HP_VAL";
    app.condition.Reference_type.name[38] = "CONDITION_HP_PCT";
    app.condition.Reference_type.name[39] = "CONDITION_REALM_ACHIEVEMENT";
    app.condition.Reference_type.name[40] = "CONDITION_IN_WATER";
    app.condition.Reference_type.name[41] = "CONDITION_TERRAIN_SWAP";
    app.condition.Reference_type.name[42] = "CONDITION_STAND_STATE";
    app.condition.Reference_type.name[43] = "CONDITION_DAILY_QUEST_DONE";
    app.condition.Reference_type.name[44] = "CONDITION_CHARMED";
    app.condition.Reference_type.name[45] = "CONDITION_PET_TYPE";
    app.condition.Reference_type.name[46] = "CONDITION_TAXI";
    
  
    /* TARGET NAMES */
    app.condition.target_type.name[0]  = "NONE";
    app.condition.target_type.name[1]  = "SELF";
    app.condition.target_type.name[2]  = "VICTIM";
    app.condition.target_type.name[3]  = "HOSTILE_SECOND_AGGRO";
    app.condition.target_type.name[4]  = "HOSTILE_LAST_AGGRO";
    app.condition.target_type.name[5]  = "HOSTILE_RANDOM";
    app.condition.target_type.name[6]  = "HOSTILE_RANDOM_NOT_TOP";
    app.condition.target_type.name[7]  = "ACTION_INVOKER";
    app.condition.target_type.name[8]  = "POSITION";
    app.condition.target_type.name[9]  = "CREATURE_RANGE";
    app.condition.target_type.name[10] = "CREATURE_GUID";
    app.condition.target_type.name[11] = "CREATURE_DISTANCE";
    app.condition.target_type.name[12] = "STORED";
    app.condition.target_type.name[13] = "GAMEOBJECT_RANGE";
    app.condition.target_type.name[14] = "GAMEOBJECT_GUID";
    app.condition.target_type.name[15] = "GAMEOBJECT_DISTANCE";
    app.condition.target_type.name[16] = "INVOKER_PARTY";
    app.condition.target_type.name[17] = "PLAYER_RANGE";
    app.condition.target_type.name[18] = "PLAYER_DISTANCE";
    app.condition.target_type.name[19] = "CLOSEST_CREATURE";
    app.condition.target_type.name[20] = "CLOSEST_GAMEOBJECT";
    app.condition.target_type.name[21] = "CLOSEST_PLAYER";
    app.condition.target_type.name[22] = "ACTION_INVOKER_VEHICLE";
    app.condition.target_type.name[23] = "OWNER_OR_SUMMONER";
    app.condition.target_type.name[24] = "THREAT_LIST";
    app.condition.target_type.name[25] = "CLOSEST_ENEMY";
    app.condition.target_type.name[26] = "CLOSEST_FRIENDLY";
    app.condition.target_type.name[27] = "LOOT_RECIPIENTS";
    app.condition.target_type.name[28] = "SMART_TARGET_FARTHEST";
  
    /* ACTION TOOLTIPS */
    app.condition.source_type.tooltip[0]   = "No action type is specified. Do not use because it will cause errors on start-up.";
    app.condition.source_type.tooltip[1]   = "Creature says a creature_text line";
    app.condition.source_type.tooltip[2]   = "Set faction of target";
    app.condition.source_type.tooltip[3]   = "Morph the creature to an entry or modelid. If both parameters are 0, this will demorph the creature";
    app.condition.source_type.tooltip[4]   = "Play a sound id";
    app.condition.source_type.tooltip[5]   = "Play en emote";
    app.condition.source_type.tooltip[6]   = "Set a certain quest of our (player) target to 'fail', making them have to re-take it";
    app.condition.source_type.tooltip[7]   = "Add a quest to our (player) target's quest list";
    app.condition.source_type.tooltip[8]   = "Set our reactstate (0 = passive, 1 = defensive, 2 = aggressive)";
    app.condition.source_type.tooltip[9]   = "Activate a gameobject (targets our target_type, so it must be a gameobject)";
    app.condition.source_type.tooltip[10]  = "Play a random emote. Out of a total of 6 parameters it will pick one and ignore all fields with the value '0'.";
    app.condition.source_type.tooltip[11]  = "Cast a spell to our target type";
    app.condition.source_type.tooltip[12]  = "Summons a creature of a certain entry for a given time (or permanent, depending on the summon type which is set in the second parameter).";
    app.condition.source_type.tooltip[13]  = "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
    app.condition.source_type.tooltip[14]  = "Add or remove a certain percentage of threat from our current threat. Only one of the parameters (so either 1 or 2) may be used at the same time";
    app.condition.source_type.tooltip[15]  = "Complete a quest requirement (by entry) of our current (player) target.";
    app.condition.source_type.tooltip[16]  = "Unused action type";
    app.condition.source_type.tooltip[17]  = "Set emote state";
    app.condition.source_type.tooltip[17]  = "Set the emote state of the creature";
    app.condition.source_type.tooltip[18]  = "Set the unit flags of the target (using creature_template.unit_flags and creature_template.unit_flags2)";
    app.condition.source_type.tooltip[19]  = "Removes unit flags from the target (using creature_template.unit_flags and creature_template.unit_flags2)";
    app.condition.source_type.tooltip[20]  = "Start or stop attacking our target (start or stop is determined by first parameter).";
    app.condition.source_type.tooltip[21]  = "Allow or disallow moving while the creature is in combat";
    app.condition.source_type.tooltip[22]  = "Set the creature's event phasemask to a new value (warning: this is NOT the creature's actual phase!)";
    app.condition.source_type.tooltip[23]  = "Increment or decrement the creature's event phasemask (warning: this is NOT the creature's actual phase!)";
    app.condition.source_type.tooltip[24]  = "Makes the creature evade and therefore make it stop attacking and leave combat.";
    app.condition.source_type.tooltip[25]  = "Makes the creature flee for assistance of nearby friendly units";
    app.condition.source_type.tooltip[26]  = "Complete a quest requirement (by entry) of our current (player) target.";
    app.condition.source_type.tooltip[27]  = "Complete a quest requirement (by entry) of our current (player) target. Completes a killed monster credit as well as gives credit for a spellcast.";
    app.condition.source_type.tooltip[28]  = "Remove an aura/spell from our target";
    app.condition.source_type.tooltip[29]  = "Makes the creature follow the target at a certain distance and with a certain angle.";
    app.condition.source_type.tooltip[30]  = "Set the creature's event phase (warning: this is NOT the creature's actual phase!)";
    app.condition.source_type.tooltip[31]  = "Set the creature's event phase randomly between two values (warning: this is NOT the creature's actual phase!)";
    app.condition.source_type.tooltip[32]  = "Reset a gameobject, usually used to open/close a door (calls GameObject::ResetDoorOrButton).";
    app.condition.source_type.tooltip[33]  = "Gives a kill credit to our (player) target. The entry is the same entry as quest_template.RequiredNpcOrGo(1/2/3/4).";
    app.condition.source_type.tooltip[34]  = "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
    app.condition.source_type.tooltip[35]  = "Sets a certain instance data field to a specific value. This will be recieved and can be handled inside the InstanceScript of the instance we are sending this to (InstanceScripts are always written in C++).";
    app.condition.source_type.tooltip[36]  = "Updates the creature's entry to a new one, making it become a completely different unit.";
    app.condition.source_type.tooltip[37]  = "Instantly kills the target";
    app.condition.source_type.tooltip[38]  = "Sets the creature in combat with its zone. Useful for bosses inside instances so all players will be set in combat until the fight ends.";
    app.condition.source_type.tooltip[39]  = "Makes the creature cry/call for help which makes nearby creatures that are not yet in combat and are able to assist this creature, run to this creature and attack its attackers.";
    app.condition.source_type.tooltip[40]  = "Set the sheathe state of the creature. The sheath state determines which weapon will be displayed on the model.";
    app.condition.source_type.tooltip[41]  = "Despawns the creature/gameobject within a given time (in milliseconds).";
    app.condition.source_type.tooltip[42]  = "Sets the creature's invincibility health to a flat value or percentage. Either one of the parameters must be set (so not both), and you can not reverse this effect (both parameters at 0 will result in an error).";
    app.condition.source_type.tooltip[43]  = "Sets the mount model to the model given in the second parameter (or takes the model of the entry given in the first parameter). Only one parameter may be used at the same time.";
    app.condition.source_type.tooltip[44]  = "Sets the ACTUAL phasemask of the creature. This is not the event phasemask, but the actual phasemask. Sets the phasemask column in the creature table in the world database.";
    app.condition.source_type.tooltip[45]  = "Calls SMART_EVENT_DATA_SET with given field and data, making it possible to communicate between different entries.";
    app.condition.source_type.tooltip[46]  = "Move a set amount of yards forward from the current position";
    app.condition.source_type.tooltip[47]  = "Sets the visibility of the creature or gameobject";
    app.condition.source_type.tooltip[48]  = "Sets whether or not the creature or gameobject is counted as 'active'. When it's set to be 'active', it means the grid this entitiy is spawned in is no longer able to become inactive.";
    app.condition.source_type.tooltip[49]  = "Makes the creature start attacking the first unit it finds on the target list.";
    app.condition.source_type.tooltip[50]  = "Summon a gameobject entry";
    app.condition.source_type.tooltip[51]  = "Kills the unit target instantly";
    app.condition.source_type.tooltip[52]  = "Activates a taxipath of the given id for our (player) target.";
    app.condition.source_type.tooltip[53]  = "Starts a waypoint using the `waypoints` table in the world database.";
    app.condition.source_type.tooltip[54]  = "Pauses the waypoint path the creature is currently following for a specific time (milliseconds).";
    app.condition.source_type.tooltip[55]  = "Stops the waypoint path the creature is currently following. Also allows you to specify a despawn time from that point on as well as which quest id should be counted as 'fail' (or not, based on the third parameter).";
    app.condition.source_type.tooltip[56]  = "Adds a certain item entry a specific amount of times to our player target.";
    app.condition.source_type.tooltip[57]  = "Removes a certain item entry a specific amount of times to our player target.";
    app.condition.source_type.tooltip[58]  = "Installs a SmartAI template which are basically pre-defined scripts for scripts that are used in a lot of cases. Thing of casters with specific spells, passive, turrets, etc.";
    app.condition.source_type.tooltip[59]  = "Sets running flag on or off.";
    app.condition.source_type.tooltip[60]  = "Sets disable gravity no fall down.";
    app.condition.source_type.tooltip[61]  = "Sets swimming flag on or off.";
    app.condition.source_type.tooltip[62]  = "Teleport target to a specific map using coordinates in the target X/Y/Z/O fields. Note: May NOT use SMART_TARGET_POSITION (8)!";
    app.condition.source_type.tooltip[63]  = "Stores a decimal variable (number) under a variable id to store information for the creature during runtime.";
    app.condition.source_type.tooltip[64]  = "Stores a list of targets under a variable id so it can later be read again.";
    app.condition.source_type.tooltip[65]  = "Resume the waypoint path the creature was previously following.";
    app.condition.source_type.tooltip[66]  = "Sets the orientation of the creature to a given value. Must use SMART_TARGET_POSITION. If you, however, want the creature to face its spawn/home position, you can just use SMART_TARGET_SELF and leave all parameters at 0.";
    app.condition.source_type.tooltip[67]  = "Calls SMART_EVENT_UPDATE after a specific time with given parameters.";
    app.condition.source_type.tooltip[68]  = "Plays a movie of a given entry.";
    app.condition.source_type.tooltip[69]  = "Move to a given position using the target co-ordinate fields (target_x/target_y/target_z/target_o) with SMART_TARGET_POSITION. First parameter is an id which can be read using SMART_EVENT_MOVEMENTINFORM. Explanation in tooltip.";
    app.condition.source_type.tooltip[70]  = "Respawns the target. Only works for gameobject target. Action does not actually respawn the target, it just sets the respawn time of the target, but this is how gameobject respawning is handled.";
    app.condition.source_type.tooltip[71]  = "Set the creature's equipment template to a certain entry. If no entry (first parameter) is set, it will set the three item entries which are ordered by slot (param3 is main-hand, param4 is off-hand, param5 is gun/bow/etc). The slotmask (param2) value is 0 by default and goes by bits, so if it's '2' it will only show the off-hand weapon (bits are 1, 2 and 4). Having 0 defaults to 7, so all slots.";
    app.condition.source_type.tooltip[72]  = "Closes the currently opened gossip to our player target.";
    app.condition.source_type.tooltip[73]  = "Calls SMART_EVENT_TIMED_EVENT_TRIGGERED with a given id.";
    app.condition.source_type.tooltip[74]  = "Interrupts the timed event called from SMART_ACTION_TRIGGER_TIMED_EVENT. 0 is NOT a proper value!";
    app.condition.source_type.tooltip[75]  = "Adds an aura to our target.";
    app.condition.source_type.tooltip[76]  = "Overrides the current creature's/gameobject's script to a new source using the targettype. If more than one target is specified, the first on the list will be used.";
    app.condition.source_type.tooltip[77]  = "Resets the script of the source to its original state. Only useful after SMART_ACTION_OVERRIDE_SCRIPT_BASE_OBJECT was called (because we store the original guid when doing this).";
    app.condition.source_type.tooltip[78]  = "Calls SMART_EVENT_RESET (only calls this, doesn't actually reset the creature/gameobject).";
    app.condition.source_type.tooltip[79]  = "Sets the creature's attack distance and angle to chase its target with. The distance (first parameter) is the minimum distance it will keep away from its target during combat.";
    app.condition.source_type.tooltip[80]  = "Calls a script for the source with a given entry.";
    app.condition.source_type.tooltip[81]  = "Set the npc flags of the target (using creature_template.npcflag)";
    app.condition.source_type.tooltip[82]  = "Adds npc flags of the target (using creature_template.npcflag)";
    app.condition.source_type.tooltip[83]  = "Removes npc flags of the target (using creature_template.npcflag)";
    app.condition.source_type.tooltip[84]  = "Functions the same as SMART_ACTION_TALK, except that it makes the player target say it. Does NOT trigger SMART_EVENT_TEXT_OVER.";
    app.condition.source_type.tooltip[85]  = "Make our action invoker type cast a spell to our target type";
    app.condition.source_type.tooltip[86]  = "Make the specified target type (in parameters) cast a spell to our target type";
    app.condition.source_type.tooltip[87]  = "Calls a random script for the source with given entries";
    app.condition.source_type.tooltip[88]  = "Calls a random script between two values for the source with given entries. So if parameter 1 is 500 and parameter 2 is 550, a script will randomly be picked between 500 and 550.";
    app.condition.source_type.tooltip[89]  = "Move randomly around within a given distance";
    app.condition.source_type.tooltip[90]  = "Set the unit field bytes 1 flags of the target to a specific value";
    app.condition.source_type.tooltip[91]  = "Removes specific unit field bytes 1 flags of the target";
    app.condition.source_type.tooltip[92]  = "Interrupt a given spell id (or any, if the second parameter is 0).";
    app.condition.source_type.tooltip[93]  = "Sends a custom gameobject animation from the target";
    app.condition.source_type.tooltip[94]  = "Sets the dynamic flags of the target to a specific value";
    app.condition.source_type.tooltip[95]  = "Adds dynamic flags to the current value of the target";
    app.condition.source_type.tooltip[96]  = "Removes specific dynamic flags of the target's current dynamic flags";
    app.condition.source_type.tooltip[97]  = "Jump to a given position with a given speed. Must use SMART_TARGET_POSITION with this source_type.";
    app.condition.source_type.tooltip[98]  = "Sends a specific gossip menu to a player which will then be opened for this player";
    app.condition.source_type.tooltip[99]  = "Sets the gameobject's loot state to a given value";
    app.condition.source_type.tooltip[100] = "Sends a stored target id to our given target type. The id comes from SMART_ACTION_STORE_TARGET and can be used with SMART_TARGET_STORED";
    app.condition.source_type.tooltip[101] = "Sets the home position of the source to a new position. The home position is the position the creature runs to when evading/reseting/etc. Uses the target type to determine the new home position.";
    app.condition.source_type.tooltip[102] = "Turns the health regeneration of the creature on or off";
    app.condition.source_type.tooltip[103] = "Roots or unroots the creature (or player target)";
    app.condition.source_type.tooltip[104] = "Sets the gameobject's flags to a specific value";
    app.condition.source_type.tooltip[105] = "Adds specific flags to the gameobject's flags field";
    app.condition.source_type.tooltip[106] = "Removes specific flags from the gameobject's flags field";
    app.condition.source_type.tooltip[107] = "Summon a set of creatures in once using the creature_summon_groups table in the world database.";
    app.condition.source_type.tooltip[108] = "Sets the value of a given power type to a specific value";
    app.condition.source_type.tooltip[109] = "Adds a given value to a given power type";
    app.condition.source_type.tooltip[110] = "Removes a given value from a given power type";
    app.condition.source_type.tooltip[112] = "Stops a game event with specified id (game_event.id)";
    app.condition.source_type.tooltip[113] = "Starts moving by the closest waypoint it can find. Parameters allow to give up to 6 waypoint id's and it will start the closest.";
    app.condition.source_type.tooltip[117] = "Same like set antigravity with Flíing effect.";
    app.condition.source_type.tooltip[118] = "You can stop movement for any target!.";
    app.condition.source_type.tooltip[119] = "Add any Quest Objective count/complete...";
   
    /* EVENT TOOLTIPS */
    app.condition.Reference_type.tooltip[0]  = "While in combat. Parameters represent a timer: 1000,2000,4000,4000 will call this Reference_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
    app.condition.Reference_type.tooltip[1]  = "While out of combat. Parameters represent a timer: 1000,2000,4000,4000 will call this Reference_type randomly between 1 and 2 seconds and repeat this every 4 seconds";
    app.condition.Reference_type.tooltip[2]  = "At health percentage. First and second parameters function as min-max health percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% health. The last two parameters are repeat timers in milliseconds.";
    app.condition.Reference_type.tooltip[3]  = "At mana percentage. First and second parameters function as min-max mana percentage values, so if they are  50,80, the event will be called when the source is between 50% and 80% mana. The last two parameters are repeat timers in milliseconds.";
    app.condition.Reference_type.tooltip[4]  = "When the creature enters combat";
    app.condition.Reference_type.tooltip[5]  = "When the creature killed something";
    app.condition.Reference_type.tooltip[6]  = "When the creature just died";
    app.condition.Reference_type.tooltip[7]  = "When the creature evades out of combat";
    app.condition.Reference_type.tooltip[8]  = "On creature struck by a spell id";
    app.condition.Reference_type.tooltip[9]  = "When the creature is within a certain range of our target type";
    app.condition.Reference_type.tooltip[10] = "When the creature detects movement of an unit that is within line of sight while the creature is out of combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
    app.condition.Reference_type.tooltip[11] = "When the creature or gameobject respawns or spawns";
    app.condition.Reference_type.tooltip[12] = "When the target of the creature is at a certain health percentage";
    app.condition.Reference_type.tooltip[13] = "When the target of the creature is casting a spell. Leaving the third parameter at 0 will mean any spell the target casts will trigger this event.";
    app.condition.Reference_type.tooltip[14] = "When a friendly unit within a certain range reaches a certain amount of health (NOT PERCENTAGE!). If you are looking for percentage, use event type 74.";
    app.condition.Reference_type.tooltip[15] = "When a friendly unit within a certain range is under the effect of a crowd control spell";
    app.condition.Reference_type.tooltip[16] = "When a friendly unit within a certain range is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range HAS a buff.";
    app.condition.Reference_type.tooltip[17] = "When we summoned a creature with a certain entry. First parameter is the creature entry and if it's left at 0 it means we trigger this for any creature.";
    app.condition.Reference_type.tooltip[18] = "When the target of the creature is at a certain mana percentage";
    app.condition.Reference_type.tooltip[19] = "When the creature succesfully offered a quest to a player";
    app.condition.Reference_type.tooltip[20] = "When the creature succesfully rewarded a quest of a player";
    app.condition.Reference_type.tooltip[21] = "When the creature reached its home position";
    app.condition.Reference_type.tooltip[22] = "When the creature receives an emote";
    app.condition.Reference_type.tooltip[23] = "When the creature is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
    app.condition.Reference_type.tooltip[24] = "When the creature's target is missing or having an aura/spell on them. If the first parameter is the spellid in a negative format, it will mean the event is triggered when a friendly unit within a certain range is MISSING a buff.";
    app.condition.Reference_type.tooltip[25] = "When the creature resets (evades, respawns, spawns or resets out of combat)";
    app.condition.Reference_type.tooltip[26] = "When the creature detects movement of an unit that is within line of sight while the creature is in combat. This should be used when attempting to trigger an action when a player or so moves within a distance of some place/trigger.";
    app.condition.Reference_type.tooltip[27] = "SMART_EVENT_PASSENGER_BOARDED";
    app.condition.Reference_type.tooltip[28] = "SMART_EVENT_PASSENGER_REMOVED";
    app.condition.Reference_type.tooltip[29] = "On creature charmed";
    app.condition.Reference_type.tooltip[30] = "On target charmed";
    app.condition.Reference_type.tooltip[31] = "On target spellhit by a spell";
    app.condition.Reference_type.tooltip[32] = "On creature damaged for a certain amount";
    app.condition.Reference_type.tooltip[33] = "On target damaged for a certain amount";
    app.condition.Reference_type.tooltip[34] = "On movement inform. Useful when for example you want your creature to do something after it moving to a certain spot by using SMART_ACTION_MOVE_TO.";
    app.condition.Reference_type.tooltip[35] = "On summoned unit despawned";
    app.condition.Reference_type.tooltip[36] = "On creature corpse removal";
    app.condition.Reference_type.tooltip[37] = "On AI initialization, so when the creature spawns (not when it respawns, resets or evades!)";
    app.condition.Reference_type.tooltip[38] = "On data set, called after SMART_ACTION_SET_DATA is called to this source with a certain field and a certain value.";
    app.condition.Reference_type.tooltip[39] = "On waypoint started";
    app.condition.Reference_type.tooltip[40] = "On waypoint reached";
    app.condition.Reference_type.tooltip[46] = "On areatrigger reached by a player";
    app.condition.Reference_type.tooltip[52] = "When a creature says something it shows a balloon for a few seconds. This event is triggered after the balloon fades and thus the text 'finishes'.";
    app.condition.Reference_type.tooltip[53] = "On creature received a certain heal amount";
    app.condition.Reference_type.tooltip[54] = "Called when the creature or gameobject has just been summoned";
    app.condition.Reference_type.tooltip[55] = "On waypoint paused";
    app.condition.Reference_type.tooltip[56] = "On waypoint resumed";
    app.condition.Reference_type.tooltip[57] = "On waypoint stopped";
    app.condition.Reference_type.tooltip[58] = "On waypoint ended";
    app.condition.Reference_type.tooltip[59] = "Called when a timed event called by SMART_ACTION_CREATE_TIMED_EVENT is triggered";
    app.condition.Reference_type.tooltip[60] = "On update, should be used as a timer. Basically functions like both SMART_EVENT_UPDATE_IC and SMART_EVENT_UPDATE_OOC in one.";
    app.condition.Reference_type.tooltip[61] = "On link";
    app.condition.Reference_type.tooltip[62] = "Called on gossip option selected. Imagine you have four gossip items under the menu id 5 and their id's are 0, 1 and 2. If you now call this event with first parameter '5' and second parameter '1', it will be called when the second gossip option is selected. Tables gossip_menu_option and gossip_menu.";
    app.condition.Reference_type.tooltip[63] = "On gameobject just created (so when it spawns for the first time)";
    app.condition.Reference_type.tooltip[64] = "On gossip menu opened. Also called for gameobjects that just got 'opened' by a player.";
    app.condition.Reference_type.tooltip[65] = "On follow completed/finished";
    app.condition.Reference_type.tooltip[67] = "On behind target within a certain cooldown time";
    app.condition.Reference_type.tooltip[68] = "On game event entry just started";
    app.condition.Reference_type.tooltip[69] = "On game event entry just ended";
    app.condition.Reference_type.tooltip[70] = "On gameobject state changed.";
    app.condition.Reference_type.tooltip[71] = "Called when the gameobject becomes the target of an event happening. This is called in cases like a building is damaged/destroyed/rebuild, a goober is used, etc.";
    app.condition.Reference_type.tooltip[72] = "Called on a certain action id 'done'. Those can only be called from core scripts (SmartAI::DoAction).";
    app.condition.Reference_type.tooltip[73] = "On unit spellclick. For more information on what spellclicks are, take a look at the wiki and search for the table 'npc_spellclick_spells' (world database).";
    app.condition.Reference_type.tooltip[74] = "When a friendly unit within a certain range reaches a certain health percentage (so NOT flat health!). If you are looking for a flat modifier, use event type 14.";
    app.condition.Reference_type.tooltip[75] = "Event triggered when a creature with a specific guid or entry coems within a given distance (in yards) of the source.";
    app.condition.Reference_type.tooltip[76] = "Event triggered when a gameobject with a specific guid or entry coems within a given distance (in yards) of the source.";
  
    /* TARGET TOOLTIPS */
    app.condition.target_type.tooltip[0]  = "No specified target. Only use this if you're sure the action type does not use targets at all (and event then it could not be safe. It's usually smart to default to SMART_TARGET_SELF (1)).";
    app.condition.target_type.tooltip[1]  = "Targets the creature/gameobject/areatrigger itself";
    app.condition.target_type.tooltip[2]  = "Targets the current victim of the creature";
    app.condition.target_type.tooltip[3]  = "The unit that is second highest on the current threatlist of the creature";
    app.condition.target_type.tooltip[4]  = "The unit that is last (so lowest threat) on the current threatlist of the creature";
    app.condition.target_type.tooltip[5]  = "A random unit on the current threatlist of the creature";
    app.condition.target_type.tooltip[6]  = "A random unit on the current threatlist of the creature. Ignores the last unit on the threatlist (so it can never target unit with lowest threat)";
    app.condition.target_type.tooltip[7]  = "The unit that caused this event type to occur. For example if used with SMART_EVENT_SPELLHIT, the initial caster of the spell will be targeted by this target type.";
    app.condition.target_type.tooltip[8]  = "Targets a given position. Only a handful of action types actually use this so make sure you're using one of these! This target type uses the target coordinate parameters and not the normal target parameter fields.";
    app.condition.target_type.tooltip[9]  = "Targets any creature of a given entry within a given range (if entry is left at 0 it will target all creatures within the given range)";
    app.condition.target_type.tooltip[10] = "Targets a specific creature guid and entry";
    app.condition.target_type.tooltip[11] = "Targets any creature of a given entry (or any creature, if first parameter is left at 0) within a given distance";
    app.condition.target_type.tooltip[12] = "Takes a target stored by an id when using SMART_ACTION_STORE_TARGET_LIST";
    app.condition.target_type.tooltip[13] = "Targets any gameobject of a given entry within a given range (if entry is left at 0 it will target all gameobjects within the given range)";
    app.condition.target_type.tooltip[14] = "Targets a specific gameobject guid and entry";
    app.condition.target_type.tooltip[15] = "Targets any gameobject of a given entry (or any gameobject, if first parameter is left at 0) within a given distance";
    app.condition.target_type.tooltip[16] = "Targets all party members of the action invoker (SMART_TARGET_ACTION_INVOKER)";
    app.condition.target_type.tooltip[17] = "Targets any player within a given minimum and maximum distance";
    app.condition.target_type.tooltip[18] = "Targets any player within a given maximum distance";
    app.condition.target_type.tooltip[19] = "Takes the closest creature within a given distance and entry (or the closest creature of any entry, if first parameter is left at 0).";
    app.condition.target_type.tooltip[20] = "Takes the closest gameobject within a given distance and entry (or the closest gameobject of any entry, if first parameter is left at 0).";
    app.condition.target_type.tooltip[21] = "Takes the closest player within a given distance";
    app.condition.target_type.tooltip[22] = "Takes the vehicle of the action invoker (SMART_TARGET_ACTION_INVOKER)";
    app.condition.target_type.tooltip[23] = "Takes the owner or the summoner of the creature/gameobject";
    app.condition.target_type.tooltip[24] = "Targets the entire threatlist of the creature";
    app.condition.target_type.tooltip[25] = "Takes the closest unfriendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
    app.condition.target_type.tooltip[26] = "Takes the closest friendly unit (both creatures and players) within a given distance. If second parameter is set to 1, it will only target nearby friendly players";
    app.condition.target_type.tooltip[27] = "All tagging players";
    app.condition.target_type.tooltip[28] = "Select most distanced player!";
  
  
  
    /*  ACTION PARAM MODAL FLAG PICKER*/
    
    /* ACTION PARAM1 NAMES */
    app.condition.source_type.param1[0]   = "Always 0";
    app.condition.source_type.param1[1]   = "Loot Template Entry";
    app.condition.source_type.param1[2]   = "Loot Template Entry";
    app.condition.source_type.param1[3]   = "Loot Template Entry";
    app.condition.source_type.param1[4]   = "Loot Template Entry";
    app.condition.source_type.param1[5]   = "Loot Template Entry";
    app.condition.source_type.param1[6]   = "Loot Template Entry";
    app.condition.source_type.param1[7]   = "Loot Template Entry";
    app.condition.source_type.param1[8]   = "Loot Template Entry";
    app.condition.source_type.param1[10]  = "Loot Template Entry";
    app.condition.source_type.param1[11]  = "Loot Template Entry";
    app.condition.source_type.param1[12]  = "Loot Template Entry";
    app.condition.source_type.param1[13]  = "Mask of effects to be affected by condition";
    app.condition.source_type.param1[14]  = "Gossip menu entry";
    app.condition.source_type.param1[15]  = "Gossip_menu_option.menu_id";
    app.condition.source_type.param1[18]  = "Creature entry ";
    app.condition.source_type.param1[21]  = "Creature entry ";
    app.condition.source_type.param1[22]  = "ID (smart_scripts.id) + 1";
    app.condition.source_type.param1[23]  = "Vendor entry ";
    app.condition.source_type.param1[26]  = "Phase ID";
 

    /* ACTION PARAM2 NAMES */
    app.condition.source_type.param2[0]   = "NONE";
    app.condition.source_type.param2[1]   = "Item id";
    app.condition.source_type.param2[2]   = "Item id";
    app.condition.source_type.param2[3]   = "Item id";
    app.condition.source_type.param2[4]  = "Item id";;
    app.condition.source_type.param2[5]  = "Item id";
    app.condition.source_type.param2[6]  = "Item id";
    app.condition.source_type.param2[7]  = "Item id";
    app.condition.source_type.param2[8]  = "Item id";
    app.condition.source_type.param2[9]  = "Item id";
    app.condition.source_type.param2[10]  = "Item id";
    app.condition.source_type.param2[11]  = "Item id";
    app.condition.source_type.param2[12]  = "Item id";
    app.condition.source_type.param2[13]  = "Spell Id";
    app.condition.source_type.param2[14]  = "Gossip_menu.text_id";
    app.condition.source_type.param2[15]  = "Gossip_menu_option.id";
    app.condition.source_type.param2[16]  = "Creature entry ";
    app.condition.source_type.param2[17]  = "Spell ID";
    app.condition.source_type.param2[18]  = "Spell ID";
    app.condition.source_type.param2[19]  = "Quest ID";
    app.condition.source_type.param2[21]  = "Spell ID";
    app.condition.source_type.param2[22]  = "EntryOrGuid";
    app.condition.source_type.param2[23]  = "Item entry";
    app.condition.source_type.param2[24]  = "Spell ID of proc aura";
    app.condition.source_type.param2[25]  = "TerrainSwap";
    app.condition.source_type.param2[26]  = "Area ID(or Zone)";
    
  
    /* ACTION PARAM3 NAMES */
    app.condition.source_type.param3[0]  = "Always 0";
    app.condition.source_type.param3[22]  = "SourceType";
  
    /* ACTION PARAM4 NAMES */
    app.condition.source_type.param4[0]  = "Always 0";
    app.condition.source_type.param4[13]  = "0 : Spell Target 1 : Spell Caster";
    app.condition.source_type.param4[16]  = "0 : Player riding / 1 : Vehicle creature";
    app.condition.source_type.param4[17]  = "0 = spell Caster / 1 =  Explicit Target of the spell";
    app.condition.source_type.param4[18]  = "0 = Clicker 1 =  Spellclick target (clickee)";
    app.condition.source_type.param4[21]  = "0 = Player for whom spell bar is shown 1 =  Vehicle creature";
    app.condition.source_type.param4[22]  = "0 = Invoker 1 = Object";
    app.condition.source_type.param4[24]  = "0 = Actor / 1 = ActionTarget";
    
  
  
    /* EVENT PARAM1 NAMES */
    app.condition.Reference_type.param1[0]  = "Always 0";
    app.condition.Reference_type.param1[1]  = "Spell ID";
    app.condition.Reference_type.param1[2]  = "Item entry";
    app.condition.Reference_type.param1[3]  = "Item entry";
    app.condition.Reference_type.param1[4]  = "Zone ID";
    app.condition.Reference_type.param1[5]  = "Faction template ID";
    app.condition.Reference_type.param1[6]  = "Alli 469/Horde 67";
    app.condition.Reference_type.param1[7] = "Required skill";
    app.condition.Reference_type.param1[8] = "Quest ID";
    app.condition.Reference_type.param1[9] = "Quest ID";
    app.condition.Reference_type.param1[10] = "Sober=0; Tipsy=1, Drunk=2, Smashed=3";
    app.condition.Reference_type.param1[11] = "World state index";
    app.condition.Reference_type.param1[12] = "Event entry";
    app.condition.Reference_type.param1[13] = "entry";
    app.condition.Reference_type.param1[14] = "Quest ID";
    app.condition.Reference_type.param1[15] = "Class mask";
    app.condition.Reference_type.param1[16] = "Race mask";
    app.condition.Reference_type.param1[17] = "Achievement ID";
    app.condition.Reference_type.param1[18] = "Title id";
    app.condition.Reference_type.param1[19] = "Swapnmask";
    app.condition.Reference_type.param1[20] = "0 = Male, 1 = Female";
    app.condition.Reference_type.param1[21] = "UnitState";
    app.condition.Reference_type.param1[22] = "Mapid";
    app.condition.Reference_type.param1[23] = "Area id";
    app.condition.Reference_type.param1[24] = "Creature type";
    app.condition.Reference_type.param1[25] = "Spell ID";
    app.condition.Reference_type.param1[26] = "Phasemask";
    app.condition.Reference_type.param1[27] = "Level";
    app.condition.Reference_type.param1[28] = "QuestID";
    app.condition.Reference_type.param1[29] = "Creature entry";
    app.condition.Reference_type.param1[30] = "Gameobject entry";
    app.condition.Reference_type.param1[31] = "3 : UNIT 4 : PLAYER 5 : GAMEOBJECT 7 : CORPSE";
    app.condition.Reference_type.param1[32] = "8 : Unit, 16 Player, 32 Gameobject, 128 corpse";
    app.condition.Reference_type.param1[33] = "SourceType";
    app.condition.Reference_type.param1[34] = "SourceType";
    app.condition.Reference_type.param1[35] = "SourceType";

    app.condition.Reference_type.param1[37] = "HP value";
    app.condition.Reference_type.param1[38] = "HP %";
    app.condition.Reference_type.param1[39] = "Achi id";
    app.condition.Reference_type.param1[40] = "True/false";
    app.condition.Reference_type.param1[41] = "TerrainSwap ";
    app.condition.Reference_type.param1[42] = "StateType ";
    app.condition.Reference_type.param1[43] = "Quest ID";

    app.condition.Reference_type.param1[45] = "Type mask";

    app.condition.Reference_type.param1[47] = "Quest ID";
    app.condition.Reference_type.param1[48] = "Quest Objective ID";

  
    /* EVENT PARAM2 NAMES */
    app.condition.Reference_type.param2[0]  = "Always 0";
    app.condition.Reference_type.param2[1]  = "Effect Index";
    app.condition.Reference_type.param2[2]  = "Item count";
    app.condition.Reference_type.param2[5]  = "RankMask: 1 = Hated,   2 = Hostile";
    app.condition.Reference_type.param2[7]  = "Minimum skill value >=";
    
    app.condition.Reference_type.param2[11] = "World State value";

    app.condition.Reference_type.param2[13] = "Data";

    app.condition.Reference_type.param2[27] = "0 = must be equal, 1 =  must be higher, 2 =  must be lower, 3 =  must be higher or equal, 4 =  must be lower or equal.";
    
    app.condition.Reference_type.param2[29] = "Distance in yards";
    app.condition.Reference_type.param2[30] = "Distance in yards";

    app.condition.Reference_type.param2[31] = "0 any, or Entry";

    app.condition.Reference_type.param2[33] = "RelationType - defines relation of current ConditionTarget to target specified in ConditionValue1.0 - RELATION_SELF1 - RELATION_IN_PARTY2 - RELATION_IN_RAID_OR_PARTY3 - RELATION_OWNED_BY (ConditionTarget is owned by ConditionValue1)4 - RELATION_PASSENGER_OF (ConditionTarget is passenger of ConditionValue1) 5 - RELATION_CREATED_BY (ConditionTarget is summoned by ConditionValue1)";
    
    app.condition.Reference_type.param2[34] = "RankMask 1 = Hated...";

    app.condition.Reference_type.param2[35] = "Distance";

    app.condition.Reference_type.param2[37] = "0 = must be equal, 1 =  must be higher, 2 =  must be lower, 3 =  must be higher or equal, 4 =  must be lower or equal.";
    app.condition.Reference_type.param2[38] = "0 = must be equal, 1 =  must be higher, 2 =  must be lower, 3 =  must be higher or equal, 4 =  must be lower or equal.";
    app.condition.Reference_type.param2[42] = "0 = Standing 1 = Sitting";
    app.condition.Reference_type.param2[47] = "Complete 2, Taken 8, Failed 32, Rewarded 64";

  
    /* EVENT PARAM3 NAMES */
    app.condition.Reference_type.param3[0]  = "Always 0";
    app.condition.Reference_type.param3[2]  = "0 = not in bank, 1 = in bank";
    app.condition.Reference_type.param3[13]  = "0=INSTANCE_INFO_DATA";
    app.condition.Reference_type.param3[29]  = "Alive=0 / Dead=1";

    app.condition.Reference_type.param3[31]  = "GUID max 500k";

    app.condition.Reference_type.param3[35]  = "0 = must be equal, 1 =  must be higher, 2 =  must be lower, 3 =  must be higher or equal, 4 =  must be lower or equal.";

  
    /* EVENT PARAM4 NAMES */
    app.condition.Reference_type.param4[0]  = "RepeatMax";
    app.condition.Reference_type.param4[1]  = "RepeatMax";
    app.condition.Reference_type.param4[2]  = "RepeatMax";
    app.condition.Reference_type.param4[3]  = "RepeatMax";
    app.condition.Reference_type.param4[5]  = "Entry (if parameter 3 is 0)";
    app.condition.Reference_type.param4[8]  = "CooldownMax";
    app.condition.Reference_type.param4[9]  = "RepeatMax";
    app.condition.Reference_type.param4[10] = "Cooldown max";
    app.condition.Reference_type.param4[12] = "RepeatMax";
    app.condition.Reference_type.param4[14] = "RepeatMax";
    app.condition.Reference_type.param4[16] = "RepeatMax";
    app.condition.Reference_type.param4[18] = "RepeatMax";
    app.condition.Reference_type.param4[23] = "RepeatMax";
    app.condition.Reference_type.param4[24] = "RepeatMax";
    app.condition.Reference_type.param4[26] = "Cooldown max";
    app.condition.Reference_type.param4[31] = "RepeatMax";
    app.condition.Reference_type.param4[32] = "RepeatMax";
    app.condition.Reference_type.param4[33] = "RepeatMax";
    app.condition.Reference_type.param4[38] = "CooldownMax";
    app.condition.Reference_type.param4[53] = "CooldownMax";
    app.condition.Reference_type.param4[60] = "RepeatMax";
    app.condition.Reference_type.param4[74] = "RepeatMax";
    app.condition.Reference_type.param4[75] = "RepeatTimer";
    app.condition.Reference_type.param4[76] = "RepeatTimer";
  
    /* TARGET PARAM1 NAMES */
    app.condition.target_type.param1[3]  = "MaxDistance";
    app.condition.target_type.param1[4]  = "MaxDistance";
    app.condition.target_type.param1[5]  = "MaxDistance";
    app.condition.target_type.param1[6]  = "MaxDistance";
    app.condition.target_type.param1[9]  = "Creature entry (0 any)";
    app.condition.target_type.param1[10] = "Creature guid";
    app.condition.target_type.param1[11] = "Creature entry (0 any)";
    app.condition.target_type.param1[12] = "Store id";
    app.condition.target_type.param1[13] = "Gameobject entry (0 any)";
    app.condition.target_type.param1[14] = "Gameobject guid";
    app.condition.target_type.param1[15] = "Gameobject entry (0 any)";
    app.condition.target_type.param1[17] = "Minimum distance";
    app.condition.target_type.param1[18] = "MaxDistance";
    app.condition.target_type.param1[19] = "Creature entry (0 any)";
    app.condition.target_type.param1[20] = "Gameobject entry (0 any)";
    app.condition.target_type.param1[21] = "Maximum distance";
    app.condition.target_type.param1[25] = "Maximum distance";
    app.condition.target_type.param1[26] = "Maximum distance";
    app.condition.target_type.param1[28]  = "MaxDistance";
  
    /* TARGET PARAM2 NAMES */
    app.condition.target_type.param2[3]  = "PlayerOnly";
    app.condition.target_type.param2[4]  = "PlayerOnly";
    app.condition.target_type.param2[5]  = "PlayerOnly";
    app.condition.target_type.param2[6]  = "PlayerOnly";
    app.condition.target_type.param2[9]  = "Minimum distance";
    app.condition.target_type.param2[10] = "Creature entry";
    app.condition.target_type.param2[11] = "Maximum distance";
    app.condition.target_type.param2[13] = "Minimum distance";
    app.condition.target_type.param2[14] = "Gameobject entry";
    app.condition.target_type.param2[15] = "Maximum distance";
    app.condition.target_type.param2[17] = "Maximum distance";
    app.condition.target_type.param2[19] = "Maximum distance";
    app.condition.target_type.param2[20] = "Maximum distance";
    app.condition.target_type.param2[25] = "Player only (0/1)";
    app.condition.target_type.param2[26] = "Player only (0/1)";
    app.condition.target_type.param2[28]  = "PlayerOnly";
  
    /* TARGET PARAM3 NAMES */
    app.condition.target_type.param3[3]  = "PowerType(1,4)";
    app.condition.target_type.param3[4]  = "PowerType (1,4)";
    app.condition.target_type.param3[5]  = "PowerType (1,4)";
    app.condition.target_type.param3[6]  = "PowerType (1,4)";
    app.condition.target_type.param3[9]  = "Maximum distance";
    app.condition.target_type.param3[13] = "Maximum distance";
    app.condition.target_type.param3[19] = "Must be dead (0/1)";
    app.condition.target_type.param3[28] = "isINLos? (0/1)";
  
    /* ACTION PARAM1 TOOLTIPS */
    app.condition.source_type.paramTooltip1[1]   = "creature_text.groupid";
    app.condition.source_type.paramTooltip1[11]   = "Flags Interrupt any spell casting:1 , SMARTCAST_TRIGGERED: 2, CAST_FORCE_CAST: 4, CAST_FORCE_TARGET_SELF:16, SMARTCAST_COMBAT_MOVE: 64";
    app.condition.source_type.paramTooltip1[20]  = "If set to 0 it means the creature will stop attacking its current target. Otherwise it starts / continues to attack its target.";
    app.condition.source_type.paramTooltip1[21]  = "If set to 0 it means the creature is no longer able to move AT ALL during combat. If set to 1 it means it's allowed to normally walk during combat.";
    app.condition.source_type.paramTooltip1[25]  = "Determines whether or not the creature should say something along the lines of \"<name> starts fleeing ...\" when it flees. If 0, it won't say anything (unless set manually). If above 0 it will say the automatic text.";
    app.condition.source_type.paramTooltip1[28]  = "Amount of charges of said aura to be removed. If 0, the whole aura is removed.";
    app.condition.source_type.paramTooltip1[36]  = "The creature entry we want to become (creature_template.entry)";
    app.condition.source_type.paramTooltip1[39]  = "Radius to call for help within";
    app.condition.source_type.paramTooltip1[53]  = "If set to 0, the creature will follow the path walking at a normal speed. If set to anything above 0 it will be running at a higher speed.";
    app.condition.source_type.paramTooltip1[55]  = "Time in milliseconds after which the creature despawns when the path was stopped.";
    app.condition.source_type.paramTooltip1[69]  = "If set to a value, SMART_EVENT_MOVEMENTINFORM will be called with this number when the unit finished moving to this position.";
    app.condition.source_type.paramTooltip1[71]  = "Entry of creature_equip_template. If left at 0, either parameter 3, 4 or 5 (or all, or just two) must be filled in with item entries to equip.";
    app.condition.source_type.paramTooltip1[107] = "Group id column in the creature_summon_groups table (world database).";
  
    /* ACTION PARAM2 TOOLTIPS */
    app.condition.source_type.paramTooltip2[1]   = "Duration to wait before SMART_EVENT_TEXT_OVER event is triggered";
    app.condition.source_type.paramTooltip2[4]   = "If 0, everybody within the visibility range will hear the sound";
    app.condition.source_type.paramTooltip2[18]  = "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
    app.condition.source_type.paramTooltip2[19]  = "Determines which unit flag to target; if 0, it targets the default unit flags which is creature_template.unit_flags. If set to 1 or higher, it targets creature_template.unit_flags2 (notice the '2') which has different values.";
    app.condition.source_type.paramTooltip2[36]  = "Identifier of which faction the creature should become. If set to 0, it will set the creature's faction to creature_template.faction_a. If anything other than 1 it will be set to creature_template.faction_h.";
    app.condition.source_type.paramTooltip2[39]  = "Indicator whether or not we should automatically make the creature emote \"<name> calls for help!\" (which is usually blizzlike).";
    app.condition.source_type.paramTooltip2[53]  = "Entry of the `waypoints` (world database) table to follow.";
    app.condition.source_type.paramTooltip2[55]  = "Quest entry to count as 'failed' (based on third parameter). Does not have to be set if third parameter is set to 0.";
    app.condition.source_type.paramTooltip2[71]  = "Slotmask we show. Default is 0 and means all items are shown. If you only want to show one specific item (or two instead of all three), this field should be used as a bitmask starting at 1. Possible bits are 1, 2 and 4.";
    app.condition.source_type.paramTooltip2[80]  = "The timer update type. If set to 0, the script will only occur out of combat. If set to 1, it will only occur during combat and if set to 2 it will always occur.";
    app.condition.source_type.paramTooltip2[90]  = "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
    app.condition.source_type.paramTooltip2[91]  = "If set to 0, it targets the stand states (stand/sit/sleep/etc.). If set to 1, it targets something talent-related for pets (don't use). If set to 2, it targets the stand flags (creep/untrackable/etc.) and if set to 3 it targets the stand misc. flags (hover/always-stand/etc.).";
    app.condition.source_type.paramTooltip2[92]  = "If left at 0, the core will interrupt the currently being cast spell (based on the with-delay and instant parameters, of course)";
    app.condition.source_type.paramTooltip2[98]  = "Uses the `id` value from the `npc_text` table in the world database";
  
    /* ACTION PARAM3 TOOLTIPS */
    app.condition.source_type.paramTooltip3[12]  = "Duration the creature will be summoned (in milliseconds).";
    app.condition.source_type.paramTooltip3[29]  = "Default is 0. If it's not 0 it means the follow will finish ONLY once the creature is within interaction distance (5 yards) of the given entry.";
    app.condition.source_type.paramTooltip3[53]  = "Repeat the path when the it's finished.";
    app.condition.source_type.paramTooltip3[55]  = "If set to 1, we will mark the quest in parameter 2 to failed for our player targets.";
    app.condition.source_type.paramTooltip3[71]  = "Item entry one (main hand slot) (only has use if the first parameter is 0)";
  
    /* ACTION PARAM4 TOOLTIPS */
    app.condition.source_type.paramTooltip4[12]  = "Identicator whether or not the summoned creature should attack the action invoker (SMART_TARGET_ACTION_INVOKER) when it's summoned. 0 means it won't, 1 means it will attack.";
    app.condition.source_type.paramTooltip4[29]  = "The creature id that will be given as a quest credit when the follow has finished for whatever reason.";
    app.condition.source_type.paramTooltip4[53]  = "Quest entry to give credit for once the path has finished. Will use the target type and take all player entities from this list.";
    app.condition.source_type.paramTooltip4[67]  = "Only set this if the event repeats.";
    app.condition.source_type.paramTooltip4[71]  = "Item entry two (off hand slot) (only has use if the first parameter is 0)";
  
    /* ACTION PARAM5 TOOLTIPS */
    app.condition.source_type.paramTooltip5[29]  = "Requires the 4th parameter to be set and valid; determines whether the entry in parameter 4 is a monster kill or event happening. If you're not sure what they mean, read the quest_template wiki.";
    app.condition.source_type.paramTooltip5[53]  = "Time in milliseconds to wait after the path ended before we despawn.";
    app.condition.source_type.paramTooltip5[67]  = "Only set this if the event repeats.";
    app.condition.source_type.paramTooltip5[71]  = "Item entry three (gun/bow/etc. slot) (only has use if the first parameter is 0)";
  
    /* ACTION PARAM6 TOOLTIPS */
    app.condition.source_type.paramTooltip6[53]  = "Reactstate that is set when the waypoint starts.";
  
    /* EVENT PARAM1 TOOLTIPS */
    app.condition.Reference_type.paramTooltip1[0]  = "Timer min";
    app.condition.Reference_type.paramTooltip1[1]  = "Timer min";
    app.condition.Reference_type.paramTooltip1[2]  = "Timer min";
    app.condition.Reference_type.paramTooltip1[3]  = "Timer min";
    app.condition.Reference_type.paramTooltip1[8]  = "Spell id that will limit this event to only be triggered if the spell that hit us has this id. If left at 0, it works for EVERY spell.";
    app.condition.Reference_type.paramTooltip1[9]  = "Minimum distance to target for the event to be triggered";
    app.condition.Reference_type.paramTooltip1[10] = "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
    app.condition.Reference_type.paramTooltip1[11] = "The condition type for this event to trigger. This is used to determine whether we should check if the mapid (parameter 2) or the zoneid (parameter 3) should be checked for correctness.";
    app.condition.Reference_type.paramTooltip1[14] = "Health the friendly unit must be at. Warning: this is NOT health percentage!";
    app.condition.Reference_type.paramTooltip1[16] = "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is actually active on the friendly unit.";
    app.condition.Reference_type.paramTooltip1[17] = "Creature entry that must be summoned in order for this event to trigger. If left at 0 it will be triggered by any creature entry.";
    app.condition.Reference_type.paramTooltip1[19] = "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
    app.condition.Reference_type.paramTooltip1[20] = "Quest id to trigger this event; if the parameter is 0 it means it will be triggered by ANY quest.";
    app.condition.Reference_type.paramTooltip1[23] = "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
    app.condition.Reference_type.paramTooltip1[24] = "Spell id for the event to trigger. If the spellid is negative it means the event is reversed and triggered only when the aura is not present on the creature.";
    app.condition.Reference_type.paramTooltip1[26] = "If 0, we allow only non-hostile units to trigger this event for us. If set to 1, we only allow hostile units to triger this event.";
    app.condition.Reference_type.paramTooltip1[32] = "Minimum amount of damage required to trigger this event";
    app.condition.Reference_type.paramTooltip1[33] = "Minimum amount of damage required to trigger this event";
    app.condition.Reference_type.paramTooltip1[35] = "Creature entry to act as a condition. If left at 0, this event is triggered for any summon that despawn. If an entry is given, it is only triggered when that specific entry despawns.";
    app.condition.Reference_type.paramTooltip1[38] = "First parameter of SMART_ACTION_SET_DATA";
    app.condition.Reference_type.paramTooltip1[46] = "Entry of the areatrigger to make this event happen. If left at 0 it will trigger for any areatrigger.";
    app.condition.Reference_type.paramTooltip1[52] = "The creature_text.groupid value to trigger this event for";
    app.condition.Reference_type.paramTooltip1[53] = "Minimum required value the heal effect must be in order to trigger this event";
    app.condition.Reference_type.paramTooltip1[59] = "First parameter of SMART_ACTION_CREATE_TIMED_EVENT";
    app.condition.Reference_type.paramTooltip1[62] = "This is the gossip_menu.entry identifier";
    app.condition.Reference_type.paramTooltip1[70] = "The new state of the gameobject after this event";
    app.condition.Reference_type.paramTooltip1[75] = "Guid of the creature we want to check for. Can be left on 0 if the entry is given.";
    app.condition.Reference_type.paramTooltip1[76] = "Guid of the gameobject we want to check for. Can be left on 0 if the entry is given.";
  
    /* EVENT PARAM2 TOOLTIPS */
    app.condition.Reference_type.paramTooltip2[0]  = "Timer max";
    app.condition.Reference_type.paramTooltip2[1]  = "Timer max";
    app.condition.Reference_type.paramTooltip2[2]  = "Timer max";
    app.condition.Reference_type.paramTooltip2[3]  = "Timer max";
    app.condition.Reference_type.paramTooltip2[9]  = "Maximum distance to target for the event to be triggered";
    app.condition.Reference_type.paramTooltip2[32] = "Maximum allowed damage to make this event be able to trigger";
    app.condition.Reference_type.paramTooltip2[33] = "Maximum allowed damage to make this event be able to trigger";
    app.condition.Reference_type.paramTooltip2[38] = "Second parameter of SMART_ACTION_SET_DATA";
    app.condition.Reference_type.paramTooltip2[53] = "Maximum allowed value of the heal effect to allow this event to trigger";
    app.condition.Reference_type.paramTooltip2[62] = "This is the gossip_menu_option.id identifier";
    app.condition.Reference_type.paramTooltip2[75] = "Entry of the creature we want to check for. Can be left on 0 if the guid is given.";
    app.condition.Reference_type.paramTooltip2[76] = "Entry of the gameobject we want to check for. Can be left on 0 if the guid is given.";
  
    /* EVENT PARAM3 TOOLTIPS */
    app.condition.Reference_type.paramTooltip3[0]  = "Repeat timer min";
    app.condition.Reference_type.paramTooltip3[1]  = "Repeat timer min";
    app.condition.Reference_type.paramTooltip3[2]  = "Repeat timer min";
    app.condition.Reference_type.paramTooltip3[3]  = "Repeat timer min";
    app.condition.Reference_type.paramTooltip3[5]  = "Indicator if killed unit must be player only; if 0, the 4th parameter must be set to the creature id.";
    app.condition.Reference_type.paramTooltip3[9]  = "Timer min";
    app.condition.Reference_type.paramTooltip3[13] = "Spell id the target must be casting. If left at 0, it detects ANY spell.";
    app.condition.Reference_type.paramTooltip3[75] = "Min distance to the creature that'll make the event trigger";
    app.condition.Reference_type.paramTooltip3[76] = "Min distance to the gameobject that'll make the event trigger";
  
    /* EVENT PARAM4 TOOLTIPS */
    app.condition.Reference_type.paramTooltip4[0]  = "Repeat timer max";
    app.condition.Reference_type.paramTooltip4[1]  = "Repeat timer max";
    app.condition.Reference_type.paramTooltip4[2]  = "Repeat timer max";
    app.condition.Reference_type.paramTooltip4[3]  = "Repeat timer max";
    app.condition.Reference_type.paramTooltip4[5]  = "Entry of the creature that has to be killed for this event to trigger. Only has effect if third parameter is set to 0.";
    app.condition.Reference_type.paramTooltip4[9]  = "Timer max";
    app.condition.Reference_type.paramTooltip4[75] = "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";
    app.condition.Reference_type.paramTooltip4[76] = "Timer to check for distance. It's not a good idea to leave this at 0, having a handful of events doing that can slow down your core big time.";
  
    /* TARGET PARAM1 TOOLTIPS */
    app.condition.target_type.paramTooltip1[9]  = "If left at 0, it will target all creatures within the given distance";
    app.condition.target_type.paramTooltip1[11] = "If left at 0, it will target all creatures within the given distance";
    app.condition.target_type.paramTooltip1[13] = "If left at 0, it will target all gameobjects within the given distance";
    app.condition.target_type.paramTooltip1[15] = "If left at 0, it will target all gameobjects within the given distance";
    app.condition.target_type.paramTooltip1[19] = "If left at 0, it will target the closest creature of ANY entry";
    app.condition.target_type.paramTooltip1[20] = "If left at 0, it will target the closest creature of ANY entry";
  
    /* TARGET PARAM2 TOOLTIPS */
    // there are no target param2 tooltips at the moment
  
    /* TARGET PARAM3 TOOLTIPS */
    app.condition.target_type.paramTooltip3[19] = "If set to 0 it will only target alive creatures; if set to 1 it will target only alive creatures";
  
    /* EVENT COMMENTS */
   
