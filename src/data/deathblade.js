const skills = [
    {
        name: 'Surprise Attack',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 5,
        mpcost: 41,
        desc: [
            {
                text: 'Dash ',
                type: 'regular'
            },
            {
                text: '4 meters',
                type: 'dist'
            },
            {
                text: ' forward and slash at foes with your dual blades to inflict ',
                type: 'regular'
            },
            {
                text: '151',
                type: 'dmg'
            },
            {
                text: ' Damage.',
                type: 'regular'
            }
        ],
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_0.png'
    },
    {
        name: 'Upper Slash',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Low',
        attack_type: 'Attack type: Back Attack',
        cooldown: 8,
        mpcost: 53,
        desc: [
            {
                text: 'Deliver a swift slash with your dual blades to inflict ',
                type: 'regular'
            },
            {
                text: '95',
                type: 'dmg'
            },
            {
                text: ' Damage, then slash upward to create a deadly tornado that inflicts ',
                type: 'regular'
            },
            {
                text: '142',
                type: 'dmg'
            },
            {
                text: ' Damage and launches foes in the air.',
                type: 'regular'
            }
        ],
        desca: 'Deliver a swift slash with your dual blades to inflict 95 Damage, then slash upward to create a deadly tornado that inflicts 142 Damage and launches foes in the air.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_1.png'
    },
    {
        name: 'Wind Cut',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        attack_type: 'Attack type: Back Attack',
        cooldown: 10,
        mpcost: 315,
        desc: [
            {
                text: 'Quickly slash forward and create a gust of blades that last ',
                type: 'regular'
            },
            {
                text: '1.5s',
                type: 'time'
            },
            {
                text: ', which inflicts up to ',
                type: 'regular'
            },
            {
                text: '277',
                type: 'dot'
            },
            {
                text: ' and pulls foes close. Pushed foes are launched back in the air',
                type: 'regular'
            }
        ],
        desca: 'Quickly slash forward and create a gust of blades that last 1.5s, which inflicts up to 277 and pulls foes close. Pushed foes are launched back in the air',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_6.png'
    },
    {
        name: 'Polestar',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 12,
        mpcost: 67,
        desc: [
            {
                text: 'Slash upward to inflict ',
                type: 'regular'
            },
            {
                text: '39',
                type: 'dmg'
            },
            {
                text: ' Damage and launch foes into the air then attack them in the air for up ',
                type: 'regular'
            },
            {
                text: '230',
                type: 'dmg'
            },
            {
                text: ' Damage, then slash downward with your longsword to cause ',
                type: 'regular'
            },
            {
                text: '115',
                type: 'dmg'
            },
            {
                text: ' Damage, slamming foes onto the ground.',
                type: 'regular'
            }
        ],
        desca: 'Slash upward to inflict 39 Damage and launch foes into the air then attack them in the air for up 230 Damage, then slash downward with your longsword to cause 115 Damage, slamming foes onto the ground.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_13.png'
    },
    {
        name: 'Spincutter',
        type: 'Combo',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 12,
        mpcost: 349,
        desc: [
            {
                text: 'Slash upward to inflict ',
                type: 'regular'
            },
            {
                text: '39',
                type: 'dmg'
            },
            {
                text: ' Damage and launch foes into the air then attack them in the air for up ',
                type: 'regular'
            },
            {
                text: '230',
                type: 'dmg'
            },
            {
                text: ' Damage, then slash downward with your longsword to cause ',
                type: 'regular'
            },
            {
                text: '115',
                type: 'dmg'
            },
            {
                text: ' Damage, slamming foes onto the ground.',
                type: 'regular'
            }
        ],
        desca: 'Slash upward to inflict 39 Damage and launch foes into the air then attack them in the air for up 230 Damage, then slash downward with your longsword to cause 115 Damage, slamming foes onto the ground.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_8.png'
    },
    {
        name: 'Blade Dance',
        type: 'Holding',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Low',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 18,
        mpcost: 85,
        desc: [
            {
                text: 'Hack at foes for up to ',
                type: 'regular'
            },
            {
                text: '2s',
                type: 'time'
            },
            {
                text: ' and deliver ',
                type: 'regular'
            },
            {
                text: '7',
                type: 'time'
            },
            {
                text: '441',
                type: 'dmg'
            },
            {
                text: ' Damage, and another ',
                type: 'regular'
            },
            {
                text: '191',
                type: 'dmg'
            },
            {
                text: ' Damage with the finishing blow. Pushed foes are launched back in the air.',
                type: 'regular'
            },
        ],
        desca: 'Hack at foes for up to 2s and deliver 7 blows, inflicting 441 Damage, and another 191 Damage with the finishing blow. Pushed foes are launched back in the air.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_2.png'
    },
    {
        name: 'Dark Axel',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Low',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 12,
        mpcost: 67,
        desc: [
            {
                text: 'Jump ',
                type: 'regular'
            },
            {
                text: '6 meters',
                type: 'dist'
            },
            {
                text: ' forward, pushing foes back for ',
                type: 'regular'
            },
            {
                text: '250',
                type: 'dmg'
            },
            {
                text: ' Damage. Deliver a powerful slash with your longsword upon landing to inflict ',
                type: 'regular'
            },
            {
                text: '167',
                type: 'dmg'
            },
            {
                text: ' Damage and knock the foes away. Pushed foes are launched back in the air.',
                type: 'regular'
            }
        ],
        desca: 'Jump  forward, pushing foes back for 250 Damage. Deliver a powerful slash with your longsword upon landing to inflict 167 Damage and knock the foes away. Pushed foes are launched back in the air.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_11.png'
    },
    {
        name: 'Soul Absorber',
        type: 'Charge',
        skill_type: '[Normal Skill]',
        part_break: 'Part Break: Lv.1',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 24,
        mpcost: 101,
        desc: [
            {
                text: 'Charge to deliver a powerful thrust to inflict ',
                type: 'regular'
            },
            {
                text: '202',
                type: 'dmg'
            },
            {
                text: ' Damage before being fully charged, and ',
                type: 'regular'
            },
            {
                text: '809',
                type: 'dmg'
            },
            {
                text: ' Damage when overcharged.',
                type: 'regular'
            }
        ],
        desca: 'Charge to deliver a powerful thrust to inflict 202 Damage before being fully charged, and 809 Damage when overcharged.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_7.png'
    },
    {
        name: 'Death Sentence',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 18,
        mpcost: 85,
        desc: [
            {
                text: 'Leap ',
                type: 'regular'
            },
            {
                text: '4 meters',
                type: 'dist'
            },
            {
                text: ' forward and thrust downward, inflicting ',
                type: 'regular'
            },
            {
                text: '445',
                type: 'dmg'
            },
            {
                text: ' Damage and slamming foes onto the ground.',
                type: 'regular'
            }
        ],
        desca: 'Leap 4 meters forward and thrust downward, inflicting 445 Damage and slamming foes onto the ground.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_4.png'
    },
    {
        name: 'Twin Shadows',
        type: 'Chain',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        cooldown: 12,
        mpcost: 67,
        desc: [
            {
                text: 'Perform a quick vertical slash with your longsword to inflict ',
                type: 'regular'
            },
            {
                text: '162',
                type: 'dist'
            },
            {
                text: ' Damage. You can use this skill ',
                type: 'regular'
            },
            {
                text: '1',
                type: 'time'
            },
            {
                text: ' more time within ',
                type: 'regular'
            },
            {
                text: '4s',
                type: 'time'
            },
            {
                text: '.',
                type: 'regular'
            }
        ],
        desca: 'Perform a quick vertical slash with your longsword to inflict 162 Damage. You can use this skill 1 more time within 4s.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_5.png'
    },
    {
        name: 'Earth Cleaver',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        part_break: 'Part Break: Lv.1',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Front Attack, Back Attack',
        counter: 'Counter: Yes',
        cooldown: 16,
        mpcost: 80,
        desc: [
            {
                text: 'Perform a powerful vertical slash with your longsword to inflict ',
                type: 'regular'
            },
            {
                text: '483',
                type: 'dist'
            },
            {
                text: ' Damage and slam foes onto the ground.',
                type: 'regular'
            }
        ],
        desca: 'Perform a powerful vertical slash with your longsword to inflict 483 Damage and slam foes onto the ground.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_3.png'
    },
    {
        name: 'Head Hunt',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Low',
        attack_type: 'Attack type: Front Attack',
        counter: 'Counter: Yes',
        cooldown: 18,
        mpcost: 85,
        desc: [
            {
                text: 'Attack foes with the hilt of your longsword to push them back for ',
                type: 'regular'
            },
            {
                text: '148',
                type: 'dmg'
            },
            {
                text: ' Damage, then move ',
                type: 'regular'
            },
            {
                text: '4 meters',
                type: 'dist'
            },
            {
                text: ' forward as you strike them on the head, inflicting ',
                type: 'regular'
            },
            {
                text: '148',
                type: 'dmg'
            },
            {
                text: ' Damage and stunning them for ',
                type: 'regular'
            },
            {
                text: '1s',
                type: 'time'
            },
            {
                text: '.',
                type: 'regular'
            },
        ],
        desca: 'Attack foes with the hilt of your longsword to push them back for 148 Damage, then move 4 meters forward as you strike them on the head, inflicting 148 Damage and stunning them for 1s.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_17.png'
    },
    {
        name: 'Moonlight Sonic',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 27,
        mpcost: 108,
        desc: [
            {
                text: 'Perform a sweeping slash in front of you to inflict up to ',
                type: 'regular'
            },
            {
                text: '929',
                type: 'dmg'
            },
            {
                text: ' Damage, pulling foes close.',
                type: 'regular'
            }
        ],
        desca: 'Perform a sweeping slash in front of you to inflict up to 929 Damage, pulling foes close.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_10.png'
    },
    {
        name: 'Turning Slash',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        cooldown: 15,
        mpcost: 77,
        desc: [
            {
                text: 'Swing your longsword ',
                type: 'regular'
            },
            {
                text: '2',
                type: 'time'
            },
            {
                text: ' times as you move ',
                type: 'regular'
            },
            {
                text: '5 meters',
                type: 'dmg'
            },
            {
                text: ' forward, inflicting ',
                type: 'regular'
            },
            {
                text: '224',
                type: 'dmg'
            },
            {
                text: ' and ',
                type: 'regular'
            },
            {
                text: '183',
                type: 'dmg'
            },
            {
                text: ' Damage.',
                type: 'regular'
            }
        ],
        desca: 'Swing your longsword 2 times as you move 5 meters forward, inflicting 224 and 183 Damage.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_9.png'
    },
    {
        name: 'Maelstrom',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        cooldown: 30,
        mpcost: 114,
        desc: [
            {
                text: 'Create a tornado that protects you and inflict ',
                type: 'regular'
            },
            {
                text: '59',
                type: 'dot'
            },
            {
                text: ' Damage. The tornado lasts ',
                type: 'regular'
            },
            {
                text: '6s',
                type: 'time'
            },
            {
                text: ', inflicting ',
                type: 'regular'
            },
            {
                text: '40',
                type: 'dot'
            },
            {
                text: ' Damage to nearby foes.',
                type: 'regular'
            }
        ],
        desca: 'Create a tornado that protects you and inflict 59 Damage. The tornado lasts 6s, inflicting 40 Damage to nearby foes.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_12.png'
    },
    {
        name: 'Fatal Wave',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Low',
        attack_type: 'Attack type: Back Attack',
        cooldown: 18,
        mpcost: 85,
        desc: [
            {
                text: 'Perform ',
                type: 'regular'
            },
            {
                text: '3',
                type: 'time'
            },
            {
                text: ' slashes with your longsword, inflicting ',
                type: 'regular'
            },
            {
                text: '151',
                type: 'dot'
            },
            {
                text: ', ',
                type: 'regular'
            },
            {
                text: '151',
                type: 'dot'
            },
            {
                text: ', ',
                type: 'regular'
            },{
                text: '202',
                type: 'dot'
            },
            {
                text: ' Damage with the energy of the blade.',
                type: 'regular'
            },
        ],
        desca: 'Perform 3 slashes with your longsword, inflicting 151, 151, and 202 Damage with the energy of the blade.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_15.png'
    },
    {
        name: 'Blitz Rush',
        type: 'Charge',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 24,
        mpcost: 101,
        desc: [
            {
                text: 'Charge to move ',
                type: 'regular'
            },
            {
                text: '5 meters',
                type: 'dist'
            },
            {
                text: ' forward before attacking foes. Use the skill uncharged to attack with your dual blades and inflict ',
                type: 'regular'
            },
            {
                text: '323',
                type: 'dmg'
            },
            {
                text: ' Damage, charge to Stage 1 to inflict ',
                type: 'regular'
            },
            {
                text: 'Stage 1',
                type: 'time'
            },
            {
                text: ' to inflict ',
                type: 'regular'
            },
            {
                text: '644',
                type: 'dmg'
            },
            {
                text: ' Damage, and overcharge to inflict ',
                type: 'regular'
            },
            {
                text: '644',
                type: 'dmg'
            },
            {
                text: ' Damage, followed by a longsword slash that causes ',
                type: 'regular'
            },
            {
                text: '431',
                type: 'dmg'
            },
            {
                text: ' Damage and knocks foes away.',
                type: 'regular'
            }
        ],
        desca: 'Charge to move 5 meters forward before attacking foes. Use the skill uncharged to attack with your dual blades and inflict 323 Damage, charge to Stage 1 to inflict 644 Damage, and overcharge to inflict 644 Damage, followed by a longsword slash that causes 431 Damage and knocks foes away.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_16.png'
    },
    {
        name: 'Void Strike',
        type: 'Normal',
        skill_type: '[Normal Skill]',
        stagger: 'Stagger: Mid',
        attack_type: 'Attack type: Back Attack',
        super_armor: 'Super Armor: Paralysis Immunity',
        cooldown: 27,
        mpcost: 108,
        desc: [
            {
                text: 'Charge and release the skill key midway to perform an upper slash with your longsword to inflict ',
                type: 'regular'
            },
            {
                text: '453',
                type: 'dmg'
            },
            {
                text: ' Damage, launching foes into the air. Overcharge to push foes back as you advance ',
                type: 'regular'
            },
            {
                text: '5 meters',
                type: 'dist'
            },
            {
                text: ' forward, inflicting up to ',
                type: 'regular'
            },
            {
                text: '907',
                type: 'dmg'
            },
            {
                text: ' Damage and launching foes higher in the air.',
                type: 'regular'
            }
        ],
        desca: 'Charge and release the skill key midway to perform an upper slash with your longsword to inflict 453 Damage, launching foes into the air. Overcharge to push foes back as you advance 5 meters forward, inflicting up to 907 Damage and launching foes higher in the air.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_14.png'
    },
    {
        name: 'Flash Blink',
        type: 'Normal',
        skill_type: 'Awakening Skill',
        part_break: 'Part Break: Lv.3',
        stagger: 'Stagger: Mid-high',
        super_armor: 'Super Armor: Push Immunity, Debuff Immunity',
        cooldown: 300,
        desc: [
            {
                text: 'Dash ',
                type: 'regular'
            },
            {
                text: '12 meters',
                type: 'dist'
            },
            {
                text: ' toward the target location, slashing through foes with all your swords. Foes caught in the path receive ',
                type: 'regular'
            },
            {
                text: '7581',
                type: 'dmg'
            },
            {
                text: ' Damage at the moment of impact, then get launched in the air moments later for ',
                type: 'regular'
            },
            {
                text: '30311',
                type: 'dmg'
            },
            {
                text: ' Damage. This skill allows you to pierce through Guardians as well.',
                type: 'regular'
            }
        ],
        desca: 'Dash 12 meters toward the target location, slashing through foes with all your swords. Foes caught in the path receive 7581 Damage at the moment of impact, then get launched in the air moments later for 30311 Damage. This skill allows you to pierce through Guardians as well.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_18.png'
    },
    {
        name: 'Blade Assault',
        type: 'Holding',
        skill_type: 'Awakening Skill',
        stagger: 'Stagger: High',
        super_armor: 'Super Armor: Push Immunity, Debuff Immunity',
        cooldown: 300,
        desc: [
            {
                text: 'Focus energy to inflict ',
                type: 'regular'
            },
            {
                text: '2251',
                type: 'dmg'
            },
            {
                text: ' Damage and pull in foes. Hold to move forward while viciously slashing at foes for up to ',
                type: 'regular'
            },
            {
                text: '22496',
                type: 'dmg'
            },
            {
                text: ' Damage. Hit the Perfect Zone to cause ',
                type: 'regular'
            },
            {
                text: '1901',
                type: 'dmg'
            },
            {
                text: ' Damage as you summon spiritual blades, then hurl them at once and inflict ',
                type: 'regular'
            },
            {
                text: '11237',
                type: 'dmg'
            },
            {
                text: ' Damage, knocking foes away. Pushed foes are launched back in the air.',
                type: 'regular'
            }
        ],
        desca: 'Focus energy to inflict 2251 Damage and pull in foes. Hold to move forward while viciously slashing at foes for up to 22496 Damage. Hit the Perfect Zone to cause 1901 Damage as you summon spiritual blades, then hurl them at once and inflict 11237 Damage, knocking foes away. Pushed foes are launched back in the air.',
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_19.png'
    },
    
]

export default skills