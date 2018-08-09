// stats of all the characters at level 1
// stats found from gamefaqs forum post:
//   https://gamefaqs.gamespot.com/boards/204212-octopath-traveler/76722867

// Ophilia
const Ophilia = {
    name: "Ophilia",
    class: "Cleric",
    level: 1,
    max_hp: 225,
    max_sp: 65,
    phys_atk: 80,
    elem_atk: 96,
    phys_def: 80,
    elem_def: 104,
    accuracy: 80,
    speed: 64,
    critical: 56,
    evasion: 64,
    cleric_skills: [
        {
            name: "Heal Wounds",
            description: "Restores HP to all allies",
            cost: 8
        },
        {
            name: "Holy Light",
            description: "Inflict light-based damage on a single foe",
            cost: 6
        },
        {
            name: "Sheltering Veil",
            description: "Augment one ally's elemental defense for 2 turns",
            cost: 6
        },
        {
            name: "Luminescence",
            description: "Deal light-based damage to all foes",
            cost: 9
        },
        {
            name: "Heal More",
            description: "Restore a large amount of HP to all allies",
            cost: 25
        },
        {
            name: "Reflective Veil",
            description: "Grant a single ally the ability to reflect one elemental attack",
            cost: 22
        },
        {
            name: "Revive",
            description: "Revive all incapacitated allies",
            cost: 50
        },
        {
            name: "Aelfirc\'s Auspices",
            description: "For 3 turns, skills performed by a single choosen ally will trigger twice (This will not affect other divine skills)",
            cost: 30
        }
    ],
    support_skills: [
        {
            name: "Persistence",
            description: "All status enhancements you receive will last one additional turn",
            skill_requirement: "Unlock 4 skills"
        },
        {
            name: "Inner Strength",
            description: "Increase the maximum SP of the equipped character by 50",
            skill_requirement: "Unlock 5 skills"
        },
        {
            name: "Evil Ward",
            description: "Increases the party\'s success rate when attempting to flee (Equipping this skill with multiple characters will have no added effect)",
            skill_requirement: "Unlock 6 skills"
        },
        {
            name: "Saving Grace",
            description: "Grants the equipping character the ability to be healed above their maximum HP",
            skill_requirement: "Unlock 7 skills"
        }
    ]
}

// Cyrus
const Cyrus = {
    name: "Cyrus",
    class: "Scholar",
    level: 1,
    max_hp: 200,
    max_sp: 60,
    phys_atk: 72,
    elem_atk: 104,
    phys_def: 72,
    elem_def: 96,
    accuracy: 80,
    speed: 72,
    critical: 64,
    evasion: 80,
    scholar_skills: [
        {
            name: "Fireball",
            description: "Deal fire damage to all foes."
            cost: 8
        },
        {
            name: "Icewind",
            description: "Deal ice damage to all foes."
            cost: 8
        },
        {
            name: "Lightning Bolt",
            description: "Deal lightning damage to all foes."
            cost: 8
        },
        {
            name: "Analyze",
            description: "Reveal the HP and one weakness of a single foe."
            cost: 1
        },
        {
            name: "Fire Storm",
            description: "Deal fire damage to all foes twice."
            cost: 22
        },
        {
            name: "Blizzard",
            description: "Deal ice damage to all foes twice."
            cost: 22
        },
        {
            name: "Lightning Blast",
            description: "Deal lightning damage to all foes twice."
            cost: 22
        },
        {
            name: "Alephan\'s Enlightenment",
            description: "For 3 turns, spells cast by a single chosen ally that usually targets all foes will instead be focused on a single foe at increased intensity."
            cost: 30
        }
    ],
    support_skills: [
        {
            name: "Evasive Maneuvers",
            description: "Reduces the rate of random encounters. (Equipping this skill with multiple characters will have no added effect.)",
            skill_requirement: "Learn 4 Scholar Skills"
        },
        {
            name: "Elemental Augmentation",
            description: "Augments the equipping character\'s elemental attack strength by 50.",
            skill_requirement: "Learn 5 Scholar Skills"
        },
        {
            name: "Percipience",
            description: "Prevents the party from being surprised by foes. (Equipping this skill with multiple characters will have no added effect.)",
            skill_requirement: "Learn 6 Scholar Skills"
        },
        {
            name: "Vim and Vigor",
            description: "The equipping character will regenerate HP each turn. (10% of max health)",
            skill_requirement: "Learn 7 Scholar Skills"
        }
    ]
}

// Tressa
const Tressa = {
    name: "Tressa",
    class: "Merchant",
    level: 1,
    max_hp: 275,
    max_sp: 50,
    phys_atk: 88,
    elem_atk: 88,
    phys_def: 80,
    elem_def: 80,
    accuracy: 80,
    speed: 72,
    critical: 72,
    evasion: 72
}

// Olberic
const Olberic = {
    name: "Olberic",
    class: "Warrior",
    level: 1,
    max_hp: 325,
    max_sp: 40,
    phys_atk: 96,
    elem_atk: 72,
    phys_def: 88,
    elem_def: 64,
    accuracy: 88,
    speed: 80,
    critical: 80,
    evasion: 64
}

// Primrose
const Primrose = {
    name: "Primrose",
    class: "dancer",
    level: 1,
    max_hp: 225,
    max_sp: 50,
    phys_atk: 80,
    elem_atk: 96,
    phys_def: 56,
    elem_def: 64,
    accuracy: 80,
    speed: 104,
    critical: 80,
    evasion: 88
}

// Alfyn
const Alfyn = {
    name: "Alfyn",
    class: "Apothecary",
    level: 1,
    max_hp: 300,
    max_sp: 50,
    phys_atk: 88,
    elem_atk: 80,
    phys_def: 80,
    elem_def: 80,
    accuracy: 80,
    speed: 64,
    critical: 80,
    evasion: 72
}

// Therion
const Therion = {
    name: "Therion",
    class: "Thief",
    level: 1,
    max_hp: 250,
    max_sp: 40,
    phys_atk: 88,
    elem_atk: 80,
    phys_def: 64,
    elem_def: 64,
    accuracy: 88,
    speed: 96,
    critical: 80,
    evasion: 96
}

// H'aanit
const H_aanit = {
    name: "H\'aanit",
    class: "Hunter",
    level: 1,
    max_hp: 250,
    max_sp: 40,
    phys_atk: 96,
    elem_atk: 80,
    phys_def: 64,
    elem_def: 64,
    accuracy: 96,
    speed: 80,
    critical: 88,
    evasion: 88
}
