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
    draconicAncestry:` Your lineage stems from a dragon progenitor. Choose the kind of dragon from the Draconic Ancestors table. Your choice affects your Breath Weapon and Damage Resistance traits as well as your appearance: <br>
    <br>
    <table class="tabledragonborn">
                            <tr >
                                <th>Dragon</th>
                                <th>Damage type</th>
                            </tr>
                            <tr >
                                <td >Black</td>
                                <td>Acid</td>
                            </tr>
                            <tr >
                                <td>Blue</td>
                                <td>Lighting</td>
                            </tr>
                            <tr >
                                <td>Brass</td>
                                <td>Fire</td>
                            </tr>
                            <tr >
                                <td>Bronze</td>
                                <td>Lighting</td>
                            </tr>
                            <tr >
                                <td>Cooper</td>
                                <td>Acid</td>
                            </tr>
                            <tr >
                                <td>Gold</td>
                                <td>Fire</td>
                            </tr>
                            <tr >
                                <td>Green</td>
                                <td>Poison</td>
                            </tr>
                            <tr >
                                <td>Red</td>
                                <td>Fire</td>
                            </tr>
                            <tr >
                                <td>Silver</td>
                                <td>Cold</td>
                            </tr>
                            <tr >
                                <td>white</td>
                                <td>Cold</td>
                            </tr>
                        </table>`,
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
    dwarvenArmorTraining: `You have proficiency with light and medium armor.`, 
    superiorDarkvision: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`, 
    duergarMagic: `When you reach 3rd level, you can cast the <b class="importantDetail">Enlarge/Reduce</b> spell on yourself once with this trait, using only the spell's enlarge option. When you reach 5th level, you can cast the <b class="importantDetail">Invisibility</b> spell on yourself once with this trait. You don't need material components for either spell, and you can't cast them while you're in direct sunlight, although sunlight has no effect on them once cast. You regain the ability to cast these spells with this trait when you finish a long rest. Intelligence is your spellcasting ability for these spells.`,
    sunlightSensitivity: `You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.`,
    wardersIntuition: `When you make an Intelligence (Investigation) check or an ability check using <b class="importantDetail">thieves' tools</b>, you can roll a <b class="importantDetail">d4</b> and add the number rolled to the ability check.`,
    wardsAndSeals:`You can cast the <b class="importantDetail">alarm</b> and <b class="importantDetail">mage armor</b> spells with this trait. Starting at 3rd level, you can also cast the <b class="importantDetail">arcane lock</b> spell with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. Intelligence is your spellcasting ability for these spells, and you don't need material components for them when you cast them with this trait.`,
    spellsOfTheMark:`If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Warding Spells table are added to the spell list of your spellcasting class.<br>
    <br>
    <table class="tableSpellsOfTheMark">
                            <tr>
                                <th class="th-spell">Spell Level</th>
                                <th class="th-level">Spells</th>
                            </tr>
                            <tr>
                                <td class="td-level">1st</td>
                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:alarm">Alarm</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:armor-of-agathys">Armor of Agathys</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">2st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:arcane-lock">Arcane Lock</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:knock">Knock</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">3st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:glyph-of-warding">Glyph of warding</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:magic-circle">Magic Circle</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">4st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:leomunds-secret-chest">Leomund's Secret Chest</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:mordenkainens-faithful-hound">Mordenkainen's faithful hound</a>  

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">5st</td>

                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:antilife-shell">Antilife Shell</a>

                                </td>
                            </tr>
                        </table>`,
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
    Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).<br>
    <br>
    <table class="tableSubclasses2024">
                            <tr>
                                <th class="th-subclass">Lineage</th>
                                <th class="th-info">Level 1</th>
                                <th class="th-info">Level 3</th>
                                <th class="th-info">Level 5</th>
                            </tr>
                            <tr>
                                <td class="td-subclass">Drow</td>
                                <td class="td-info">
                                    The range of your Darkvision increases to 120 feet. You also know the <a target="_blank" href="https://dnd5e.wikidot.com/spell:dancing-lights">Dancing Lights</a> cantrip.
                                </td>
                                <td class="td-info">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:faerie-fire">Faerie Fire</a>
                                </td>
                                <td class="td-info">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:darkness">Darkness</a>
                                </td>
                            </tr>
                            <tr>
                                    <td class="td-subclass">High Elf</td>
                                    <td class="td-info">
                                        You know the <a target="_blank" href="https://dnd5e.wikidot.com/spell:prestidigitation">Prestidigitation</a> cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the <b class="importantDetail">Wizard spell list</b>.
                                    </td>
                                    <td class="td-info">
                                        <a target="_blank" href="https://dnd5e.wikidot.com/spell:detect-magic">Detect Magic</a>
                                    </td>
                                    <td class="td-info">
                                        <a target="_blank" href="https://dnd5e.wikidot.com/spell:misty-step">Misty Step</a>
                                    </td>
                                </td>
                            </tr>
                            <tr>
                                <td class="td-subclass">Wood Elf</td>
                                <td class="td-info">
                                    Your Speed increases to 35 feet. You also know the <a target="_blank" href="https://dnd5e.wikidot.com/spell:druidcraft">Druidcraft</a> cantrip.
                                </td>
                                <td class="td-info">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:longstrider">Longstrider</a>
                                </td>
                                <td class="td-info">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:pass-without-trace">Pass without trace</a>
                                </td>
                            </tr>
                        </table>`,
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
    spellsOfTheMark: `If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Shadow Spells table are added to the spell list of your spellcasting class.<br>
    <br>
    <table class="tableSpellsOfTheMark">
                            <tr>
                                <th class="th-spell">Spell Level</th>
                                <th class="th-level">Spells</th>
                            </tr>
                            <tr>
                                <td class="td-level">1st</td>
                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:disguise-self">Disguise self</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:silent-image">Silent image</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">2st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:darkness">Darkness</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:pass-without-trace">Pass without trace</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">3st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:clairvoyance">Clairvoyance</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:major-image">Major image</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">4st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:greater-invisibility">Greater Invisibility</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:mislead">hallucinatory terrain</a>  

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">5st</td>

                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:antilife-shell">Misslead</a>
                                    
                                </td>
                            </tr>
                        </table>`,
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
    spellsoftheMark:` If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Scribing Spells table are added to the spell list of your spellcasting class.
    <br>
    <br>
    <table class="tableSpellsOfTheMark">
                            <tr>
                                <th class="th-spell">Spell Level</th>
                                <th class="th-level">Spells</th>
                            </tr>
                            <tr>
                                <td class="td-level">1st</td>
                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:comprehend-languages">Comprehend languages</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:illusory-script">Illusory script</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">2st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:animal-messenger">Animal messenger</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:silence">Silence</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">3st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:sending">Sending</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:tongues">Tongues</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">4st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:arcane-eye">Arcane eye</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:confusion">Confusion</a>  

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">5st</td>

                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:dream">Dream</a>
                                    
                                </td>
                            </tr>
                        </table>`,
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
    spellsoftheMarkHealing:` If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Healing Spells table are added to the spell list of your spellcasting class.<br>
    <br>
    <table class="tableSpellsOfTheMark">
                            <tr>
                                <th class="th-spell">Spell Level</th>
                                <th class="th-level">Spells</th>
                            </tr>
                            <tr>
                                <td class="td-level">1st</td>
                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:cure-wounds">Cure wounds</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:healing-word">Healing word</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">2st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:lesser-restoration">Lesser restoration</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:prayer-of-healing">Prayer of healing</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">3st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:aura-of-vitality">Aura of vitality</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:mass-healing-word">Mass healing word</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">4st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:aura-of-purity">Aura of purity</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:aura-of-life">Aura of life</a>  

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">5st</td>

                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:greater-restoration">Greater restoration</a>
                                    
                                </td>
                            </tr>
                        </table>`,
    spellsoftheMarkHospitality:` If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Healing Spells table are added to the spell list of your spellcasting class.<br>
    <br>
    <table class="tableSpellsOfTheMark">
                            <tr>
                                <th class="th-spell">Spell Level</th>
                                <th class="th-level">Spells</th>
                            </tr>
                            <tr>
                                <td class="td-level">1st</td>
                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:goodberry">Goodberry</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:sleep">Sleep</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">2st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:aid">Aid</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:calm-emotions">Calm emotions</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">3st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:create-food-and-water">Create food and water</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:leomunds-tiny-hut">Leomund's tiny hut</a>

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">4st</td>
                                <td class="td-spell">

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:aura-of-purity">Aura of purity</a> -

                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:mordenkainens-private-sanctum">Mordenkainen's private sanctum</a>  

                                </td>
                            </tr>
                            <tr>
                                <td class="td-level">5st</td>

                                <td class="td-spell">
                                    <a target="_blank" href="https://dnd5e.wikidot.com/spell:hallow">Hallow</a>
                                    
                                </td>
                            </tr>
                        </table>`,
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
    name1:`Orc (Base)(PHB 2024)`,
    name2:`Half-Orc`,
    name3:`Half-Orc Mark of Finding`,
    abilityScore2:`Str +2; Constitution +1`,
    abilityScore3:`Str +2: Constitution +1`,
    size:`Orcs are usually over 6 feet tall and weigh between 230 and 280 pounds. Your size is Medium.`,
    sizeHalf:`Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.`,
    speed:`30 feet`,
    age:`Orcs reach adulthood at age 12 and live up to 50 years.`,
    ageHalf:`Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.`,
    abilityScore1:`Str +2; Constitution +1`,
    darkvision:`You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    darkvision2024:`You have Darkvision with a range of 120 feet.`,
    languages:` You can speak, read, and write Common and Orc.`,
    menacing:` You gain proficiency in the Intimidation skill.`,
    relentlessEndurance: `When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.`,
    savageAttacks:` When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.`,
    adrenalineRush: `You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus.
    You can use this trait a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Short or Long Rest.`,
    relentlessEndurance:`When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest.`,
    huntersIntuition:` When you make a Wisdom (Perception) or Wisdom (Survival) check, you can roll a d4 and add the number rolled to the ability check.`,
    findersMagic:`You can cast the hunter's mark spell with this trait. Starting at 3rd level, you can also cast the locate object spell with it. Once you cast either spell with this trait, you can't cast that spell with it again until you finish a long rest. Wisdom is your spellcasting ability for these spells.`,
    spellsoftheMark: `If you have the Spellcasting or the Pact Magic class feature, the spells on the Mark of Finding Spells table are added to the spell list of your spellcasting class.`
}
const tiefling = {
    name1:`Tiefling (Base)(PHB 2014)`,
    name2:`Tiefling (Asmodeus)`,
    name3:`Tiefling (Baalzebul)`,
    name4:`Tiefling (Dispater)`,
    name5:`Tiefling (Fierna)`,
    name6:`Tiefling (Glasya)`,
    name7:`Tiefling (Levistus)`,
    name8:`Tiefling (Mammon)`,
    name9:`Tiefling (Mephistopheles)`,
    name10:`Tiefling (Zariel)`,
    name11:`Tiefling (Devil's Tongue)`,
    name12:`Tiefling (Hellfire)`,
    name13:`Tiefling (Infernal Legacy)`,
    name14:`Tiefling (Winged)`,
    name15:`Tiefling (Base)(PHB 2024)`,
    age:`Tieflings mature at the same rate as humans but live a few years longer.`,
    size:`Tieflings are about the same size and build as humans. Your size is Medium.`,
    speed:`30 feet`,
    speedwinged:`30 feet, Fly 30 feet`,
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
    abilityScore11:`Int +1; Dex or Charisma +2`,
    abilityScore12:`Int +1; Dex or Charisma +2`,
    abilityScore13:`Int +1; Dex or Charisma +2`,
    abilityScore14:`Int +1; Dex or Charisma +2`,
    darkvision:`Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.`,
    hellishResistance:` You have resistance to fire damage.`,
    infernalLegacy:` You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell with this trait; you regain the ability to cast it when you finish a long rest. Once you reach 5th level, you can also cast the darkness spell once per day with this trait; you regain the ability to cast it when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    languages:` You can speak, read, and write Common and Infernal.`,
    legacyofMaladomini:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the ray of sickness spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the crown of madness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofDis:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the detect thoughts spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofPhlegethos:` You know the friends cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the suggestion spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofMalbolge:` You know the minor illusion cantrip. When you reach 3rd level, you can cast the disguise self spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the invisibility spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofStygia:` You know the ray of frost cantrip. When you reach 3rd level, you can cast the armor of Agathys spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofMinauros:` You know the mage hand cantrip. When you reach 3rd level, you can cast the Tenser's floating disk spell once with this trait and regain the ability to do so when you finish a short or long rest. When you reach 5th level, you can cast the arcane lock spell once with this trait, requiring no material component, and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofAvernus:` You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the searing smite spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the branding smite spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    legacyofCania:` You know the mage hand cantrip. When you reach 3rd level, you can cast the burning hands spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the flame blade spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`,
    otherworldlyPresence: `You know the Thaumaturgy cantrip. When you cast it with this trait, the spell uses the same spellcasting ability you use for your Fiendish Legacy Trait.`,
    fiendishLegacy: `You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy.<br>
    When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the legacy).`,
    devilsTongue: `You know the vicious mockery cantrip. When you reach 3rd level, you can cast the charm person spell as a 2nd-level spell once with this trait. When you reach 5th level, you can cast the enthrall spell once with this trait. You must finish a long rest to cast these spells once again with this trait. Charisma is your spellcasting ability for them. This trait replaces the Infernal Legacy trait.`,
    appearance: `Your tiefling might not look like other tieflings. Rather than having the physical characteristics described in the Player's Handbook, choose 1d4+1 of the following features: small horns; fangs or sharp teeth; a forked tongue; catlike eyes; six fingers on each hand; goatlike legs; cloven hoofs; a forked tail; leathery or scaly skin; red or dark blue skin; cast no shadow or reflection; exude a smell of brimstone.`,
    hellfire: `You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the burning hands spell once per day as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.`,
    winged: `You have bat-like wings sprouting from your shoulder blades. You have a flying speed of 30 feet while you aren't wearing heavy armor.`
}

const artificer = {

}
const barbarian = {
name:`Barbarian`,
hitPoints:`Hit Dice: 1d12 per barbarian level<br>
Hit Points at 1st Level: 12 + your Constitution modifier<br>
Hit Points at Higher Levels: 1d12 (or 7) + your Constitution modifier per barbarian level after 1st`,
proficiencies:`Armor: Light armor, medium armor, shields<br> 
Weapons: Simple weapons, martial weapons<br> 
Tools: None<br>
Saving Throws: Strength, Constitution<br> 
Skills: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival`,
frenzy:` You can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion`,
mindlessRage:`You can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.`,
intimidatingPresence:`You can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.
If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.`,
retaliation:`when you take damage froma creature that is within 5 feet of you. you can use your reaction to make a melee weapon attack against that creature.`,
spiritSeeker:`Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. You gain the ability to cast the <a>beast sense</a> and <a>speak with animals</a> spells. but only as rituals`,
totemSpirit:`When you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object- an amulet or similar adornment—that incorporates fur or feathers, claws. teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thickskinned, or if your totem is the eagle, your eyes turn bright yellow. Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.<br>
<b>Bear</b> :While raging. you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.<br>
<b>Eagle</b>: While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.<br>
<b>Wolf</b>: While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.`,
aspectOfTheBeast:`you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.<br>
<b>Bear</b>: You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.<br>
<b>Eagle</b>: You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.<br>
<b>Wolf</b>: You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.`,
spiritWalker:`you can cast <a>the commune with nature</a> spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.`,
totemicAttunement:`You gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.<br>
<b>Bear</b> :While you're raging, any creature within 5 feet of you that’s hostile to you has disadvantage on attack rolls against targets other than you or another character witb this feature. An enemy is immune to this effect if it can't see or hear you or if it can’t be frightened.<br>
<b>Eagle</b>: While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.<br>
<b>Wolf</b>: While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.`,
table:`<table class="tableClass">
                            <tr>
                                <th >Level</th>
                                <th >Proficiency Bonus</th>
                                <th >Features</th>
                                <th >Rage</th>
                                <th >Rage Damage</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>+2</td>
                                <td><a href="">Rage</a> - <a href="">Unarmored defense</a></td>
                                <td>2</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td>+2</td>
                                <td><a href="">Reckless attack</a> - <a href="">Danger sense</a></td>
                                <td>2</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td>+2</td>
                                <td><a href="">Primal path</a></td>
                                <td>3</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td>+2</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>3</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td>+3</td>
                                <td><a href="">Extra attack</a> - <a href="">Fast movement</a></td>
                                <td>3</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>+3</td>
                                <td><a href="">Path features</a></td>
                                <td>4</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>+3</td>
                                <td><a href="">Feral instinct</a></td>
                                <td>4</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>8th</td>
                                <td>+3</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>+2</td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>+4</td>
                                <td><a href="">Brutal critical (1 die)</a></td>
                                <td>4</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>+4</td>
                                <td><a href="">Path feature</a></td>
                                <td>4</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>11th</td>
                                <td>+4</td>
                                <td><a href="">Relentless rage</a></td>
                                <td>4</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>12th</td>
                                <td>+4</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>5</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td>+5</td>
                                <td><a href="">Brutal critical (2 dice)</a></td>
                                <td>5</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>14th</td>
                                <td>+5</td>
                                <td><a href="">Path feature</a></td>
                                <td>5</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>15th</td>
                                <td>+5</td>
                                <td><a href="">Persistent Rage</a></td>
                                <td>5</td>
                                <td>+3</td>
                            </tr>
                            <tr>
                                <td>16th</td>
                                <td>+5</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>5</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td>+6</td>
                                <td><a href="">Brutal critical (3 dice)</a></td>
                                <td>6</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>18th</td>
                                <td>+6</td>
                                <td><a href="">Indomitable might</a></td>
                                <td>6</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>19th</td>
                                <td>+6</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>6</td>
                                <td>+4</td>
                            </tr>
                            <tr>
                                <td>20th</td>
                                <td>+6</td>
                                <td><a href="">Primal Champion</a></td>
                                <td>Unlimited</td>
                                <td>+4</td>
                            </tr>

                        </table>`

}
const bard = {
    name:`Bard`,
    hitPoints:`Hit Dice: 1d8 per bard level<br>
    Hit Points at 1st Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per bard level after 1st`,
    proficiencies:`Armor: Light armor<br>
    Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords<br>
    Tools: Three musical instruments of your choice<br>
    Saving Throws: Dexterity, Charisma<br> 
    Skills: Choose any three`,
    spells:`2 Cantrips of your choice from <a href="">the bard cantrip table</a> and the the ability of known 4 spells from <a href="">the bard spells table</a><br>
    Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots. Charisma is your spellcasting ability for your bard spells`,
    bonusProficienciesLore:`You gain proficiency with three skills of your choice.`,
    cuttingWords:`You learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling
    a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.`,
    additionalMagicalSecrets:`You learn two spells of your choice from any class. A spell you choose must be of a level you can cast. as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.`,
    peerlessSkill:`When you make an ability check. you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roil the die for the ability check, but before the DM tells you whether you succeed or fail.`,
    bonusProficienciesValor:`You gain proficiency with medium armor, shields, and martial weapons.`,
    combatInspiration:`You learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.`,
    extraAttack:`You can attack twice, instead of once, whenever you take the Attack action on your turn.`,
    battleMagic:`you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.`,
    table:`<table class="tableClass">
                            <tr>
                                <th >Level</th>
                                <th >Proficiency Bonus</th>
                                <th >Features</th>
                                <th >Cantrips</th>
                                <th >Spells known</th>
                                <th >Spells Slots per Level</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>+2</td>
                                <td><a href="">Spellcasting</a> - <a href="">Bardic Inspiration (d6)</a></td>
                                <td>2</td>
                                <td>4</td>
                                <td><b>1st></b> 2</td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td>+2</td>
                                <td><a href="">Jack of all trades</a> - <a href="">Song of Rest (d6)</a></td>
                                <td>2</td>
                                <td>5</td>
                                <td><b>1st></b> 3</td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td>+2</td>
                                <td><a href="">Bard College</a> - <a href="">Expertise</a></td>
                                <td>2</td>
                                <td>6</td>
                                <td><b>1st></b> 4 <b>2nd></b> 2</td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td>+2</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>3</td>
                                <td>7</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3</td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td>+3</td>
                                <td><a href="">Bardic Inspiration (d8)</a> - <a href="">Font of Inspiration</a></td>
                                <td>3</td>
                                <td>8</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 2</td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>+3</td>
                                <td><a href="">Countercharm</a> - <a href="">Bard College feature</a></td>
                                <td>3</td>
                                <td>9</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3</td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>+3</td>
                                <td> - </td>
                                <td>3</td>
                                <td>10</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 1</td>
                            </tr>
                            <tr>
                                <td>8th</td>
                                <td>+3</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>3</td>
                                <td>11</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 2</td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>+4</td>
                                <td><a href="">Song of Rest(d8)</a></td>
                                <td>3</td>
                                <td>12</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 1</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>+4</td>
                                <td><a href="">Bardic Inspiration (d10)</a> - <a href="">Expertise</a> - <a href="">Magical Secrets</a></td>
                                <td>4</td>
                                <td>14</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2</td>
                            </tr>
                            <tr>
                                <td>11th</td>
                                <td>+4</td>
                                <td>-</td>
                                <td>4</td>
                                <td>15</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1</td>
                            </tr>
                            <tr>
                                <td>12th</td>
                                <td>+4</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>15</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1</td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td>+5</td>
                                <td><a href="">Song of Rest (d10)</a></td>
                                <td>4</td>
                                <td>16</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1</td>
                            </tr>
                            </tr>
                            <tr>
                                <td>14th</td>
                                <td>+5</td>
                                <td><a href="">Magical Secrets</a> - <a href="">Bard College Feature</a></td>
                                <td>4</td>
                                <td>18</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1</td>
                            </tr>
                            <tr>
                                <td>15th</td>
                                <td>+5</td>
                                <td><a href="">Bardic Inspiration (d12)</a></td>
                                <td>4</td>
                                <td>19</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1 <b>8th></b> 1</td>
                            </tr>
                            <tr>
                                <td>16th</td>
                                <td>+5</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>19</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1 <b>8th></b> 1</td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td>+6</td>
                                <td><a href="">Song of Rest (d12)</a></td>
                                <td>4</td>
                                <td>20</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1 <b>8th></b> 1 <b>9th></b> 1</td>
                            </tr>
                            <tr>
                                <td>18th</td>
                                <td>+6</td>
                                <td><a href="">Magical Secrets</a></td>
                                <td>4</td>
                                <td>22</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 1 <b>7th></b> 1 <b>8th></b> 1 <b>9th></b> 1</td>
                            </tr>
                            <tr>
                                <td>19th</td>
                                <td>+6</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>22</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 2 <b>7th></b> 1 <b>8th></b> 1 <b>9th></b> 1</td>
                            </tr>
                            <tr>
                                <td>20th</td>
                                <td>+6</td>
                                <td><a href="">Superior Inspiration</a></td>
                                <td>4</td>
                                <td>22</td>
                                <td><b>1st></b> 4 <b>2nd></b> 3 <b>3rd></b> 3 <b>4th></b> 3 <b>5th></b> 2 <b>6th></b> 2 <b>7th></b> 2 <b>8th></b> 1 <b>9th></b> 1</td>
                            </tr>

                        </table>`


}
const cleric = {

}
const druid = {

}
const fighter = {

}
const monk = {

}
const paladin = {
    name:`Paladin`,
    hitPoints:`Hit Dice: 1d10 per paladin level<br>
    Hit Points at 1st Level: 10 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d10 (or 6) + your Constitution modifier per paladin level after Ist`,
    proficiencies:`Armor: All armor, shields<br>
    Weapons: Simple weapons, martial weapons <br>
    Tools: None<br>
    Saving Throws: Wisdom, Charisma<br> 
    Skills: Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion`,
    spells:`By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells for <a href="">the paladin spell list</a>.<br>
    The prepared spells for a palladin works like this, everytime you finish a long rest you can choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.<br>
    Charisma is your spellcasting ability for your paladin spells,`,
    oathSpellsDevotion:`<table class="tableClass">
                            <tr>
                                <th>Paladin Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a href="">Protection from Evil and Good</a> - <a href="">Sanctuary</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a href="">Lesser Restoration</a> - <a href="">Zone of truth</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a href="">Beacon of Hope</a> - <a href="">Dispel Magic</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a href="">Freedom of movement</a> - <a href="">Guardian of faith</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a href="">Commune</a> - <a href="">Flame strike</a></td>
                            </tr>
                        </table>`,
    channelDivinityDevotion:`You gain the following two Channel Divinity options<br>
    <br>
    <b>Sacred Weapon</b>: As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.<br>
    You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.<br>
    <br>
    <b>Turn the Unholy</b>: As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.<br>
    A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
    auraOfDevotion:`You and friendly creatures within 10 feet of you can't be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet`,
    purityOfSpirit:`You are always under the effects of a protection from evil and good spell.`,
    holyNimbus:`As an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.<br> 
    Once you use this feature, you can't use it again until you finish a long rest.`,
    oathSpellsAncient:`<table class="tableClass">
                            <tr>
                                <th>Paladin Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a href="">Ensnaring strike </a> - <a href="">Speak with animals</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a href="">Moonbeam</a> - <a href="">Misty Step</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a href="">Plant growth</a> - <a href="">Protection from Energy</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a href="">Ice Storm</a> - <a href="">Stoneskin</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a href="">Commune with nature</a> - <a href="">Tree Stride</a></td>
                            </tr>
                        </table>`,
    channelDivinityAncient:`You gain the following two Channel Divinity options.<br>
    <br>
    <b>Nature's Wrath</b>: You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.<br>
    <br>
    <b>Turn the Faithless</b>: You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.<br>
    A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.<br>
    If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.`,
    auraOfWarding:`Ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.<br>
    At 18th level, the range of this aura increases to 30 feet.`,
    undyingSentinel:`When you are reduced to O hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest. Additionally, you suffer none of the drawbacks of old
    age, and you can't be aged magically`,
    elderChampion:`You can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take ona bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.<br>
    Using your action, you undergo a transformation.For 1 minute, you gain the following benefits:<br>
    <br>
    - At the start of each of your turns, you regain 10 hit points.<br>
    - Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.<br>
    - Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.<br>
    <br>
    Once you use this feature, you can’t use it again until you finish a long rest.`,
    oathSpellsVengeance:`<table class="tableClass">
                            <tr>
                                <th>Paladin Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a href="">Bane</a> - <a href="">Hunter's Mark</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a href="">Hold Person</a> - <a href="">Misty Step</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a href="">Haste</a> - <a href="">Protection from Energy</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a href="">Banishment</a> - <a href="">Dimension Door</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a href="">Hold Monster</a> - <a href="">Scrying</a></td>
                            </tr>
                        </table>`,
    channelDivinityVengeance:`You gain the following two Channel Divinity options.<br>
    <br>
    <b>Abjure Enemy</b>: As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.<br>
    On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.<br>
    On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.<br>
    <b>Vow of Enmity</b>: As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.`,
    relentlessAvenger:`Your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.`,
    soulOfVengeance:`The authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.`,
    avengingAngel:`You can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:<br>
    <br>
    - Wings sprout from your back and grant you a flying speed of 60 feet.<br>
    - You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.<br>
    <br>
    Once you use this feature, you can't use it again until you finish a long rest.`,
    table:`<table class="tableClass">
                            <tr>
                                <th >Level</th>
                                <th >Proficiency Bonus</th>
                                <th >Features</th>
                                <th >Spells Slots per Level</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>+2</td>
                                <td><a href="">Divine Sense</a> - <a href="">Lay on Hands</a></td>
                                <td>NO SPELL SLOTS</td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td>+2</td>
                                <td><a href="">Fighting Style</a> - <a href="">Spellcasting</a> - <a href="">Divinite Smite</a></td>
                                <td><b>1st -></b> 2 </td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td>+2</td>
                                <td><a href="">Divine Health</a> - <a href="">Sacred Oath</a></td>
                                <td><b>1st-></b> 3 <b></td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td>+2</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td><b>1st -></b> 3 <b></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td>+3</td>
                                <td><a href="">Extra Attack</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 2</td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>+3</td>
                                <td><a href="">Aura of Protection</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 2</td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>+3</td>
                                <td><a href="">Sacred Oath Feature</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3</td>
                            </tr>
                            <tr>
                                <td>8th</td>
                                <td>+3</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3</td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>+4</td>
                                <td>-</td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 2</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>+4</td>
                                <td><a href="">Aura of Courage</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 2</td>
                            </tr>
                            <tr>
                                <td>11th</td>
                                <td>+4</td>
                                <td><a href="">Improved Divine Smite</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3</td>
                            </tr>
                            <tr>
                                <td>12th</td>
                                <td>+4</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3</td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td>+5</td>
                                <td>-</td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 1 </td>
                            </tr>
                            </tr>
                            <tr>
                                <td>14th</td>
                                <td>+5</td>
                                <td><a href="">Cleansing Touch</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 1 </td>
                            </tr>
                            <tr>
                                <td>15th</td>
                                <td>+5</td>
                                <td><a href="">Sacred Oath Feature</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 2 </td>
                            </tr>
                            <tr>
                                <td>16th</td>
                                <td>+5</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 2 </td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td>+6</td>
                                <td>-</td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 3 <b>5th -></b> 1 </td>
                            </tr>
                            <tr>
                                <td>18th</td>
                                <td>+6</td>
                                <td><a href="">Aura Improvements</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 3 <b>5th -></b> 1 </td>
                            </tr>
                            <tr>
                                <td>19th</td>
                                <td>+6</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 3 <b>5th -></b> 2 </td>
                            </tr>
                            <tr>
                                <td>20th</td>
                                <td>+6</td>
                                <td><a href="">Sacred Oath Feature</a></td>
                                <td><b>1st -></b> 4 <b>2nd -></b> 3 <b>3rd -></b> 3 <b>4th -></b> 3 <b>5th -></b> 2 </td>
                            </tr>

                        </table>`,
}
const ranger = {

}
const rogue = {

}
const sorcerer = {

}
const warlock = {

}
const wizard = {

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

                <button onclick="displayMenuRacesDetails('halflingmarkhealing')"><li>Halfling: Mark of Healing</li></button>

                <button onclick="displayMenuRacesDetails('halflingmarkhospitality')"><li>Halfling: Mark of Hospitality</li></button>

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

                <button onclick="displayMenuRacesDetails('orcbase2024')"><li>Orc (Base)(PHB 2024) </li></button>

                <button onclick="displayMenuRacesDetails('halforc')"><li>Half-Orc (Base)(PHB 2014)</li></button>

                <button onclick="displayMenuRacesDetails('halforcmark')"><li>Half-Orc (Mark of Finding)</li></button>

            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
    else if (race === 'tiefling'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRaces.innerHTML = `

                <button onclick="displayMenuRacesDetails('tieflingbase2024')"><li>Tiefling (Base)(PHB 2024) </li></button>

                <button onclick="displayMenuRacesDetails('tieflingbase')"><li>Tiefling (Base)(PHB 2014)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingasmodeus')"><li>Tiefling (Asmodeus)</li></button>
                
                <button onclick="displayMenuRacesDetails('tieflingbaalzebul')"><li>Tiefling (Baalzebul)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingdispater')"><li>Tiefling (Dispater)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingfierna')"><li>Tiefling (Fierna)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingglasya')"><li>Tiefling (Glasya)</li></button>

                <button onclick="displayMenuRacesDetails('tieflinglevistus')"><li>Tiefling (Levistus)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingmammon')"><li>Tiefling (Mammon)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingmephistopheles')"><li>Tiefling (Mephistopheles)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingzariel')"><li>Tiefling (Zariel)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingdeviltongue')"><li>Tiefling (Devil's Tongue)</li></button>

                <button onclick="displayMenuRacesDetails('tieflinghellfire')"><li>Tiefling (Hellfire)</li></button>

                <button onclick="displayMenuRacesDetails('tieflinginfernallegacy')"><li>Tiefling (Infernal Legacy)</li></button>

                <button onclick="displayMenuRacesDetails('tieflingwinged')"><li>Tiefling (Winged)</li></button>

            <div class = "hide-div"> <button onclick="hideMenuRaces()" class="hide-btn"> HIDE </button> </div>`
        menuSwitch = false;
    }
}
function displayMenuClasses(subclasses){
    if (subclasses === 'barbarian'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${barbarian.name}</h1>
                <p><b>Hit Points: </b> ${barbarian.hitPoints}</p>
                <p><b>Proficiencies: </b>${barbarian.proficiencies}</p>
                <p><b>Subclasses:</b><br>
                <b class="importantDetail">Path of the Berserker</b> or <b class="importantDetail">Path of the Totem Warrior</b></p> 
                <p><b>Path of The berserker:</b></p>
                <p><b>Level 3 - Frenzy:</b> ${barbarian.frenzy}</p>
                <p><b>Level 6 - Mindless Rage:</b> ${barbarian.mindlessRage}</p>
                <p><b>Level 10 - Intimidating Presence:</b> ${barbarian.intimidatingPresence}</p>
                <p><b>Level 14 - Retaliation:</b> ${barbarian.retaliation}</p>
                <p><b class="importantDetail">Path of The Totem Warrior:</b></p>
                <p><b>Level 3 (both skills) - Spirit Seeker:</b> ${barbarian.spiritSeeker}<br> <b>Totem Spirit:</b> ${barbarian.totemSpirit}</p>
                <p><b>Level 6 - Aspect Of The Beast:</b> ${barbarian.aspectOfTheBeast}</p>
                <p><b>Level 10 - Spirit Walker:</b> ${barbarian.spiritWalker}</p>
                <p><b>Level 14 - Totemic Attunement:</b> ${barbarian.totemicAttunement}</p>
                <p><b>Class table per level</b> ${barbarian.table}</p>
                <button onclick = "logoReset()"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
}
    else if (subclasses === 'bard'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${bard.name}</h1>
                <p><b>Hit Points: </b> ${bard.hitPoints}</p>
                <p><b>Proficiencies: </b>${bard.proficiencies}</p>
                <p><b>Spells: </b>${bard.spells}</p>
                <p><b>Subclasses:</b><br>
                <br>
                <b class="importantDetail">College of Lore</b> or <b class="importantDetail">College of Valor</b></p> 
                <p><b class="importantDetail">College of Lore:</b></p>
                <p><b>Level 3 (both skills):<br>
                <br>
                Bonus Proficiencies:</b> ${bard.bonusProficienciesLore}<br>
                <br>
                <b>Cutting Word:</b> ${bard.cuttingWords}</p>
                <p><b>Level 6 - Additional Magical Secrets:</b> ${bard.additionalMagicalSecrets}</p>
                <p><b>Level 14 - Peerless Skill:</b> ${bard.peerlessSkill}</p>
                <p><b class="importantDetail">College of Valor:</b></p>
                <p><b>Level 3 (both skills)<br>
                <br>
                Bonus Proficiencies:</b> ${bard.bonusProficienciesValor}<br> 
                <br>
                <b>Combat Inspiration:</b> ${bard.combatInspiration}</p>
                <p><b>Level 6 - Extra Attack:</b> ${bard.extraAttack}</p>
                <p><b>Level 14 - Battle Magic:</b> ${bard.battleMagic}</p>
                <p><b>Class table per level</b> ${bard.table}</p>
                <button onclick = "logoReset()"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;
}
    else if (subclasses === 'paladin'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">
            <h1>${paladin.name}</h1>
            <p><b>Hit Points: </b> ${paladin.hitPoints}</p>
            <p><b>Proficiencies: </b>${paladin.proficiencies}</p>
            <p><b>Spells: </b>${paladin.spells}</p>
            <p><b>Subclasses:</b><br>
            <br>
            <b class="importantDetail">Oath of Devotion</b> , <b class="importantDetail">Oath of Ancient</b> or <b class="importantDetail">Oath of Vengeance</b></p> 
            <p><b class="importantDetail">Oath of Devotion:</b></p>
            <p><b>You gain the following spells for your Oath:<br>
            ${paladin.oathSpellsDevotion}</b></p>
            <p><b>Level 3 :<br>
            <br>
            Channel Divinity ( Devotion ):</b> ${paladin.channelDivinityDevotion}<br>
            <br>
            <p><b>Level 7 - Aura of Devotion:</b> ${paladin.auraOfDevotion}</p>
            <p><b>Level 15 - Purity of Spirit:</b> ${paladin.purityOfSpirit}</p>
            <p><b>Level 20 - Holy nimbus:</b> ${paladin.holyNimbus}</p>
            <p><b class="importantDetail">Oath of The Ancients:</b></p>
            <p><b>You gain the following spells for your Oath:<br>
            ${paladin.oathSpellsAncient}</b></p>
            <p><b>Level 3 :<br>
            <br>
            Channel Divinity ( Ancients ):</b> ${paladin.channelDivinityAncient}<br>
            <br>
            <p><b>Level 7 - Aura of Warding:</b> ${paladin.auraOfWarding}</p>
            <p><b>Level 15 - Undying Sentinel:</b> ${paladin.undyingSentinel}</p>
            <p><b>Level 20 - Elder Champion:</b> ${paladin.elderChampion}</p>
            <p><b class="importantDetail">Oath of Vengeance:</b></p>
            <p><b>You gain the following spells for your Oath:<br>
            ${paladin.oathSpellsVengeance}</b></p>
            <p><b>Level 3 :<br>
            <br>
            Channel Divinity ( Devotion ):</b> ${paladin.channelDivinityVengeance}<br>
            <br>
            <p><b>Level 7 - Relentless Avenger:</b> ${paladin.relentlessAvenger}</p>
            <p><b>Level 15 - Soul of Vengeance:</b> ${paladin.soulOfVengeance}</p>
            <p><b>Level 20 - Avenging Angel:</b> ${paladin.avengingAngel}</p>
            <p><b>Class table per level</b> ${paladin.table}</p>
            <button onclick = "logoReset()"> BACK </button>
        </div>
        <div>
            <img class="raceImg" src="./img/aasimar.png" alt="">
        </div>
    </div>`
    ;
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
                <p><b>Spells of the Mark: </b>${halfling.spellsoftheMarkHealing}</p>
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
                <p><b>Spells of the Mark: </b>${halfling.spellsoftheMarkHospitality}</p>
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
    // ORC x HALF-ORC
    else if (subrace === 'orcbase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${orc.name1}</h1>
                <p><b>Size: </b>${orc.size}</p>
                <p><b>Speed: </b>${orc.speed}</p>
                <p><b>Age: </b>${orc.age}</p>
                <p><b>Language: </b>${orc.languages}</p>
                <p><b>Dark Vision: </b>${orc.darkvision}</p>
                <p><b>Adrenaline Rush: </b>${orc.adrenalineRush}</p>
                <p><b>Relentless Endurance: </b>${orc.relentlessEndurance}</p>
                <button onclick = "displayMenuRaces('orc')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'halforc'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${orc.name2}</h1>
                <p><b>Ability Score: </b>${orc.abilityScore2}</p>
                <p><b>Size: </b>${orc.size}</p>
                <p><b>Speed: </b>${orc.speed}</p>
                <p><b>Age: </b>${orc.age}</p>
                <p><b>Language: </b>${orc.languages}</p>
                <p><b>Dark Vision: </b>${orc.darkvision}</p>
                <p><b>Menacing: </b>${orc.menacing}</p>
                <p><b>Relentless Endurance: </b>${orc.relentlessEndurance}</p>
                <p><b>Savage Attacks: </b>${orc.savageAttacks}</p>
                <button onclick = "displayMenuRaces('orc')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if (subrace === 'halforcmark'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${orc.name3}</h1>
                <p><b>Ability Score: </b>${orc.abilityScore3}</p>
                <p><b>Size: </b>${orc.size}</p>
                <p><b>Speed: </b>${orc.speed}</p>
                <p><b>Age: </b>${orc.age}</p>
                <p><b>Language: </b>${orc.languages}</p>
                <p><b>Dark Vision: </b>${orc.darkvision}</p>
                <p><b>Hunter's Intuition: </b>${orc.huntersIntuition}</p>
                <p><b>Finder's Magic: </b>${orc.findersMagic}</p>
                <p><b>Spells of the Mark: </b>${orc.spellsoftheMark}</p>
                <button onclick = "displayMenuRaces('orc')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    // TIEFLING
    else if(subrace === 'tieflingbase2024'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name15}</h1>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Otherwordly Presence: </b>${tiefling.otherworldlyPresence}</p>
                <p><b>Fiendish Legacy: </b>${tiefling.fiendishLegacy}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingbase'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name1}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore1}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Infernal Legacy: </b>${tiefling.infernalLegacy}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingasmodeus'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name2}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore2}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Infernal Legacy: </b>${tiefling.infernalLegacy}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingbaalzebul'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name3}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore3}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Maladomini: </b>${tiefling.legacyofMaladomini}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingdispater'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name4}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore4}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Dis: </b>${tiefling.legacyofDis}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingfierna'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name5}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore5}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Phlegethos: </b>${tiefling.legacyofPhlegethos}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingglasya'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name6}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore6}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Malbolge: </b>${tiefling.legacyofMalbolge}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflinglevistus'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name7}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore7}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Stygia: </b>${tiefling.legacyofStygia}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingmammon'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name8}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore8}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Minauros: </b>${tiefling.legacyofMinauros}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingmephistopheles'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name9}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore9}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Cania: </b>${tiefling.legacyofCania}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingzariel'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name10}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore10}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Legacy of Avernus: </b>${tiefling.legacyofAvernus}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingdeviltongue'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name11}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore11}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Appearance: </b>${tiefling.appearance}</p>
                <p><b>Devil's Tongue: </b>${tiefling.devilsTongue}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflinghellfire'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name12}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore12}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Appearance: </b>${tiefling.appearance}</p>
                <p><b>Hellfire: </b>${tiefling.hellfire}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflinginfernallegacy'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name13}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore13}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speed}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Appearance: </b>${tiefling.appearance}</p>
                <p><b>Infernal Legacy: </b>${tiefling.infernalLegacy}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
    else if(subrace === 'tieflingwinged'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${tiefling.name14}</h1>
                <p><b>Ability Score: </b>${tiefling.abilityScore14}</p>
                <p><b>Size: </b>${tiefling.size}</p>
                <p><b>Speed: </b>${tiefling.speedwinged}</p>
                <p><b>Age: </b>${tiefling.age}</p>
                <p><b>Language: </b>${tiefling.languages}</p>
                <p><b>Dark Vision: </b>${tiefling.darkvision}</p>
                <p><b>Hellish Resistance: </b>${tiefling.hellishResistance}</p>
                <p><b>Appearance: </b>${tiefling.appearance}</p>
                <p><b>Winged: </b>${tiefling.winged}</p>
                <button onclick = "displayMenuRaces('tiefling')"> BACK </button>
            </div>
            <div>
                <img class="raceImg" src="./img/aasimar.png" alt="">
            </div>
        </div>`
        ;  
    }
}

// function displayMenuClassesDetails(subclass){
//     if ( subclass === 'barbarian' ){

//     }
//     else if ( subclass === 'bard' ){
        
//     }
//     else if ( subclass === 'cleric' ){
        
//     }
//     else if ( subclass === 'druid' ){
        
//     }
//     else if ( subclass === 'fighter' ){
        
//     }
//     else if ( subclass === 'monk' ){
        
//     }
//     else if ( subclass === 'paladin' ){
        
//     }
//     else if ( subclass === 'ranger' ){
        
//     }
//     else if ( subclass === 'rogue' ){
        
//     }
//     else if ( subclass === 'sorcerer' ){
        
//     }
//     else if ( subclass === 'warlock' ){
        
//     }
//     else if ( subclass === 'wizard' ){
        
//     }
// }


