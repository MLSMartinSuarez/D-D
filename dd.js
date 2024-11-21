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
    breathWeapon:` You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest.`,
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
<b>Bear</b> :While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character witb this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.<br>
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
    name:`Cleric`,
    hitPoints:`Hit Dice: 1d8 per cleric level<br>
    Hit Points at 1st Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your
    Constitution m odifier per cleric level after 1st`,
    proficiencies:`Armor: Light armor, medium armor, shields<br>
    Weapons: All simple weapons<br>
    Tools: None<br>
    Saving Throws: Wisdom , Charisma<br>
    Skills: C hoose two from History, Insight, Medicine,
    Persuasion, and Religion`,
    spells:`You know three cantrips o f your choice from
    the cleric spell list. You learn additional cleric cantrips
    of your choice at higher levels, as show in the Cantrips
    Known column of the Cleric table<br>
    You prepare the list of cleric spells that are available
    for you to cast, choosing from the cleric spell list. When
    you do so, choose a number of cleric spells equal to
    your Wisdom modifier + your cleric level (minimum of
    one spell). The spells must be of a level for which you
    have spell slots.<br>
    You can change your list of prepared spells when you
    finish a long rest. Preparing a new list o f cleric spells
    requires time spent in prayer and meditation: at least 1
    minute per spell level for each spell on your list.<br>
    Wisdom is your spellcasting ability for your cleric spells.`,
    channelDivinity:`You gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.<br>
    When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.<br>
    Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.<br>
    Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.`,
    channelDivinityTurnUndead:`As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.<br>
    A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
    destroyUndead:`When an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.`,
    destroyUndeadTable:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Destroys Undead of CR</th>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>1/2 or lower</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>1 or lower</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>2 or lower</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>3 or lower</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>4 or lower</td>
                    </tr>
                </table>`,
    divineIntervention:`You can call on your deity to intervene on your behalf when your need is great.<br>
    Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.<br>
    If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.<br>
    At 20th level, your call for intervention succeeds automatically, no roll required.`,
    blessingOfKnowledge:`You learn two languages of your choice.<br>
    You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.<br> 
    Your proficiency bonus is doubled for any ability check you make that uses either of those skills.`,
    channelDivinityKnowledgeOfTheAges:`You can use your Channel Divinity to tap into a divine well of knowledge. As an action,
    you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.`,
    channelDivinityReadThoughts:`You can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.<br>
    As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.<br>
    If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.
    During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.`,
    potentSpellcasting:`You add your Wisdom modifier to the damage you deal with any cleric cantrip.`,
    visionsOfThePast:`You can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.<br>
    Once you use this feature, you can’t use it again until you finish a short or long rest.<br>
    <b>  + Object Reading:</b> Holding an object as you meditate, you can see visions of the object’s previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner.<br>
    If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.<br>
    <b>     + Area Reading: </b> As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.`,
    bonusProficiencies:`When you choose this domain at 1st level, you gain proficiency with heavy armor.`,
    discipleOfLife:`Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.`,
    channelDivinityPreserveLife:`you can use your Channel Divinity to heal the badly injured.<br>
    As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.`,
    blessedHealer:`The healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.`,
    divineStrike:`You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
    supremeHealing:`When you would normally roll one or more dice to restore hit points with a spell,you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points toa creature, you restore 12.`,
    bonusCantrip:`When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.`,
    wardingFlare:`you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.<br>
    You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
    channelDivinityRadianceOfTheDawn:`you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.<br>
    As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.`,
    improvedFlare:`You can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.`,
    coronaOfLight:`You can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.`,
    acolyteOfNature:`You learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.`,
    channelDivinityCharmAnimalsAndPlants:`you can use your Channel Divinity to charm animals and plants.<br>
    As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.`,
    dampenElements:`When you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.`,
    divineStrikeNature:`you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.`,
    masterOfNature:`You gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.`,
    bonusProficienciesTempest:`You gain proficiency with martial weapons
    and heavy armor.`,
    wrathOfTheStorm:`you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.<br>
    You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
    channelDivinityDestructiveWrath:`you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.<br>
    When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.`,
    thunderboltStrike:`When you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.`,
    divineStrikeTempest:`You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
    stormborn:`You have a flying speed equal to your current walking speed whenever you are not underground or indoors.`,
    blessingOfTheTrickster:`You can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.`,
    channelDivinityInvokeDuplicity:`you can use your Channel Divinity to create an illusory duplicate of yourself.<br>
    As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.<br>
    For the duration, you can cast spells as though you were in the illusion’s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.`,
    channelDivinityCloakOfShadows:`you can use your Channel Divinity to vanish.<br>
    As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.`,
    divineStrikeTrickster:`You gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.`,
    improvedDuplicity:`You can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.`,
    bonusProficienciesWar:`You gain proficiency with martial weapons and heavy armor.`,
    warPriest:` From Ist level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.<br>
    You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.`,
    channelDivinityGuidedStrike:`You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
    channelDivinityWarGodsBlessing:`When a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.`,
    divineStrikeWar:`You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.`,
    avatarOfBattle:`You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.`,
    abilityScore:`You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    tempestDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Fog Cloud</a> - <a href="">Thunderwave</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Gust of Wind</a> - <a href="">Shatter</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Call of Lighting</a> - <a href="">Sleet Storm</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Control Water</a> - <a href="">Ice Storm</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Destructive Wave</a> - <a href="">Insect Plague</a></td>
                    </tr>
                </table>`,
    trickeryDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Charm Person</a> - <a href="">Disguise Self</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Mirror Image</a> - <a href="">Pass Without Trace</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Blink</a> - <a href="">Dispel Magic</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Dimension Door</a> - <a href="">Polymorph</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Dominate Person</a> - <a href="">Modify Memory</a></td>
                    </tr>
                </table>`,
    warDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Divine Favor</a> - <a href="">Shield of Faith</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Magic Weapon</a> - <a href="">Spiritual Weapon</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Crusader's Mantle</a> - <a href="">Spirit Guardians</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Freedom of Movement</a> - <a href="">Stoneskin</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Flame Strike</a> - <a href="">Hold Monster</a></td>
                    </tr>
                </table>`,
    natureDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Animal Friendship</a> - <a href="">Speak With Animals</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Barkskin</a> - <a href="">Spike Growth</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Plant Growth</a> - <a href="">Wind Wall</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Dominate Beast</a> - <a href="">Grasping Vine</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Insect Plague</a> - <a href="">Tree Stride</a></td>
                    </tr>
                </table>`,
    lightDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Burning Hands</a> - <a href="">Fairie Fire</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Flaming Sphere</a> - <a href="">Scorching Ray</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Daylight</a> - <a href="">Fireball</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Guardian of Faith</a> - <a href="">Wall of Fire</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Flame Strike</a> - <a href="">Scrying</a></td>
                    </tr>
                </table>`,
    lifeDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Bless</a> - <a href="">Cure Wounds</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Lesser Restoration</a> - <a href="">Spiritual Weapon</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Beacon of Hope</a> - <a href="">Revivify</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Death Ward</a> - <a href="">Guardian of Faith</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Mass Cure Wounds</a> - <a href="">Raise Dead</a></td>
                    </tr>
                </table>`,
    knowledgeDomainSpells:`<table class="tableClass">
                    <tr>
                        <th>Cleric Level</th>
                        <th>Spells</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td><a href="">Command</a> - <a href="">Identify</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Augury</a> - <a href="">Suggestion</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Nondetection</a> - <a href="">Speak with Dead</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Arcane Eye</a> - <a href="">Confusion</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Legend Lore</a> - <a href="">Scrying</a></td>
                    </tr>
                </table>`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Features</th>
                        <th >Cantrips Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                        <th >5th</th>
                        <th >6th</th>
                        <th >7th</th>
                        <th >8th</th>
                        <th >9th</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td><a href="">Spellcasting</a> - <a href=""> Divine Domain</a></td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td><a href="">Channel Divinity(1/rest)</a> - <a href=""> Divine Domain Feature</a></td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td><a href="">Destroy Undead (CR 1/2)</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td><a href="">Channel Divinity(2/rest)</a> - <a href=""> Divine Domain Feature</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td><a href="">Ability Score Improvement</a> - <a href="">Destroy Undead (CR 1)</a> - <a href="">Divine Domain Feature</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td><a href="">Divine Intervention</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td><a href="">Destroy Undead(CR 2)</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td><a href="">Destroy Undead (CR 3)</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td><a href="">Destroy Undead (CR 4)</a> - <a href="">Divine Domain Feature</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td><a href="">Channel Divinity (3/rest)</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td><a href="">Divine Intervention Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    
                </table>`,
}
const druid = {
    name:`Druid`,
    hitPoints:`Hit Dice: 1d8 per druid level<br>
    Hit Points at 1st Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per druid level after 1st`,
    proficiencies:`Armor: Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)<br>
    Weapons: Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears<br>
    Tools: Herbalism kit<br>
    Saving Throws: Intelligence, Wisdom<br>
    Skills: Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival`,
    spells:` you know two cantrips of your choice from the druid speil list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table<br>
    You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.<br>
    You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.<br>
    Wisdom is your spellcasting ability for your druid spells`,
    abilityScore:`When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    druidic:`You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.`,
    wildShape:`you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.<br>
    Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.<br>
    You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.<br>
    <br>
    While you are transformed, the following rules apply:<br>
    <br>
     <b>+</b>  Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.<br>
     <b>+</b> When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.<br>
    <b>+</b> You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.<br>
    <b>+</b> You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.<br>
    <b>+</b> You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment. based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.`,
    druidCircle:`You choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.`,
    bonusCantrip:`When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice.`,
    timelessBody:`The primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.`,
    beastSpells:`You can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.`,
    archdruid:`You can use your Wild Shape an unlimited number of times.`,
    naturalRecovery:`you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest<br>
    For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.`,
    circleSpells:`Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected
    to the land where you became a druid. Choose that land—arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark—and consult the associated list of spells.<br>
    Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.`,
    circleSpellsArtic:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Hold Person</a> - <a href="">Spike Growth</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Sleet Storm</a> - <a href="">Slow</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Freedom of Movement</a> - <a href="">Ice Storm</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Commune with Nature</a> - <a href="">Cone of Cold</a></td>
                    </tr>
                </table>`,
    circleSpellsCoast:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Mirror Image</a> - <a href="">Misty Step</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Water Breathing</a> - <a href="">Water Walk</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Control Water</a> - <a href="">Freedom of Movement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Conjure Elemental</a> - <a href="">Scrying</a></td>
                    </tr>
                </table>`,
    circleSpellsDesert:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Blur</a> - <a href="">Silence</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Create Food and Water</a> - <a href="">Protection from Energy</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Blight</a> - <a href="">Hallucinatory Terrain</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Insect Plague</a> - <a href="">Wall of Stone</a></td>
                    </tr>
                </table>`,
    circleSpellsForest:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Barskin</a> - <a href="">Spider Climb</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Call Lighting</a> - <a href="">Plant Growth</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Divination</a> - <a href="">Freedom of Movement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Commune with Nature</a> - <a href="">Tree Slide</a></td>
                    </tr>
                </table>`,
    circleSpellsGrassland:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Invisibility</a> - <a href="">Pass Without Trace</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Daylight</a> - <a href="">Haste</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Divination</a> - <a href="">Freedom of Movement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Insect Plague</a> - <a href="">Dream</a></td>
                    </tr>
                </table>`,
    circleSpellsMountain:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Spider Climb</a> - <a href="">Spike Growth</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Lighting Bolt</a> - <a href="">Meld into Stone</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Stone Shape</a> - <a href="">Stoneskin</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Passwall</a> - <a href="">Wall of Stone</a></td>
                    </tr>
                </table>`,
    circleSpellsSwamp:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Darkness</a> - <a href="">Melf's Acid Arrow</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Water Walk</a> - <a href="">Stinking Cloud</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Freedom of Movement</a> - <a href="">Locate Creature</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Insect Plague</a> - <a href="">Scrying</a></td>
                    </tr>
                </table>`,
    circleSpellsUnderdark:`<table class="tableClass">
                    <tr>
                        <th >Druid Level</th>
                        <th >Circle Spells</th>
                        
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td><a href="">Spider Climb</a> - <a href="">Web</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td><a href="">Gaseous Form</a> - <a href="">Stinking Cloud</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td><a href="">Greater Invisibility</a> - <a href="">Stone Shape</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td><a href="">Cloudkill</a> - <a href="">Insect Plague</a></td>
                    </tr>
                </table>`,
    landsStride:`Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.<br>
    In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.`,
    naturesWard:`You can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.`,
    naturesSanctuary:`Creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.<br>
    The creature is aware of this effect before it makes its attack against you.`,
    combatWildShape:`You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.<br>
    Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.`,
    CircleForms:`The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).<br>
    Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.`,
    PrimalStrike:`Your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
    ElementalWildShape:`You can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.`,
    ThousandForms:`You have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will.`,

    beastShapeTable:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Max. CR</th>
                        <th >Limitations</th>
                        <th >Example</th>
                        
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>1/4</td>
                        <td>No flying or swimming speed</td>
                        <td>Wolf</td>
                        
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>1/2</td>
                        <td>No flying speed</td>
                        <td>Crocodile</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>1</td>
                        <td>-</td>
                        <td>Giant Eagle</td>
                    </tr>
                    
                </table>`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Features</th>
                        <th >Cantrips Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                        <th >5th</th>
                        <th >6th</th>
                        <th >7th</th>
                        <th >8th</th>
                        <th >9th</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td><a href="">Druidic</a> - <a href="">SpellCasting</a></td>
                        <td>2</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td><a href="">Wild Shape</a> - <a href="">Druid Circle</a></td>
                        <td>2</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>-</td>
                        <td>2</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td><a href="">Wild Shape Improvement</a> - <a href="">Ability Score Improvement</a></td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td><a href="">Druid Circle Feature</a></td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td><a href="">Ability Score Improvement</a> - <a href="">Wild Shape Improvement</a></td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td><a href="">Druid Circle Feature</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td><a href="">Druid Circle Feature</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td><a href="">Timeless Body</a> - <a href="">Beast Spells</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td><a href="">Archdruid</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    
                </table>`,
}
const fighter = {
    name:`Fighter`,
    hitPoints:`Hit Dice: 1d10 per fighter level<br>
    Hit Points at 1st Level: 10 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d10 (or 6) + your Constitution modifier per fighter level after 1st`,
    proficiencies:`Armor: All armor, shields<br>
    Weapons: Simple weapons, martial weapons <br>
    Tools: None<br>
    Saving Throws: Strength, Constitution<br>
    Skills: Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival`,
    abilityScore:`When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    fightingStyle:`You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again:<br>
    <br>
    <b>ARCHERY:</b> You gain a +2 bonus to attack rolls you make with ranged weapons.<br>
    <br>
    <b>DEFENSE:</b> While you are wearing armor, you gain a +1 bonus to AC.<br>
    <br>
    <b>DUELING:</b> When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.<br>
    <br>
    <b>GREAT WEAPON FIGHTING:</b> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll isa 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.<br>
    <br>
    <b>PROTECTION:</b> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.<br>
    <br>
    <b>TWO-WEAPON FIGHTING:</b> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.`,
    secondWind:`You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.<br>
    Once you use this feature, you must finish a short or long rest before you can use it again.`,
    actionSurge:`You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.<br>
    Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.`,
    martialArchetype:`You choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.`,
    extraAttack:`You can attack twice, instead of once, whenever you take the Attack action on your turn.<br>
    The number of attacks increases to three when you 2 reach 11th level in this class and to four when you reach 20th level in this class.`,
    indomitable:` You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.<br>
    You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.`,
    improvedCritical:`Your weapon attacks score a critical hit ona roll of 19 or 20.`,
    remarkableAthlete:`You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.<br>
    In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.`,
    additionalFightingStyle:`You can choose a second option from the Fighting Style class feature.`,
    superiorCritical:`Your weapon attacks score a critical hit on a roll of 18—20.`,
    survivor:`You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.`,
    combatSuperiority:`When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.<br>
    <b>Maneuvers:</b> You learn three maneuvers of your choice, which are detailed under 'Maneuvers' below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.
    You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.<br>
    <b>Superiority Dice:</b> You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.
    You gain another superiority die at 7th level and one more at 15th level.<br>
    <b>Saving Throws:</b> Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:<br>
    - Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice) -`,
    studentOfWar:`You gain proficiency with one type of artisan's tools of your choice.`,
    knowYourEnemy:`if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:<br>
    <br>
    <b>+</b> Strength score<br>
    <b>+</b> Dexterity score<br>
    <b>+</b> Constitution score<br>
    <b>+</b> Armor Class<br>
    <b>+</b> Current hit points<br>
    <b>+</b> Total class levels (if any)<br>
    <b>+</b> Fighter class levels (if any)`,
    improvedCombatSuperiority:`Your superiority dice turn into d10s. At 18th level, they turn into d12s.`,
    relentless:`When you roll initiative and have no superiority dice remaining, you regain 1 superiority die.`,
    maneuvers:`<b>Commander's Strike:</b> When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attac's damage roll.<br>
    <br>
    <b>Disarming Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.<br>
    <br>
    <b>Distracting Strike:</b> When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.<br>
    <br>
    <b>Evasive Footwork:</b> When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.<br>
    <br>
    <b>Feinting Attack:</b> You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack's damage roll.<br>
    <br>
    <b>Goading Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.<br>
    <br>
    <b>Lunging Attack:</b> When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll.<br>
    <br>
    <b>Maneuvering Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.<br>
    <br>
    <b>Menacing Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.<br>
    <br>
    <b>Parry:</b> When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.<br>
    <br>
    <b>Precision Attack:</b> When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.<br>
    <br>
    <b>Pushing Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.<br>
    <br>
    <b>Rally:</b> On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.<br>
    <br>
    <b>Riposte:</b> When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.<br>
    <br>
    <b>Sweeping Attack:</b> When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.<br>
    <br>
    <b>Trip Attack:</b> When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. Ona failed save, you knock the target prone.`,
    spells:`<b>Cantrips:</b> You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.<br>
    <br>
    <b>Spells:</b> You regain all expended spell slots when you finish a long rest.<br>
    You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.<br>
    The Spells Known column of <a href="">the Eldritch Knight Spellcasting table</a> shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level. The spells you learn at 8th, 14th, and 20th level can come from any school of magic<br>
    Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 8th, 14th. or 20th level.<br>
    Intelligence is your spellcasting ability for your wizard spells.`,
    weaponBond:`You learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done<br>
    <br>
    <table class="tableClass">
                    <tr>
                        <th >Fighter Level</th>
                        <th >Cantrips Known</th>
                        <th >Spells Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>2</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>2</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>2</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>2</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>2</td>
                        <td>5</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>2</td>
                        <td>6</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>2</td>
                        <td>6</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>3</td>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>3</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>3</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>3</td>
                        <td>9</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>3</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>3</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>3</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>3</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>3</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>3</td>
                        <td>12</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>3</td>
                        <td>13</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    
                </table>
    <br>
    <br>
    During a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.<br>
    Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.<br>
    You can have up to two bonded weapons, but can summon only one at a time with your bonus action.
    If you attempt to bond with a third weapon, you must break the bond with one of the other two.`,
    warMagic:`When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.`,
    eldritchStrike:`You learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw
    it makes against a spell you cast before the end of your next turn.`,
    arcaneCharge:`You gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.`,
    improvedWarMagic:`When you use your action to cast a spell, you can make one weapon attack asa bonus action.`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Features</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td><a href="">Fighting Style</a> - <a href="">Second Wind</a></td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td><a href="">Action Surge (one use)</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td><a href="">Martial Archetype</a></td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td><a href="">Extra attack</a></td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td><a href="">>Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td><a href="">Martial Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td><a href="">Indomitable (one use)</a></td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td><a href="">Martial Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td><a href="">Extra Attack (2)</a></td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td><a href="">Indomitable (two uses)</a></td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td><a href="">Martial Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td><a href="">Action Surge (two uses)</a> - <a href="">Indomitable (three uses)</a></td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td><a href="">Martial Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td><a href="">Extra Attack (3)</a></td>
                    </tr>

                </table>`,
}
const monk = {
    name:`Monk`,
    hitPoints:`Hit Dice: 1d8 per monk level<br>
    Hit Points at Ist Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per monk level after Ist`,
    proficiencies:`Armor: None<br>
    Weapons: Simple weapons, shortswords<br>
    Tools: Choose one type of artisan's tools or one musical instrument<br>
    Saving Throws: Strength, Dexterity<br>
    Skills: Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth`,
    abilityScore:`When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    unarmoredDefense:`While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
    martialArts:`Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.
    You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:<br>
    <br>
    <b>+</b> You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.<br>
    <b>+</b> You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.<br>
    <b>+</b> When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.<br>
    <br>
    Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in chapter 5.`,
    ki:`Your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.<br>
    You can spend these points to fuel various ki features. You start knowing three such features: <b>Flurry of Blows, Patient Defense, and Step of the Wind</b>. You learn more ki features as you gain levels in this class.<br>
    <br>
    <b>Flurry of Blows</b>: Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.<br>
    <b>Patient Defense</b>: You can spend 1 ki point to take the Dodge action asa bonus action on your turn.<br>
    <b>Step of the Wind</b>: You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.<br>
    <br>
    When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.<br>
    Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:<br>
    <br>
    <b>Ki save DC = 8 + your proficiency bonus + your Wisdom modifier</b>`,
    unarmoredMovement:`Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.<br>
    At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.`,
    monasticTradition:`You commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description.<br> 
    Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`,
    deflectMissiles:`You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.<br>
    If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.`,
    slowFall:`You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`,
    extraAttack:`You can attack twice, instead of once, whenever you take the Attack action on your turn.`,
    stunningStrike:`You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`,
    kiEmpoweredStrikes:`Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
    evasion:`Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
    stillnessOfMind:`You can use your action to end one effect on yourself that is causing you to be charmed or frightened.`,
    purityOfBody:`Your mastery of the ki flowing through you makes you immune to disease and poison.`,
    tongueOfTheSunAndMoon:`You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`,
    diamondSoul:`Your mastery of ki grants you proficiency in all saving throws.<br>
    Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
    timelessBody:`Your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`,
    emptyBody:`You can use your action to spend 4 ki points to become invisible for 1 minute, During that time, you also have resistance to all damage but force damage.<br>
    Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.`,
    perfectSelf:`When you roll for initiative and have no ki points remaining, you regain 4 ki points.`,
    openHandTechnique:`You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:<br>
    <br>
    <b>+</b> It must succeed on a Dexterity saving throw or be knocked prone.<br>
    <b>+</b> It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.<br>
    <b>+</b> It can’t take reactions until the end of your next turn.`,
    wholenessOfBody:`You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.`,
    tranquility:`You can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.`,
    quiveringPalm:`You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.<br>
    You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.`,
    shadowArts:`You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the <b>minor illusion cantrip</b> if you dont already know it.`,
    shadowStep:`You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.`,
    cloakOfShadows:`You have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.`,
    opportunist:`You can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.`,
    discipleOfTheElements:`You learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.<br>
    You know the Elemental Attunement discipline and one other elemental discipline of your choice, which are detailed in the “Elemental Disciplines” section below. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.<br>
    Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.
    <b>Casting Elemental Spells</b>: Some elemental disciplines allow you to cast spells. To cast one of these spells, you use its casting time and other rules, but you <b>don't need to provide material components for it</b>.<br>
    Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).
    The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.<br>
    <br>
    <table class="tableClass">
                    <tr>
                        <th>Monk Levels</th>
                        <th>Maximum Ki Point for a Spell</th>
                    </tr>
                    <tr>
                        <td>5th to 8th</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>9th to 12th</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>13th to 16th</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>17th to 20th</td>
                        <td>6</td>
                    </tr>
                </table>`,
    elementalDisciplines:`The elemental disciplines are presented in alphabetical order. If a discipline requires a level, you must be that level in this class to learn the discipline.<br>
    <br>
    <b>Breath of Winter</b>: (17th Level Required). You can spend 6 ki points to cast <b>Cone of Cold</b>.<br>
    <b>Clench of the North Wind</b>: (6th Level Required). You can spend 3 ki points to cast <b>Hold Person</b>.<br>
    <b>Elemental Attunement.</b>: You can use your action to briefly control elemental forces nearby, causing one of the following effects of your choice:<br>
    <b>+</b> Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of light mist, or a gentle rumbling of stone.<br>
    <b>+</b> Instantaneously light or snuff out a candle, a torch, or asmall campfire.<br>
    <b>+</b> Chill or warm up to 1 pound of nonliving material for up to 1 hour.<br>
    <b>+</b> Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute.<br>
    <b>Eternal Mountain Defense</b>: (11th Level Required). You can spend 5 ki points to cast <b>Stoneskin</b>, targeting yourself.<br>
    <b>Fangs of the Fire Snake</b>: When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn.<br>
    A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d10 fire damage.<br>
    <b>Fist of Four Thunders</b>: You can spend 2 ki points to cast <b>Thunderwave</b>.
    <b>Fist of Unbroken Air</b>: You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don't push it or knock it prone.
    <b>Flames of the Phoenix</b>: (11th Level Required). You can spend 4 ki points to cast <b>Fireball</b>.
    <b>Gong of the Summit</b>: (6th Level Required). You can spend 3 ki points to cast <b>Shatter</b>.
    <b>Mist Stance</b>: (11th Level Required). You can spend 4 ki points to cast <b>Gaseous Form</b>, targeting yourself.
    <b>Ride the Wind</b>: (11th Level Required). You can spend 4 ki points to cast <b>Fly</b>, targeting yourself.
    <b>River of Hungry Flame</b>: (17th Level Required). You can spend 5 ki points to cast <b>Wall of Fire</b>.
    <b>Rush of the Gale Spirits</b>. You can spend 2 ki points to cast <b>Gust of Wind</b>.
    <b>Shape the Flowing River</b>: As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square's elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can't shape the ice to trap or injure a creature in the area.
    <b>Sweeping Cinder Strike</b>: You can spend 2 ki points to cast <b>burning hands</b>.
    <b>Water Whip</b>: You can spend 2 ki points as a bonus action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d10 bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don't pull it or knock it prone.
    <b>Wave of Rolling Earth</b>: (17th Level Required) You can spend 6 ki points to cast wall of stone.`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Martial Arts</th>
                        <th >Ki Points</th>
                        <th >Unarmored Movement</th>
                        <th >Features</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td>1d4</td>
                        <td>-</td>
                        <td>-</td>
                        <td><a href="">Unarmored Defense</a> - <a href="">Martial Arts</a></td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td>1d4</td>
                        <td>2</td>
                        <td>+10 ft.</td>
                        <td><a href="">Ki</a> - <a href="">Unarmored Movement</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>1d4</td>
                        <td>3</td>
                        <td>+10 ft.</td>
                        <td><a href="">Monastic Tradition</a> - <a href="">Deflect Missiles</a></td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td>1d4</td>
                        <td>4</td>
                        <td>+10 ft.</td>
                        <td><a href="">Ability Score Improvement</a> - <a href="">Slow Fall</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td>1d6</td>
                        <td>5</td>
                        <td>+10 ft.</td>
                        <td><a href="">Extra Attack</a> - <a href="">Stunning Strike</a></td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td>1d6</td>
                        <td>6</td>
                        <td>+15 ft.</td>
                        <td><a href="">Ki-Empowered Strikes</a> - <a href="">Monastic Tradition Feature</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>1d6</td>
                        <td>7</td>
                        <td>+15 ft.</td>
                        <td><a href="">Evasion</a> - <a href="">Stillness of Mind</a></td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td>1d6</td>
                        <td>8</td>
                        <td>+15 ft.</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>1d6</td>
                        <td>9</td>
                        <td>+15 ft.</td>
                        <td><a href="">Unarmored Movement Improvement</a></td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td>1d6</td>
                        <td>10</td>
                        <td>+20 ft.</td>
                        <td><a href="">Purity of Body</a></td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td>1d8</td>
                        <td>11</td>
                        <td>+20 ft.</td>
                        <td><a href="">Monastic Tradition Feature</a></td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td>1d8</td>
                        <td>12</td>
                        <td>+20 ft.</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>1d8</td>
                        <td>13</td>
                        <td>+20 ft.</td>
                        <td><a href="">Tongue of the Sun and Moon</a></td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td>1d8</td>
                        <td>14</td>
                        <td>+25 ft.</td>
                        <td><a href="">Diamond Soul</a></td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>1d8</td>
                        <td>15</td>
                        <td>+25 ft.</td>
                        <td><a href="">Timeless Body</a></td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td>1d8</td>
                        <td>16</td>
                        <td>+25 ft.</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>1d10</td>
                        <td>17</td>
                        <td>+25 ft.</td>
                        <td><a href="">Monastic Tradition Feature</a></td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td>1d10</td>
                        <td>18</td>
                        <td>+30 ft.</td>
                        <td><a href="">Empty Body</a></td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td>1d10</td>
                        <td>19</td>
                        <td>+30 ft.</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td>1d10</td>
                        <td>20</td>
                        <td>+30 ft.</td>
                        <td><a href="">Perfect Self</a></td>
                    </tr>
                    
                </table>`,
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
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:protection-from-evil-and-good">Protection from Evil and Good</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:sanctuary">Sanctuary</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:lesser-restoration">Lesser Restoration</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:zone-of-truth">Zone of truth</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:beacon-of-hope">Beacon of Hope</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:dispel-magic">Dispel Magic</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:freedom-of-movement">Freedom of movement</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:guardian-of-faith">Guardian of faith</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:commune">Commune</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:flame-strike">Flame strike</a></td>
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
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:ensnaring-strike">Ensnaring strike </a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:speak-with-animals">Speak with animals</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:moonbeam">Moonbeam</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:misty-step">Misty Step</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:plant-growth">Plant growth</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:protection-from-energy">Protection from Energy</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:ice-storm">Ice Storm</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:stoneskin">Stoneskin</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:commune-with-nature">Commune with nature</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:tree-stride">Tree Stride</a></td>
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
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:bane">Bane</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:hunters-mark">Hunter's Mark</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:hold-person">Hold Person</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:misty-step">Misty Step</a></td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:haste">Haste</a> - <a target="_blank"  href="https://dnd5e.wikidot.com/spell:protection-from-energy">Protection from Energy</a></td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:banishment">Banishment</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:dimension-door">Dimension Door</a></td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:hold-monster">Hold Monster</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:scrying">Scrying</a></td>
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
    name:`Ranger`,
    hitPoints:`Hit Dice: 1d10 per ranger level<br>
    Hit Points at 1st Level: 10 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d10 (or 6) + your Constitution modifier per ranger level after 1st`,
    proficiencies:`Armor: Light armor, medium armor, shields<br> 
    Weapons: Simple weapons, martial weapons<br> 
    Tools: None<br>
    Saving Throws: Strength, Dexterity<br>
    Skills: Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival`,
    spells:`By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.<br> 
    You know two 1st-level spells of your choice from the ranger spell list.<br>
    The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have `,
    primevalAwareness:`Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.`,
    extraAttack:`Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`,
    landsStride:`Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.<br>
    In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.`,
    hideInPlainSight:`Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.<br>
    Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`,
    vanish:`Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.`,
    feralSenses:`At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can't see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.<br>
    You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren't blinded or deafened.`,
    foeSlayer:`At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`,
    huntersPrey:`At 3rd level, you gain one of the following features of your choice.<br>
    <br>
    <b>Colossus Slayer:</b> - Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.<br>
    <br>
    <b>Giant Killer:</b> - When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.<br>
    <br>
    <b>Horde Breaker:</b> - Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.`,
    defensiveTactics:`At 7th level, you gain one of the following features of your choice:<br>
    <br>
    <b>Escape the Horde:</b> - Opportunity attacks against you are made with disadvantage.<br>
    <br>
    <b>Multiattack Defense:</b> - When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.<br>
    <br>
    <b>Stee! Will:</b> You have advantage on saving throws against being frightened.`,
    multiattack:`At 11th level, you gain one of the following features of your choice.<br>
    <br>
    <b>Volley:</b> - You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.<br>
    <br>
    <b>Whirlwind Attack:</b> - You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.`,
    superiorHuntersDefense:`At 15th level, you gain one of the following features of your choice.<br>
    <br>
    <b>Evasion:</b> - You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.<br>
    <br>
    <b>Stand Against the Tide:</b> - When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.<br>
    <br>
    <b>Uncanny Dodge:</b> - When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
    rangersCompanion:`At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower. Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher.<br>
    The beast obeys your commands as best as it can. It takes its turn on your initiative, though it doesn't take an action unless you command it to. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, Dodge, or Help action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.<br>
    While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.<br>
    If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one.`,
    exceptionalTraining:`Beginning at 7th level, on any of your turns when your beast companion doesn’t attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn.`,
    bestialFury:`Starting at 11th level, your beast companion can make two attacks when you command it to use the Attack action.`,
    shareSpells:`Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Features</th>
                        <th >Spells known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                        <th >5th</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td><a href="">Favored Enemy</a> - <a href="">Natural Explorer</a></td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td><a href="">Fighting Style</a> - <a href="">Spellcasting</a></td>
                        <td>2</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td><a href="">Ranger Archetype</a> - <a href="">Primeval Awareness</a></td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td><a href="">Extra Attack</a>
                        <td>4</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td><a href="">Favored Enemy Improvement</a> - <a href="">Natural Explorer Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td> <a href="">Ranger Archetype Feature</a> </td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td><a href="">Ability Score Improvement</a> - <a href="">Land's Stride</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>6</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td><a href="">Natural Explorer Improvement</a> - <a href="">Hide in Plain Sight</a></td>
                        <td>6</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td><a href="">Ranger Archetype Feature</a></td>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td><a href="">Favored Enemy Improvement</a> - <a href="">Vanish</a></td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td><a href="">Ranger Archetype Feature</a></td>
                        <td>9</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>9</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>-</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td><a href="">Feral Senses</a></td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td><a href="">Foe Slayer</a></td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                    </tr>

                </table>`,
}
const rogue = {
    name:`Rogue`,
    hitPoints:`Hit Dice: 1d8 per rogue level<br>
    Hit Points at 1st Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per rogue level after 1st`,
    proficiencies:`Armor: Light armor<br>
    Weapons: Simple weapons, hand crossbows, longswords, rapiers. shortswords<br>
    Tools: Thieve's tools<br>
    Saving Throws: Dexterity. Intelligence<br>
    Skills: Choose four from Acrobatics, Athletics, Deception. Insight, Intimidation, Investigation, Perception. Performance. Persuasion, Sleight of Hand. and Stealth`,
    expertise:`Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.<br>
    At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.`,
    sneakAttack:`You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.<br>
    You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.<br>
    The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`,
    thivesCant:`During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.<br> 
    In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`,
    cunningAction:`Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`,
    uncannyDodge:`When an attacker that you can seehits you with an attack, you can use your reaction to halve the attack's damage against you.`,
    evasion:`You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
    reliableTalent:`You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.`,
    blindsense:`If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`,
    slipperyMind:`you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.`,
    elusive:`You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.`,
    strokeOfLuck:`You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    fastHands:`You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.`,
    secondStoryWork:` You gain the ability to climb faster than normal; climbing no longer costs you extra movement.<br>
    In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.`,
    supremeSneak:`You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.`,
    useMagicDevice:`You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.`,
    thiefReflexes:`You have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.`,
    bonusProficiencies:`You gain proficiency with the disguise kit and the poisoner's kit.`,
    assassinate:`You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.`,
    infiltrationExpertise:`You can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can’t establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and officiallooking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.<br> 
    Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.`,
    impostor:`you gain the ability to unerringly mimic another person’s speech, writing, and behavior.<br>
    You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms.<br>
    Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.`,
    deathStrike:`You become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.`,
    spells:` <b>Cantrips:</b> You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.<br><br> 
    <b>Spell Slots:</b> The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.<br>
    Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell. unless you're replacing the spell you gained at 8th, 14th, or 20th level.<br>
    Spelicasting Ability. Intelligence is your spelicasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability.`,
    mageHandLegerdemain:`When you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:<br><br>
    - You can stow one object the hand is holding ina container worn or carried by another creature.<br>
    - You can retrieve an object in a container worn or carried by another creature.<br>
    - You can use thieves tools to pick locks and disarm traps at range.<br><br>
    You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.<br>
    In addition, you can use the bonus action granted by your Cunning Action to control the hand.`,
    magicalAmbush:`if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.`,
    versatileTrickster:`You gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.`,
    spellThief:`you gain the ability to.magically steal the knowledge of how to cast a spell from another spellcaster.<br>
    Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spel! and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.<br>
    Once you use this feature, you can't use it again until you finish a long rest.`,
    tableTrickster:`<table class="tableClass">
                    <tr>
                        <th >Rogue Level</th>
                        <th >Cantrips Known</th>
                        <th >Spells Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>3</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>3</td>
                        <td>5</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>3</td>
                        <td>6</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>3</td>
                        <td>6</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>4</td>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>4</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>4</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>4</td>
                        <td>9</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>4</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>4</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>4</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>4</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>4</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>4</td>
                        <td>12</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>4</td>
                        <td>13</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    
                </table>`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Sneak Attack</th>
                        <th >Features</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td>1d6</td>
                        <td><a href="">Expertise</a> - <a href="">Sneak Attack</a> - <a href="">Thieves Can't</a></td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td>1d6</td>
                        <td><a href="">Cunning Action</a></td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>2d6</td>
                        <td><a href="">Roguish Archetype</a></td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td>2d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td>3d6</td>
                        <td><a href="">Uncanny Dodge</a></td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td>3d6</td>
                        <td><a href="">Expertise</a></td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>4d6</td>
                        <td><a href="">Evasion</a></td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td>4d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>5d6</td>
                        <td><a href="">Roguish Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td>5d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td>6d6</td>
                        <td><a href="">Reliable Talent</a></td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td>6d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>7d6</td>
                        <td><a href="">Roguish Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td>7d6</td>
                        <td><a href="">Blindsense</a></td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>8d6</td>
                        <td><a href="">Slippery Mind</a></td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td>8d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>9d6</td>
                        <td><a href="">Roguish Archetype Feature</a></td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td>9d6</td>
                        <td><a href="">Elusive</a></td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td>10d6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td>10d6</td>
                        <td><a href="">Stroke of Luck</a></td>
                    </tr>

                </table>`,
}
const sorcerer = {
    name:`Sorcerer`,
    hitPoints:`Hit Dice: 1d6 per sorcerer level<br>
    Hit Points at 1st Level: 6 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d6 (or 4) + your Constitution modifier per sorcerer level after 1st`,
    proficiencies:`Armor: None<br>
    Weapons: Daggers, darts, slings, quarterstaffs, light crossbows<br>
    Tools: None<br>
    Saving Throws: Constitution, Charisma<br> 
    Skills: Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion`,
    abilityScore:`When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`,
    spells:`You know <b>four cantrips</b> of your choice from the <a href="">sorcerer spell list</a>. You learn additional sorcerer cantrips of your choice at higher levels.<br>
    You know two 1st-level spells of your choice from the <a href="">sorcerer spell list</a>.<br>
    Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.<br>
    Charisma is your spellcasting ability for your sorcerer spells,<br>
    <b>Spell save DC = 8 + your proficiency bonus + your Charisma modifier<br>
    Spell attack modifier = your proficiency bonus + your Charisma modifier</b>`,
    sorcerousOrigin:`Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic. both detailed at the end of the class description.<br>
    Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`,
    fontOfMagic:`You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.<br>
    <b>Sorcery Points:</b> You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.<br>
    <b>Flexible Casting:</b> You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.
    <b>Creating Spell Slots:</b> You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.<br>
    <b>Converting s Spell Slot to Sorcery Points</b>: As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.<br>
    <br>
    <table class="tableClass">
                    <tr>
                        <th>Spell Slot Level</th>
                        <th>Sorcery Point Cost</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>7</td>
                    </tr>
                </table>`,
    metamagic:`You gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.<br>
    You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.<br>
    <b>Careful Spell</b>:When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature), A chosen creature automatically succeeds on its saving throw against the spell.<br>
    <b>Distant Spell</b>:When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.<br>
    When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet.<br>
    <b>Empowered Spell</b>:When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.<br>
    You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell.<br>
    <b>Extended Spell</b>:When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours.<br>
    <b>Heightened Spell</b>:When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell.<br>
    <b>Quickened Spell</b>:When you cast a spell that has a casting time of 1 action. you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting.<br>
    <b>Subtle Spell</b>:When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components.<br>
    <b>Twinned Spell</b>:When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).
    `,
    sorcerousRestoration:`At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.`,
    dragonAncestor:`You choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.<br>
    You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.<br>
    <br>
    <table class="tableClass">
                    <tr>
                        <th>Dragon</th>
                        <th>Damage Type</th>
                    </tr>
                    <tr>
                        <td>Black</td>
                        <td>Acid</td>
                    </tr>
                    <tr>
                        <td>Blue</td>
                        <td>Lighting</td>
                    </tr>
                    <tr>
                        <td>Brass</td>
                        <td>Fire</td>
                    </tr>
                    <tr>
                        <td>Bronze</td>
                        <td>Lighting</td>
                    </tr>
                    <tr>
                        <td>Copper</td>
                        <td>Acid</td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                        <td>Fire</td>
                    </tr>
                    <tr>
                        <td>Green</td>
                        <td>Poison</td>
                    </tr><tr>
                        <td>Red</td>
                        <td>Fire</td>
                    </tr><tr>
                        <td>Silver</td>
                        <td>Cold</td>
                    </tr><tr>
                        <td>White</td>
                        <td>Cold</td>
                    
                </table>`,
    draconicResilience:`As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.`,
    elementalAffinity:`When you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to that damage. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.`,
    dragonWings:`you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.<br>
    You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.`,
    draconicPresence:`You can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.`,
    wildMagicSurge:`Your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.<br>
    <a href="">Click here for the Wild Magic Surge Table</a>`,
    tidesOfChaos:`You can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.`,
    BendLuck:`You have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.`,
    controlledChaos:`You gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.`,
    spellBombardment:`The harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Sorcery Points</th>
                        <th >Features</th>
                        <th >Cantrips Known</th>
                        <th >Spells Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                        <th >5th</th>
                        <th >6th</th>
                        <th >7th</th>
                        <th >8th</th>
                        <th >9th</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td>-</td>
                        <td><a href="">Spellcasting</a> - <a href="">Sorcerous Origin</a></td>
                        <td>4</td>
                        <td>2</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td>2</td>
                        <td><a href="">Font of Magic</a></td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>3</td>
                        <td><a href="">Metamagic</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td>4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td>5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>6</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td>6</td>
                        <td><a href="">Sorcerous Origin feature</a></td>
                        <td>5</td>
                        <td>7</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>7</td>
                        <td>-</td>
                        <td>5</td>
                        <td>8</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td>8</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>9</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>9</td>
                        <td>-</td>
                        <td>5</td>
                        <td>10</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td>10</td>
                        <td><a href="">Metamagic</a></td>
                        <td>6</td>
                        <td>11</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td>11</td>
                        <td>-</td>
                        <td>6</td>
                        <td>12</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td>12</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>6</td>
                        <td>12</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>13</td>
                        <td>-</td>
                        <td>6</td>
                        <td>13</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td>14</td>
                        <td><a href="">Sorcerous Origin feature</a></td>
                        <td>6</td>
                        <td>13</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>15</td>
                        <td>-</td>
                        <td>6</td>
                        <td>14</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td>16</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>6</td>
                        <td>14</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>17</td>
                        <td><a href="">Metamagic</a></td>
                        <td>6</td>
                        <td>15</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td>18</td>
                        <td><a href="">Sorcerous Origin feature</a></td>
                        <td>6</td>
                        <td>15</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td>19</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>6</td>
                        <td>15</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td>20</td>
                        <td><a href="">Sorcerous Restoration</a></td>
                        <td>6</td>
                        <td>15</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    
                </table>`,
}
const warlock = {
    name:`Warlock`,
    hitPoints:`Hit Dice: 1d8 per warlock level<br>
    Hit Points at 1st Level: 8 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per warlock level after 1st`,
    proficiencies:`Armor: Light armor<br> 
    Weapons: Simple weapons<br> 
    Tools: None<br>
    Saving Throws: Wisdom, Charisma<br>
    Skills: Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion`,
    spells:`You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of  <a href="">The Warlock table</a>.<br>
    Charisma is your spellcasting ability for your warlock spells.`,
    feyPresence:`Your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    mistyEscape:`Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    beguilingDefenses:`Your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.`,
    darkDelirium:`You can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell), This effect ends early if the creature takes any damage.<br> Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.<br> You must finish a short or long rest before you can use this feature again.`,
    darkOneBlessing:`When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).`,
    darkOnesOwnLuck:`You can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    fiendishResilience:`You can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.`,
    hurlThroughHell:`When you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.<br>
    At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.<br>
    Once you use this feature, you can't use it again until you finish a long rest.`,
    awakenedMind:`Your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.`,
    entropicWard:`You learn to magically ward yourself against attack and to turn an enemy’s failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    thoughtShield:`Your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.`,
    createThrall:`You gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.<br>
    You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.`,
    patronSpellsArchfey:`<table class="tableClass">
                            <tr>
                                <th>Spell Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:faerie-fire">Faerie Fire</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:sleep">Sleep</a></td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:calm-emotions">Calm Emotions</a> - <a target="_blank" target="_blank" href="https://dnd5e.wikidot.com/spell:phantasmal-force">Phantasmal Force</a></td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:blink">Blink</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:plant-growth">Plant Growth</a></td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:dominate-beast">Dominate Beast</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:greater-invisibility">Greater Invisibility</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:dominate-person">Dominate Person</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:seeming">Seeming</a></td>
                            </tr>
                        </table>`,
    patronSpellsFiend:`<table class="tableClass">
                            <tr>
                                <th>Spell Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:burning-hands">Burning Hands</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:command">Command</a></td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:blindness-deafness">Blindness/Deafness</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:scorching-ray">Scorching Ray</a></td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:fireball">Fireball</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:stinking-cloud">Stinking Cloud</a></td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:fire-shield">Fire Shield</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:wall-of-fire">Wall of Fire</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:flame-strike">Flame Strike</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:hallow">Hallow</a></td>
                            </tr>
                        </table>`,
    patronSpellsOldOne:`<table class="tableClass">
                            <tr>
                                <th>Spell Level</th>
                                <th>Spells</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:dissonant-whispers">Dissonant Whispers</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:tashas-hideous-laughter">Tasha's Hideous Laughter</a></td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:detect-thoughts">Detect Thoughts</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:phantasmal-force">Phantasmal Force</a></td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:clairvoyance">Clairvoyance</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:sending">Sending</a></td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:dominate-beast">Dominate Beast</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:evards-black-tentacles">Evard's Black Tentacles</a></td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td><a target="_blank" href="https://dnd5e.wikidot.com/spell:dominate-person">Dominate Person</a> - <a target="_blank" href="https://dnd5e.wikidot.com/spell:telekinesis">Telekinesis</a></td>
                            </tr>
                        </table>`,
    table:`<table class="tableClass">
                            <tr>
                                <th>Level</th>
                                <th>Proficiency Bonus</th>
                                <th>Features</th>
                                <th>Cantrips</th>
                                <th>Spells known</th>
                                <th>Spells Slots</th>
                                <th>Slot Level</th>
                                <th>Invocation Known</th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>+2</td>
                                <td><a href="">Otherworldly Patron</a> - <a href="">Pact Magic</a></td>
                                <td>2</td>
                                <td>2</td>
                                <td>1</td>
                                <td>1st</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>2nd</td>
                                <td>+2</td>
                                <td><a href="">Eldritch Invocations</a></td>
                                <td>2</td>
                                <td>3</td>
                                <td>2</td>
                                <td>1st</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>3rd</td>
                                <td>+2</td>
                                <td><a href="">Pact Boon</a></td>
                                <td>2</td>
                                <td>4</td>
                                <td>2</td>
                                <td>2nd</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>4th</td>
                                <td>+2</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>3</td>
                                <td>5</td>
                                <td>2</td>
                                <td>2nd</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>5th</td>
                                <td>+3</td>
                                <td>-</td>
                                <td>3</td>
                                <td>6</td>
                                <td>2</td>
                                <td>3rd</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>6th</td>
                                <td>+3</td>
                                <td><a href="">Otherworldly Patron feature</a></td>
                                <td>3</td>
                                <td>7</td>
                                <td>2</td>
                                <td>3rd</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>7th</td>
                                <td>+3</td>
                                <td> - </td>
                                <td>3</td>
                                <td>8</td>
                                <td>2</td>
                                <td>4th</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>8th</td>
                                <td>+3</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>3</td>
                                <td>9</td>
                                <td>2</td>
                                <td>4th</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>9th</td>
                                <td>+4</td>
                                <td>-</td>
                                <td>3</td>
                                <td>10</td>
                                <td>2</td>
                                <td>5th</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>+4</td>
                                <td><a href="">Otherworldly Patron feature</a></td>
                                <td>4</td>
                                <td>10</td>
                                <td>2</td>
                                <td>5th</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>11th</td>
                                <td>+4</td>
                                <td><a href="">Mystic Arcanum (6th level)</a></td>
                                <td>4</td>
                                <td>11</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>12th</td>
                                <td>+4</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>11</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>13th</td>
                                <td>+5</td>
                                <td><a href="">Mystic Arcanum (7th level)</a></td>
                                <td>4</td>
                                <td>12</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>14th</td>
                                <td>+5</td>
                                <td><a href="">Otherworldly Patron feature</a></td>
                                <td>4</td>
                                <td>12</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>15th</td>
                                <td>+5</td>
                                <td><a href="">Mystic Arcanum (8th level)</a></td>
                                <td>4</td>
                                <td>13</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>16th</td>
                                <td>+5</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>13</td>
                                <td>3</td>
                                <td>5th</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>17th</td>
                                <td>+6</td>
                                <td><a href="">Mystic Arcanum (9th level)</a></td>
                                <td>4</td>
                                <td>14</td>
                                <td>4</td>
                                <td>5th</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>18th</td>
                                <td>+6</td>
                                <td><a href="">-</a></td>
                                <td>4</td>
                                <td>14</td>
                                <td>4</td>
                                <td>5th</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>19th</td>
                                <td>+6</td>
                                <td><a href="">Ability Score Improvement</a></td>
                                <td>4</td>
                                <td>15</td>
                                <td>4</td>
                                <td>5th</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>20th</td>
                                <td>+6</td>
                                <td><a href="">Eldritch Master</a></td>
                                <td>4</td>
                                <td>15</td>
                                <td>4</td>
                                <td>5th</td>
                                <td>8</td>
                            </tr>

                        </table>`
}
const wizard = {
    name:`Wizard`,
    hitPoints:`Hit Dice: 1d6 per wizard level<br>
    Hit Points at 1st Level: 6 + your Constitution modifier<br>
    Hit Points at Higher Levels: 1d6 (or 4) + your Constitution modifier per wizard level after 1st`,
    proficiencies:`Armor: None<br>
    Weapons: Daggers, darts, slings, quarterstaffs, light crossbows<br>
    Tools: None<br>
    Saving Throws: Intelligence, Wisdom<br> 
    Skills: Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion`,
    spellbook:`The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.<br>
    <b>+</b> Copying a Spell into the Book: When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a level for which you have spell slots and if you can spare the time to decipher and copy it.<br>
    Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.<br>
    For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.
    <b>+</b> Replacing the Book: You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.<br>
    If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.<br>
    <b>+</b> The Book's Appearance: Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.`,
    spells:`<b>Cantrips</b>: You know three cantrips of your choice from the <a href="">wizard spell list</a>. You learn additional wizard cantrips of your choice at higher levels.<br>
    You prepare the list of wizard spells that are available for you to cast. To do so. choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.<br>
    For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook.<br>
    You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.<br>
    Intelligence is your spellcasting ability for your wizard spells<br>
    <b>Spell save DC = 8 + your proficiency bonus + your Intelligence modifier</b><br>
    <b>Spell attack modifier = your proficiency bonus + your Intelligence modifier</b><br>
    <br>
    <b>Ritual Casting:</b> You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.
    <b>Learning Spells of 1st Level and Higher</b>: Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots`,
    arcaneRecovery:`You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.<br>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two Ist-level spell slots.`,
    arcaneTradition:`You choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation.<br>
    Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.`,
    abilityScore:`When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    spellMastery:`You have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spelibook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.<br>
    By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.`,
    signatureSpells:`You gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.<br>
    If you want to cast either spell at a higher level, you must expend a spell slot as normal.`,
    abjurationSavant:`The gold and time you must spend to copy an abjuration spell into your spellbook is halved.`,
    arcaneWard:`You can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.<br>
    While the ward has 0 hit points, it can't absorb damage. but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.<br> 
    Once you create the ward, you can't create it again until you finish a long rest.`,
    projectedWard:`When a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage. `,
    improvedAbjuration:`When you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.`,
    spellResistance:`you have advantage on saving throws against spells.<br>
    Furthermore, you have resistance against the damage of spells.`,
    conjurationSavant:`The gold and time you must spend to copy a conjuration spell into your spellbook is halved.`,
    minorConjuration:`You can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.<br>
    The object disappears after 1 hour, when you use this feature again, or if it takes any damage.`,
    benignTransposition:`You can use your action to teleport up to 30 feet to an unoccupied space that you can see Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.<br> 
    Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.`,
    focusedConjuration:`While you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.`,
    durableSummons:`Any creature that you summon or create with a conjuration spell has 30 temporary hit points.`,
    divinationSavant:`The goid and time you must spend to copy a divination spell into your spellbook is halved.`,
    portent:`Glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.<br>
    Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.`,
    expertDivination:`Casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.`,
    theThirdEye:`You can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest.<br>
    <b>Darkvision</b>: You gain darkvision out to a range of 60 feet, as described in chapter 8.<br>
    <b>Ethereal Sight</b>: You can see into the Ethereal Plane within 60 feet of you.<br>
    <b>Greater Comprehensio</b>n: You can read any language.<br>
    <b>See Invisibility</b>: You can see invisible creatures and objects within 10 feet of you that are within line of sight.`,
    greaterPortent:`The visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.`,
    enchantmentSavant:`The gold and time you must spend to copy an enchantment spell into your spellbook is halved.`,
    hypnoticGaze:`Your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.<br>
    On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.<br>
    Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest.`,
    instinctiveCharm:`When a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target.<br>
    On a successful save, you can't use this feature on the attacker again until you finish a long rest.<br>
    You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect.`,
    splitEnchantment:`When you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.`,
    alterMemories:`You gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.<br>
    Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell.`,
    evocationSavant:`The gold and time you must spend to copy an evocation spell into your spellbook is halved.`,
    sculptSpells:`You can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.`,
    potentCantrip:`Your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.`,
    empoweredEvocation:`You can add your Intelligence modifier to the damage roll of any wizard evocation spell you cast.`,
    overchannel:`Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage, you can deal maximum damage with that spell.<br>
    The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.`,
    illusionSavant:`The gold and time you must spend to copy an illusion spell into your spellbook is halved.`,
    improvedMinorIllusion:`You learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.<br>
    When you cast minor illusion, you can create both a l sound and an image with a single casting of the spell.`,
    malleableIllusions:`When you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that f you can see the illusion.`,
    illusorySelf:`You can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack f roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and l yourself. The attack automatically misses you, then the illusion dissipates.<br>
    Once you use this feature, you can't use it again until you finish a short or long rest.`,
    illusoryReality:`You have learned the secret of weaving shadow magic into your illusions to give them a semireality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.<br>
    The object can't deal damage or otherwise directly harm anyone.`,
    necromancySavant:`The gold and time you must spend to copy a necromancy spell into your spellbook is halved.`,
    grimHarvest:`You gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of Ist level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.`,
    undeadThralls:`You add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.<br>
    Whenever you create an undead using a necromancy spell, it has additional benefits:<br>
    <b>+</b> The creature's hit point maximum is increased by an amount equal to your wizard level.
    <b>+</b> The creature adds your proficiency bonus to its weapon damage rolls.`,
    inuredToUndeath:`You have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.`,
    commandUndead:`You can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.<br> 
    Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.`,
    transmutationSavant:`The gold and time you must spend to copy a transmutation spell into your spellbook is halved.`,
    minorAlchemy:`You can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.`,
    transmutersStone:`You can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:<br>
    <b>+</b> Darkvision out to a range of 60 feet<br>
    <b>+</b> An increase to speed of 10 feet while the creature is unencumbered<br>
    <b>+</b> Proficiency in Constitution saving throws<br>
    <b>+</b> Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)<br>
    Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.<br>
    If you create a new transmuter's stone, the previous one ceases to function.`,
    shapechanger:`You add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.<br>
    Once you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.`,
    masterTransmuter:`You can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.<br>
    <b>Major Transformation</b>: You can transmute one nonmagical object—no larger than a 5-foot cube—into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.<br>
    <b>Panacea</b>: You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.<br>
    <b>Restore Life</b>: You cast the raise dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.<br>
    <b>Restore Youth</b>: You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.`,
    table:`<table class="tableClass">
                    <tr>
                        <th >Level</th>
                        <th >Proficiency Bonus</th>
                        <th >Features</th>
                        <th >Cantrips Known</th>
                        <th >1st</th>
                        <th >2nd</th>
                        <th >3rd</th>
                        <th >4th</th>
                        <th >5th</th>
                        <th >6th</th>
                        <th >7th</th>
                        <th >8th</th>
                        <th >9th</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>+2</td>
                        <td><a href="">Spellcasting</a> - <a href="">Arcane Recovery</a></td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2nd</td>
                        <td>+2</td>
                        <td><a href="">Arcane Tradition</a></td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3rd</td>
                        <td>+2</td>
                        <td>-</td>
                        <td>3</td>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4th</td>
                        <td>+2</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5th</td>
                        <td>+3</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6th</td>
                        <td>+3</td>
                        <td><a href="">Arcane Tradition feature</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7th</td>
                        <td>+3</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8th</td>
                        <td>+3</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>4</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>10th</td>
                        <td>+4</td>
                        <td><a href="">Arcane Tradition feature</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>11th</td>
                        <td>+4</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>12th</td>
                        <td>+4</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>13th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>14th</td>
                        <td>+5</td>
                        <td><a href="">Arcane Tradition feature</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>15th</td>
                        <td>+5</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>16th</td>
                        <td>+5</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>17th</td>
                        <td>+6</td>
                        <td>-</td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>18th</td>
                        <td>+6</td>
                        <td><a href="">Spell Mastery</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>19th</td>
                        <td>+6</td>
                        <td><a href="">Ability Score Improvement</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>20th</td>
                        <td>+6</td>
                        <td><a href="">Signature Spell</a></td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>2</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    
                </table>`,
}

const layoutId = document.querySelector("#full-layout");
const layoutClass = document.querySelector(".full-layout2");
const menuRaces = document.querySelector('.menu1');
const menuRacesDetails = document.querySelector('.race-layout');
const hideBtn = document.querySelector('.hide-btn');
const logo = document.querySelector('.logo');
let menuSwitch = true;
let layoutSwitch = true;

function Layout(){

    if (layoutSwitch === false) {
        const layoutFalse= document.querySelector(".full-layout2");
        layoutFalse.setAttribute('id','full-layout');
        layoutFalse.removeAttribute('class');
        layoutSwitch = true;
    }
    else if (layoutSwitch === true ) {
        
        layoutId.className = "full-layout2"
        layoutId.removeAttribute('id');
        layoutSwitch = false;
    }
    else {
        console.log('nothing');
    }
}

function hideMenuRaces(){
    if (!menuSwitch) {
        menuRaces.innerHTML = '';
        menuSwitch = true;
        Layout();
    }
    else {
        console.log ('error');
    }
}
function logoReset(){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
}

function displayMenuRaces(race) {
    if (race === 'aasimar'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `
        <div class="races-menu-layout">

            <div class="races-menu">
            
                    <p onclick="displayMenuRacesDetails('aasimarBase')">Aasimar (Base)(2024 PHB)</p>
                    <p onclick="displayMenuRacesDetails('scourge')">Scourge</p>
                    <p onclick="displayMenuRacesDetails('protector')">Protector</p>
                    <p onclick="displayMenuRacesDetails('fallen')">Fallen</p>

                <div class = "hide-div"> 
                <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'dragonborn'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `
        <div class="races-menu-layout">

            <div class="races-menu">

                <p onclick="displayMenuRacesDetails('dragonbornBase2024')">Dragonborn (Base)(PHB 2024) </p>
                <p onclick="displayMenuRacesDetails('dragonbornBase')">Dragonborn (Base)(PHB 2014)</p>
                <p onclick="displayMenuRacesDetails('dragonbornDracon')">Dragonborn (Draconblood)</p>
                <p onclick="displayMenuRacesDetails('dragonbornRavenite')">Dragonborn (Ravenite)</p>

                <div class = "hide-div"> 
                    <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 

                </div>
            </div>
        </div>`
        
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    }
    else if (race === 'dwarf'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

        <div class="races-menu-layout">

            <div class="races-menu">

            <p onclick="displayMenuRacesDetails('dwarf2024')">Dwarf (Base)(2024 PHB)</p>
            <p onclick="displayMenuRacesDetails('dwarf')">Dwarf (Base)(2014 PHB)</p>
            <p onclick="displayMenuRacesDetails('dwarfduergar')">Dwarf Duergar</p>
            <p onclick="displayMenuRacesDetails('dwarfhill')">Dwarf of the Hill</p>
            <p onclick="displayMenuRacesDetails('dwarfmountain')">Dwarf of the Mountain</p>
            <p onclick="displayMenuRacesDetails('dwarfmark')">Dwarf : Mark of the Warding</p>

            <div class = "hide-div"> 
                <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
            </div>
            </div>
        </div>`
            
            

        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'elf'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

        <div class="races-menu-layout">

            <div class="races-menu">

                <p onclick="displayMenuRacesDetails('elfBase2024')">Elf (Base)(PHB 2024)</p>

                <p onclick="displayMenuRacesDetails('elfBase')">Elf (Base)(PHB 2014)</p>

                <p onclick="displayMenuRacesDetails('highelf')">High Elf</p>

                <p onclick="displayMenuRacesDetails('woodelf')">Wood Elf</p>

                <p onclick="displayMenuRacesDetails('drowelf')">Drow Elf</p>

                <p onclick="displayMenuRacesDetails('eladrinelf')">Eladrin Elf</p>

                <p onclick="displayMenuRacesDetails('shadarelf')">Shadar-kai Elf</p>

                <p onclick="displayMenuRacesDetails('seaelf')">Sea Elf</p>

                <p onclick="displayMenuRacesDetails('pallidelf')">Pallid Elf</p>

                <p onclick="displayMenuRacesDetails('markelf')">Elf (Mark of Shadow)</p>

                <div class = "hide-div"> <p            onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
             </div>
        </div>`
            
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'gnome'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

        <div class="races-menu-layout">

            <div class="races-menu">
        
                <p onclick="displayMenuRacesDetails('gnomeBase2024')">Gnome (Base)(PHB 2024)</p>
                <p onclick="displayMenuRacesDetails('gnomeBase2014')">Gnome (Base)(PHB 2014)</p>
                <p onclick="displayMenuRacesDetails('forestGnome')">Forest Gnome (2014)</p>
                <p onclick="displayMenuRacesDetails('rockGnome')">Rock Gnome (2014)</p>
                <p onclick="displayMenuRacesDetails('deepGnome')">Deep Gnome</p>
                <p onclick="displayMenuRacesDetails('gnomeMark')">Gnome: Mark of Scribing (2014)</p>
         
                <div class = "hide-div"> <p    onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'goliath'){
        menuRaces.innerHTML= '';;
        menuRaces.innerHTML = `
        <div class="races-menu-layout">

            <div class="races-menu">
        
                <p onclick="displayMenuRacesDetails('goliathbase2024')">Goliath (Base)(PHB 2024)</p>

                <p onclick="displayMenuRacesDetails('goliathbase')">Goliath (Base)</p>
         
                <div class = "hide-div"> <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'halfling'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

         <div class="races-menu-layout">

            <div class="races-menu">

                <p onclick="displayMenuRacesDetails('halflingbase2024')">Halfling (Base)(PHB 2024)</p>

                <p onclick="displayMenuRacesDetails('halflingBase')">Halfling (Base)(PHB 2014)</p>

                <p onclick="displayMenuRacesDetails('halflinglight')">Halfling: Lightfoot</p>

                <p onclick="displayMenuRacesDetails('halflingstout')">Halfling: Stout</p>

                <p onclick="displayMenuRacesDetails('halflinglotusden')">Halfling: Lotusden</p>

                <p onclick="displayMenuRacesDetails('halflingghost')">Halfling: Ghostwise</p>

                <p onclick="displayMenuRacesDetails('halflingmarkhealing')">Halfling: Mark of Healing</p>

                <p onclick="displayMenuRacesDetails('halflingmarkhospitality')">Halfling: Mark of Hospitality</p>

                <div class = "hide-div"> <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'human'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

         <div class="races-menu-layout">

            <div class="races-menu">

                <p onclick="displayMenuRacesDetails('humanbase2024')">Human (Base)(PHB 2024) </p>

                <p onclick="displayMenuRacesDetails('humanbase')">Human (Base)(PHB 2014)</p>

                <p onclick="displayMenuRacesDetails('humanvariant')">Human (Variant)</p>

                <p onclick="displayMenuRacesDetails('humankeldon')">Human Keldon</p>

                <p onclick="displayMenuRacesDetails('humanmarkhandling')">Human: Mark of Handling</p>

                <p onclick="displayMenuRacesDetails('humanmarkmaking')">Human: Mark of Making</p>

                <p onclick="displayMenuRacesDetails('humanmarkpassage')">Human: Mark of Passage</p>

                <p onclick="displayMenuRacesDetails('humanmarksentinel')">Human: Mark of Sentinel</p>

                <p onclick="displayMenuRacesDetails('humanmarkfinding')">Human: Mark of Finding</p>

                <div class = "hide-div"> <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'orc'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

         <div class="races-menu-layout">

            <div class="races-menu">

                <p onclick="displayMenuRacesDetails('orcbase2024')">Orc (Base)(PHB 2024)</p>

                <p onclick="displayMenuRacesDetails('halforc')">Half-Orc (Base)(PHB 2014)</p>

                <p onclick="displayMenuRacesDetails('halforcmark')">Half-Orc (Mark of Finding)</p>

                <div class = "hide-div"> <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
    }
    else if (race === 'tiefling'){
        menuRaces.innerHTML= '';
        menuRaces.innerHTML = `

        <div class="races-menu-layout">

            <div class="races-menu-tiefling">

                <p onclick="displayMenuRacesDetails('tieflingbase2024')">Tiefling (Base)(PHB 2024) </p>

                <p onclick="displayMenuRacesDetails('tieflingbase')">Tiefling (Base)(PHB 2014)</p>

                <p onclick="displayMenuRacesDetails('tieflingasmodeus')">Tiefling (Asmodeus)</p>
                
                <p onclick="displayMenuRacesDetails('tieflingbaalzebul')">Tiefling (Baalzebul)</p>

                <p onclick="displayMenuRacesDetails('tieflingdispater')">Tiefling (Dispater)</p>

                <p onclick="displayMenuRacesDetails('tieflingfierna')">Tiefling (Fierna)</p>

                <p onclick="displayMenuRacesDetails('tieflingglasya')">Tiefling (Glasya)</p>

                <p onclick="displayMenuRacesDetails('tieflinglevistus')">Tiefling (Levistus)</p>

                <p onclick="displayMenuRacesDetails('tieflingmammon')">Tiefling (Mammon)</p>

                <p onclick="displayMenuRacesDetails('tieflingmephistopheles')">Tiefling (Mephistopheles)</p>

                <p onclick="displayMenuRacesDetails('tieflingzariel')">Tiefling (Zariel)</p>

                <p onclick="displayMenuRacesDetails('tieflingdeviltongue')">Tiefling (Devil's Tongue)</p>

                <p onclick="displayMenuRacesDetails('tieflinghellfire')">Tiefling (Hellfire)</li></p>

                <p onclick="displayMenuRacesDetails('tieflinginfernallegacy')">Tiefling (Infernal Legacy)</p>

                <p onclick="displayMenuRacesDetails('tieflingwinged')">Tiefling (Winged)</p>

                <div class = "hide-div"> <p onclick="hideMenuRaces()" class="hide-btn"> HIDE </p> 
                </div>
            </div>
        </div>`
        menuSwitch = false;
        if (layoutSwitch === false){
            Layout();   
        }
        else {
            console.log('sigue');
        }
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
                <br>
                <b class="importantDetail">Path of the Berserker</b> or <b class="importantDetail">Path of the Totem Warrior</b></p> 
                <p><b>Path of The berserker:</b></p>
                <p><b>Level 3 - Frenzy:</b> ${barbarian.frenzy}</p>
                <p><b>Level 6 - Mindless Rage:</b> ${barbarian.mindlessRage}</p>
                <p><b>Level 10 - Intimidating Presence:</b> ${barbarian.intimidatingPresence}</p>
                <p><b>Level 14 - Retaliation:</b> ${barbarian.retaliation}</p>
                <p><b class="importantDetail">Path of The Totem Warrior:</b></p>
                <p><b>Level 3 (both skills)<br>
                <br>
                Spirit Seeker:</b> ${barbarian.spiritSeeker}<br>
                <br>
                <b>Totem Spirit:</b> ${barbarian.totemSpirit}</p>
                <p><b>Level 6 - Aspect Of The Beast:</b> ${barbarian.aspectOfTheBeast}</p>
                <p><b>Level 10 - Spirit Walker:</b> ${barbarian.spiritWalker}</p>
                <p><b>Level 14 - Totemic Attunement:</b> ${barbarian.totemicAttunement}</p>
                <p><b>Class table per level</b> ${barbarian.table}</p>
                
            </div>
            
        </div>`
        menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
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
                
            </div>
            
        </div>`
        menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
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
            
        </div>
        
    </div>`
    ;
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        ;
}
    else if(subclasses === 'ranger'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${ranger.name}</h1>
                <p><b>Hit Points: </b> ${ranger.hitPoints}</p>
                <p><b>Proficiencies: </b>${ranger.proficiencies}</p>
                <p><b>Spells: </b>${ranger.spells}</p>
                <p><b class="importantDetail">Ranger Skills: </b></p>
                <p><b>Level 3: Primeval Awareness:</b> ${ranger.primevalAwareness}<br>
                <br>
                <p><b>Level 5 - Extra Attack:</b> ${ranger.extraAttack}</p>
                <p><b>Level 8 - Land's Stride:</b> ${ranger.landsStride}</p>
                <p><b>Level 10 - Hide in Plain Sight:</b> ${ranger.hideInPlainSight}</p>
                <p><b>Level 14 - Vanish:</b> ${ranger.vanish}</p>
                <p><b>Level 18 - Feral Senses:</b> ${ranger.feralSenses}</p>
                <p><b>Level 20 - Foe Slayer:</b> ${ranger.foeSlayer}</p>
                <p><b>Subclasses:</b><br>
                <br>
                <b class="importantDetail">Hunter</b> or <b class="importantDetail">Beast Master</b></p> 
                <p><b class="importantDetail">Hunter:</b></p>
                <p><b>Level 3: - Hunter's Prey:</b> ${ranger.huntersPrey}
                <br>
                <p><b>Level 7 - Defensive Tactics:</b> ${ranger.defensiveTactics}</p>
                <br>
                <p><b>Level 11 - Multiattack:</b> ${ranger.multiattack}</p>
                <br>
                <p><b>Level 15 - Superior Hunter's Defense:</b> ${ranger.superiorHuntersDefense}</p>
                <br>
                <p><b class="importantDetail">Beast Master:</b></p>
                <p><b>Level 3: - Ranger Companion:</b> ${ranger.rangersCompanion}
                <br>
                <p><b>Level 7 - Exceptional Training:</b> ${ranger.exceptionalTraining}</p>
                <br>
                <p><b>Level 11 - Bestial Fury:</b> ${ranger.bestialFury}</p>
                <br>
                <p><b>Level 15 - Share Spells:</b> ${ranger.shareSpells}</p>
                <p><b>Class table per level</b> ${ranger.table}</p>
                
            </div>
            
        </div>`
        menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        ;
    }
    else if(subclasses === 'rogue'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
                <h1>${rogue.name}</h1>
                <p><b>Hit Points: </b> ${rogue.hitPoints}</p>
                <p><b>Proficiencies: </b>${rogue.proficiencies}</p>
                <p><b class="importantDetail">Rogue Skills: </b></p>
                <p><b>Level 1:</b><br> 
                <br>
                <b>Expertise:</b> ${rogue.expertise}
                <br><br> 
                <b>Sneak Attack:</b> ${rogue.sneakAttack}
                <br><br> 
                <b>Thieves Can't:</b> ${rogue.thivesCant}</p>
                <p><b>Level 2 - Cunning Action:</b> ${rogue.cunningAction}</p>
                <p><b>Level 5 - Uncanny Dodge:</b> ${rogue.uncannyDodge}</p>
                <p><b>Level 7 - Evasion:</b> ${rogue.evasion}</p>
                <p><b>Level 11 - Reliable Talent:</b> ${rogue.reliableTalent}</p>
                <p><b>Level 14 - Blindsense:</b> ${rogue.blindsense}</p>
                <p><b>Level 15 - Slippery Mind:</b> ${rogue.slipperyMind}</p>
                <p><b>Level 18 - Elusive:</b> ${rogue.elusive}</p>
                <p><b>Level 20 - Stroke Of Luck:</b> ${rogue.strokeOfLuck}</p>
                <p><b>Subclasses:</b><br>
                <br>
                <b class="importantDetail">Thief</b> , <b class="importantDetail">Assasin</b> or <b class="importantDetail">Arcane Trickster</b></p> 
                <p><b class="importantDetail">Thief:</b></p>
                <p><b>Level 3:</b><br><br>  
                <b>Fast Hands:</b> ${rogue.fastHands}
                <br><br> 
                <b>Second-Story Work:</b> ${rogue.secondStoryWork}</p>
                <p><b>Level 9 - Supreme Sneak:</b> ${rogue.supremeSneak}</p>
                <br>
                <p><b>Level 13 - Use Magic Device:</b> ${rogue.useMagicDevice}</p>
                <br>
                <p><b>Level 17 - Thief's Reflexes:</b> ${rogue.thiefReflexes}</p>
                <p><b class="importantDetail">Assassin:</b></p>
                <br>
                <p><b>Level 3:</b><br> <br> 
                <b>Bonus Proficiencies:</b> ${rogue.bonusProficiencies}
                <br><br> 
                <b>Assassinate:</b> ${rogue.assassinate}</p>
                <br>
                <p><b>Level 9 - Infiltration Expertise:</b> ${rogue.infiltrationExpertise}</p>
                <br>
                <p><b>Level 13 - Impostor:</b> ${rogue.impostor}</p>
                <br>
                <p><b>Level 17 - Death Strike:</b> ${rogue.deathStrike}</p>
                <p><b class="importantDetail">Arcane Trickster:</b></p>
                <br>
                <p><b>Level 3:</b><br> <br> 
                <b>SpellCasting:</b><br><br> 
                ${rogue.spells}
                <br> 
                <p><b>Trickster Spell Table</b> ${rogue.tableTrickster}</p>
                <b>Mage Hand Legerdemain:</b> ${rogue.mageHandLegerdemain}</p>
                <br>
                <p><b>Level 9 - Magical Ambush:</b> ${rogue.magicalAmbush}</p>
                <br>
                <p><b>Level 13 - Versatile Trickster:</b> ${rogue.versatileTrickster}</p>
                <br>
                <p><b>Level 17 - Spell Thief:</b> ${rogue.spellThief}</p>
                <p><b>Class table per level</b> ${rogue.table}</p>
                
            </div>
            
        </div>`
        menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        ;
    }
    else if (subclasses === 'warlock'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">
            <h1>${warlock.name}</h1>
            <p><b>Hit Points: </b> ${warlock.hitPoints}</p>
            <p><b>Proficiencies: </b>${warlock.proficiencies}</p>
            <p><b>Spells: </b>${warlock.spells}</p>
            <p><b>Subclasses:</b><br>
            <br>
            <b class="importantDetail">The Archfey</b> , <b class="importantDetail">The Fiend</b> or <b class="importantDetail">The Great Old One</b></p> 
            <p><b class="importantDetail">The Archfey:</b></p>
            <p><b>You gain the following spells for your Oath:<br>
            ${warlock.patronSpellsArchfey}</b></p>
            <p><b>Level 1 - Fey Presence:</b> ${warlock.feyPresence}</p>
            <p><b>Level 6 - Misty Escape:</b> ${warlock.mistyEscape}</p>
            <p><b>Level 10 - Beguiling Defenses:</b> ${warlock.beguilingDefenses}</p>
            <p><b>Level 14 - Dark Delirium:</b> ${warlock.darkDelirium}</p>
            <p><b class="importantDetail">The Fiend:</b></p>
            <p><b>You gain the following spells for your Oath:<br>
            ${warlock.patronSpellsFiend}</b></p>
            <p><b>Level 1 - Dark One's Blessing:</b> ${warlock.darkOneBlessing}</p>
            <p><b>Level 6 - Dark One's Own Luck:</b> ${warlock.darkOnesOwnLuck}</p>
            <p><b>Level 10 - Fiendish Resilience:</b> ${warlock.fiendishResilience}</p>
            <p><b>Level 14 - Hurl Through Hell:</b> ${warlock.hurlThroughHell}</p>
            <p><b class="importantDetail">The Great Old One:</b></p>
            <p><b>Level 1 - Awakened Mind:</b> ${warlock.awakenedMind}</p>
            <p><b>Level 6 - Entropic Ward:</b> ${warlock.entropicWard}</p>
            <p><b>Level 10 - Thought Shield:</b> ${warlock.thoughtShield}</p>
            <p><b>Level 14 - Create Thrall:</b> ${warlock.createThrall}</p>
            <p><b>Class table per level</b> ${warlock.table}</p>
        </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'cleric'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">
            <h1>${cleric.name}</h1>
            <p><b>Hit Points:<br> </b> ${cleric.hitPoints}</p>
            <p><b>Proficiencies:<br> </b>${cleric.proficiencies}</p>
            <p><b>Spells:<br> </b>${cleric.spells}</p>
            <p><b class="importantDetail">Cleric Skills:</b></p>
            <p><b>Level 2 - Channel Divinity:</b><br>${cleric.channelDivinity}</p><br>
            
            <p><b>Channel Divinity: Turn Undead:</b><br> ${cleric.channelDivinityTurnUndead}</p><br>
            
            <p><b>Level 4/8/12/16/19 - Ability Score: </b><br>${cleric.abilityScore}</p><br>
            
            <p><b>Level 5 - Destroy Undead:</b> <br>${cleric.destroyUndead}
            ${cleric.destroyUndeadTable}</p><br>
            
            <p><b>Level 10 - Divine Intervention:</b> <br>${cleric.divineIntervention}</p><br>
            
            <p><b>Subclasses: Divine Domains</b><br>
            <br>
            <b class="importantDetail">Knowledge Domain</b> , <b class="importantDetail">Life Domain</b> , <b class="importantDetail">Light Domain</b> , <b class="importantDetail">Nature Domain</b> , <b class="importantDetail">War Domain</b> , <b class="importantDetail">Trickery Domain</b> or <b class="importantDetail">Tempest Domain</b></p> 
            <p><b class="importantDetail">Knowledge Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.knowledgeDomainSpells}</p>
            <p><b>Level 1 - Blessing Of Knowledge:</b><br> ${cleric.blessingOfKnowledge}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Knowledge of Ages:</b><br> ${cleric.channelDivinityKnowledgeOfTheAges}</p><br>
            
            <p><b>Level 6 - Channel Divinity: Read Thoughts:</b> <br> ${cleric.channelDivinityReadThoughts}</p><br>
            
            <p><b>Level 8 - Potent Spellcasting:</b> <br> ${cleric.potentSpellcasting}</p><br>
            
            <p><b>Level 17 - Vision of the Past:</b> <br> ${cleric.visionsOfThePast}</p><br>
            <br>
            <p><b class="importantDetail">Life Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.lifeDomainSpells}</p>
            <p><b>Level 1 - Bonus Proficiency:</b><br> ${cleric.bonusProficiencies}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Preserve Life:</b><br> ${cleric.channelDivinityPreserveLife}</p><br>
            
            <p><b>Level 6 - Blessed Healer:</b> <br> ${cleric.blessedHealer}</p><br>
            
            <p><b>Level 8 - Divine Strike:</b> <br> ${cleric.divineStrike}</p><br>
            
            <p><b>Level 17 - Supreme Healing:</b> <br> ${cleric.supremeHealing}</p><br>
            <br>
            <p><b class="importantDetail">Light Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.lightDomainSpells}</p>
            <p><b>Level 1 - Bonus Cantrip:</b><br> ${cleric.bonusCantrip}</p><br>
            
            <p><b>also at Level 1 - Warding Flare:</b><br> ${cleric.wardingFlare}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Radiance Of The Dawn:</b> <br> ${cleric.channelDivinityRadianceOfTheDawn}</p><br>
            
            <p><b>Level 6 - Improved Flare:</b> <br> ${cleric.improvedFlare}</p><br>

            <p><b>Level 8 - Potent Spellcasting:</b> <br> ${cleric.potentSpellcasting}</p><br>
            
            <p><b>Level 17 - Corona of Light:</b> <br> ${cleric.coronaOfLight}</p><br>
            <br>

            <p><b class="importantDetail">Nature Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.natureDomainSpells}</p>
            <p><b>Level 1 - Acolyte of Nature:</b><br> ${cleric.acolyteOfNature}</p><br>
            
            <p><b>also at Level 1 - Bonus Proficiency:</b><br> ${cleric.bonusProficiencies}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Charm Animals and Plants:</b> <br> ${cleric.channelDivinityCharmAnimalsAndPlants}</p><br>
            
            <p><b>Level 6 - Dampen Elements:</b> <br> ${cleric.dampenElements}</p><br>

            <p><b>Level 8 - Divine Strike:</b> <br> ${cleric.divineStrikeNature}</p><br>
            
            <p><b>Level 17 - Master of Nature:</b> <br> ${cleric.masterOfNature}</p><br>
            <br>

            <p><b class="importantDetail">Tempest Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.tempestDomainSpells}</p>
            <p><b>Level 1 - Wrath of the Storm:</b><br> ${cleric.wrathOfTheStorm}</p><br>
            
            <p><b>also at Level 1 - Bonus Proficiency:</b><br> ${cleric.bonusProficienciesTempest}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Destructive Wrath:</b> <br> ${cleric.channelDivinityDestructiveWrath}</p><br>
            
            <p><b>Level 6 - Thunderbolt Strike:</b> <br> ${cleric.thunderboltStrike}</p><br>

            <p><b>Level 8 - Divine Strike:</b> <br> ${cleric.divineStrikeTempest}</p><br>
            
            <p><b>Level 17 - Stormborn:</b> <br> ${cleric.stormborn}</p><br>
            <br>

            <p><b class="importantDetail">Trickery Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.trickeryDomainSpells}</p>
            <p><b>Level 1 - Wrath of the Storm:</b><br> ${cleric.wrathOfTheStorm}</p><br>
            
            <p><b>also at Level 1 - Blessing of the Trickster:</b><br> ${cleric.blessingOfTheTrickster}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Invoke Duplicity:</b> <br> ${cleric.channelDivinityInvokeDuplicity}</p><br>
            
            <p><b>Level 6 - Channel Divinity: Cloak of Shadows:</b> <br> ${cleric.thunderboltStrike}</p><br>

            <p><b>Level 8 - Divine Strike:</b> <br> ${cleric.divineStrikeTrickster}</p><br>
            
            <p><b>Level 17 - Improved Duplicity:</b> <br> ${cleric.improvedDuplicity}</p><br>
            <br>

            <p><b class="importantDetail">War Domain:</b></p>
            <p><b>You gain the following spells for your Domain:</b><br>
            ${cleric.warDomainSpells}</p>
            <p><b>Level 1 - Bonus Proficiency:</b><br> ${cleric.bonusProficienciesWar}</p><br>
            
            <p><b>also at Level 1 - War Priest:</b><br> ${cleric.warPriest}</p><br>
            
            <p><b>Level 2 - Channel Divinity: Guided Strike:</b> <br> ${cleric.channelDivinityGuidedStrike}</p><br>
            
            <p><b>Level 6 - Channel Divinity: War God's Blessing:</b> <br> ${cleric.channelDivinityWarGodsBlessing}</p><br>

            <p><b>Level 8 - Divine Strike:</b> <br> ${cleric.divineStrikeWar}</p><br>
            
            <p><b>Level 17 - Avatar of Battle:</b> <br> ${cleric.avatarOfBattle}</p><br>
            <br>

            <p><b>Class table per level</b><br> ${cleric.table}</p><br>
            
        </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'druid'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">
            <h1>${druid.name}</h1>
            <p><b>Hit Points:<br> </b> ${druid.hitPoints}</p>
            <p><b>Proficiencies:<br> </b>${druid.proficiencies}</p>
            <p><b>Spells:<br> </b>${druid.spells}</p>
            <p><b class="importantDetail">Druid Skills:</b></p>
            
            <p><b>Level 1 - Druidic:</b><br>${druid.druidic}</p><br>
           
            <p><b>Level 2 - Wild Shape:</b><br>${druid.wildShape}</p><br>
            <p>${druid.beastShapeTable}</p><br>
            
            <p><b>Also at Level 2: Druid Circle</b><br> ${druid.druidCircle}</p><br>
            
            <p><b>Level 4/8/12/16/19 - Ability Score: </b><br>${druid.abilityScore}</p><br>
            
            <p><b>Level 18 - Timeless Body</b> <br>${druid.timelessBody}</p><br>
            
            <p><b>also at Level 18 - Beast Spells</b> <br>${druid.beastSpells}</p><br>

            <p><b>Level 20 - Archdruid</b> <br>${druid.archdruid}</p><br>
            
            <p><b>Subclasses: Druid Circles</b><br>
            <br>
            <b class="importantDetail">Circle of the Land</b> or <b class="importantDetail">Circle of the Moon</b></p>

            <p><b class="importantDetail">Circle of the Land:</b></p>

            <p><b>Level 2 - Bonus Cantrip</b><br> ${druid.bonusCantrip}</p><br>
            
            <p><b>Also at Level 2 - Natural Recovery</b><br> ${druid.naturalRecovery}</p><br>
            
            <p><b>Level 3/5/7/9 - Circle Spells</b> <br> ${druid.circleSpells}</p><br>

            <p><b>Table of Spells</b><br> 
            <br>
            <b>Arctic</b><br>
            ${druid.circleSpellsArtic}<br>
            <b>Coast</b><br>
            ${druid.circleSpellsCoast}<br>
            <b>Desert</b><br>
            ${druid.circleSpellsDesert}<br>
            <b>Forest</b><br>
            ${druid.circleSpellsForest}<br>
            <b>Grassland</b><br>
            ${druid.circleSpellsGrassland}<br>
            <b>Mountain</b><br>
            ${druid.circleSpellsMountain}<br>
            <b>Swamp</b><br>
            ${druid.circleSpellsSwamp}<br>
            <b>Underdark</b><br>
            ${druid.circleSpellsUnderdark}<br>
            </p><br>
            
            <p><b>Level 6 - Land's Stride</b><br> ${druid.landsStride}</p><br>
            
            <p><b>Level 10 - Nature's Ward</b> <br> ${druid.naturesWard}</p><br>

            <p><b>Level 14 - Nature's Sanctuary</b><br> ${druid.naturesSanctuary}</p><br>
            <br>
            <p><b class="importantDetail">Circle of the Moon:</b></p>
            
            <p><b>Level 2 - Combat Wild Shape</b><br> ${druid.combatWildShape}</p><br>
            
            <p><b>Also at Level 2 - Circle Forms</b><br> ${druid.CircleForms}</p><br>
            
            <p><b>Level 6 - Primal Strike</b> <br> ${druid.PrimalStrike}</p><br>
            
            <p><b>Level 10 - Elemental Wild Shape</b> <br> ${druid.ElementalWildShape}</p><br>
            
            <p><b>Level 14 - Thousand Forms</b><br> ${druid.ThousandForms}</p><br>

            <p><b>Class table per level</b><br> ${druid.table}</p><br>
            
        </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'fighter'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">
            <h1>${fighter.name}</h1>
            <p><b>Hit Points:<br> </b> ${fighter.hitPoints}</p>
            <p><b>Proficiencies:<br> </b>${fighter.proficiencies}</p>
            
            <p><b class="importantDetail">Fighter Skills:</b></p>
            
            <p><b>Level 1 - Fighting Style</b><br>${fighter.fightingStyle}</p><br>
           
            <p><b>Also at Level 1 - Second Wind</b><br>${fighter.secondWind}</p><br>
            
            <p><b>Level 2: Action Surge</b><br> ${fighter.actionSurge}</p><br>
            
            <p><b>Level 3 - Martial Archetype </b><br>${fighter.martialArchetype}</p><br>
            
            <p><b>Level 4/6/8/12/14/16/19 -Ability Score Improvement</b> <br>${fighter.abilityScore}</p><br>
            
            <p><b>Level 5 - Extra Attack</b> <br>${fighter.extraAttack}</p><br>

            <p><b>Level 9 - Indomitable</b> <br>${fighter.indomitable}</p><br>
            
            <p><b>Subclasses: Martial Archetypes</b><br>
            <br>
            <b class="importantDetail">Champion</b> , <b class="importantDetail">Battle Master</b> or <b class="importantDetail">Eldrich Knight</b></p>

            <p><b class="importantDetail">Champion</b></p>

            <p><b>Level 3 - Improved Critical</b><br> ${fighter.improvedCritical}</p><br>
            
            <p><b>Level 7 - Remarkable Athlete</b><br> ${fighter.remarkableAthlete}</p><br>
            
            <p><b>Level 10 - Additional Fighting Style</b> <br> ${fighter.additionalFightingStyle}</p><br>

            <p><b>Level 15 - Superior Critical</b> <br> ${fighter.superiorCritical}</p><br>

            <p><b>Level 18 - Survivor</b> <br> ${fighter.survivor}</p><br>
            <br>

            <p><b class="importantDetail">Battle Master</b></p>

            <p><b>Level 3 - Combat Superiority</b><br> ${fighter.combatSuperiority}</p><br>
            
            <p><b>Also at Level 3 - Student of War</b><br> ${fighter.studentOfWar}</p><br>
            
            <p><b>Level 7 - Know Your Enemy</b> <br> ${fighter.knowYourEnemy}</p><br>

            <p><b>Level 10 - Improved Combat Superiority</b> <br> ${fighter.improvedCombatSuperiority}</p><br>

            <p><b>Level 15 - Relentless</b> <br> ${fighter.relentless}</p><br>

            <p><b>Level 18 - Maneuvers</b> <br> ${fighter.maneuvers}</p><br>
            
            <p><b class="importantDetail">Eldritch Knightr</b></p>

            <p><b>Level 3 - Spellcasting</b><br> ${fighter.spells}</p><br>
            
            <p><b>Also at Level 3 - Weapon Bond</b><br> ${fighter.weaponBond}</p><br>
            
            <p><b>Level 7 - War Magic</b> <br> ${fighter.warMagic}</p><br>

            <p><b>Level 10 - Eldritch Strike</b> <br> ${fighter.eldritchStrike}</p><br>

            <p><b>Level 15 - Arcane Charge</b> <br> ${fighter.arcaneCharge}</p><br>

            <p><b>Level 18 - Improved War Magic</b> <br> ${fighter.improvedWarMagic}</p><br>
            
            <p><b>Class table per level</b><br> ${fighter.table}</p><br>
            
        </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'monk'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">

            <h1>${monk.name}</h1>

            <p><b>Hit Points:<br> </b> ${monk.hitPoints}</p>

            <p><b>Proficiencies:<br> </b>${monk.proficiencies}</p>
            
            <p><b class="importantDetail">Monk Skills:</b></p>
            
            <p><b>Level 1 - Unarmored Defense</b><br>${monk.unarmoredDefense}</p><br>
           
            <p><b>Also at Level 1 - Martial Arts</b><br>${monk.martialArts}</p><br>
            
            <p><b>Level 2: Ki</b><br> ${monk.ki}</p><br>
            
            <p><b>Also at Level 2 - Unarmored Movement</b><br>${monk.unarmoredMovement}</p><br>

            <p><b>Level 3 - Monastic Tradition</b><br>${monk.monasticTradition}</p><br>

            <p><b>Also at Level 3 - Deflect Missiles</b><br>${monk.deflectMissiles}</p><br>
            
            <p><b>Level 4/6/8/12/14/16/19 -Ability Score Improvement</b> <br>${monk.abilityScore}</p><br>
            
            <p><b>Level 4 - Slow Fall</b> <br>${monk.slowFall}</p><br>

            <p><b>Level 5 - Extra Attack</b> <br>${monk.extraAttack}</p><br>

            <p><b>Also at Level 5 - Stunning Strike</b> <br>${monk.stunningStrike}</p><br>

            <p><b>Level 6 - Ki-Empowered Strikes</b> <br>${monk.kiEmpoweredStrikes}</p><br>

            <p><b>Level 7 - Evasion</b> <br>${monk.evasion}</p><br>

            <p><b>Also at Level 7 - Stillness of Mind</b> <br>${monk.stillnessOfMind}</p><br>

            <p><b>Level 10 - Purity Of Body</b> <br>${monk.purityOfBody}</p><br>

            <p><b>Level 13 - Tongue of The Sun and Moon</b> <br>${monk.tongueOfTheSunAndMoon}</p><br>

            <p><b>Level 14 - Diamond Soul</b> <br>${monk.diamondSoul}</p><br>

            <p><b>Level 15 - Timeless Body</b> <br>${monk.timelessBody}</p><br>

            <p><b>Level 18 - Empty Body</b> <br>${monk.emptyBody}</p><br>

            <p><b>Level 20 - Perfect Self</b> <br>${monk.perfectSelf}</p><br>
            
            <p><b>Subclasses: Monastic Traditions</b><br>
            <br>
            <b class="importantDetail">Way of the Open Hand</b><br>
            <b class="importantDetail">Way of Shadow</b><br>
            <b class="importantDetail">Way of the Four Elements</b></p>

            <p><b class="importantDetail">Way of the Open Hand</b></p>

            <p><b>Level 3 - Open Hand Technique</b><br> ${monk.openHandTechnique}</p><br>
            
            <p><b>Level 6 - Wholeness of Body</b><br> ${monk.wholenessOfBody}</p><br>
            
            <p><b>Level 11 - Tranquility</b> <br> ${monk.tranquility}</p><br>

            <p><b>Level 17 - Quivering Palm</b> <br> ${monk.quiveringPalm}</p><br>

            <p><b class="importantDetail">Way of Shadow</b></p>

            <p><b>Level 3 - Shadow Arts</b><br> ${monk.shadowArts}</p><br>
            
            <p><b>Level 6 - Shadow Step</b><br> ${monk.shadowStep}</p><br>
            
            <p><b>Level 11 - Cloak of Shadows</b> <br> ${monk.cloakOfShadows}</p><br>

            <p><b>Level 17 - Opportunist</b> <br> ${monk.opportunist}</p><br>

            <p><b class="importantDetail">Way of the Four Elements</b></p>

            <p><b>Level 3 - Disciple of the Elements</b><br> ${monk.discipleOfTheElements}</p><br>

            <p><b>Class table per level</b><br> ${monk.table}</p><br>

            </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'sorcerer'){
    menuRaces.innerHTML= '';
    menuRacesDetails.innerHTML= '';
    menuRacesDetails.innerHTML= `
    <div class="races-container">
        <div class="race-detail-container">

            <h1>${sorcerer.name}</h1>

            <p><b>Hit Points:<br> </b> ${sorcerer.hitPoints}</p>

            <p><b>Proficiencies:<br> </b>${sorcerer.proficiencies}</p>

            <p><b>SpellCasting:<br> </b>${sorcerer.spells}</p>
            
            <p><b class="importantDetail">Sorcerer Skills:</b></p>
            
            <p><b>Level 1 - Sorcerous Origin</b><br>${sorcerer.sorcerousOrigin}</p><br>
            
            <p><b>Level 2: Font of Magic</b><br> ${sorcerer.fontOfMagic}</p><br>
            
            <p><b>Level 3 - Metamagic </b><br>${sorcerer.metamagic}</p><br>
            
            <p><b>Level 4/6/8/12/14/16/19 -Ability Score Improvement</b> <br>${sorcerer.abilityScore}</p><br>
            
            <p><b>Level 20 - Sorcerous Restoration</b> <br>${sorcerer.sorcerousRestoration}</p><br>
            
            <p><b>Subclasses: Sorcerous Origins</b><br>
            <br>
            <b class="importantDetail">Draconic Bloodline</b><br>
            <b class="importantDetail">Wild Magic</b></p>

            <p><b class="importantDetail">Draconic Bloodline</b></p>

            <p><b>Level 1 - Dragon Ancestor</b><br> ${sorcerer.dragonAncestor}</p><br>
            
            <p><b>Also at Level 1 - Draconic Resilience</b><br> ${sorcerer.draconicResilience}</p><br>
            
            <p><b>Level 6 - Elemental Affinity</b> <br> ${sorcerer.elementalAffinity}</p><br>

            <p><b>Level 14- Dragon Wings</b> <br> ${sorcerer.dragonWings}</p><br>

            <p><b>Level 18 - Draconic Presence</b> <br> ${sorcerer.draconicPresence}</p><br>
            <br>

            <p><b class="importantDetail">Wild Magic</b></p>

            <p><b>Level 1 - Wild Magic Surge</b><br> ${sorcerer.wildMagicSurge}</p><br>
            
            <p><b>Also at Level 1 - Tide of Chaos</b><br> ${sorcerer.tidesOfChaos}</p><br>
            
            <p><b>Level 6 - Bend Luck</b> <br> ${sorcerer.BendLuck}</p><br>

            <p><b>Level 14- Controlled Chaos</b> <br> ${sorcerer.controlledChaos}</p><br>

            <p><b>Level 18 - Spell Bombardment</b> <br> ${sorcerer.spellBombardment}</p><br>
            <br><br>

            <p><b>Class table per level</b><br> ${sorcerer.table}</p><br>
            
            </div>
        
    </div>`
    menuSwitch = false;
        if (layoutSwitch === true){
            Layout();   
        }
        else {
            console.log('sigue');
        }
        
    ;
}
    else if (subclasses === 'wizard'){
        menuRaces.innerHTML= '';
        menuRacesDetails.innerHTML= '';
        menuRacesDetails.innerHTML= `
        <div class="races-container">
            <div class="race-detail-container">
    
                <h1>${wizard.name}</h1>
    
                <p><b>Hit Points:<br> </b> ${wizard.hitPoints}</p>
    
                <p><b>Proficiencies:<br> </b>${wizard.proficiencies}</p>
    
                <p><b>SpellCasting:<br> </b>${wizard.spells}</p>

                <p><b>SpellBook:<br> </b>${wizard.spellbook}</p>
                
                <p><b class="importantDetail">Wizard Skills:</b></p>
                
                <p><b>Passive - Level 1 - Arcane Recovery</b><br>${wizard.arcaneRecovery}</p><br>
                
                <p><b>Level 2: Arcane Tradition</b><br> ${wizard.arcaneTradition}</p><br>
                
                <p><b>Level 4/6/8/12/14/16/19 -Ability Score Improvement</b> <br>${wizard.abilityScore}</p><br>
                
                <p><b>Level 18 - Spell Mastery</b> <br>${wizard.spellMastery}</p><br>

                <p><b>Level 20 - Signature Spells</b> <br>${wizard.signatureSpells}</p><br>
                
                <p><b>Subclasses: Arcane Traditions</b><br>
                <br>
                <b class="importantDetail">School of Abjuration</b><br>
                <b class="importantDetail">School of Conjuration</b><br>
                <b class="importantDetail">School of Divination</b><br>
                <b class="importantDetail">School of Enchantment</b><br>
                <b class="importantDetail">School of Evocation</b><br>
                <b class="importantDetail">School of Illusion</b><br>
                <b class="importantDetail">School of Necromancy</b><br>
                <b class="importantDetail">School of Transmutation</b></p><br>
    
                <p><b class="importantDetail">School of Abjuration</b></p>
    
                <p><b>Level 2 - Abjuration Savant</b><br> ${wizard.abjurationSavant}</p><br>
                
                <p><b>Also at Level 2 - Arcane Ward</b><br> ${wizard.arcaneWard}</p><br>
                
                <p><b>Level 6 - Projected Ward</b> <br> ${wizard.projectedWard}</p><br>
    
                <p><b>Level 10- Improved Abjuration</b> <br> ${wizard.improvedAbjuration}</p><br>
    
                <p><b>Level 14 - Spell Resistance</b> <br> ${wizard.spellResistance}</p><br>
                <br>
    
                <p><b class="importantDetail">School of Conjuration</b></p>
    
                <p><b>Level 2 - Conjuration Savant</b><br> ${wizard.conjurationSavant}</p><br>
                
                <p><b>Also at Level 2 - Minor Conjuration</b><br> ${wizard.minorConjuration}</p><br>
                
                <p><b>Level 6 - Benign Transposition</b> <br> ${wizard.benignTransposition}</p><br>
    
                <p><b>Level 10- Focused Conjuration</b> <br> ${wizard.focusedConjuration}</p><br>
    
                <p><b>Level 14 - Durable Summons</b> <br> ${wizard.durableSummons}</p><br>
                <br>

                <p><b class="importantDetail">School of Divination</b></p>
    
                <p><b>Level 2 - Divination Savant</b><br> ${wizard.divinationSavant}</p><br>
                
                <p><b>Also at Level 2 - Portent</b><br> ${wizard.portent}</p><br>
                
                <p><b>Level 6 - Expert Divination</b> <br> ${wizard.expertDivination}</p><br>
    
                <p><b>Level 10- The Third Eye</b> <br> ${wizard.theThirdEye}</p><br>
    
                <p><b>Level 14 - Greater Portent</b> <br> ${wizard.greaterPortent}</p><br>
                <br>

                <p><b class="importantDetail">School of Enchantment</b></p>
    
                <p><b>Level 2 - Enchantment Savant</b><br> ${wizard.enchantmentSavant}</p><br>
                
                <p><b>Also at Level 2 - Hypnotic Gaze</b><br> ${wizard.hypnoticGaze}</p><br>
                
                <p><b>Level 6 - Instinctive Charm</b> <br> ${wizard.instinctiveCharm}</p><br>
    
                <p><b>Level 10- Split Enchantment</b> <br> ${wizard.splitEnchantment}</p><br>
    
                <p><b>Level 14 - Alter Memories</b> <br> ${wizard.alterMemories}</p><br>
                <br>

                <p><b class="importantDetail">School of Evocation</b></p>
    
                <p><b>Level 2 - Evocation Savant</b><br> ${wizard.evocationSavant}</p><br>
                
                <p><b>Also at Level 2 - Sculpt Spells</b><br> ${wizard.sculptSpells}</p><br>
                
                <p><b>Level 6 - Potent Cantrip</b> <br> ${wizard.potentCantrip}</p><br>
    
                <p><b>Level 10- Empowered Evocation</b> <br> ${wizard.empoweredEvocation}</p><br>
    
                <p><b>Level 14 - Overchannel</b> <br> ${wizard.overchannel}</p><br>
                <br>

                <p><b class="importantDetail">School of Illusion</b></p>
    
                <p><b>Level 2 - Illusion Savant</b><br> ${wizard.illusionSavant}</p><br>
                
                <p><b>Also at Level 2 - Improved Minor Illusion</b><br> ${wizard.improvedMinorIllusion}</p><br>
                
                <p><b>Level 6 - Malleable Illusions</b> <br> ${wizard.malleableIllusions}</p><br>
    
                <p><b>Level 10- Illusory Self</b> <br> ${wizard.illusorySelf}</p><br>
    
                <p><b>Level 14 - Illusory Reality</b> <br> ${wizard.illusoryReality}</p><br>
                <br>

                <p><b class="importantDetail">School of Necromancy</b></p>
    
                <p><b>Level 2 - Necromancy Savant</b><br> ${wizard.necromancySavant}</p><br>
                
                <p><b>Also at Level 2 - Grim Harvest</b><br> ${wizard.grimHarvest}</p><br>
                
                <p><b>Level 6 - Undead Thralls</b> <br> ${wizard.undeadThralls}</p><br>
    
                <p><b>Level 10- Inured To Undeath</b> <br> ${wizard.inuredToUndeath}</p><br>
    
                <p><b>Level 14 - Command Undead</b> <br> ${wizard.commandUndead}</p><br>
                <br>

                <p><b class="importantDetail">School of Transmutation</b></p>
    
                <p><b>Level 2 - Transmutation Savant</b><br> ${wizard.transmutationSavant}</p><br>
                
                <p><b>Also at Level 2 - Minor Alchemy</b><br> ${wizard.minorAlchemy}</p><br>
                
                <p><b>Level 6 - Transmuter's Stone</b> <br> ${wizard.transmutersStone}</p><br>
    
                <p><b>Level 10- Shapechanger</b> <br> ${wizard.shapechanger}</p><br>
    
                <p><b>Level 14 - Master Transmuter</b> <br> ${wizard.masterTransmuter}</p><br>
                <br>
                </div>
            
        </div>`
        menuSwitch = false;
            if (layoutSwitch === true){
                Layout();   
            }
            else {
                console.log('sigue');
            }
            
        ;
}
}
function displayMenuRacesDetails(subrace){
    // AASIMAR
    if(subrace === 'fallen'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'protector') {
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
                
                </div>
            
        </div>`
        ;
    }
    else if (subrace === 'scourge') {   
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
                
                </div>
            
        </div>`
        ;
    }
    else if (subrace === 'aasimarBase'){
        
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
                
                </div>
            
        </div>`
        ;
    }
    // DRAGONBORN
    else if (subrace === 'dragonbornBase2024'){
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
                
                </div>
            
        </div>`
        ;
    }
    else if (subrace === 'dragonbornBase'){
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
                
                </div>
            
        </div>`
        ;
    }
    else if (subrace === 'dragonbornDracon'){
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
            
            </div>
        
    </div>`
    ; 
    }
    else if (subrace === 'dragonbornRavenite'){
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
            
            </div>
        
    </div>`
    ;   
    }
    //ELF
    else if (subrace === 'elfBase2024'){
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
            
            </div>
        
    </div>`
    ;   
    }
    else if (subrace === 'elfBase'){
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
            
            </div>
        
    </div>`
    ;    
    }
    else if (subrace === 'highelf'){
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
            
            </div>
       
    </div>`
    ;    
    }
    else if (subrace === 'woodelf'){
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
            
            </div>
        
    </div>`
    ;    
    }
    else if (subrace === 'drowelf'){
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
            
            </div>
        
    </div>`
    ;    
    }
    else if (subrace === 'eladrinelf'){
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
            
            </div>
        
    </div>`
    ;    
    }
    else if (subrace === 'shadarelf'){
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
            
            </div>
        
    </div>`
    ;   
    }
    else if (subrace === 'seaelf'){
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
            
            </div>
        
    </div>`
    ;   
    }
    else if (subrace === 'pallidelf'){
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
            
            </div>
       
    </div>`
    ;    
    }
    else if (subrace === 'markelf'){
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
            
            </div>
        
    </div>`
    ;     
    }
    // DWARF SUBRACE
    else if(subrace === 'dwarf2024'){
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
                
            </div>
            
        </div>`
    ;  
    }
    else if(subrace === 'dwarf'){
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
                
            </div>
            
        </div>`
    ;  
    }
    else if(subrace === 'dwarfduergar'){
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
                
            </div>
            
        </div>`
    ;  
    }
    else if(subrace === 'dwarfhill'){
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
                
            </div>
            
        </div>`
    ;  
    }
    else if(subrace === 'dwarfmountain'){
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
                
            </div>
            
        </div>`
    ;  
    }
    else if(subrace === 'dwarfmark'){
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
                
            </div>
            
        </div>`
    ;  
    }
    //GNOME
    else if(subrace === 'gnomeBase2024'){
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
                
            </div>
           
        </div>`
        ;
    }
    else if(subrace === 'gnomeBase2014'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if(subrace === 'forestGnome'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if(subrace === 'rockGnome'){
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
                
            </div>
        
        </div>`
        ;
    }
    else if(subrace === 'deepGnome'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if(subrace === 'gnomeMark'){
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
                
            </div>
            
        </div>`
        ;
    }
    // GOLIATH
    else if (subrace === 'goliathbase2024'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'goliathbase'){
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
                
            </div>
            
        </div>`
        ;
    }
    // HALFLING
    else if (subrace === 'halflingbase2024'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'halflingBase'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'halflinglight'){
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
                
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'halflingstout'){
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
              
            </div>
           
        </div>`
        ;
    }
    else if (subrace === 'halflinglotusden'){
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
               
            </div>
           
        </div>`
        ;
    }
    else if (subrace === 'halflingghost'){
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
              
            </div>
            
        </div>`
        ;
    }
    else if (subrace === 'halflingmarkhealing'){
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
                
            </div>
           
        </div>`
        ; 
    }
    else if (subrace === 'halflingmarkhospitality'){
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
              
            </div>
            
        </div>`
        ;  
    }
    // HUMAN
    else if (subrace === 'humanbase2024'){

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
               
            </div>
           
        </div>`
        ;   
    }
    else if (subrace === 'humanbase'){
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
                
            </div>
            
        </div>`
        ;   
    }
    else if (subrace === 'humanvariant'){
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
               
            </div>
            
        </div>`
        ;   
    }
    else if (subrace === 'humankeldon'){
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
               
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkhandling'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkmaking'){
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
               
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkpassage'){
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
               
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'humanmarksentinel'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'humanmarkfinding'){
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
                
            </div>
            
        </div>`
        ;  
    }
    // ORC x HALF-ORC
    else if (subrace === 'orcbase2024'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if (subrace === 'halforc'){
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
                
            </div>
           
        </div>`
        ;  
    }
    else if (subrace === 'halforcmark'){
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
                
            </div>
            
        </div>`
        ;  
    }
    // TIEFLING
    else if(subrace === 'tieflingbase2024'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingbase'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingasmodeus'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingbaalzebul'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingdispater'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingfierna'){
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
               
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingglasya'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflinglevistus'){
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
               
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingmammon'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingmephistopheles'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingzariel'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingdeviltongue'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflinghellfire'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflinginfernallegacy'){
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
                
            </div>
            
        </div>`
        ;  
    }
    else if(subrace === 'tieflingwinged'){
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


