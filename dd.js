const aasimar = {
    name1: 'Fallen', 
    name2:'Protector', 
    name3:'Scourge',
    name4:`Aasimar (Base)(PHB 2024)`,
    abilityScore1: 'Charisma +2; Strength +1', 
    abilityScore2:'Charisma +2; Wisdom +1', 
    abilityScore3:'Charisma +2; Constitution +1', 
    size:'Medium (about 4-7 feet tall) or Small (about 2-4 feet tall), chosen when you select this species', speed:'30 feet', 
    age:'Aasimar mature at the same rate as humans, but they can live up to 160 years.', 
    lenguages:'You can speak, read, and write Common and Celestial', darkvision:'Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.', 
    celestialResistance:'You have <b class="importantDetail">RESISTENCE</b> to necrotic damage and radiant damage.',
    healingHand:`As a <b class="importantDetail">Magic</b> action, you touch a creature and roll a number of d4s equal to your <b class="importantDetail">Proficiency Bonus</b>. The creature regains a number of <b class="importantDetail">Hit Points</b> equal to the total rolled. Once you use this trait, you can't use it again until you finish a <b class="importantDetail">Long Rest</b>.`,
    lightBarrier:`You know the <b class="importantDetail">light cantrip</b>. Charisma is your spellcasting ability for it.`, 
    celestialRevelation:`Celestial Revelation. When you reach character level 3, you can transform as a <b class="importantDetail">Bonus Action</b> using one of the options below (choose the option each time you transform). The transformation lasts for 1 minute or until you end it (no action required). Once you transform, you can't do so again until you finish a <b class="importantDetail">Long Rest.</b><br>
    Once on each of your turns before the transformation ends, you can deal extra damage to one target when you deal damage to it with an attack or a spell. The extra damage equals your <b class="importantDetail">Proficiency Bonus</b>, and the extra damage's type is either Necrotic for Necrotic Shroud or Radiant for Heavenly Wings and Inner Radiance.<br>
    Here are the transformation options:<br>
    <br>
    <b class="importantDetail"> (Option 1) Heavenly Wings:</b> Two spectral wings sprout from your back temporarily. Until the transformation ends, you have a <b class="importantDetail">Fly Speed</b> equal to your <b class="importantDetail">Speed.</b><br>
    <br>
    <b class="importantDetail"> (Option 2) Inner Radiance:</b> Searing light temporarily radiates from your eyes and mouth. For the duration, you shed <b class="importantDetail">Bright Light</b> in a 10-foot radius and Dim Light for an additional 10 feet, and at the end of each of your turns, each creature within 10 feet of you takes Radiant damage equal to your <b class="importantDetail">Proficiency Bonus.</b><br>
    <br>
    <b class="importantDetail"> (Option 3) Necrotic Shroud:</b> Your eyes briefly become pools of darkness, and flightless wings sprout from your back temporarily. Creatures other than your allies within 10 feet of you must succeed on a Charisma saving throw (DC 8 plus your Charisma modifier and <b class="importantDetail">Proficiency Bonus</b> or have the <b class="importantDetail">Frightened</b> condition until the end of your next turn.`,
    necroticShroud:'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to turn into pools of darkness and two skeletal, ghostly, flightless wings to sprout from your back. The instant you transform, other creatures within 10 feet of you that can see you must succeed on a Charisma saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or become <b class="importantDetail">frightened</b> of you until the end of your next turn. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, once on each of your turns, you can deal extra necrotic damage to one target when you deal damage to it with an attack or a spell. The extra necrotic damage equals your level Once you use this trait, you cant use it again until you finish a long rest.',
    radiantSoul:'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you cant use it again until you finish a long rest.',
    radiantConsumption:'Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing a searing light to radiate from you, pour out of your eyes and mouth, and threaten to char you.Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you shed bright light in a 10-foot radius and dim light for an additional 10 feet, and at the end of each of your turns, you and each creature within 10 feet of you take radiant damage equal to half your level (rounded up). In addition, once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you cant use it again until you finish a long rest.',
}
const dragonborn = {
    name1:`Dragonborn (Base)(PHB 2024)`,
    name2:`Dragonborn (Base)(PHB 2014)`,
    name3:`Dragonborn Draconblood`,
    name4:`Dragonborn Ravenite`,
    size:`Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.`,
    age:`Age. Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.`,
    speed:`30 feet`,
    abilityScore1:`Str +2; Charisma +1`,
    abilityScore2:`Int +2; Charisma +1`,
    abilityScore3:`Str +2; Constitution +1`,
    draconicAncestry:` Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance`,
    breathWeapon:` When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10).You can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`,
    breathWeapon2024:`When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10).<br>
    You can use this Breath Weapon a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`,
    damageResistance:` You have Resistance to the damage type determined by your Draconic Ancestry trait.`,
    draconicFlight:` When you reach character level 5, you can channel draconic magic to give yourself temporary flight. As a Bonus Action, you sprout spectral wings on your back that last for 10 minutes or until you retract the wings (no action required) or have the Incapacitated condition. During that time, you have a Fly Speed equal to your Speed. Your wings appear to be made of the same energy as your Breath Weapon. Once you use this trait, you can't use it again until you finish a Long Rest.`,
    forcefulPresence:` You can use your understanding of creative diplomacy or intimidation to guide a conversation in your favor. When you make a Charisma (Intimidation or Persuasion) check, you can do so with advantage. Once you use this trait, you can't do so again until you finish a short or long rest.`,
    languages:` You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.`,
    vengefulAssault:` When you take damage from a creature in range of a weapon you are wielding, you can use your reaction to make an attack with the weapon against that creature. Once you use this trait, you can't do so again until you finish a short or long rest.`,
    darkvision:` You have Darkvision with a range of 60 feet.`,
}
const dwarf = {
    name1: 'Hill Dwarf',
    name2:'Mountain Dwarf', 
    name3: 'Dwarf: Duergar', 
    name4:'Dwarf : Mark of Warding',
    name5:`Dwarf (Base)(PHB 2014)`,
    name6:`Dwarf (Base)(PHB 2024) `,
    abilityScore1:'Constitution +2; Wisdom +1',
    abilityScore2:'Strenght +2; Constitution +2',
    abilityScore3:'Constitution +2; Strenght +1',
    abilityScore4:'Constitution +2; Intelligence +1',
    abilityScore5:`Constitution +2`,
    size:`Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.`,
    speed:`25 feet. Your speed is not reduced by wearing heavy armor.`,
    speed2024:`30 feet`,
    age:`Dwarves mature at the same rate as humans, but they are considered young until they reach the age of 50. On average, they live about 350 years.`,
    lenguages:`You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.` ,
    darkvision:`Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.`,
    dwarvenResilience:`You have <b class="importantDetail">Resistance</b> to Poison damage. You also have <b class="importantDetail">Advantage</b> on saving throws you make to avoid or end the <b class="importantDetail">Poisoned</b> condition.`,
    dwarvenToughness:` Your <b class="importantDetail">Hit Point</b> maximum increases by 1, and it increases by 1 again whenever you gain a level.`,
    dwarvenCombatTraining:`You have proficiency with the <b class="importantDetail">battleaxe</b>, <b class="importantDetail">handaxe</b>, <b class="importantDetail">light hammer</b>, and <b class="importantDetail">warhammer</b>.`,
    toolProficiency: `You gain proficiency with the artisan's tools of your choice: <b class="importantDetail">Smith's tools</b>, <b class="importantDetail">brewer's supplies</b>, or <b class="importantDetail">mason's tools</b>.`, 
    stonecunning:`Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`,
    dwarvenArmorTraining: `You have proficiency with light and medium armor.`, superiorDarkvision: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`, 
    duergarMagic: `When you reach 3rd level, you can cast the <b class="importantDetail">Enlarge/Reduce</b> spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the <b class="importantDetail">Invisibility</b> spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.`,
    sunlightSensitivity: `You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.`,
    wardersIntuition: `When you make an Intelligence (Investigation) check or an ability check using <b class="importantDetail">thieves' tools</b>, you can roll a <b class="importantDetail">d4</b> and add the number rolled to the ability check.`,
    wardsAndSeals:`You can cast the <b class="importantDetail">alarm</b> and <b class="importantDetail">mage armor</b> spells with this trait. Starting at 3rd level, you can also cast the <b class="importantDetail">arcane lock</b> spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. Intelligence is your spellcasting ability for these spells, and you don't need material components for them when you cast them with this trait.`,
    spellsOfTheMark:`If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Warding Spells table are added to the spell list of your spellcasting class.`,
    stonecunning2024:`As a <b class="importantDetail">Bonus Action</b>, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked.
    You can use this <b class="importantDetail">Bonus Action</b> a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a <b class="importantDetail">Long Rest</b>.`,
    duergarResilience: `You have advantage on saving throws against poison, and you have resistance against poison damage. You also have advantage on saving throws against illusions and against being charmed or paralyzed.`,
}
const elf = {
    name1:"High Elf",
    name2:"Wood Elf",
    name3:"Drow Elf",
    name4:"Eladrin Elf",
    name5:"Mark of Shadow Elf",
    name6:"Shadar-Kai Elf",
    name7:"Sea Elf",
    name8:`Elf (Base)(PHB 2014)`,
    name9:`Elf (Base)(PHB 2024)`,
    name10:`Pallid Elf`,
    abilityScore1:`Dex +2; Int +1`,
    abilityScore2:`Dex +2; Wisdom +1`,
    abilityScore3:`Dex +2; Charisma +1`,
    abilityScore4:`Dex +2; Charisma +1`,
    abilityScore5:`Dex +2; Charisma +1`,
    abilityScore6:`Dex +2; Constitution +1`,
    abilityScore7:`Dex +2; Constitution +1`,
    abilityScore9:`Dex +2`,
    abilityScore10:`Dex +2; Wisdom +1`,
    age:`Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.`,
    size:`Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.`,
    speed:`30 feet`,
    speedWoodElf:`35 feet`,
    speedSeaElf:`30 feet, Swim 30 feet`,
    darkvision:`Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    elvenLineage:` You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.
    When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.
    Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).`,
    keenSenses: "You have proficiency in the Perception skill.",
    keenSenses2024:`You have proficiency in the Insight, Perception, or Survival skill.`,
    feyAncestry : "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    feyAncestry2024:`You have Advantage on saving throws you make to avoid or end the Charmed condition.`,
    trance:" Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is 'trance') While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.",
    languages: "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
    superiorDarkvision:"Accustomed to the depths of the Underdark, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
    sunlightSensitivity:"You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
    drowMagic: "You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait; you regain the ability to cast it when you finish a long rest. When you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    drowWeaponTraining:" You have proficiency with rapiers, shortswords, and hand crossbows.",
    feyStep: `As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season; if the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Charisma modifier:<br>
    <br>
    <b class="importantDetail">Autumn</b>: Immediately after you use your Fey Step, up to two creatures of your choice that you can see within 10 feet of you must succeed on a Wisdom saving throw or be charmed by you for 1 minute, or until you or your companions deal any damage to it. <br>
    <br>
    <b class="importantDetail">Winter</b>: When you use your Fey Step, one creature of your choice that you can see within 5 feet of you before you teleport must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.<br>
    <br>
    <b class="importantDetail">Spring</b>: When you use your Fey Step, you can touch one willing creature within 5 feet of you. That creature then teleports instead of you, appearing in an unoccupied space of your choice that you can see within 30 feet of you.<br>
    <br>
    <b class="importantDetail">Summer</b>. Immediately after you use your Fey Step, each creature of your choice that you can see within 5 feet of you takes fire damage equal to your Charisma modifier (minimum of 1 damage).`,
    cunningIntuition: `When you make a Charisma (Performance) or Dexterity (Stealth) check, you can roll a d4 and add the number rolled to the ability check.`,
    shapeShadows: `You know the minor illusion cantrip. Starting at 3rd level, you can cast the invisibility spell once with this trait, and you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    spellsOfTheMark: `If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class.`,
    seaElfTraining:`  have proficiency with the spear, trident, light crossbow, and net.`,
    childoftheSea: "You have a swimming speed of 30 feet, and you can breathe air and water.",
    friendoftheSea: "Using gestures and sounds, you can communicate simple ideas with any beast that has an innate swimming speed.",
    extraLanguage7: "You can speak, read, and write Aquan.",
    elfWeaponTraining: `You have proficiency with the longsword, shortsword, shortbow, and longbow.`,
    cantrip:` You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.`,
    extraLanguage1: `You can speak, read, and write one extra language of your choosing.`,
    fleetofFoot: `Your base walking speed increases to 35 feet.`,
    maskoftheWild: `You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.`,
    necroticResistance: `You have resistance to necrotic damage.`,
    blessingoftheRavenQueen:` As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest.<br>
    Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent.`,
    incisiveSense:`You have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.`,
    blessingoftheMoonWeaver:`You know the light cantrip. When you reach 3rd level, you can cast the sleep spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell (targeting yourself only) once with this trait and regain the ability to do so when you finish a long rest. Casting these spells with this trait doesn't require material components. Wisdom is your spellcasting ability for these spells.`
}
const gnome = {
    name1:`Deep Gnome (Gnome Svirfneblin)`,
    name2:`Forest Gnome`,
    name3:`Gnome: Mark of the Scribing`,
    name4:`Rock Gnome`,
    name5:`Gnome (Base)(PHB 2014)`,
    name6:`Gnome (Base)(PHB 2024)`,
    age:`Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.(Deep Gnome has a shorter life Spam)`,
    ageDeep:`Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.`,
    size:`Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.(Deep Gnomes are slightly shorter)`,
    sizeDeep:`A typical svirfneblin stands about 3 to 3½ feet tall and weighs 80 to 120 pounds. Your size is Small.`,
    speed:`25 feet`,
    speed2024:`30 feet`,
    abilityScore1:`Int +2; Dex +1`,
    abilityScore2:`Int +2; Dex +1`,
    abilityScore3:`Int +2; Charisma +1`,
    abilityScore4:`Int +2; Constitution +1`,
    abilityScore5:`Int +2`,
    darkvision:` Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    gnomeCunning: `You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.`,
    languages: `You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.`,
    superiorDarkvision: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    languages1:` You can speak, read, and write Common, Gnomish, and Undercommon. The svirfneblin dialect is more guttural than surface Gnomish, and most svirfneblin know only a little bit of Common, but those who deal with outsiders (and that includes you as an adventurer) pick up enough Common to get by in other lands.`,
    stoneCamouflage:` You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.`,
    naturalIllusionist: `You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.`,
    speakwithSmallBeasts:` Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.`,
    artificersLore:` Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.`,
    tinker:` You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.
    When you create a device, choose one of the following options:
    Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
    Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
    Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.`,
    giftedScribe:` When you make an Intelligence (History) check or an ability check using <b class="importantDetail">calligrapher's supplies</b>, you can roll a <b class="importantDetail">d4</b> and add the number rolled to the ability check.`,
    scribesInsight:` You know the <a class="importantDetail">message cantrip</a>. You can also cast <a class="importantDetail">comprehend languages</a> once with this trait, and you regain the ability to cast it when you finish a short or long rest. Starting at 3rd level, you can cast the <a class="importantDetail">magic mouth</a> spell with this trait, and you regain the ability to cast it when you finish a long rest. Intelligence is your spellcasting ability for these spells`,
    spellsoftheMark:` If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Scribing Spells table are added to the spell list of your spellcasting class.`,
    gnomishLineage:`You are part of a lineage that grants you supernatural abilities. Choose one of the following options; whichever one you choose, Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait <b class="importantDetail">(choose the ability when you select the lineage)</b>: <br>
    <br>
    <b class="importantDetail">Forest Gnome</b>: You know the <a class="importantDetail">Minor Illusion</a> cantrip. You also always have the Speak with Animals spell prepared. You can cast it without a spell slot a number of times equal to your <b class="importantDetail">Proficiency Bonus</b>, and you regain all expended uses when you finish a <b class="importantDetail">Long Rest</b>. You can also use any spell slots you have to cast the spell.<br>
    <br>

    <b class="importantDetail">Rock Gnome</b>. You know the <a class="importantDetail">Mending</a> and <a class="importantDetail">Prestidigitation</b> cantrips. In addition, you can spend 10 minutes casting <a class="importantDetail">Prestidigitation</a> to create a Tiny clockwork device (AC 5, 1 HP), such as a toy, fire starter, or music box. When you create the device, you determine its function by choosing one effect from <a class="importantDetail">Prestidigitation</b>; the device produces that effect whenever you or another creature takes a <a class="importantDetail">Bonus Action</a> to activate it with a touch. If the chosen effect has options within it, you choose one of those options for the device when you create it. For example, if you choose the spell's ignite-extinguish effect, you determine whether the device ignites or extinguishes fire; the device doesn't do both. You can have three such devices in existence at a time, and each falls apart 8 hours after its creation or when you dismantle it with a touch as a <b class="importantDetail">Utilize action</b>.`
}
const goliath = {
    name1:`Goliath`,
    name2:`Goliath (Base)(PHB 2024)`,
    size:`Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.`,
    speed:`30 feet`,
    speed2024:`35 feet`,
    age:`Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.`,
    abilityScore1:`Str +2; Constitution +1`,
    naturalAthlete: `You have proficiency in the Athletics skill.`,
    stonesEndurance:` You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest.`,
    powerfulBuild:` You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.`,
    mountainBorn:` You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet.`,
    languages: `You can speak, read, and write Common and Giant.`,
    giantAncestry: `You are descended from Giants. Choose one of the following benefits—a supernatural boon from your ancestry; you can use the chosen benefit a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest:<br>
    <br>
    <b class="importantDetail">Cloud's Jaunt (Cloud Giant)</b>: As a Bonus Action, you magically teleport up to 30 feet to an unoccupied space you can see.<br>
    <br>
    <b class="importantDetail">Fire's Burn (Fire Giant)</b>: When you hit a target with an attack roll and deal damage to it, you can also deal 1d10 Fire damage to that target.<br>
    <br>
    <b class="importantDetail">Frost's Chill (Frost Giant)</b>: When you hit a target with an attack roll and deal damage to it, you can also deal 1d6 Cold damage to that target and reduce its Speed by 10 feet until the start of your next turn.<br>
    <br>
    <b class="importantDetail">Hill's Tumble (Hill Giant)</b>: When you hit a Large or smaller creature with an attack roll and deal damage to it, you can give that target the Prone condition.<br>
    <br>
    <b class="importantDetail">Stone's Endurance (Stone Giant)</b>: When you take damage, you can take a Reaction to roll 1d12. Add your Constitution modifier to the number rolled and reduce the damage by that total.<br>
    <br>
    <b class="importantDetail">Storm's Thunder (Storm Giant)</b>: When you take damage from a creature within 60 feet of you, you can take a Reaction to deal 1d8 Thunder damage to that creature.`,
    largeForm:`Starting at character level 5, you can change your size to Large as a Bonus Action if you're in a big enough space. This transformation lasts for 10 minutes or until you end it (no action required). For that duration, you have Advantage on Strength checks, and your Speed increases by 10 feet. Once you use this trait, you can't use it again until you finish a Long Rest.`,
    powerfulBuild2024:` You have Advantage on any ability check you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity.`
}
const halfling = {
    name1:`Halfling: LightFoot`,
    name2:`Halfling: Mark Of Healing`,
    name3:`Halfling: Mark Of Hospitality`,
    name4:`Halfling: Stout`,
    name5:`Halfling: Lotusden`,
    name6:`Halfling: Ghostwise`,
    name7:`Halfling (Base)(2024)`,
    name8:`Halfling (Base)(2014)`,
    speed:`25 feet`,
    speed2024:`30 feet`,
    size:`Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.`,
    age:`A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.`,
    abilityScore1:`Dex+2; Charisma +1`,
    abilityScore2:`Dex+2; Wisdom +1`,
    abilityScore3:`Dex+2; Charisma +1`,
    abilityScore4:`Dex+2; Constitution +1`,
    abilityScore5:`Dex+2; Wisdom +1`,
    abilityScore6:`Dex+2; Wisdom +1`,
    abilityScore8:`Dex+2;`,
    lucky: `When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`,
    lucky2024:`When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll.`,
    brave: `You have advantage on saving throws against being frightened.`,
    languages: `You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.`,
    naturallyStealthy:` You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.`,
    stoutResilience:` You have advantage on saving throws against poison, and you have resistance against poison damage.`,
    medicalIntuition:` When you make a Wisdom (Medicine) check or an ability check using an herbalism kit, you can roll a d4 and add the number rolled to the ability check.`,
    healingTouch:` You can cast the cure wounds spell with this trait. Starting at 3rd level, you can also cast lesser restoration with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells.`,
    spellsoftheMark:` If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Healing Spells table are added to the spell list of your spellcasting class.`,
    childOfTheWood:`You know the druidcraft cantrip. When you reach 3rd level, you can cast the entangle spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the spike growth spell once with this trait and regain the ability to do so when you finish a long rest. Casting these spells with this trait doesn't require material components. Wisdom is your spellcasting ability for these spells.`,
    timberWalk:`Ability checks made to track you have disadvantage, and you can move across difficult terrain made of nonmagical plants and undergrowth without expending extra movement.`,
    silentSpeech:`You can speak telepathically to any creature within 30 feet of you. The creature understands you only if the two of you share a language. You can speak telepathically in this way to one creature at a time.`,
    halflingNimbleness:`You can move through the space of any creature that is of a size larger than yours.`,
    everHospitable:`When you make a Charisma (Persuasion) check or an ability check involving brewer's supplies or cook's utensils, you can roll a d4 and add the number rolled to the ability check.`,
    innkeepersMagic:`You know the prestidigitation cantrip. You can also cast the purify food and drink and unseen servant spells with this trait. Once you cast either spell with this trait, you can't cast that spell with it again until you finish long rest. Charisma is your spellcasting ability for these spells.`
}   
const human = {
    name1:`Human (Base)(PHB 2014)`,
    name2:`Human (Variant)`,
    name3:`Human (Mark of Handling)`,
    name4:`Human (Mark of Making)`,
    name5:`Human (Mark of Passage)`,
    name6:`Human (Mark of Sentinel)`,
    name7:`Human (Variant: Mark of Finding)`,
    name8:`Human (Keldon)`,
    name9:`Human (Base)(PHB 2024)`,
    size:`Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.`,
    speed:`30 feet`,
    speedMarkPassage:`Mark of Passage has 35 feet for his ability "Courier's Speed`,
    age:`Humans reach adulthood in their late teens and live less than a century`,
    abilityScore1:`+1 Every Attribute`,
    abilityScore2:`Any 2 attributes of your choice +1`,
    abilityScore3:`Wisdom +2; Any +1`,
    abilityScore4:`Int +2; Any +1`,
    abilityScore5:`Dex +2; Any +1`,
    abilityScore6:`Constitution +2, Wisdom +1`,
    abilityScore7:`Wisdom +2; Constitution +1`,
    abilityScore8:`Str +2; Constitution +1`,
    languages: `You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.`,
    wildIntuition:` When you make a Wisdom (Animal Handling) or Intelligence (Nature) check, you can roll a d4 and add the number rolled to the ability check.`,
    primalConnection:` You can cast the animal friendship and speak with animals spells with this trait, requiring no material component. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a short or long rest. Wisdom is your spellcasting ability for these spells.`,
    theBiggerTheyAre:` Starting at 3rd level, you can target a beast or monstrosity when you cast animal friendship or speak with animals, provided the creature's Intelligence score is 3 or lower.`,
    spellsOfTheMark:`If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Handling Spells table are added to the spell list of your spellcasting class.`,
    artisansIntuition:` When you make an Arcana check or an ability check involving artisan's tools, you can roll a d4 and add the number rolled to the ability check.`,
    makersGift:` You gain proficiency with one type of artisan's tools of your choice.`,
    spellsmith: `You know the mending cantrip. You can also cast the magic weapon spell with this trait. When you do so, the spell lasts for 1 hour and doesn't require concentration. Once you cast the spell with this trait, you can't do so again until you finish a long rest. Intelligence is your spellcasting ability for these spells.`,
    couriersSpeed:` Your base walking speed increases to 35 feet.`,
    intuitiveMotion:` When you make a Dexterity (Acrobatics) check or any ability check to operate or maintain a land vehicle, you can roll a d4 and add the number rolled to the ability check.`,
    magicalPassage:` You can cast the misty step spell once with this trait, and you regain the ability to cast it when you finish a long rest. Dexterity is your spellcasting ability for this spell.`,
    sentinelsIntuition:` When you make a Wisdom (Insight) or Wisdom (Perception) check, you can roll a d4 and add the number rolled to the ability check.`,
    guardiansShield:` You can cast the shield spell once with this trait, and you regain the ability to cast it after you finish a long rest. Wisdom is your spellcasting ability for this spell.`,
    vigilantGuardian:` When a creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to swap places with that creature, and you are hit by the attack instead. Once you use this trait, you can't do so again until you finish a long rest.`,
    skills:` You gain proficiency in one skill of your choice.`,
    feat:` You gain one feat of your choice.`,
    darkvision: `You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    huntersIntuition:` When you make a Wisdom (Perception) or Wisdom (Survival) check, you can roll a d4 and add the number rolled to the ability check.`,
    findersMagic:` You can cast the hunter's mark spell with this trait. Starting at 3rd level, you can also cast the locate object spell with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells.`,
    resourceful:`Resourceful. You gain Heroic Inspiration whenever you finish a Long Rest.`,
    skillful:`Skillful. You gain proficiency in one skill of your choice.`,
    versatile:`You gain an Origin feat of your choice.`,
    naturalAthlete:`You have proficiency in the Athletics skill.`,
    keldonResilience:`You have proficiency in Strength saving throws.`,
    icehavenBorn:`You are naturally adapted to cold climates, as described in chapter 5 of the Dungeon Master's Guide.`,
    alignment:`Keldons tend toward chaotic alignments, and many walk a fine line between good and evil.`
}
const orc = {
    name1:`Orc`,
    size:`Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.`,
    speed:`30 feet`,
    age:`Orcs reach adulthood at age 12 and live up to 50 years.`,
    abilityScore1:`Str +2; Constitution +1`,
    darkvision:`You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    aggressive:` As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started.`,
    primalIntuition:` You have proficiency in two of the following skills of your choice: Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival.`,
    powerfulBuild:` You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.`,
    languages:` You can speak, read, and write Common and Orc.`,
}
const tiefling = {
    name1:`Tiefling (Base)`,
    name2:`Tiefling (Asmodeus)`,
    name3:`Tiefling (Baalzebul)`,
    name4:`Tiefling (Dispater)`,
    name5:`Tiefling (Fierna)`,
    name6:`Tiefling (Glasya)`,
    name7:`Tiefling (Levistus)`,
    name8:`Tiefling (Mammon)`,
    name9:`Tiefling (Mephistopheles)`,
    name10:`Tiefling (Zariel)`,
    age:`Tieflings mature at the same rate as humans but live a few years longer.`,
    size:`Tieflings are about the same size and build as humans. Your size is Medium.`,
    speed:`30 feet`,
    abilityScore1:`Charisma +2; Int +1`,
    abilityScore2:`Charisma +2; Int +1`,
    abilityScore3:`Charisma +2; Int +1`,
    abilityScore4:`Charisma +2; Dex +1`,
    abilityScore5:`Charisma +2; Wis +1`,
    abilityScore6:`Charisma +2; Dex +1`,
    abilityScore7:`Charisma +2; Constitution +1`,
    abilityScore8:`Charisma +2; Int +1`,
    abilityScore9:`Charisma +2; Int +1`,
    abilityScore10:`Charisma +2; Str +1`,
    darkvision:`Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    hellishResistance:` You have resistance to fire damage.`,
    infernalLegacy:` You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    languages:` You can speak, read, and write Common and Infernal.`,
    legacyofMaladomini:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of sickness spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the crown of madness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofDis:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofPhlegethos:` You know the friends cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofMalbolge:` You know the minor illusion cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofStygia:` You know the ray of frost cantrip. When you reach 3rd level, you can cast the armor of Agathys spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    ñegacyofMinauros:` You know the mage hand cantrip. When you reach 3rd level, you can cast the Tenser's floating disk spell once with this trait and regain the ability to do so when you finish a short or long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait, requiring no material component, and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofAvernus:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofCania:` You know the mage hand cantrip. When you reach 3rd level, you can cast the burning hands spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the flame blade spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
}

const menuRaces = document.querySelector('.menu1');
const menuRacesDetails = document.querySelector('.race-layout');
const hideBtn = document.querySelector('.hide-btn');
const logo = document.querySelector('.logo');
let menuSwitch = true;

function logoReset(){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
}

function displayMenuRaces(race) {
    if (race === 'aasimar'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('aasimarBase')"><li>Aasimar (Base)(2024 PHB) </li></button>
                <button onclick="displayMenuRacesDetails('scourge')"><li>Scourge</li></button>
                <button onclick="displayMenuRacesDetails('protector')"><li>Protector</li></button>
                <button onclick="displayMenuRacesDetails('fallen')"><li>Fallen</li></button>
            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
        
        
    }
    else if (race === 'dragonborn'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('dragonbornBase2024')"><li>Dragonborn (Base)(PHB 2024) </li></button>
                <button onclick="displayMenuRacesDetails('dragonbornBase')"><li>Dragonborn (Base)(PHB 2014)</li></button>
                <button onclick="displayMenuRacesDetails('dragonbornDracon')"><li>Dragonborn (Draconblood)</li></button>
                <button onclick="displayMenuRacesDetails('dragonbornRavenite')"><li>Dragonborn (Ravenite)</li></button>
            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
        
    }
    else if (race === 'dwarf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

        <button onclick="displayMenuRacesDetails('dwarf2024')"><li>Dwarf (Base)(2024 PHB) </li></button>
        <button onclick="displayMenuRacesDetails('dwarf')"><li>Dwarf (Base)(2014 PHB)</li></button>
        <button onclick="displayMenuRacesDetails('dwarfduergar')"><li>Dwarf Duergar</li></button>
        <button onclick="displayMenuRacesDetails('dwarfhill')"><li>Dwarf of the Hill</li></button>
        <button onclick="displayMenuRacesDetails('dwarfmountain')"><li>Dwarf of the Mountain</li></button>
        <button onclick="displayMenuRacesDetails('dwarfmark')"><li>Dwarf : Mark of the Warding</li></button>
        <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`

        menuSwitch = false;
    }
    else if (race === 'elf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('elfBase2024')"><li>Elf (Base)(PHB 2024) </li></button>

                <button onclick="displayMenuRacesDetails('elfBase')"><li>Elf (Base)(PHB 2014)</li></button>

                <button onclick="displayMenuRacesDetails('highelf')"><li>High Elf</li></button>

                <button onclick="displayMenuRacesDetails('woodelf')"><li>Wood Elf</li></button>

                <button onclick="displayMenuRacesDetails('drowelf')"><li>Drow Elf</li></button>

                <button onclick="displayMenuRacesDetails('eladrinelf')"><li>Eladrin Elf</li></button>

                <button onclick="displayMenuRacesDetails('shadarelf')"><li>Shadar-kai Elf</li></button>

                <button onclick="displayMenuRacesDetails('seaelf')"><li>Sea Elf</li></button>

                <button onclick="displayMenuRacesDetails('pallidelf')"><li>Pallid Elf</li></button>

                <button onclick="displayMenuRacesDetails('markelf')"><li>Elf (Mark of Shadow)</li></button>

            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'gnome'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `
        
                <button onclick="displayMenuRacesDetails('gnomeBase2024')"><li>Gnome (Base)(PHB 2024)</li></button>
                <button onclick="displayMenuRacesDetails('gnomeBase2014')"><li>Gnome (Base)(PHB 2014)</li></button>
                <button onclick="displayMenuRacesDetails('forestGnome')"><li>Forest Gnome (2014)</li></button>
                <button onclick="displayMenuRacesDetails('rockGnome')"><li>Rock Gnome (2014)</li></button>
                <button onclick="displayMenuRacesDetails('deepGnome')"><li>Deep Gnome</li></button>
                <button onclick="displayMenuRacesDetails('gnomeMark')"><li>Gnome: Mark of Scribing (2014)</li></button>
         
        <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'goliath'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `
        
                <button onclick="displayMenuRacesDetails('goliathbase2024')"><li>Goliath (Base)(PHB 2024)</li></button>
                <button onclick="displayMenuRacesDetails('goliathbase')"><li>Goliath (Base)</li></button>
         
        <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'halfling'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('halflingbase2024')"><li>Halfling (Base)(PHB 2024) </li></button>

                <button onclick="displayMenuRacesDetails('halflingBase')"><li>Halfling (Base)(PHB 2014)</li></button>

                <button onclick="displayMenuRacesDetails('halflinglight')"><li>Halfling: Lightfoot</li></button>

                <button onclick="displayMenuRacesDetails('halflingstout')"><li>Halfling: Stout</li></button>

                <button onclick="displayMenuRacesDetails('halflinglotusden')"><li>Halfling: Lotusden</li></button>

                <button onclick="displayMenuRacesDetails('halflingghost')"><li>Halfling: Ghostwise</li></button>

                <button onclick="displayMenuRacesDetails('halfingmarkhealing')"><li>Halfling: Mark of Healing</li></button>

                <button onclick="displayMenuRacesDetails('halflingmarkhospital')"><li>Halfling: Mark of Hospitality</li></button>

            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'human'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('humanbase2024')"><li>Human (Base)(PHB 2024) </li></button>

                <button onclick="displayMenuRacesDetails('humanbase')"><li>Human (Base)(PHB 2014)</li></button>

                <button onclick="displayMenuRacesDetails('humanvariant')"><li>Human (Variant)</li></button>

                <button onclick="displayMenuRacesDetails('humankeldon')"><li>Human Keldon</li></button>

                <button onclick="displayMenuRacesDetails('humanmarkhandling')"><li>Human: Mark of Handling</li></button>

                <button onclick="displayMenuRacesDetails('humanmarkmaking')"><li>Human: Mark of Making</li></button>

                <button onclick="displayMenuRacesDetails('humanmarkpassage')"><li>Human: Mark of Passage</li></button>

                <button onclick="displayMenuRacesDetails('humanmarksentinel')"><li>Human: Mark of Sentinel</li></button>

                <button onclick="displayMenuRacesDetails('humanmarkfinding')"><li>Human: Mark of Finding</li></button>

            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'orc'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `
        <nav>
             <ul>
                <li>Scourge</li>
                <li>Protector</li>
                <li>Fallen</li>
            </ul>                                                              
        </nav>
        <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button>`
        menuSwitch = false;
    }
    else if (race === 'tiefling'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `
        <nav>
             <ul>
                <li>Scourge</li>
                <li>Protector</li>
                <li>Fallen</li>
            </ul>                                                              
        </nav>
        <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button>`
        menuSwitch = false;
    }
}

function hideMenuRaces(){
    if (!menuSwitch) {
        menuRaces.innerHTML = '';
        menuSwitch = true;
    }
    else {
        console.log ('error');
    }
}

function displayMenuRacesDetails(subrace){
    // AASIMAR
    if(subrace === 'fallen'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${aasimar.name1}</h1>
                <p><b>Ability Scores: </b> ${aasimar.abilityScore1}</p>
                <p><b>Size: </b>${aasimar.size}</p>
                <p><b>Speed: </b>${aasimar.speed}</p>
                <p><b>Age: </b>${aasimar.age}</p>
                <p><b>Lenguages: </b>${aasimar.lenguages}</p>
                <p><b>Dark Vision: </b>${aasimar.darkvision}</p>
                <p><b>Celestial Resistance: </b>${aasimar.celestialResistance}</p>
                <p><b>Healing Hands: </b>${aasimar.healingHand}</p>
                <p><b>Light Barrier: </b>${aasimar.lightBarrier}</p>
                <p><b>Necrotic Shroud: </b>${aasimar.necroticShroud}</p>
                <button onclick = "displayMenuRaces('aasimar')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'protector') {
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${aasimar.name2}</h1>
                <p><b>Ability Scores: </b> ${aasimar.abilityScore1}</p>
                <p><b>Size: </b>${aasimar.size}</p>
                <p><b>Speed: </b>${aasimar.speed}</p>
                <p><b>Age: </b>${aasimar.age}</p>
                <p><b>Lenguages: </b>${aasimar.lenguages}</p>
                <p><b>Dark Vision: </b>${aasimar.darkvision}</p>
                <p><b>Celestial Resistance: </b>${aasimar.celestialResistance}</p>
                <p><b>Healing Hands: </b>${aasimar.healingHand}</p>
                <p><b>Light Barrier: </b>${aasimar.lightBarrier}</p>
                <p><b>Radiant Soul: </b>${aasimar.radiantSoul}</p>
                <button onclick = "displayMenuRaces('aasimar')"> BACK </button>
                </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'scourge') {   
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${aasimar.name3}</h1>
                <p><b>Ability Scores: </b> ${aasimar.abilityScore1}</p>
                <p><b>Size: </b>${aasimar.size}</p>
                <p><b>Speed: </b>${aasimar.speed}</p>
                <p><b>Age: </b>${aasimar.age}</p>
                <p><b>Lenguages: </b>${aasimar.lenguages}</p>
                <p><b>Dark Vision: </b>${aasimar.darkvision}</p>
                <p><b>Celestial Resistance: </b>${aasimar.celestialResistance}</p>
                <p><b>Healing Hands: </b>${aasimar.healingHand}</p>
                <p><b>Light Barrier: </b>${aasimar.lightBarrier}</p>
                <p><b>Radiant Consumption: </b>${aasimar.radiantConsumption}</p>
                <button onclick = "displayMenuRaces('aasimar')"> BACK </button>
                </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'aasimarBase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
       <div class="races-container">
            <div class="race-detail-container">
                <h1>${aasimar.name4}</h1>
                <p><b>Ability Scores: </b> ${aasimar.abilityScore1}</p>
                <p><b>Size: </b>${aasimar.size}</p>
                <p><b>Speed: </b>${aasimar.speed}</p>
                <p><b>Age: </b>${aasimar.age}</p>
                <p><b>Lenguages: </b>${aasimar.lenguages}</p>
                <p><b>Dark Vision: </b>${aasimar.darkvision}</p>
                <p><b>Celestial Resistance: </b>${aasimar.celestialResistance}</p>
                <p><b>Healing Hands: </b>${aasimar.healingHand}</p>
                <p><b>Light Barrier: </b>${aasimar.lightBarrier}</p>
                <p><b>Celestial Revelation: </b>${aasimar.celestialRevelation}</p>
                <button onclick = "displayMenuRaces('aasimar')"> BACK </button>
                </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    // DRAGONBORN
    else if (subrace === 'dragonbornBase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
       <div class="races-container">
            <div class="race-detail-container">
                <h1>${dragonborn.name1}</h1>
                <p><b>Size: </b>${dragonborn.size}</p>
                <p><b>Speed: </b>${dragonborn.speed}</p>
                <p><b>Age: </b>${dragonborn.age}</p>
                <p><b>Lenguages: </b>${dragonborn.languages}</p>
                <p><b>Dark Vision: </b>${dragonborn.darkvision}</p>
                <p><b>Breath Weapon: </b>${dragonborn.breathWeapon2024}</p>
                <p><b>Draconic Flight: </b>${dragonborn.draconicFlight}</p>
                <p><b>Damage Resistance: </b>${dragonborn.damageResistance}</p>
                <p><b>Draconic Ancestry: </b>${dragonborn.draconicAncestry}</p>
                <button onclick = "displayMenuRaces('dragonborn')"> BACK </button>
                </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'dragonbornBase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
       <div class="races-container">
            <div class="race-detail-container">
                <h1>${dragonborn.name2}</h1>
                <p><b>Ability Score: </b>${dragonborn.abilityScore1}</p>
                <p><b>Size: </b>${dragonborn.size}</p>
                <p><b>Speed: </b>${dragonborn.speed}</p>
                <p><b>Age: </b>${dragonborn.age}</p>
                <p><b>Lenguages: </b>${dragonborn.languages}</p>
                <p><b>Breath Weapon: </b>${dragonborn.breathWeapon}</p>
                <p><b>Damage Resistance: </b>${dragonborn.damageResistance}</p>
                <p><b>Draconic Ancestry: </b>${dragonborn.draconicAncestry}</p>
                <button onclick = "displayMenuRaces('dragonborn')"> BACK </button>
                </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'dragonbornDracon'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${dragonborn.name3}</h1>
            <p><b>Ability Score: </b>${dragonborn.abilityScore2}</p>
            <p><b>Size: </b>${dragonborn.size}</p>
            <p><b>Speed: </b>${dragonborn.speed}</p>
            <p><b>Age: </b>${dragonborn.age}</p>
            <p><b>Lenguages: </b>${dragonborn.languages}</p>
            <p><b>Dark Vision: </b>${dragonborn.darkvision}</p>
            <p><b>Breath Weapon: </b>${dragonborn.breathWeapon}</p>
            <p><b>Forceful Presence: </b>${dragonborn.forcefulPresence}</p>
            <p><b>Draconic Ancestry: </b>${dragonborn.draconicAncestry}</p>
            <button onclick = "displayMenuRaces('dragonborn')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ; 
    }
    else if (subrace === 'dragonbornRavenite'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${dragonborn.name4}</h1>
            <p><b>Ability Score: </b>${dragonborn.abilityScore3}</p>
            <p><b>Size: </b>${dragonborn.size}</p>
            <p><b>Speed: </b>${dragonborn.speed}</p>
            <p><b>Age: </b>${dragonborn.age}</p>
            <p><b>Lenguages: </b>${dragonborn.languages}</p>
            <p><b>Dark Vision: </b>${dragonborn.darkvision}</p>
            <p><b>Breath Weapon: </b>${dragonborn.breathWeapon}</p>
            <p><b>Vengeful Assault: </b>${dragonborn.vengefulAssault}</p>
            <p><b>Draconic Ancestry: </b>${dragonborn.draconicAncestry}</p>
            <button onclick = "displayMenuRaces('dragonborn')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;   
    }
    //ELF
    else if (subrace === 'elfBase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name9}</h1>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry2024}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses2024}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Elven Lineage: </b>${elf.elvenLineage}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;   
    }
    else if (subrace === 'elfBase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name8}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore9}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'highelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name1}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore1}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Extra Language: </b>${elf.extraLanguage1}</p>
            <p><b>Cantrip: </b>${elf.cantrip}</p>
            <p><b>Elf Weapon Training: </b>${elf.elfWeaponTraining}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'woodelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name2}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore2}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speedWoodElf}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Mask of the Wild: </b>${elf.maskoftheWild}</p>
            <p><b>Fleet of Foot: </b>${elf.fleetofFoot}</p>
            <p><b>Elf Weapon Training: </b>${elf.elfWeaponTraining}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'drowelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name3}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore3}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Superior DarkVision: </b>${elf.superiorDarkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Sunlight Sensitivity: </b>${elf.sunlightSensitivity}</p>
            <p><b>Drow Magic: </b>${elf.drowMagic}</p>
            <p><b>Drow Weapon Training: </b>${elf.drowWeaponTraining}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'eladrinelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name4}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore4}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Fey Step: </b>${elf.feyStep}
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'shadarelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name6}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore6}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Necrotic Resistance: </b>${elf.necroticResistance}
            <p><b>Blessing of the Raven Queen: </b>${elf.blessingoftheRavenQueen}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;   
    }
    else if (subrace === 'seaelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name7}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore7}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speedSeaElf}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Extra Language: </b>${elf.extraLanguage7}</p>
            <p><b>Sea Elf Training: </b>${elf.seaElfTraining}</p>
            <p><b>Child of the Sea: </b>${elf.childoftheSea}</p>
            <p><b>Friend of the Sea: </b>${elf.friendoftheSea}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;   
    }
    else if (subrace === 'pallidelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name10}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore10}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Incisive Sense: </b>${elf.incisiveSense}</p>
            <p><b>Blessing of the Moon Weaver: </b>${elf.blessingoftheMoonWeaver}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;    
    }
    else if (subrace === 'markelf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
        <div class="race-detail-container">
            <h1>${elf.name5}</h1>
            <p><b>Ability Score: </b>${elf.abilityScore5}</p>
            <p><b>Size: </b>${elf.size}</p>
            <p><b>Speed: </b>${elf.speed}</p>
            <p><b>Age: </b>${elf.age}</p>
            <p><b>Lenguages: </b>${elf.languages}</p>
            <p><b>Dark Vision: </b>${elf.darkvision}</p>
            <p><b>Fey Ancestry: </b>${elf.feyAncestry}</p>
            <p><b>Keen Senses: </b>${elf.keenSenses}</p>
            <p><b>Trance: </b>${elf.trance}</p>
            <p><b>Cunning Intuition: </b>${elf.cunningIntuition}</p>
            <p><b>Shape of Shadow: </b>${elf.shapeShadows}</p>
            <p><b>Spells of the Mark: </b>${elf.spellsOfTheMark}</p>
            <button onclick = "displayMenuRaces('elf')"> BACK </button>
            </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;     
    }
    // DWARF SUBRACE
    else if(subrace === 'dwarf2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name6}</h1>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed2024}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Dark Vision: </b>${dwarf.darkvision}</p>
                <p><b>Dwarven Resilience: </b>${dwarf.dwarvenResilience}</p>
                <p><b>Dwarven Toughness: </b>${dwarf.dwarvenToughness}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning2024}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarf2024.png" alt="">
            </div>
        </div>`
    ;  
    }
    else if(subrace === 'dwarf'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name5}</h1>
                <p><b>Ability Scores: </b> ${dwarf.abilityScore5}</p>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Dark Vision: </b>${dwarf.darkvision}</p>
                <p><b>Dwarven Resilience: </b>${dwarf.dwarvenResilience}</p>
                <p><b>Dwarven Combat Training: </b>${dwarf.dwarvenCombatTraining}</p>
                <p><b>Tool Proficiency: </b>${dwarf.toolProficiency}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarfBase.png" alt="">
            </div>
        </div>`
    ;  
    }
    else if(subrace === 'dwarfduergar'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name3}</h1>
                <p><b>Ability Scores: </b> ${dwarf.abilityScore3}</p>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Superior Dark Vision: </b>${dwarf.superiorDarkvision}</p>
                <p><b>Duergar Resilience: </b>${dwarf.duergarResilience}</p>
                <p><b>Dwarven Combat Training: </b>${dwarf.dwarvenCombatTraining}</p>
                <p><b>Tool Proficiency: </b>${dwarf.toolProficiency}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning}</p>
                <p><b>Duergar Magic: </b>${dwarf.duergarMagic}</p>
                <p><b>Sunlight Sensitivity: </b>${dwarf.sunlightSensitivity}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarfDuergar.png" alt="">
            </div>
        </div>`
    ;  
    }
    else if(subrace === 'dwarfhill'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name1}</h1>
                <p><b>Ability Scores: </b> ${dwarf.abilityScore1}</p>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Dark Vision: </b>${dwarf.darkvision}</p>
                <p><b>Dwarven Resilience: </b>${dwarf.dwarvenResilience}</p>
                <p><b>Dwarven Combat Training: </b>${dwarf.dwarvenCombatTraining}</p>
                <p><b>Tool Proficiency: </b>${dwarf.toolProficiency}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning}</p>
                <p><b>Dwarven Toughness: </b>${dwarf.dwarvenToughness}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarfHill.png" alt="">
            </div>
        </div>`
    ;  
    }
    else if(subrace === 'dwarfmountain'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name2}</h1>
                <p><b>Ability Scores: </b> ${dwarf.abilityScore2}</p>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Dark Vision: </b>${dwarf.darkvision}</p>
                <p><b>Dwarven Resilience: </b>${dwarf.dwarvenResilience}</p>
                <p><b>Dwarven Combat Training: </b>${dwarf.dwarvenCombatTraining}</p>
                <p><b>Tool Proficiency: </b>${dwarf.toolProficiency}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning}</p>
                <p><b>Dwarven Armor Training: </b>${dwarf.dwarvenArmorTraining}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarfMountain.png" alt="">
            </div>
        </div>`
    ;  
    }
    else if(subrace === 'dwarfmark'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML=`
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${dwarf.name4}</h1>
                <p><b>Ability Scores: </b> ${dwarf.abilityScore4}</p>
                <p><b>Size: </b>${dwarf.size}</p>
                <p><b>Speed: </b>${dwarf.speed}</p>
                <p><b>Age: </b>${dwarf.age}</p>
                <p><b>Lenguages: </b>${dwarf.lenguages}</p>
                <p><b>Dark Vision: </b>${dwarf.darkvision}</p>
                <p><b>Dwarven Resilience: </b>${dwarf.dwarvenResilience}</p>
                <p><b>Dwarven Combat Training: </b>${dwarf.dwarvenCombatTraining}</p>
                <p><b>Tool Proficiency: </b>${dwarf.toolProficiency}</p>
                <p><b>Stonecunning: </b>${dwarf.stonecunning}</p>
                <p><b>Warder's Intuition: </b>${dwarf.wardersIntuition}</p>
                <p><b>Wards and Seals: </b>${dwarf.wardsAndSeals}</p>
                <p><b>Spells of the Mark: </b>${dwarf.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('dwarf')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/dwarfWarding.png" alt="">
            </div>
        </div>`
    ;  
    }
    //GNOME
    else if(subrace === 'gnomeBase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name6}</h1>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed2024}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Lenguages: </b>${gnome.languages}</p>
                <p><b>Dark Vision: </b>${gnome.darkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Gnomish Lineage: </b>${gnome.gnomishLineage}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if(subrace === 'gnomeBase2014'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name5}</h1>
                <p><b>Ability Scores: </b> ${aasimar.abilityScore5}</p>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Lenguages: </b>${gnome.languages}</p>
                <p><b>Dark Vision: </b>${gnome.darkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Gnomish Lineage: </b>${gnome.gnomishLineage}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if(subrace === 'forestGnome'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name2}</h1>
                <p><b>Ability Scores: </b> ${gnome.abilityScore2}</p>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Lenguages: </b>${gnome.languages}</p>
                <p><b>Dark Vision: </b>${gnome.darkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Gnomish Lineage: </b>${gnome.gnomishLineage}</p>
                <p><b>Natural Illusionist: </b>${gnome.naturalIllusionist}</p>
                <p><b>Speak with Small Beast: </b>${gnome.speakwithSmallBeasts}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if(subrace === 'rockGnome'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name4}</h1>
                <p><b>Ability Scores: </b> ${gnome.abilityScore4}</p>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Lenguages: </b>${gnome.languages}</p>
                <p><b>Dark Vision: </b>${gnome.darkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Gnomish Lineage: </b>${gnome.gnomishLineage}</p>
                <p><b>Artificer's Lore: </b>${gnome.artificersLore}</p>
                <p><b>Tinker: </b>${gnome.tinker}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if(subrace === 'deepGnome'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name1}</h1>
                <p><b>Ability Scores: </b> ${gnome.abilityScore1}</p>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Languages: </b>${gnome.languages1}</p>
                <p><b>Superior Darkvision: </b>${gnome.superiorDarkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Stone Camouflage: </b>${gnome.stoneCamouflage}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if(subrace === 'gnomeMark'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${gnome.name3}</h1>
                <p><b>Ability Scores: </b> ${gnome.abilityScore3}</p>
                <p><b>Size: </b>${gnome.size}</p>
                <p><b>Speed: </b>${gnome.speed}</p>
                <p><b>Age: </b>${gnome.age}</p>
                <p><b>Languages: </b>${gnome.languages}</p>
                <p><b>Dark Vision: </b>${gnome.darkvision}</p>
                <p><b>Gnome Cunning: </b>${gnome.gnomeCunning}</p>
                <p><b>Gifted Scribe: </b>${gnome.giftedScribe}</p>
                <p><b>Scribe's Insight: </b>${gnome.scribesInsight}</p>
                <p><b>Spells of the Mark: </b>${gnome.spellsoftheMark}</p>
                <button onclick = "displayMenuRaces('gnome')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    // GOLIATH
    else if (subrace === 'goliathbase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${goliath.name1}</h1>
                <p><b>Size: </b>${goliath.size}</p>
                <p><b>Speed: </b>${goliath.speed2024}</p>
                <p><b>Age: </b>${goliath.age}</p>
                <p><b>Lenguages: </b>${goliath.languages}</p>
                <p><b>Large Form: </b>${goliath.largeForm}</p>
                <p><b>Powerful Build: </b>${goliath.powerfulBuild2024}</p>
                <p><b>Giant Ancestry: </b>${goliath.giantAncestry}</p>
                <button onclick = "displayMenuRaces('goliath')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'goliathbase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${goliath.name2}</h1>
                <p><b>Size: </b>${goliath.size}</p>
                <p><b>Speed: </b>${goliath.speed}</p>
                <p><b>Age: </b>${goliath.age}</p>
                <p><b>Lenguages: </b>${goliath.languages}</p>
                <p><b>Natural Athlete: </b>${goliath.naturalAthlete}</p>
                <p><b>Powerful Build: </b>${goliath.powerfulBuild}</p>
                <p><b>Stone Endurance: </b>${goliath.stonesEndurance}</p>
                <p><b>Mountain Born: </b>${goliath.mountainBorn}</p>
                <button onclick = "displayMenuRaces('goliath')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    // HALFLING
    else if (subrace === 'halflingbase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name7}</h1>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed2024}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky2024}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Naturally Stealthy: </b>${halfling.naturallyStealthy}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflingBase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name8}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore8}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflinglight'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name1}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore1}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Naturally Stealthy: </b>${halfling.naturallyStealthy}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflingstout'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name4}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore4}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Stout Resilience: </b>${halfling.stoutResilience}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflinglotusden'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name5}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore5}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Child of the Woods: </b>${halfling.childOfTheWood}</p>
                <p><b>Timberwalk: </b>${halfling.timberWalk}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflingghost'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name6}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore6}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Silent Speech: </b>${halfling.silentSpeech}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
    }
    else if (subrace === 'halflingmarkhealing'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name2}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore2}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Medical Intuition: </b>${halfling.medicalIntuition}</p>
                <p><b>Healing Touch: </b>${halfling.healingTouch}</p>
                <p><b>Spells of the Mark: </b>${halfling.spellsoftheMark}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ; 
    }
    else if (subrace === 'halflingmarkhospitality'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${halfling.name3}</h1>
                <p><b>Ability Score: </b>${halfling.abilityScore3}</p>
                <p><b>Size: </b>${halfling.size}</p>
                <p><b>Speed: </b>${halfling.speed}</p>
                <p><b>Age: </b>${halfling.age}</p>
                <p><b>Lucky: </b>${halfling.lucky}</p>
                <p><b>Brave: </b>${halfling.brave}</p>
                <p><b>Halfling Nimbleness: </b>${halfling.halflingNimbleness}</p>
                <p><b>Ever Hospitable: </b>${halfling.everHospitable}</p>
                <p><b>Innkeeper's Magic: </b>${halfling.innkeepersMagic}</p>
                <p><b>Spells of the Mark: </b>${halfling.spellsoftheMark}</p>
                <button onclick = "displayMenuRaces('halfling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    // HUMAN
    else if (subrace === 'humanbase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name9}</h1>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Resourceful: </b>${human.resourceful}</p>
                <p><b>Skillful: </b>${human.skillful}</p>
                <p><b>Versatile: </b>${human.versatile}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;   
    }
    else if (subrace === 'humanbase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name1}</h1>
                <p><b>Ability Score: </b>${human.abilityScore1}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;   
    }
    else if (subrace === 'humanvariant'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name2}</h1>
                <p><b>Ability Score: </b>${human.abilityScore2}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Skills: </b>${human.skills}</p>
                <p><b>Feat: </b>${human.feat}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;   
    }
    else if (subrace === 'humankeldon'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name2}</h1>
                <p><b>Ability Score: </b>${human.abilityScore2}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Natural Athlete: </b>${human.naturalAthlete}</p>
                <p><b>Keldon Resilience: </b>${human.keldonResilience}</p>
                <p><b>Icehaven Born: </b>${human.icehavenBorn}</p>
                <p><b>Alignment: </b>${human.alignment}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkhandling'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name3}</h1>
                <p><b>Ability Score: </b>${human.abilityScore3}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Wild Intuition: </b>${human.wildIntuition}</p>
                <p><b>Primal Connection: </b>${human.primalConnection}</p>
                <p><b>The Bigger They Are: </b>${human.theBiggerTheyAre}</p>
                <p><b>Spells of the Mark: </b>${human.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkmaking'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name4}</h1>
                <p><b>Ability Score: </b>${human.abilityScore4}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Artisan's Intuition: </b>${human.artisansIntuition}</p>
                <p><b>Maker's Gift: </b>${human.makersGift}</p>
                <p><b>Spellsmith: </b>${human.spellsmith}</p>
                <p><b>Spells of the Mark: </b>${human.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkpassage'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name5}</h1>
                <p><b>Ability Score: </b>${human.abilityScore5}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speedMarkPassage}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Intuitive Motion: </b>${human.intuitiveMotion}</p>
                <p><b>Magical Passage: </b>${human.magicalPassage}</p>
                <p><b>Courier's Speed: </b>${human.couriersSpeed}</p>
                <p><b>Spells of the Mark: </b>${human.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'humanmarksentinel'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name6}</h1>
                <p><b>Ability Score: </b>${human.abilityScore6}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Sentinel's Intuition: </b>${human.sentinelsIntuition}</p>
                <p><b>Guardian's Shield: </b>${human.guardiansShield}</p>
                <p><b>Vigilant Guardian: </b>${human.vigilantGuardian}</p>
                <p><b>Spells of the Mark: </b>${human.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkfinding'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${human.name7}</h1>
                <p><b>Ability Score: </b>${human.abilityScore7}</p>
                <p><b>Size: </b>${human.size}</p>
                <p><b>Speed: </b>${human.speed}</p>
                <p><b>Age: </b>${human.age}</p>
                <p><b>Language: </b>${human.languages}</p>
                <p><b>Dark Vision: </b>${human.darkvision}</p>
                <p><b>Hunter's Intuition: </b>${human.huntersIntuition}</p>
                <p><b>Finder's Magic: </b>${human.findersMagic}</p>
                <p><b>Spells of the Mark: </b>${human.spellsOfTheMark}</p>
                <button onclick = "displayMenuRaces('human')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
}


