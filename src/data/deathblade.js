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
        tripod: {
            level1: [
                {
                    name: 'Open Weakness',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Upon Dual Blades attack landing, grant an Open Weakness debuff and outgoing Damage from all party members +',
                            type: 'regular'
                        },
                        {
                            text: '3.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '6.0',
                            type: 'time'
                        },
                        {
                            text: 's. Frontal attacks and back attacks inflict +',
                            type: 'regular'
                        },
                        {
                            text: '9.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_100.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_4.webp'
                },
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                }
            ],
            level2: [
                {
                    name: 'Excellent Mobility',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Move Distance +',
                            type: 'regular'
                        },
                        {
                            text: '2.0 meter(s)',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_10.webp'
                },
                {
                    name: 'Impaired Mobility',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'On hit, foe Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '40.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '4.1',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_47.webp'
                },
                {
                    name: 'Keen Strike',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_5.webp'
                }
            ],
            level3: [
                {
                    name: 'Trailing Sword Burst',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Before charing, create a sword busrt that lasts for ',
                            type: 'regular'
                        },
                        {
                            text: '1',
                            type: 'time'
                        },
                        {
                            text: ' s. knocking foes backward and inflicting up to +',
                            type: 'regular'
                        },
                        {
                            text: '100.0%',
                            type: 'time'
                        },
                        {
                            text: ' Damage. This effect\'s cooldown time is +',
                            type: 'regular'
                        },
                        {
                            text: '5s',
                            type: 'negative'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_88.webp'
                },
                {
                    name: 'Merciless Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to combo mode. Charge more quickly. Then stab dual blades into foes and cut sideways, knocking them backward inflicting up to +',
                            type: 'regular'
                        },
                        {
                            text: '60.0%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_40.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Sturdy Armor',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'During skill use, incoming Damage -',
                            type: 'regular'
                        },
                        {
                            text: '40.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_25.webp'
                },
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_4.webp'
                },
            ],
            level2: [
                {
                    name: 'Pulling Blow',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'First attacks\'s range +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' and pulls foes.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_71.webp'
                },
                {
                    name: 'Powerful Twister',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Further strengthens the twister by the 2nd attack, increasing foe-launching height and their airborne duration. Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_47.webp'
                },
                {
                    name: 'Large Twister',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Adds a third attack. Deliver a rising slash with a longsword and create a bigger twister, knocking foes into the air. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_85.webp'
                }
            ],
            level3: [
                {
                    name: 'Sharp Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Increases the skill\'s Stagger Level to [Mid - High]. Crit Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_69.webp'
                },
                {
                    name: 'Tenacity',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'During skill use, grants Push Immunity. Cooldown +',
                            type: 'regular'
                        },
                        {
                            text: '8.0',
                            type: 'negative'
                        },
                        {
                            text: ' s.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_23.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Impaired Mobility',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'On hit, foe Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '4.1',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_47.webp'
                },
                {
                    name: 'Law of the Jungle',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Damage to Challenge or lower foes +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_61.webp'
                },
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_56.webp'
                },
            ],
            level2: [
                {
                    name: 'Whirlpool',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Range +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: '. Foe-pulling distance +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_71.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
                {
                    name: 'Sustain Enhancement',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Sword energy duration +',
                            type: 'regular'
                        },
                        {
                            text: '0.6s',
                            type: 'stat'
                        },
                        {
                            text: '. Total outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '40%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_51.webp'
                }
            ],
            level3: [
                {
                    name: 'Sword Energy Explosion',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'The sword energy contracts and explodes as it disappears, knocking foes away. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_53.webp'
                },
                {
                    name: 'Thick Sword Energy',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'The sword energy gradually expands. Radius up to +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: ' as it hits foes.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_7.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_56.webp'
                },
                {
                    name: 'Orb Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Death Orb Meter gain +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_37.webp'
                },
                {
                    name: 'Weak Point Detection',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Damage to Push=Immune foes +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_33.webp'
                },
            ],
            level2: [
                {
                    name: 'Tenacity',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Grants Push Immunity during the aerial attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_23.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
                {
                    name: 'Swoop',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Move ',
                            type: 'regular'
                        },
                        {
                            text: '4 meters',
                            type: 'time'
                        },
                        {
                            text: ' forward before attacking.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_10.webp'
                }
            ],
            level3: [
                {
                    name: 'Moon Star',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Instead of the dual blades attack, launch foes in the air and slam them back down onto the ground with a giant sword, inflicting +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage. Cooldown +',
                            type: 'regular'
                        },
                        {
                            text: '6s',
                            type: 'negative'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_53.webp'
                },
                {
                    name: 'Stardust',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to Holding mode. Aerial attack duration +',
                            type: 'regular'
                        },
                        {
                            text: '1s',
                            type: 'stat'
                        },
                        {
                            text: '. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_7.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                },
                {
                    name: 'Open Weakness',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'On hit, grants Open Weakness debuff and outgoing damage from all party members +',
                            type: 'regular'
                        },
                        {
                            text: '3.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '10.0',
                            type: 'time'
                        },
                        {
                            text: 's. Frontal attacks and back attacks inflict +',
                            type: 'regular'
                        },
                        {
                            text: '9.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_100.webp'
                },
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
            ],
            level2: [
                {
                    name: 'Sturdy Armor',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'During skill use, incoming Damage -',
                            type: 'regular'
                        },
                        {
                            text: '40.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_25.webp'
                },
                {
                    name: 'Corkscrew',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Move Distance in between attacks +',
                            type: 'regular'
                        },
                        {
                            text: '1.0 meter(s)',
                            type: 'time'
                        },
                        {
                            text: '. Push distance +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: '. With King Spin, Move Distance +',
                            type: 'time'
                        },
                        {
                            text: '2.0 meter(s)',
                            type: 'time'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_71.webp'
                },
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '4.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_56.webp'
                },
            ],
            level3: [
                {
                    name: 'Triple Spin',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Max combo count +',
                            type: 'regular'
                        },
                        {
                            text: '1',
                            type: 'stat'
                        },
                        {
                            text: '. Able to attack up to ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'stat'
                        },
                        {
                            text: ' times in a row.',
                            type: 'stat'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_38.webp'
                },
                {
                    name: 'King Spin',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to Normal mode. Move ',
                            type: 'regular'
                        },
                        {
                            text: '8 meters',
                            type: 'time'
                        },
                        {
                            text: ' at once to attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_88.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Fist of Darkness',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Element is now [Dark]. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_19.webp'
                },
                {
                    name: 'Burning Hands',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Element is now [Fire]. On hit, Burns foe, inclicting ',
                            type: 'regular'
                        },
                        {
                            text: '10.1',
                            type: 'stat'
                        },
                        {
                            text: ' Damage every 1s for ',
                            type: 'regular'
                        },
                        {
                            text: '5.0s',
                            type: 'time'
                        },
                        {
                            text: '. Stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '5',
                            type: 'time'
                        },
                        {
                            text: ' times.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_13.webp'
                },
                {
                    name: 'Ice Cold Hands',
                    level: 1,
                    tier: 1,
                    desc: [
                        {
                            text: 'Element is now [Water]. On hit, inflicts frost. Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '3.0',
                            type: 'time'
                        },
                        {
                            text: 's. This Frost effect stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: ' times. At ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: 'stacks, Freeze foes for',
                            type: 'regular'
                        },
                        {
                            text: '3.0',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_14.webp'
                },
            ],
            level2: [
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '5.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_56.webp'
                },
                {
                    name: 'Soul Snatch',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Charge up the skill for as long as you can to create a ',
                            type: 'regular'
                        },
                        {
                            text: '40.0%',
                            type: 'stat'
                        },
                        {
                            text: ' chance of getting half a Death Orb. this Orb Snatch effect is even applied during Death Trance',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_37.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
            ],
            level3: [
                {
                    name: 'Finishing Enhancement',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Activates Perfect Zone on the last hold-down block. Enter Perfect Zone to use a longsword for the finishing attack. Inflict +',
                            type: 'regular'
                        },
                        {
                            text: '200%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage. Changes the Soul Snatch effect to require Perfect Zone.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_72.webp'
                },
                {
                    name: 'Mutilate',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Removes the finishing attack. Enables you to attack more quickly. Holding duration +',
                            type: 'regular'
                        },
                        {
                            text: '1s',
                            type: 'stat'
                        },
                        {
                            text: '. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_39.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
                {
                    name: 'Quick Pace',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'On skill end, Move Speed +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '3.1',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_11.webp'
                },
                {
                    name: 'Magick Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'MP Cost -',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_34.webp'
                },
            ],
            level2: [
                {
                    name: 'Tenacity',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Grants Push Immunity during the aerial attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_23.webp'
                },
                {
                    name: 'Corkscrew',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Spin Attack\'s Move Distance is +',
                            type: 'regular'
                        },
                        {
                            text: '3 meters',
                            type: 'stat'
                        },
                        {
                            text: ', making it hit foes more times. Inflicts +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_10.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
            ],
            level3: [
                {
                    name: 'Upper Axel',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Spin Attack\'s Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '. Last longsword attack\'s Damage +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: ' and changes it to an upward strike, launching foes in front of you high in the air.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_9.webp'
                },
                {
                    name: 'High Axel',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Move Distance +',
                            type: 'regular'
                        },
                        {
                            text: '4 meters',
                            type: 'stat'
                        },
                        {
                            text: '. Removes the last longsword attack. Enables a higher jump able to go over Guardian foes. Sets Corkscrew\'s additional move distance to ',
                            type: 'regular'
                        },
                        {
                            text: '2 meters',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_12.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                },
                {
                    name: 'Concussion',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Increases the skill\'s Stagger Level to [Mid-High].',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_69.webp'
                },
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
            ],
            level2: [
                {
                    name: 'Fist of Darkness',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Element is now [Dark]. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_19.webp'
                },
                {
                    name: 'Burning Hands',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Element is now [Fire]. Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_13.webp'
                },
                {
                    name: 'Ice Cold Hands',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Element is now [Water]. Overcharging the skill makes it Freeze foes for ',
                            type: 'regular'
                        },
                        {
                            text: '3.0s',
                            type: 'stat'
                        },
                        {
                            text: '. No longer knocks away foes.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_14.webp'
                },
            ],
            level3: [
                {
                    name: 'Power Stab',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to Normal mode. Attack Width +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '. Crit Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_87.webp'
                },
                {
                    name: 'Halve',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Instead of throwing foes away with the Overcharged stabbing attack, move the cursor\'s direction after the attack and slash at foes, knocking them away. Danage inflcited up to +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_40.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Excellent Mobility',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Move Distance +',
                            type: 'regular'
                        },
                        {
                            text: '2.0 meter(s)',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_10.webp'
                },
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '4.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_56.webp'
                },
                {
                    name: 'Weak Point Enhancement',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Grants Weak Point Lv.',
                            type: 'regular'
                        },
                        {
                            text: '1',
                            type: 'stat'
                        },
                        {
                            text: 'to the skill.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_20.webp'
                },
            ],
            level2: [
                {
                    name: 'Confirmed Kill',
                    level: 1,
                    tier: 2,
                    desc: [
                        {
                            text: 'Crit Rate on Pushed foes +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_29.webp'
                },
                {
                    name: 'Ruthless',
                    level: 1,
                    tier: 2,
                    desc: [
                        {
                            text: 'Crit Rate against Staggered foes +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_86.webp'
                },
                {
                    name: 'Cold Zone',
                    level: 1,
                    tier: 2,
                    desc: [
                        {
                            text: 'Element is now [Water]. The last attack creates a Cold Zone. Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' and ',
                            type: 'regular'
                        },
                        {
                            text: '58.4',
                            type: 'time'
                        },
                        {
                            text: 'Damage is inflicted every 1s for',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'time'
                        },
                        {
                            text: 's. Effect lasts for ',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'time'
                        },
                        {
                            text: 's. This Frost effect stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: 'times.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_14.webp'
                }
            ],
            level3: [
                {
                    name: 'Critical Blow',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to Spot mode. Teleport to a higher elevation and stab downward from there, inflicting +',
                            type: 'regular'
                        },
                        {
                            text: '80%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage to foes with Push Immunity. On skill use, max Move Distance is +',
                            type: 'regular'
                        },
                        {
                            text: '1 meter',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_41.webp'
                },
                {
                    name: 'Explosion',
                    level: 1,
                    tier: 3,
                    desc: [
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '. Stomp on the ground one more time, knocking foes into the air inflicting +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_78.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Magick Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'MP Cost -',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_34.webp'
                },
                {
                    name: 'Orb Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Death Orb Meter gain +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_37.webp'
                },
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_56.webp'
                },
            ],
            level2: [
                {
                    name: 'Back Attack Enhancement',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Back Attack Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_101.webp'
                },
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_7.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                }
            ],
            level3: [
                {
                    name: 'Cross Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Slash with dual blades and slam a longsword downward. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_40.webp'
                },
                {
                    name: 'Forward Retreat',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Move ',
                            type: 'regular'
                        },
                        {
                            text: '4 meters',
                            type: 'time'
                        },
                        {
                            text: ' forward before the 1st attack. Then ',
                            type: 'regular'
                        },
                        {
                            text: '6 meters',
                            type: 'time'
                        },
                        {
                            text: ' backward after the 2nd attack. Crit Damage +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_40.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Concussion',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Increases the skill\'s Stagger Level to [Mid-High].',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_69.webp'
                },
                {
                    name: 'Law of the Jungle',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Damage to Challenge or lower foes +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_61.webp'
                },
                {
                    name: 'Push',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Before attacking, charge ',
                            type: 'regular'
                        },
                        {
                            text: '4 meters',
                            type: 'stat'
                        },
                        {
                            text: ' forward, pushing foes. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '15%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_60.webp'
                },
            ],
            level2: [
                {
                    name: 'Darkness Injection',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Element is now [Dark]. Attacks plant Dark energy in foes that stays dormat for ',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'time'
                        },
                        {
                            text: 's. It then explodes after ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: 's, pushing foes and inflicting +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_19.webp'
                },
                {
                    name: 'Stun Effect',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'The longsword attack now stuns foes for ',
                            type: 'regular'
                        },
                        {
                            text: '3.0',
                            type: 'stat'
                        },
                        {
                            text: 's. No longer knocks down foes.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_30.webp'
                },
                {
                    name: 'Weak Point Detection',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Damage to Push=Immune foes +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_33.webp'
                },
            ],
            level3: [
                {
                    name: 'Leap Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Leap ',
                            type: 'regular'
                        },
                        {
                            text: '2 meters',
                            type: 'time'
                        },
                        {
                            text: ' forward and slam your longsword downward. Crit Rate +' ,
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '.' ,
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_39.webp'
                },
                {
                    name: 'Earth Explosion',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'After the attack, advancing columns of energy are shot through the ground knocking foes away with patches of earth. Damage inflicted up to +',
                            type: 'regular'
                        },
                        {
                            text: '90%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_54.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_56.webp'
                },
                {
                    name: 'Magick Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'MP Cost -',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_34.webp'
                },
                {
                    name: 'Weapon Destruction',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'On hit, Atk. Power -',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '4.0',
                            type: 'regular'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_46.webp'
                },
                
            ],
            level2: [
                {
                    name: 'Quick Hunt',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Deletes the hilt attack. Enables you to attack more quickly in place.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_41.webp'
                },
                {
                    name: 'Down Hunt',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Removes the Stun effect. Attack is now a low lateral slash that knocks down foes. With Stun Enhancement, airborne and knockdown durations +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_9.webp'
                },
                {
                    name: 'Enhanced Strike',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_0.webp'
                }
            ],
            level3: [
                {
                    name: 'Weak Point Detection',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Damage to Push=Immune foes +',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_33.webp'
                },
                {
                    name: 'Enhanced Stun',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Stun duration +',
                            type: 'regular'
                        },
                        {
                            text: '3.0',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_51.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Fist of Darkness',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Element is now [Dark]. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_19.webp'
                },
                {
                    name: 'Burning Hands',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Element is now [Fire]. On hit, Burns foe, inclicting ',
                            type: 'regular'
                        },
                        {
                            text: '10.1',
                            type: 'stat'
                        },
                        {
                            text: ' Damage every 1s for ',
                            type: 'regular'
                        },
                        {
                            text: '5.0s',
                            type: 'time'
                        },
                        {
                            text: '. Stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '5',
                            type: 'time'
                        },
                        {
                            text: ' times.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_13.webp'
                },
                {
                    name: 'Ice Cold Hands',
                    level: 1,
                    tier: 1,
                    desc: [
                        {
                            text: 'Element is now [Water]. Creates cold energy along the ground, casting Frost on foes within range for ',
                            type: 'regular'
                        },
                        {
                            text: '5.0',
                            type: 'time'
                        },
                        {
                            text: 's. Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: '. This Frost effect stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: ' times.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_14.webp'
                },
            ],
            level2: [
                {
                    name: 'Quick Prep',
                    level: 1,
                    tier: 2,
                    desc: [
                        {
                            text: 'Cooldown -',
                            type: 'regular'
                        },
                        {
                            text: '8.0',
                            type: 'stat'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_56.webp'
                },
                {
                    name: 'Sustain Enhancement',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Changes to Holding mode. ',
                            type: 'regular'
                        },
                        {
                            text: 'Doubles',
                            type: 'stat'
                        },
                        {
                            text: ' the attack duration. Total outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '50%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_51.webp'
                },
                {
                    name: 'Concentrated Attack',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '. AoE Radius -',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'negative'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
            ],
            level3: [
                {
                    name: 'Foward Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Move ',
                            type: 'regular'
                        },
                        {
                            text: '3 meters',
                            type: 'stat'
                        },
                        {
                            text: ' forward before striking at surrounding foes in each attack. Use with Sustain Enhancedment to move up to 2 more times with a ',
                            type: 'regular'
                        },
                        {
                            text: '50% ',
                            type: 'stat'
                        },
                        {
                            text: ' Damage bonus.',
                            type: 'regular'
                        }

                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_10.webp'
                },
                {
                    name: 'Shade Sonic',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Move faster to attack more. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '70%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_8.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Open Weakness',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'On hit, grant Open Weakness debuff and outgoing Damage from all party members +',
                            type: 'regular'
                        },
                        {
                            text: '3.0%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '12.0',
                            type: 'time'
                        },
                        {
                            text: 's. Frontal attacks and back attacks inflict +',
                            type: 'regular'
                        },
                        {
                            text: '9.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_100.webp'
                },
                {
                    name: 'Excellent Mobility',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Move Distance per spin +',
                            type: 'regular'
                        },
                        {
                            text: '1.0 meter(s)',
                            type: 'stat'
                        },
                        {
                            text: '. Use with Concentrated ATtack to advance ',
                            type: 'regular'
                        },
                        {
                            text: '2.0 meter(s)',
                            type: 'stat'
                        },
                        {
                            text: ' before attacking.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_10.webp'
                },
                {
                    name: 'Enhanced Strike',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '15%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_0.webp'
                }
            ],
            level2: [
                {
                    name: 'Point Slash',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Change to Combo mode. Enables you to change direction after each spin attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_38.webp'
                },
                {
                    name: 'Weak Point Enhancement',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Weak Point Lv. +',
                            type: 'regular'
                        },
                        {
                            text: '1',
                            type: 'stat'
                        },
                        {
                            text: ' per spin attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_20.webp'
                },
                {
                    name: 'Tenacity',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Grants Push Immunity.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_23.webp'
                },
            ],
            level3: [
                {
                    name: 'Concentrated Attack',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Attack in place, Damage +',
                            type: 'regular'
                        },
                        {
                            text: '100.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_40.webp'
                },
                {
                    name: 'Triple Turn',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to a',
                            type: 'regular'
                        },
                        {
                            text: 'triple',
                            type: 'time'
                        },
                        {
                            text: ' spin attack. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '70%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_39.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Cold Touch',
                    level: 1,
                    tier: 1,
                    desc: [
                        {
                            text: 'Element is now [Water]. Responds to incoming Damage by Freezing foes within',
                            type: 'regular'
                        },
                        {
                            text: '4 meters',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '2.0',
                            type: 'time'
                        },
                        {
                            text: 's. Cancels the Maelstrom buff.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_14.webp'
                },
                {
                    name: 'Orb Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'During the Maelstrom buff, Death Orb Meter gains +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: ' when hitting with Normal and Awakening skills.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_37.webp'
                },
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Continuous Damage range +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                }
            ],
            level2: [
                {
                    name: 'Dark Order',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'On skill use, Move Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15%',
                            type: 'stat'
                        },
                        {
                            text: 'for all party members within ',
                            type: 'regular'
                        },
                        {
                            text: '24 meters',
                            type: 'time'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '6.1',
                            type: 'time'
                        },
                        {
                            text: 's. Adds the Dark Order buff of Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_6.webp'
                },
                {
                    name: 'Quick Cast',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Skill\'s casting delay -',
                            type: 'regular'
                        },
                        {
                            text: '60.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_41.webp'
                },
                {
                    name: 'Wind Storm',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Instead of attacking surrounding foes, shoots a twister at them. Inflicts +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_54.webp'
                }
            ],
            level3: [
                {
                    name: 'Stabilized Energy',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Grants Paralysis Immunity during the Maelstrom buff. Cooldown +',
                            type: 'regular'
                        },
                        {
                            text: '5.0',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_23.webp'
                },
                {
                    name: 'Overwhelm',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Damage to Challenge or lower foes +',
                            type: 'regular'
                        },
                        {
                            text: '100%',
                            type: 'stat'
                        },
                        {
                            text: '. Paralyzes Normal foes with the continuous Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_61.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Orb Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Death Orb Meter gain +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_37.webp'
                },
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
                {
                    name: 'Law of the Jungle',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Damage to Challenge or lower foes +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_61.webp'
                },
            ],
            level2: [
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_7.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_4.webp'
                },
                {
                    name: 'Ice Cold Hands',
                    level: 1,
                    tier: 2,
                    desc: [
                        {
                            text: 'Element is now [Water]. Inflicts Frost. Foe Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' for ',
                            type: 'regular'
                        },
                        {
                            text: '5.0',
                            type: 'time'
                        },
                        {
                            text: 's. Stacks up to ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: ' times. At ',
                            type: 'regular'
                        },
                        {
                            text: '3',
                            type: 'time'
                        },
                        {
                            text: 'stacks, Freeze foes for',
                            type: 'regular'
                        },
                        {
                            text: '4.0',
                            type: 'time'
                        },
                        {
                            text: 's.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_14.webp'
                },
            ],
            level3: [
                {
                    name: 'Double Wave',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Shoots ',
                            type: 'regular'
                        },
                        {
                            text: '2',
                            type: 'stat'
                        },
                        {
                            text: 'sword bursts with each swing. Damage +',
                            type: 'regular'
                        },
                        {
                            text: '60%',
                            type: 'stat'
                        },
                        {
                            text: '. Use with Ice Cold Hands to stack Frost ',
                            type: 'regular'
                        },
                        {
                            text: 'once',
                            type: 'time'
                        },
                        {
                            text: ' for every ',
                            type: 'regular'
                        },
                        {
                            text: '2',
                            type: 'time'
                        },
                        {
                            text: ' hits.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_88.webp'
                },
                {
                    name: 'Death Wave',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Shots ',
                            type: 'regular'
                        },
                        {
                            text: '1',
                            type: 'stat'
                        },
                        {
                            text: ' slow, powerful sword burst that inflicts continuous Damage to foes in its path. Total Damage +',
                            type: 'regular'
                        },
                        {
                            text: '155%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_87.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                },
                {
                    name: 'Excellent Mobility',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Move Distance +',
                            type: 'regular'
                        },
                        {
                            text: '2.0 meter(s)',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_10.webp'
                },
                {
                    name: 'Vital Point Hit',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Crit Rate +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_4.webp'
                },
            ],
            level2: [
                {
                    name: 'All-round',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Changes to Normal mode. Shortens the charge up time and always delivers the Overcharged attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_41.webp'
                },
                {
                    name: 'Charge Enhancement',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: ' per Charge Level.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_58.webp'
                },
                {
                    name: 'Dark Charge',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Dark energy lightly pulls surrounding foes every time Charge Level Increases. Inflicts ',
                            type: 'regular'
                        },
                        {
                            text: '40%',
                            type: 'stat'
                        },
                        {
                            text: ' of the max skill Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_71.webp'
                }
            ],
            level3: [
                {
                    name: 'Shadow Rush',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Your afterimages attack in your stead when the skill is charged.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_88.webp'
                },
                {
                    name: 'Dual Blitz',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Total Damage +',
                            type: 'regular'
                        },
                        {
                            text: '25.0%',
                            type: 'stat'
                        },
                        {
                            text: '. Crit Damage + ',
                            type: 'regular'
                        },
                        {
                            text: '55.0%',
                            type: 'stat'
                        },
                        {
                            text: '. Longsword attack disappears when Overcharged, instead attacking with [Fire] and [Water] elements.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_50.webp'
                }
            ]
        },
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
        tripod: {
            level1: [
                {
                    name: 'Swift Fingers',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Atk. Speed +',
                            type: 'regular'
                        },
                        {
                            text: '15.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_41.webp'
                },
                {
                    name: 'Wide-Angle Attack',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'AoE Radius +',
                            type: 'regular'
                        },
                        {
                            text: '20.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_7.webp'
                },
                {
                    name: 'Orb Control',
                    level: 1,
                    tier: 1,
                    desc: [
                        
                        {
                            text: 'Death Orb Meter gain +',
                            type: 'regular'
                        },
                        {
                            text: '50.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_1_37.webp'
                },
            ],
            level2: [
                {
                    name: 'Fist of Darkness',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Element is now [Dark]. Outgoing Damage +',
                            type: 'regular'
                        },
                        {
                            text: '30.0%',
                            type: 'stat'
                        },
                        {
                            text: '.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_19.webp'
                },
                {
                    name: 'Void Zone',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'The Overcharged attack creates a void zone on the ground for ',
                            type: 'regular'
                        },
                        {
                            text: '5',
                            type: 'time'
                        },
                        {
                            text: 's. Inflicting +',
                            type: 'regular'
                        },
                        {
                            text: '20%',
                            type: 'stat'
                        },
                        {
                            text: ' Damage. Move Speed -',
                            type: 'regular'
                        },
                        {
                            text: '30%',
                            type: 'stat'
                        },
                        {
                            text: '. Casts Darkness.',
                            type: 'regular'
                        },
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_85.webp'
                },
                {
                    name: 'Concussion',
                    level: 1,
                    tier: 2,
                    desc: [
                        
                        {
                            text: 'Increases the skill\'s Stagger Level to [High].',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_2_69.webp'
                },
            ],
            level3: [
                {
                    name: 'Dark Explosion',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'The Overcharged attack causues a time-delayed Dark explosion after a while, launching its targets again in the air with',
                            type: 'regular'
                        },
                        {
                            text: '70.0%',
                            type: 'stat'
                        },
                        {
                            text: ' basic skill Damage.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_78.webp'
                },
                {
                    name: 'Dark Dimension',
                    level: 1,
                    tier: 3,
                    desc: [
                        
                        {
                            text: 'Changes to Holding mode. CHarge up the skill for a max of ',
                            type: 'regular'
                        },
                        {
                            text: '1.5',
                            type: 'time'
                        },
                        {
                            text: 's to pull foes to you and deliver the Overcharged attack.',
                            type: 'regular'
                        }
                    ],
                    url: 'https://lostarkcodex.com/icons/tripod_tier_3_42.webp'
                }
            ]
        },
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
        url: 'https://static.invenglobal.com/img/lostark/dataninfo/skillicon/bl_skill_01_19.png'
    },
    
]

export default skills