(function() {
        'use strict';

        angular.module('olcg')
            .constant('FEATS', [{
                        name: 'Ageless',
                        id: 'ageless',
                        prerequisites: {
                            tier1: {
                                attributes: {
                                    protection: 9,
                                    creation: 9,
                                    alteration: 9,
                                    entropy: 9
                                }
                            }
                        },
                        tags: [
                            'Supernatural'
                        ],
                        cost: 1,
                        description: 'Ageless and supernatural, you have either unlocked a mystical secret to immortality, become a legendary defender, transformed into an avatar of nature, or been granted immunity to the ravages time by some higher power.',
                        effect: 'Rooted in a superantural means of your choice, you become immune to the passage of time and the effects of old age. You do not age and cannot be harmed by magic that causes aging. You can choose to age in appearance, if you wish, but you can also choose to continually appear the same age.'
                    }, {
                        name: 'Alternate Form (I - III)',
                        id: 'alternateForm',
                        tiers: 3,
                        prerequisites: {
                            tier1: {
                                attributes: {
                                    alteration: 2
                                }
                            },
                            tier2: {
                                attributes: {
                                    alteration: 5
                                }
                            },
                            tier3: {
                                attributes: {
                                    alteration: 7
                                }
                            }
                        },
                        tags: [
                            'Supernatural'
                        ],
                        cost: 3,
                        description: 'Alternate form is an ability possessed by lyncanthropes (werewolves, werebears, wererats), druids, vampires, and other creatures capable of assuming <emphasis>specific</emphasis> forms.',
                        effect: 'You gain the ability to shapeshift into a single form (you choose that form when purchasing this feat and it cannot be changed). Assuming your new form is a major action. When you assume your new form, you gain a pool of points equal to your Alteration score, which you may immediately spend to temporarily increase your physical attributes. You cannot raise any physical attribute to be greater than your Alteration score, unless the physical attribute is already equal to your Alteration. In that case, you may increase it by a maximum of one point. This increase cannot be used to meet prerequisites for feats, but it can be used to give you access to banes and boons that you would otherwise not be able to use in your normal form. Until you purchase this feat at tier 3, you cannot use the supernatural attributes of the chosen form.You return to your normal form immediately if you are reduced to zero hit points. You can also choose to voluntarily return to your usual form as a major action. Upon returning to your original form, your physical attributes return to their previous values.<ul><li>Tier 1 ∩┐╜ Your alternate form must be the same size as your normal form.</li><li>Tier 2 ∩┐╜ Your alternate form can be one size different from your normal size.</li><li>Tier 3 ∩┐╜ Your alternate form can be any size. In addition, you are able to use supernatural attributes for attacks (dragon∩┐╜s breath, nymph∩┐╜s charm, etc.) of your chosen form. Use your Alteration score for action rolls relating to these supernatural abilities.</li></ul>'
                    }, {
                        name: 'Area Manipulation (I - V)',
                        id: 'areaManipulation'
                        prerequisites: {},
                        tags: [
                            'No Prerequisite',
                            'Supernatural'
                        ],
                        cost: 1,
                        description: 'You are exceptionally precise when making area attacks, allowing you to avoid allies who would otherwise be caught in the line of fire.',
                        effect: 'For each tier of this feat you possess, you can omit a single 5-foot square from being targeted as part of an area attack.'
                    }, {
                        name: 'Armor Mastery (I - III)',
                        id: 'armorMastery',
                        prerequisites: {},
                        tags: [
                            'No Prerequisite'
                        ],
                        cost: 2,
                        description: 'You are specially trained with particular armor type, allowing you to maximize its protection and minimize its drawbacks.',
                        effect: 'Choose an armor type to specialize in. Your training allows you to sleep in that armor type without becoming fatigued. In addition, while wearing armor of that type, you gain the following benefits.<ul><li>Tier 1 - The Fortitude prerequisite for wearing the selected armor is reduced by 1. The Armor Bonus granted by the armor is increased by 1.</li><li>Tier 2 - The Fortitude prerequisite for wearing the selected armor is reduced by 2. The Armor Bonus granted by the armor is increased by 2. Any movement penalty is reduced by 5 feet.</li><li>Tier 3 - The Fortitude prerequisite for wearing the selected armor is reduced by 3. The Armor Bonus granted by the armor is increased by 3. Any movement penalty is reduced by 10 feet.</li></ul>'
                    }, {
                        name: 'Attack Redirection',
                        id: 'attackRedirection',
                        prerequisite: {
                            tier1: {
                                feats: {
                                    defensiveReflexes: 2
                                }
                            }
                        },
                        tags: [
                            'Supernatural'
                        ],
                        cost: 3,
                        description: 'You are adept at redirecting your enemy\'s attacks. Whether using fancy footwork, magical force, or tactical superiority, you can use your opponents\' attacks against themselves.',
                        effect: 'When you make a Defend action and your roll exceeds the attacker\'s action roll, you can choose to redirect the attack to any target that could have been hit by the original attack. The original attack roll does not change, only the target. If the attack was a melee attack, you can redirect it to anyone within 5\' of you (as opposed to within 5\' of the attacker).'
                    }, {
                        name: 'Attack Specialization (I - IX)',
                        id: 'attackSpecialization',
                        prerequisite: {
                            tier1: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier2: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier3: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier4: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier5: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier6: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier7: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier8: {
                                attributes: {
                                    any: 1
                                }
                            },
                            tier9: {
                                attributes: {
                                    any: 1
                                }
                            }
                        },
                        tags: [
                            'Passive',
                            'Weapon',
                            'Supernatural',
                            'Combat'
                        ],
                        cost: 3,
                        description: 'You are so well trained with a particular form of attack that you can devastate foes with much more skill than the average combatant.',
                        effect: 'When you take this feat, select one weapon or energy type. You gain Advantage 1 per tier of this feat for any <emphasis>damaging</emphasis> attack made with your choice. This bonus does not apply to bane attacks or boon invocations.Examples of energy types you can choose to specialize in include fire, cold, lightning, acid, poison, entropy, creation, and force - though this list is not exhaustive.<strong>Special</strong>: You may take this feat multiple times for the same type of attack. Your total advantage to attacks with the attack is equal to your tier for that particular attack mode.  You can also specialize in different attacks by purchasing the feat again. For example, a character might have Attack Specialization (Tier 2) for Fire attacks and Attack Specialization (Tier 4) for Long Sword.'
                    }, {
                        name: 'Attribute Substitution',
                        id: 'attributeSubstitution',
                        prerequisites: {
                            attributes: {
                                any: 4
                            }
                        },
                        tags: [
                            'Any Attribute'
                        ],
                        cost: 3,
                        description: 'Your prowess in a supernatural, mental, or social attribute empowers a physical aspect of your character, allowing you to use that attribute for tasks normally reserved for another attribute.  Examples of Attribute Substitution in play include a martial artist who is physically weak but capable of using internal chi to throw and disable opponents, as well as an anatomical genius who uses their intelligence to make vital strikes rather than their dexterity.',
                        effect: 'When you purchase this feat, you create a permanent link between two attributes: one stronger (the primary attribute) and one weaker (the dependent attribute). When making action rolls with the dependent attribute, you may use your score in the primary attribute for damaging attacks, bane attacks, boon invocations, and other actions at the GM\'s discretion.This relationship is subject to  case -by - case approval by the GM.It must be logical and consistent with the story you are trying to tell.Furthermore, the GM should prevent players from creating illogical substitutions that are purely aimed at making their characters unreasonably powerful.Two examples of proper uses of this feat include an analytical warrior or martial artist who analyzes angles, leverage, and physics to substitute Logic for Might, or a a gunslinger who channels dark energy, giving her deadshot accuracy and substituting Entropy for Agility.For the purpose of meeting attribute prerequisites when purchasing feats, your dependent attribute is considered equal to that of your primary attribute score. < strong > Special < /strong>: This feat can only be purchased once. In addition, the primary attribute must be either social, mental, or supernatural, while the substituted attribute must be physical.'
                    }, {
                        name: 'Bane Focus',
                        prerequisites: {
                            tier1: {
                                banes: {
                                    any: 1
                                }
                            }
                        },
                        tags: [
                            'Might',
                            'Passive',
                            'Combat',
                            'Bane'
                        ],
                        cost: 3,
                        description: 'You are specialized in the use of a particular bane that is iconic to your character.',
                        effect: 'Choose a bane that you can invoke. When making a damaging attack, you can inflict this bane for free when you deal at least 5 points of damage (as opposed to the usual 10). Each attack is still only capable of inflicting a single bane. When making a bane attack, you get Advantage 2 on the bane attack roll.'
                    }, {
                        name: 'Battlefield Defender',
                        prerequisites: [
                            attributes: {
                                might: 4,
                                agility: 4,
                                protection: 4
                            }
                        ],
                        tags: [
                            'Might',
                            'Agility',
                            'Protection',
                            'Passive',
                            'Combat'
                        ],
                        cost: 2,
                        description: 'Your prowess on the battlefield allows you to punish your enemies for every misplaced step.',
                        effect: 'When you use the defend interrupt action, you also deal damage to the attacker equal to the amount by which your action roll exceeds the attacker\'s roll.'
                    }, {
                        name: 'Battlefield Punisher - Knockdown',
                        prerequisites: {
                            tier1: {
                                attributes: {
                                    might: 5
                                },
                                feats: {
                                    battlefieldDefender: 1
                                }
                            }
                        },
                        tags: [
                            'Might',
                            'Passive',
                            'Combat',
                            'Feat Chain'
                        ],
                        cost: 3,
                        description: 'Not only are your battle reflexes uncanny, but you can deal knockdown blows with your defensive strikes.',
                        effect: 'If you deal damage with a Defend action via the Battlefield Defender feat, you can automatically trigger the Knockdown bane. If the attack hits, the remainder of the target\'s movement is cancelled until the start of its next turn.'
                    }, {
                        name: 'Battlefield Punisher - Slowed',
                        prerequisites: {
                            tier1: {
                                feats: {
                                    battlefieldDefender: 1
                                },
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            }
                        },
                        tags: [
                            'Might',
                            'Agility',
                            'Passive',
                            'Combat',
                            'Feat Chain'
                        ],
                        cost: 3,
                        description: 'Not only are your battle reflexes uncanny, but you can deal slowing blows with your defensive strikes.',
                        effect: 'If you deal damage with a Defend action via the Battlefield Defender feat, you can automatically trigger the Slowed bane.  If the attack hits and the target has already moved more than 2 squares, the remainder of their movement is cancelled until the start of their next turn.'
                    }, {
                        name: 'Battlefield Punisher - Stunned',
                        prerequisites: {
                            tier1: {
                                feats: {
                                    battlefieldDefender: 1
                                },
                                attributes: {
                                    might: 7,
                                    agility: 7
                                }
                            }
                        },
                        tags: [
                            'Might',
                            'Agility',
                            'Passive',
                            'Combat',
                            'Feat Chain'
                        ],
                        cost: 3,
                        description: 'Not only are your battle reflexes uncanny, but you can deal stunning blows with your defensive strikes.',
                        effect: 'If you deal damage with a Defend action via the Battlefield Defender feat, you can automatically trigger the Stunned bane. If the target has taken any action prior to this attack, any remaining actions are cancelled by the Stunned bane until the start of the target\'s next turn.'
                    }, {
                        name: 'Battlefield Sentinel (I - V)',
                        prerequisites: {
                            tier1: {
                                feats: {
                                    battlefieldDefender: 1
                                }
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            },
                            tier2: {
                                feats: {
                                    battlefieldDefender: 1
                                }
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            },
                            tier3: {
                                feats: {
                                    battlefieldDefender: 1
                                }
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            },
                            tier4: {
                                feats: {
                                    battlefieldDefender: 1
                                }
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            },
                            tier5: {
                                feats: {
                                    battlefieldDefender: 1
                                }
                                attributes: {
                                    might: 5,
                                    agility: 5
                                }
                            }
                        }

                    ],
                    tags: [
                        'Might',
                        'Agility',
                        'Passive',
                        'Combat',
                        'Feat Chain'
                    ],
                    cost: 2,
                    description: 'Your battlefield prowess allows you to capitalize on windows of opportunity that others don\'t notice, making you far more deadly in melee combat.',
                    effect: 'You may make an additional opportunity attack per round for each tier of this feat your possess. You can only make one opportunity attack per triggering action (e.g., you cannot make multiple attacks against the same foe when they leave your threatened square).'
                }, {
                    name: 'Berserker',
                    prerequisites: {
                        tier1: {
                            attributes: {
                                will: 3,
                                Fortitude: 3
                            }
                        }
                    },
                    tags null,
                    cost: 3
                ],
                description: 'You can enter a rage-induced, trance-like state in which your body is strengthened and your mind transcends fear and pain.',
                effect: 'As a free action on your turn, you may enter a rage. While raging, you have advantage 1 on all attacks. Additionally, if you are not wearing armor, all of your defense scores are increased by 5. If you take three consecutive turns without making an attack roll against a creature, the rage ends. When the rage ends, you automatically suffer 1 level of the <a href=\'/banes/fatigued\'>fatigue bane</a>.'
            }, {
                name: 'Boon Access',
                prerequisites: [],
                tags: [
                    'Supernatural'
                ],
                cost: 'any',
            description: 'You have a special gift: it might be the result of your heritage, a close encounter with magical energy, or the result of years of training with a master. In any case, although you do not necessarily possess the aptitude to work supernatural powers for yourself or create a desired effect with your physical capabilities alone, you are able to reliably replicate a single boon.',
            effect: 'When you choose this feat, choose one boon that you do not have the requisite attribute to invoke. The cost of this feat is equal to the Power Level of the chosen boon. You can invoke the chosen boon despite lacking the necessary attribute. For invocation rolls, treat your attribute score as the Power Level of the boon. Additonally, you count as having access to the chosen boon for the purpose of meeting feat prerequisites, and your attribute for meeting such prerequisites is equal to the Power Level of the boon. The Boon Access feat bypasses the normal attribute score restrictions based on character level, so a first level character could spend all 6 of their feat points to begin play with access to a Power Level 6 boon.You may acquire this feat multiple times. Each time, select a new boon.<strong>Special</strong>: If you ever meet the attribute prerequisite for the chosen boon, you may choose at that time to lose this feat and regain the feat points spent. Re-allocate them as you choose.'
    }, {
        name: 'Boon Focus (I - III)',
        prerequisites: [
            boon: {
                any 1
            }
        ],
        tags: [
            'Supernatural',
            'Passive',
            'Boon'
        ],
        cost: 3,
    description: 'You are specialized in the use a particular boon that is iconic to your character.',
    effect: '<ul><li>Tier 1 - When you invoke the chosen boon on a single target, you succeed automatically and do not need to make an action roll. If the invocation has multiple targets, success is not automatic, but you get advantage 2 on the action roll to invoke the boon.</li><li>Tier 2  - When your invocation includes multiple targets, you gain advantage 3 on your action roll to invoke the boon. Additionally, invoking the boon is one time increment faster.  If the invocation time is a major action, it becomes a minor action.  If the invocation time is 1 minute, it becomes 1 major action.  If the invocation time is 10 minutes, it becomes 1 minute.  If the invocation time is 1 hour, it becomes 10 minutes.  If the invocation time is 8 hours, it becomes 1 hour.</li><li>Tier 3 - When your invocation includes multiple targets, you gain advantage 4 on your action rolll to invoke the boon. Additionally, the chosen boon is always active for your character and passively persists, without requiring you to use a minor action to sustain it. If the boon is somehow temporarily cancelled (such as by the dispel bane), it returns automatically at the start of your next turn.</li></ul>'
}, {
    name: 'Breakfall (I - IX)',
    prerequisites: [
        attributes: {
            agility: 4
        }
    ],
    tags null,
    cost: 1
],
description: 'Your agility enables you to fall from deadly heights unharmed.',
    effect: 'When calculating falling damage, reduce the falling distance by 10 feet per tier of this feat that you possess. Once you reach tier 9, you can fall any distance without taking damage.'
}, {
    name: 'Brutal Intimidation',
    prerequisites: [
        attributes: {
            might: 2
        }
    ],
    tags: [
        'Non-Combat'
    ],
    cost: 1
],
description: 'Your powers of persuasion stem from application of brute force rather than your social grace.',
    effect: 'If you\'re able to make a show of physical force, you can use your Might attribute in place of Persuasion for the action roll.'
}, {
    name: 'Combat Follow-through',
    prerequisites: [
        feats: {
            'Combat Momentum': 1
        },
        attributes: {
            might: 5,
            agility: 5
        }
    ],
    tags: [
        'Feat Chain'
    ],
    cost: 2
],
description: 'You are able to decimate many enemies in quick succession, like a legendary Samurai warrior or matchless elven archer.',
    effect: 'Any time you reduce a foe to zero hit points or less, you can immediately make an extra attack as a free action. <br /><strong>Requirement</strong> - The triggering attack must be a Might or Agility action roll.'
}, {
    name: 'Combat Momentum',
    prerequisites: [
        attributes: {
            might: 4,
            agility: 4,
            movement: 4
        }
    ],
    tags: [
        'Feat Chain'
    ],
    cost: 1
],
description: 'Whether through brute strength or lightning reflexes, you are able to use the momentum of combat to maneuver around the battlefield with ease.',
    effect: 'Every time you bring an enemy to zero hit points or less with a Might or Agility attack, you can immediately move up to your normal speed as a free action. <br /><strong>Special</strong>: If you meet the Movement 4 prerequisite, you can use the Teleport boon instead of a normal move.'
}, {
    name: 'Companion (I - III)',
    prerequisites: [],
    tags: [
        'Non-Combat'
    ],
    cost: 3
],
description: 'Whether a hired bodyguard, a loyal animal sidekick, or a sibling that follows you everywhere, you have the constant and unflinching loyalty of one particular companion character.',
    effect: 'You gain a companion character that acts indepently from you. During combat, your companion acts on its own initiative count and gains the usual assortment of actions, which you may choose. You also get to assign your companion\'s attributes.The companion\'s highest attribute is determined by your level and your tier in this feat (see below). Your companion also possesses attributes at each number lower than its highest score. For example, if the companion\'s highest score is 6, then it also has attributes at scores 5,4, 3,2, and 1. The companion gains no feats or abilities, only attributes and the corresponding access to banes and boons. < ul > < li > < strong > Tier 1 < /strong> - Your companion\'s highest attribute equals your level minus 2 (minimum of 3).</li > < li > < strong > Tier 2 < /strong> - Your companion\'s highest attribute equals your level minus 1 (minimum of 4).</li > < li > < strong > Tier 3 < /strong> - Your companion\'s highest attribute equals your level (minimum of 5).</li > < /ul>'
}, {
    name: 'Craft (I - II)',
    prerequisites: [
        feats: {
            knowledge: 1
        },
        attributes: {
            learning: 3
        }
    ],
    tags: [
        'Non-Combat'
    ],
    cost: 2
],
description: 'You have mastered a particular craft, and given proper time and materials, you can create items related to that craft.',
    effect: 'Choose a specific craft or profession. You can create items that are relevant to your chosen craft, and your GM will determine the speed at which you craft based on the nature of the item and the materials you have access to. Your tier in the Craft feat determines the maximum wealth level of the items you can craft. Unlike acquiring items by using your wealth (described in Chapter 4), crafting does not limit your ability to acquire additional goods.<br /><ul><li><strong>Tier 1</strong> - You can craft items equal to your wealth level.</li><li><strong>Tier 2</strong> - You can craft items equal to your wealth level + 1.</li></ul><strong>Craft Examples</strong> (This list is not exhaustive, and you can work with your GM to come up with other suitable crafts).<ul><li>Alchemy - acid, chemicals, non-magical tinctures, incense, reagents</li><li>Arcane - magical ingredients, inks, scrolls, exotic components</li><li>Blacksmithing - Metal, leather, weapons, armor, wheels, horseshoes</li><li>Chemistry - acid, explosives, narcotics</li><li>Engineering - machines, wheels, gears, guns, vehicles</li><li>Geography - maps, cartography, instruments of navigation</li><li>Medicine - medical tools, tonics, tinctures, pain relievers, anti-toxins</li><li>Herbalism - poultices, natural remedies, stimulants, brewing</li></ul>'
}, {
    name: 'Craft Beneficial or Baleful Item (I - IV)',
    prerequisites: [
        attributes: {
            supernatural: 5,
            learning: 5,
            creation: 5
        }
    ],
    tags: [
        'Supernatural',
        'Non-Combat'
    ],
    cost: 3
],
description: 'You are studied in the ways of imbuing magical items, brewing potions, or building extraoridnary devices. Their power is permanent but varies depending on your skill.',
    effect: 'This feat allows you to create items that can invoke a given bane or boon either autonomously or by way of a wielder.<ul><li><strong>Tier 1</strong> - You can create an item with this feat. Choose a target attribute score for the item, less than or equal to 2 points below the attribute you use in the creation process (e.g. if you have an attribute score of 5, the maximum score of the item is 3). <br />  Next, choose whether the item is permanent or expendable. A potion or scroll may be an expendable item that triggers the heal boon, for example, while a ring of invisibility may be a permanent item that triggers the invisibility boon when the wielder concetrates on using it.  <br />  Creating an expendable item requires 1 full 8-hour day of uninterrupted work. Creating a permanent item, requires one such day of work per attribute score of the item. <br />  At the end of this period, make an attribute roll with a prerequisite attribute. The CR of this roll equals 10 plus twice the attribute score of the item.  <br />  Next, choose a bane or boon of power level less than or equal to the item\'s attribute score from the previous step.This item is forever linked to that particular bane or boon.  An expendable item used to invoke a boon automatically succeeds at invocation.An expendable item used to invoke a bane grants advantage 1 to the attribute roll to invoke.  A permanent item can be invoked once per hour, after which it has to recharge before it can be used again. The banes and boons available for imbuing depend on the attribute used to create the item, as follows: < ul > < li > < strong > Any Supernatural Attribute < /strong> - The item can only be imbued with a bane or boon that is accessible to the creator via the attribute used. </li > < li > < strong > Learning < /strong> - You can imbue an item with only Physical attributes (Might, Agility, Fortitude) and the corresponding banes and boons.</li > < li > < strong > Creation < /strong> - Being capable of manifesting something from nothing via channeling otherworldly energy, you can imbue the item with any attribute, even if you do not have a score in that attribute.</li > < /ul></li > < li > < strong > Tier 2 < /strong> - Following the same rules above, you gain the following additional benefits: <br / > < ul > < li > The target attribute score for the item can now be equal to your attribute score or less.So, with a prerequisite attribute score of 5, you can imbue an item with an attribute score of 5. < /li>  <li>For expendable items, bane attacks have advantage 2 instead of advantage 1.</li > < li > You can imbue low - level sentience or autonomy into your crafted items.During creation, you work with the GM to define aset of conditions that cause the item to trigger.Some examples include magically guided fireballs triggered when someone enters a given area or a teleportation circle that activates when someone steps on a magical trigger.For those imbuing with non - magical means, this autonomy could be more mundane, for example: pressure plates surrounded by murder holes(arrow slits with self - reloading crossbows). < /li>  <li>Permanent items you imbue not only possess the imbued attribute score for the purpose of invoking a particular bane or boon, but can make attacks with their attribute score. If the item\'s attribute is greater than the wielder\'s, then it supersedes the attribute for the wielder. For example - a Flaming Sword imbued in the 9th circle of Hell could have Energy 9, allowing a town guard with Might 3 to make attacks with Energy 9 instead of Might 3.  A non-supernatural example could be ballistae on a large embattlement that are imbued with Agility 4 and can be used to invoke the Forced Move bane.</li > < /ul></li > < li > < strong > Tier 3 < /strong> - You can imbue humanlike sentience into the item, it gains its own personality and intelligence. This epic feat should be worked out closely with your GM to specify a blueprint for what the item\'s personality, mission, preferences, and similar values will be, and the GM should elaborate and add unforeseen quirks or flaws that make sense given the item\'s purpose.</li > < /ul>'
}, {
    name: 'Crushing Blow',
    prerequisites: [
        feats: {
            'Overpowering Strike': 1
        },
        attributes: {
            might: 6
        }
    ],
    tags: [
        'Physical',
        'Combat',
        'Feat Chain',
        'Might'
    ],
    cost: 3
],
description: 'Your relentless blows not only knock your opponents back, but also knock them off their feet completely.',
    effect: 'Any time that you deal damage to an enemy, in addition to pushing them 5 feet (if you choose) from the Overpowering Strike feat, you can also knock them down in the square where the forced move ends; the target suffers the effects of the knockdown bane.'
}, {
    name: 'Death Blow (I - III)',
    prerequisites: [{
        feats: {
            'Lethal Strike': 1
        },
        attributes: {
            agility: 6
        }
    }, {
        feats: {
            'Lethal Strike': 3
        },
        attributes: {
            agility: 7
        }
    }, {
        feats: {
            'Lethal Strike': 6
        },
        attributes: {
            agility: 8
        }
    }],
    tags: [
        'Combat',
        'Physical'
    ],
    cost: 3
],
description: 'You are able to quickly finish off enemies that are near death and silence them before they cry out. This attack is one that is commonly seen used by assassins who can silently eliminate weaker enemies without being detected.',
    effect: '<ul><li><strong>Tier 1</strong> - If you damage an enemy with a Lethal Strike and their total HP is 5 or less after the attack, then you can choose to reduce them to zero HP instead. In addition, you can choose to silence any enemy reduced to zero hit points by a melee or projectile attack from you.</li><li><strong>Tier 2</strong> ∩┐╜ Your death blow HP threshold increases from 5 to 10. In addition, on a successful Lethal Strike, provided you have a hand free to cover their mouth or use a garrote (or similar strangling implement), the Silenced bane is automatically inflicted without counting against your usual 1 bane per attack limit.</li><li><strong>Tier 3</strong> ∩┐╜ Your death blow HP threshold increases from 10 to 15. In addition, on a successful Lethal Strike, the Stunned bane is automatically inflicted without counting against your usual 1 bane per attack limit.</li></ul>'
}, {
    name: 'Deathless Berserker',
    prerequisite {
        feats: {
            Berserker 1
        },
        attributes: {
            fortitude: 7
        }
    },
    tags: [
        'Supernatural'
    ],
    cost: 3
],
description: 'Your battle fury is legendary, allowing you to fight on long after your body should have given up.',
    effect: 'While you are raging you cannot be knocked unconscious. All damage dealt to you should be recorded, possibly resulting in a negative hit point total. Despite any amount of damage, you remain conscious for as long as you can sustain the rage. When the rage ends, if your hit points are below zero, you collapse unconscious.  If you are not healed to zero or more hit points within 1 round of your rage ending, you die.'
}, {
    name: 'Destructive Berserker',
    prerequisite {
        feats: {
            beserker: 1
        }
        attributes: {
            might: 7
        }
    },
    tags: [
        'Supernatural',
        'Might'
    ],
    cost: 3
],
description: 'Your rage not only puts you into a fearless trance, but enables you to strike down your enemies with ferocious blows.',
    effect: 'While you are raging, in addition to dice exploding on any maximum die roll (as normal), all of the dice in your dice pool explode on the number 1 below maximum as well (though the total is still the number rolled). This means that d4s explode on a 3 or 4, d6s explode on a 5 or 6, d8s explode on a 7 or 8, and so on.'
}, {
    name: 'Defensive Reflexes (I - X)',
    prerequisite {
        attributes: {
            agility: 3
        }
    },
    tags: [
        'Agility',
        'Supernatural'
    ],
    cost: 2
],
description: 'You are a master of defense, able to predict exactly where your opponent will strike and thwart their attack.',
    effect: 'Any time you use the Defend action, you gain advantage 1 on the action roll per tier you possess of this feat.'
}, {
    name: 'Disease Immunity',
    prerequisite {
        attributes: {
            creation: 5,
            protection: 5
        }
    },
    tags: [
        'Non-Combat'
    ],
    cost: 1
],
description: 'Your inherent magical protection extends to make you immune to disease.',
    effect: 'You are immune to natural disease. This protection does not guard against magical curses such as lyncanthropy.'
}, {
    name: 'Energy Resistance (I - III)',
    prerequisites: [
        'Energy OR 4 / 5 / 7'
    ],
    tags: [
        'Supernatural'
    ],
    cost: 3
],
description: 'Your specialization in a particular type of energy or general protection causes you to be resistant to that type of energy.',
    effect: 'Choose from the following energy types: fire, cold, lightning, acid, (or another at the GM∩┐╜s discretion).  When you are attacked with that energy type, you gain resistance to the attack as follows:  <ul>  <li><strong>Tier 1</strong> - Your defense scores are increased by 5 against the chosen attack type. </li>  <li><strong>Tier 2</strong> - Your defense scores are increased by 5 against the chosen attack type.</li>  <li><strong>Tier 3</strong> - You are immune to damage from the chosen attack type.</li>  </ul>'
}, {
    name: 'Entranced Berserker',
    prerequisite {
        feats: {
            Berserker: 1
        },
        attributes: {
            will: 7
        }
    },
    tags: [
        'Combat'
    ],
    cost: 3
],
description: 'In the heat of combat, your will becomes indomitable.',
    effect: 'While you are raging, you are immune to banes that target your Resolve. If you were already under the affect of such a bane, it is negated for the duration of your rage and returns when your rage ends.'
}, {
    name: 'Evasive Footwork',
    prerequisites: [
        'Agility 4'
    ],
    tags: [
        'Agility'
    ],
    cost: 2
],
description: 'You are able to dodge and weave in combat, deftly sidestepping attacks that would strike a clumsier combatant.',
    effect: 'When you move from a space adjacent to an enemy to another space not adjacent to that enemy, the enemy does not get the usual opportunity attack.'
}, {
    name: 'Fast Tracker',
    prerequisites: [
        'Agility 5',
        'Perception 5'
    ],
    tags: [
        'Supernatural',
        'Agility',
        'Perception'
    ],
    cost: 2
],
description: 'Your tracking expertise is so great that you can move at a normal pace and still follow a trail.',
    effect: 'You can move at your full speed while tracking your quarry rather than the reduced speed typically incurred at the GM\'s discretion.'
}, {
    name: 'Ferocious Minions',
    prerequisites: [
        'Influence 3 / 5 / 7'
    ],
    tags: [
        'Supernatural',
        'Influence'
    ],
    cost: 2
],
description: 'Creatures that you∩┐╜ve magically compelled become even stronger when fighting in your defense or under your command.',
    effect: 'Creatures under the effects of your Charmed or Dominated bane gain advantage 1 on all attack rolls to defend or help you for each tier of this feat you possess.'
}, {
    name: 'Fleet of Foot (I ∩┐╜ III)',
    prerequisites: [
        'Agility 4 / 5 / 7 OR Movement 2 / 4 / 6 OR Fortitude 4 / 5 / 7'
    ],
    tags: [
        'Supernatural',
        'Agility',
        'Movement',
        'Fortitude'
    ],
    cost: 2
],
description: 'Whether through cybernetic implants, telekinetic propulsion, or simply hardcore training, you are faster than the average joe.',
    effect: 'Your speed is permanently increased by 5\'per tier of this feat.'
}, {
    name: 'Great Leap (I ∩┐╜ III)',
    prerequisites: [
        'Movement 2 / 4 / 6 OR Agility 2 / 4 / 6'
    ],
    tags: [
        'Supernatural',
        'Physical',
        'Combat',
        'Non-Combat',
        'Movement',
        'Agility'
    ],
    cost: 1
],
description: 'Through supernatural power or exceptional agility, you can jump exceptionally far.',
    effect: 'You can use your Movement or Agility score instead of your Might score when determining how far you can jump. In addition, you gain advantage 1 per tier on action rolls to jump.'
}, {
    name: 'Fast Draw',
    prerequisites: [
        'Agility 1'
    ],
    tags: [
        'Combat',
        'Agility'
    ],
    cost: 2
],
description: 'Whether you\'re a samurai warrior, the fastest draw in the West, or a flawlessly trained space marine, you canget to your weapon faster than your opponent can blink.',
    effect: 'Once per round, you can draw one additional weapon and sheathe another as a free action. Alternately, you could do the same with any small sized object in your possession.'
}, {
    name: 'Hallucination',
    prerequisites: [
        'Influence 5'
    ],
    tags: [
        'Supernatural',
        'Non-Combat',
        'Influence'
    ],
    cost: 3
],
description: 'You are able to use your powers of illusion to not only create phantasmal figments, but to completely dominate the sensory perceptions of individual targets.',
    effect: 'When you invoke the Phantasm bane, you may choose to create a hallucination within a target\'s mind instead of an illusion that is perceptible to everyone.You gain complete control over the target\'s senses (as granted by the Power Level of your bane), and are thus the hallucination is not restricted by size or area. Your hallucination may only target a single creature, and thus is not eligible for multi-targeting attacks.'
}, {
    name: 'Hallucination (Mass)',
    prerequisites: [
        'Influence 7',
        'Hallucination'
    ],
    tags: [
        'Supernatural',
        'Non-Combat',
        'Influence'
    ],
    cost: 3
],
description: 'Your hallucinations become legendary in power, granting you the power to affect small groups or even crowds.',
    effect: 'When you invoke the hallucination form of Phantasm bane, you may target additional creatures within range as determined by your Influence score. This does not count as a multi-attack and thus does not incur disadvantage on your action roll.<ul><li><strong>Influence 7</strong> - 5 Target</li><li><strong>Influence 8</strong> - 10 Targets</li><li><strong>Influence 9</strong> - 50 Targets</li></ul>'
}, {
    name: 'Hospitaler',
    prerequisites: [
        'Creation 4 / Presence 4 / Protection 4'
    ],
    tags: [
        'Non-Combat',
        'Supernatural',
        'Social',
        'Creation',
        'Presence',
        'Protection'
    ],
    cost: 2
],
description: 'Through inspiring words, magical healing, or advanced medical technique, you are exceptionally skilled at helping others shake off baneful afflictions.',
    effect: 'You can use a major action to give an ally an immediate Resist roll (a free action for the ally). The ally gains a special form of advantage on this roll, allowing them to roll 2d20 and keep the highest. Additionally, you gain advantage 1 any time you attempt to invoke the Restoration boon.'
}, {
    name: 'Hunter\'s Foe(I - IX)',
    prerequisites: [
        'None'
    ],
    tags: [
        'Non-Combat',
        'Combat'
    ],
    cost: 1
],
description: 'You are expertly focused on dealing with a particular species, race, or faction.',
    effect: 'Choose a species, race, or faction (e.g., dragons, gnolls, or the Red Knights). You learn the primary conversational language of that species, and at the GM\'s discretion, you may have some level of access to other special forms of communication(such as thieves\' cant or secret hand signals). Furthermore, You gain advantage 1 per tier of this feat to all Mental attribute rolls (Learning, Logic, Perception, and Will) pertaining to your chosen group.'
}, {
    name: 'Indomitable Endurance (I - IX)',
    prerequisites: [
        'Fortitude 5'
    ],
    tags: [
        'Physical'
    ],
    cost: 2
],
description: 'Your endurance is legendary, allowing you to push on when others would keel over from exhaustion.',
    effect: 'You are immune to the fatigued bane when it is caused by regular, natural sources, such as a forced march, starvation, or swimming long distances. Supernatural sources of the fatigued bane (such as a necromancer\'s curse) or irregular sources(such as the Berserker feat) still affect you, but at a reduced effect.Treat your fatigue level as one lower than it actually is for the purposes of determinined the effects of the bane.You may take this feat multiple times.Each subsequent tier allows you to ignore an additional level of fatigue.'
}, {
    name: 'Inspiring Champion (I - III)',
    prerequisites: [
        'Presence 4 / 5 / 6'
    ],
    tags: [
        'Social',
        'Combat',
        'Presence'
    ],
    cost: 2
],
description: 'You fight with such bravery, heroism, or bravado that your allies are ispired to fight beyond their usual mettle.',
    effect: '<ul><li>Once per round, when you deal 10 or more points of damage to an enemy, you can grant healing to your allies as outlined below. In order to gain this healing, allies must be within a range of 5\' times your Presence score. < /li><li><strong>Tier 1</strong > -A single ally that can see the attack heals 1 d4 HP. < /li><li><strong>Tier 2</strong > -A number of allies equal to your Presence score who can see the attack heal 1 d4 HP. < /li><li><strong>Tier 3</strong > -All allies who can see the attack heal 2 d4 HP. < /li></ul >'
}, {
    name: 'Knowledge',
    prerequisites: [
        'None'
    ],
    tags: [
        'No Prerequisite',
        'Supernatural'
    ],
    cost: 2
],
description: 'You have knowledge of a particular area of study which far surpasses your general intelligence.',
    effect: 'When you purchase this feat, choose a sphere of knowledge from the list below or, with the GMs approval, create a new one. <br />Example Spheres of knowledge include alchemy, arcane, supernatural, engineering, geography, history, location (must specify), anatomy, medicine, explosives, computers, herbalism, and wilderness.<br />Your tier in this feat determines how knowledgeable you are within your chosen sphere.<ul><li><strong>Tier 1</strong> - You automatically succeed on any Learning check related to your chosen sphere of knowledge with a CR of 16 or lower. For higher CRs, your Learning attribute is considered to be 3 for the action roll unless your Learning score is already 3 or higher, in which case you gain advantage 1 on the roll.</li><li><strong>Tier 2</strong> -  You automatically succeed on any Learning check related to your chosen sphere of knowledge with a CR of 22 or lower. For higher CRs, your Learning attribute is considered to be 6 for the action roll unless your Learning score is already 6 or higher, in which case you gain advantage 1 on the roll.</li><li><strong>Tier 3</strong> -  You automatically succeed on any Learning check related to your chosen sphere of knowledge with a CR of 26 or lower. For higher CRs, your Learning attribute is considered to be 8 for the action roll unless your Learning score is already 8 or higher, in which case you gain advantage 1 on the roll.</li></ul>'
}, {
    name: 'Lethal Strike (I ∩┐╜ IX)',
    prerequisites: [
        'Agility 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9'
    ],
    tags: [
        'Supernatural',
        'Agility',
        'Combat'
    ],
    cost: 3
],
description: 'Like a deadly assassin, a ninja of legend, or a feinting melee dervish, you can devastate your foes with an expertly placed attack when you catch them off guard.',
    effect: 'Your attacks are considered lethal strikes whenever you fulfill <emphasis>one</emphasis> of the following conditions:<ul><li>Your target is caught off guard or otherwise unaware of the attack, such as when you are hidden from them, disguised as a friend, or have successfully deceived them.</li><li>Your target is within melee attack range of an ally.</li></ul>You gain advantage on lethal strikes equal to your tier in this feat. Additionally, a certain portion of the damage (not to exceed the total damage dealt) is considered lethal damage, which is more difficult to heal from (see Chapter 6: Combat).<ul><li><strong>Tier 1</strong> - Advantage 1. Up to 5 lethal damage</li><li><strong>Tier 2</strong> - Advantage 2. Up to 5 lethal damage</li><li><strong>Tier 3</strong> - Advantage 3. Up to 10 lethal damage</li><li><strong>Tier 4</strong> - Advantage 4. Up to 10 lethal damage</li><li><strong>Tier 5</strong> - Advantage 5. Up to 15 lethal damage</li><li><strong>Tier 6</strong> - Advantage 6. Up to 20 lethal damage</li><li><strong>Tier 7</strong> - Advantage 7. Up to 20 lethal damage</li><li><strong>Tier 8</strong> - Advantage 8. Up to 25 lethal damage</li><li><strong>Tier 9</strong> - Advantage 9. Up to 25 lethal damage</li></ul>'
}, {
    name: 'Lightning Reflexes (I - V)',
    prerequisites: [
        'Agility 2 / 3 / 4 / 5 / 6'
    ],
    tags: [
        'Physical',
        'Agility'
    ],
    cost: 1
],
description: 'You are always ready for danger, allowing you to easily get the drop on your foes.',
    effect: 'For each tier you possess in this feat, you gain advantage 1 on all initiative rolls.'
}, {
    name: 'Lucky',
    prerequisites: [
        'Presence 3'
    ],
    tags: [
        'Social',
        'Combat'
    ],
    cost: 2
],
description: 'Luck shines upon you and keeps you in the fight when others would suffer a much worse fate.',
    effect: 'Once per day, an attack that would reduce you to less than 1 HP, reduces you to 1 HP instead.'
}, {
    name: 'Marksman (I - III)',
    prerequisites: [
        'Agility 5'
    ],
    tags: [
        'Combat'
    ],
    cost: 1
],
description: 'You are an expert at using a specific ranged weapon, your familiarity makes you deadlier at longer ranges.',
    effect: 'Choose a ranged weapon. In your hands, the range of that weapon is increased by 5 squares.'
}, {
    name: 'Martial Focus',
    prerequisites: [
        'Agility 1 / Might 1'
    ],
    tags: [
        'Combat',
        'Physical'
    ],
    cost: 3
],
description: 'Like a kensai warrior devoted to mastery of her katana or an assassin who exclusively wields his favored pistols, your training is hyper-focused on a single style of combat to the exclusion of all others.',
    effect: 'Choose a single weapon (or choose unarmed combat), and specify the attribute that your martial focus relies upon: agility or might. When making attacks using your chosen weapon, your attribute is considered 1 greater for the purposes of determining attribute dice. Your attribute is not changed for purposes of feats, banes, boons, or similar items. Because of your intense focus on a single combat style, any attacks that you make which do not use your martial focus suffer disadvantage 1.'
}, {
    name: 'Master Shifter (I ∩┐╜ V)',
    prerequisites: [
        'Alteration 2 / 4 / 6 / 8 / 9'
    ],
    tags: [
        'Supernatural',
        'Non-Combat',
        'Alteration'
    ],
    cost: 2
],
description: 'Like werewolves, vampires, dopplegangers, druids, and other creatures of myth, you are a master of shapeshifting and can maintain your alternate forms indefinitely.',
    effect: 'You do not need to use the sustain a boon action to sustain the Shapeshift boon <emphasis>when it is targeting yourself</emphasis>. It persists indefinitely and you can end the boon at any time. At the GM∩┐╜s discretion there may be magical effects or circumstances that force you to revert to your original form (such as a lycanthrope being exposed to silver). Your tier in this feat determines the highest power level of the Shapeshift boon that you can sustain.<br /><ul><li><strong>Tier 1</strong> - You can sustain any Shapeshift boon of power level 2 or less.</li><li><strong>Tier 2</strong> - You can sustain any Shapeshift boon of power level 4 or less.</li><li><strong>Tier 3</strong> - You can sustain any Shapeshift boon of power level 6 or less.</li><li><strong>Tier 4</strong> - You can sustain any Shapeshift boon of power level 8 or less.</li><li><strong>Tier 5</strong> - You can sustain any Shapeshift boon of power level 9 or less.</li></ul>'
}, {
    name: 'Mimic',
    prerequisites: [
        'Alteration 4',
        'Alternate Form feat'
    ],
    tags: [
        'Supernatural',
        'Feat Chain',
        'Alteration'
    ],
    cost: 2
],
description: 'You have honed your shapeshifting abilities to be able to not only change your form, but to even imitate specific creatures. Your powers may stem from studying the arts of deceptive magic, from a gene mutation, or even from innate supernatural abilities.',
    effect: 'When you use the alternate form feat, you may take the features of a specific creature. For example, instead of merely transforming into an elf, you can assume the guise of Galdion the elven king. The disguise is near perfect for those examining you visually. If your behavior or other signs provide reasonable suspicion, an onlooker can attempt a Perception check with a Challenge Rating equal to 10 + twice your Alteration or Deception score, whichever is higher. If they succeed, they will recognize your disguise.'
}, {
    name: 'Multi-Attack Specialist (I ∩┐╜ VI)',
    prerequisites: [
        'None'
    ],
    tags: [
        'Any Attribute'
    ],
    cost: 3
],
description: 'Whether your are delivering flurry of blows, wielding two weapons, or calling a chain of lightning bolts from the sky, you have mastered the art of delivering multiple attacks.',
    effect: 'Before attacking, you may declare that you are multi-attacking, and must state how many extra attacks you would like to make. ALL of your attacks this round suffer disadvantage equal to 3 times the number of attacks you declare (i.e., if you make 2 attacks, you suffer disadvantage 6; 3 attacks suffers disadvantage 9). For each tier of this feat that you possess, reduce the disadvantage penalty by 1.You may use your attacks to make any combination of bane or damaging attacks, but you may not invoke boons. Resolve each attack indidvidually, applying any other multi-targeting options as you wish. You can move between each of these attacks and they can be used to target the same creature more than once. There is no limit to the number of additional attacks you can make using this feat.<strong>EXAMPLE</strong>Vax the Deathbringer has Multi Attack Specialist (Tier VI). He declares that he will be making three attacks this round. Therefore, all of his attacks suffer disadvantage 3 (3 x 3 = 9, minus 6 for feat tier 6). His first attack is a necromantic burst targeting a 10\' - square.Because of the area of effect, Vax suffers an additional disadvantage 2, making his total disadvantage for that attack 5. For his second attack, Vax casts a spell of blindess on a single foe, making an action roll at disadvantage 3. For his final attack, Vax moves in to melee and uses his touch of death on three foes.Targeting 3 foes incurs an additional disadvantage 3, making his final attack roll suffer a total of disadvantage 6.'
}, {
    name: 'Multi-Target Attack Specialist (I ∩┐╜ V)',
    prerequisites: [
        'None'
    ],
    tags: [
        'Any Attribute'
    ],
    cost: 2
],
description: 'You are a master of felling multiple foes at a time, whether it be with a whirlwind of your blade, a hail of arrows, or a ball of flame.',
    effect: 'When you choose this feat, you must decide to focus in area, projectile, or melee attacks.  For each tier, you reduce the disadvantage penalty associated with multi-attacks for your chosen attack type by 1. Whenever you take this feat, you must specify which type of attack you are focusing on, and you may take the feat multiple times to specialize in multiple types of attack.'
}, {
    name: 'Multi-Target Boon Specialist (I ∩┐╜ V)',
    prerequisites: [
        'Any Supernatural Attribute 3 / 5 / 7 / 8 / 9'
    ],
    tags: [
        'Non-Combat',
        'Supernatural'
    ],
    cost: 2
],
description: 'You are a master of invoking boons for more than one target.',
    effect: 'For each tier of this feat, you reduce the disadvantage penalty associated with invoking boons for multiple targets by 1.'
}, {
    name: 'Multi-Target Boon Expert',
    prerequisites: [
        'Multi-Target Boon Specialist II',
        'Boon Focus'
    ],
    tags: [
        'Non-Combat',
        'Supernatural'
    ],
    cost: 3
],
description: 'You have so mastered the art of aiding groups of allies that you can invoke certain boons effortlessly.',
    effect: 'When multi-targeting a boon for which you have the Boon Focus feat, you do not need to make an action roll if the disadvantage normally incurred from multi-targeting is completely negated by your Multi-Target Boon Specialist feat. Your invocation automatically succeeds.'
}, {
    name: 'Multi-Bane Specialist',
    prerequisites: [
        'Able to inflict both banes (see description)'
    ],
    tags: [
        'Bane',
        'Combat'
    ],
    cost: 3
],
description: 'You have mastered a signature attack that allows you to invoke two banes at once. A blast of ice that blinds and slows your enemy, a thunderous shotgun blast that hurls foes back and knocks them to the ground, and a wormtongue song that puts targets to sleep and alters their memory are all examples of a signature attack that could be created with this feat.',
    effect: 'Choose two banes that you are able to inflict and that share a common prerequisite attribute. You are able to inflict both banes with a single attack. The required attribute score for combining the banes is equal to the sum of their power levels (e.g., combining knockdown and slowed, both power level 2, would require an attribute score of 4). If the banes target different defenses, you choose which defense your attack targets. On a successful attack roll, the target is inflicted with both banes. They each persist independently of one another and must be resisted separately.<br /><strong>Special</strong>: In order to benefit from the bane focus feat when using a multi-bane attack, you must possess bane focus for both banes.'
}, {
    name: 'Overpowering Strike',
    prerequisites: [
        'Might 4'
    ],
    tags: [
        'Physical',
        'Feat Chain',
        'Might'
    ],
    cost: 2
],
description: 'The sheer force of your attacks is so great that you send opponents flying.',
    effect: 'Each time you deal damage using a weapon with the forceful property, you can choose to push the target five feet away from you.'
}, {
    name: 'Natural Defense (I - III)',
    prerequisites: [
        'Fortitude 3 / 5 / 7'
    ],
    tags: [
        'Combat',
        'Physical',
        'Defense',
        'Fortitude'
    ],
    cost: 2
],
description: 'Whether through draconic heritage, a cyborg exoskeleton, or just a lifetime of conditioning, your skin is tough as nails, allowing your body to deflect blows that would cripple others.',
    effect: 'When you are not wearing armor, you gain an armor bonus to your Toughness and Evasion defenses. You may still gain this bonus when wielding a shield. Your armor bonus is determined by your tier in this feat:<ul><li><strong>Tier 1</strong> - +2 armor bonus</li><li><strong>Tier 2</strong> - +4 armor bonus</li><li><strong>Tier 3</strong> - +6 armor bonus</li></ul>'
}, {
    name: 'Potent Bane',
    prerequisites: [
        'Ability to invoke the chosen bane'
    ],
    tags: [
        'Bane',
        'Combat'
    ],
    cost: 3
],
description: 'You are so adept at a particular form of attack that your foes struggle to shake off the effects. Perhaps the flames of your fireballs burn hotter. Or maybe you\'ve developed a special chemical to mix in with your blinding powder.Whatever the source and whatever the effect, your enemies cower before your legendary attack.',
    effect: 'Choose one bane that you can invoke and that has a duration of \'resist ends\'. When a target makes a resist roll to shake off your invocation of the chosen bane, they roll two d20s and use the lower die.'
}, {
    name: 'Reactionary Berserker',
    prerequisites: [
        'Berserker feat',
        'Will 5'
    ],
    tags: [
        'Combat',
        'Mental',
        'Feat Chain',
        'Will'
    ],
    cost: 2
],
description: 'Your berserker nature is ever-present, waiting to be unleashed at a moment\'s notice.',
    effect: 'You can enter a rage (as per the berserker feat) as a free action even when it is not your turn. You may choose to rage in reaction to another action, such as an enemy\'s attack, spell, or insult.You may even declare your intent to rage after the action has been resolved(such as after the attack has already been rolled). The benefits granted from your rage take place before the triggering action is resolved, potentially negating damage or harmful effects that you would have otherwise incurred.'
}, {
    name: 'Master Tracker',
    prerequisites: [
        'Perception 5'
    ],
    tags: [
        'Non-Combat',
        'Mental',
        'Perception'
    ],
    cost: 1
],
description: 'Your skill at tracking and hunting your quarry is unmatched, allowing you to follow trails long after others would have lost them.',
    effect: 'Unless magically thwarted or unable to see, you always know the direction of true north. In addition, once you successfully locate the trail of a target, you automatically succeed at all tracking attempts to continue following that trail for 7 days after the time you first picked it up.  Only magically concealed tracks, targets in flight, or similarly exceptional cases can cause you to lose your mark.'
}, {
    name: 'Reckless Frenzy',
    prerequisites: [
        'Berserker'
    ],
    tags: [
        'Combat'
    ],
    cost: 3
],
description: 'By willingly punishing your own body, you can enter a raging frenzy that allows you to launch a relentless onslaught of attacks.',
    effect: 'While you are raging, on your turn you may choose to inflict 5 hit points of damage on yourself to make an additional attack as a minor action.  Effects that prevent or reduce damage cannot effect this self-inflicted damage. You suffer the damage before making your extra attack, so you must have at least 6 hit points remaining to make use of this feat.'
}, {
    name: 'Resilient',
    prerequisites: [
        'Presence 3 OR Fortitude 3 OR Will 3'
    ],
    tags: [
        'Mental',
        'Physical',
        'Social'
    ],
    cost: 3
],
description: 'Whether through luck, extraordinary will, or exceptional courage, you are able to shake off banes quicker than others.',
    effect: 'Any time you make a Resist roll, you have Advantage on the d20 roll (roll 2 d20 and keep the higher, contrary to major action rolls)'
}, {
    name: 'Ritual Magic (I - III)',
    prerequisites: [
        'Any Supernatural Attribute 4 / 6 / 9'
    ],
    tags: [
        'Supernatural',
        'Non-Combat'
    ],
    cost: 2
],
description: 'By channeling your supernatural powers through extensive rituals, such as meditation, fasting, blood letting, and sacrifices, you are able to increase the strength of your invocations.',
    effect: 'When invoking a bane or boon, you may choose to do so as a ritual. The invocation time for a ritual is one increment higher than usual as follows:<ul><li>1 action becomes 1 minute</li><li>1 minute becomes 10 minutes</li><li>10 minutes becomes 1 hour</li><li>1 hour becomes 8 hours</li><li>8 hours becomes 24 hours</li></ul><strong>Tier 1</strong> - You may choose one of the following effects to empower your bane or boon:<br /><ul><li>Increase the range of the effect as follows:  Attribute 5 = 500ft<br />  Attribute 6 = 1/2 mile<br />  Attribute 7 = 1 mile<br />  Attribute 8 = 10 miles<br />  Attribute 9 = 100 miles<br /></li><li>Negate two levels of disadvantage caused by multi-targeting (e.g., Target 2 creatures or a 10\' square for free instead of disadvantage 2). < /li><li>For your action roll, treat your attribute score as if it was one greater for purposes of determining attribute dice. Note that this doesn∩┐╜t grant access to banes or boons you could not normally access. It only increases the dice used for the action roll.</li > < /ul><strong>Tier 2</strong > -You gain the following abilities: < ul > < li > You can lead others to join you in ritual casting as long as they are also able to invoke the bane or boon at the same power level that your are invoking it at.At the conclusion of the ritual, each contributor may choose one of the effects granted by Tier 1 of this feat. < /li>  <li>You gain the following additional option to choose from when empowering your invocations with ritual magic:</li > < ul > < li > Cause a boon to persist for 1 minute automatically without need to use a sustain action.Furthermore, enemies cannot disrupt the boon through use of a focus action(Though the dispel bane still works). < /li>    <li>Targets may not make resist rolls against a bane for one minute after it is invokes.</li > < /ul></ul > < strong > Tier 3 < /strong> - You gain the ability to permanently bestow or dispel banes and boons. In order to bestow the bane or boon, you must rigorously attend to the ritual process for a number of days equal to the power level of the bane or boon to be invoked or dispelled. During that time you can eat, sleep, and act normally with two exceptions: 1) You must work actively on the ritual and with minimal interruption for 8 hours out of each day. 2) You can leave the area and move about freely during the down time each day, but for the 8 hours of active ritual invocation you must be in the same physical or geographic location where the ritual was initiated. When the invocation time is completed, make an action roll as follows:<ul><li><strong>Bestow Boon</strong > -Make an action roll to invoke the boon as usual.If successful, you cause a non - instantaneous & non - permanent boon to permanently affect the target.The target can thereafter invoke the boon at will, without requiring an action roll to do so.The target does not need to use a sustain action to persist the effect, and the effect can only be dispelled either temporarily with the Dispel bane, or permanently with the Ritual Magic feat(see the Remove Boon entry that follows). < /li><li><strong>Bestow Bane</strong > -Make an action roll to invoke the bane as usual.If successful, you cause a non - instantaneous & non - permanent bane to permanently affect the target.The bane persists indefinitely and does not allow resist rolls to end its effects.The effect can be dispelled either temporarily with the Dispel bane, or permanently with the Ritual Magic feat(see the Remove Bane entry that follows). < /li><li><strong>Dispel Boon</strong > -Make an Entropy roll with a Challenge Rating equal to 10 + twice the power level of the boon you are attempting to dispel.If successful, you cause a permanent boon to be forever stripped from the target, causing them to lose the ability to invoke the bane automatically. < /li><li><strong>Dispel Bane</strong > -Make an Protection roll with a Challenge Rating equal to 10 + twice the power level of the bane you are attempting to dispel.If successful, you break the curse of a permanent bane afflicting the target, though the bane can still be invoked by other means. </li></ul>'
}, {
    name: 'Skill Specialization (I - V)',
    prerequisites: [
        'None'
    ],
    tags: [
        'No Prerequisite'
    ],
    cost: 2
],
description: 'You have the eyes of an eagle, the endurance of an ox, the guile of a fox, or some similar exceptional non-combat talent.',
    effect: 'Choose one attribute. Any time you make a non-attack action roll with the chosen attribute, you gain advantage 1 on the roll per tier of this feat you possess for that attribute.<br /><strong>Special</strong>: You can take this feat multiple times. Each time, you can either apply it to a different attribute or increase the feat tier for an attribute you∩┐╜ve already purchased.'
}, {
    name: 'Silencing Strike',
    prerequisites: [
        'Agility 4'
    ],
    tags: [
        'Agility',
        'Physical'
    ],
    cost: 3
],
description: 'Like an expert assassin or ninja, you can render your foes completely unable to alert others of your presence.',
    effect: 'Whenever you successfully hit a target that you have advantage against, that target is afflicted by the silenced bane.'
}, {
    name: 'Superior Concentration (I - III)',
    prerequisites: [
        'Any Supernatural Attribute 3'
    ],
    tags: [
        'Supernatural'
    ],
    cost: 3
],
description: 'Your powers of focus are exceptionally honed, allowing you to maintain concentration on multiple supernatural effects at once.',
    effect: 'When you take the <emphasis>sustain a boon</emphasis> minor action, you may sustain one additional boon per tier of this feat which you possess.'
}, {
    name: 'Supernatural Defense (I - V)',
    prerequisites: [
        'Protection OR Prescience OR Movement 2 / 3 / 4 / 5 / 6'
    ],
    tags: [
        'Supernatural',
        'Defense'
    ],
    cost: 2
],
description: 'Whether by a magical barrier of force, foresight into the future, or preternatural speed, you are gifted with supernatural protection from harm.',
    effect: 'You gain a +1 bonus to all defenses for each tier you have in this feat. This increases your Toughness, Evasion, and Resolve defenses.'
}, {
    name: 'Supernatural Healing',
    prerequisites: [
        'Creation 5'
    ],
    tags: [
        'Supernatural',
        'Creation'
    ],
    cost: 3
],
description: 'Your mastery of supernatural healing is such that you are able to cure mortal wounds that are beyond the power of the average healer.',
    effect: 'When invoking the Heal boon, you can choose to take one hour instead of the usual invocation time. If you do, you heal an amount of lethal damage equal to the total healing from the successful boon invocation. This lethal damage is healed in addition to the normal hit point damage that your boon heals.'
}, {
    name: 'Supernatural Focus',
    prerequisites: [
        'Any Supernatural Attribute 1'
    ],
    tags: [
        'Supernatural'
    ],
    cost: 3
],
description: 'Your supernatural power stems from your connection with a particular focus, such as a wand, holy symbol, or spellbook.',
    effect: 'With the approval of your GM, choose a focus from which your power with a single supernatural attribute stems. Some possibilities include a wand, a crystal ball, a spell book, a holy symbol, a weapon, your voice, or an animal familiar. You cannot use the selected supernatural attribute without your focus. However, for the purposes of determining your attribute dice for action rolls, treat the chosen attribute as if it was one greater. For all purposes outside of attribute dice, your ability score remains unchanged (feats, banes, boons, etc.).'
}, {
    name: 'Tough as Nails (I - II)',
    prerequisites: [
        'Fortitude 3 / 5'
    ],
    tags: [
        'Defense',
        'Physical',
        'Fortitude'
    ],
    cost: 2
],
description: 'You have a remarkable ability to shrug off pain and punishment that would take down lesser heroes.',
    effect: 'You permanently gain 5 extra hit points per tier of this feat you possess.<br />'
}, {
    name: 'Two Weapon Defense',
    prerequisites: [
        'Agility 4',
        'Multi-Attack Specialist'
    ],
    tags: [
        'Combat',
        'Physical',
        'Agility'
    ],
    cost: 2
],
description: 'Your mastery of two weapon fighting allows you not only to come at your foes with a flurry of attacks, but also shield yourself exceptionally well with your off-hand weapon.',
    effect: 'When you have a weapon in each hand, you gain a +2 armor bonus. This feat cannot be used in conjunction with a shield.'
}, {
    name: 'Heavy Weapon Master',
    prerequisites: [
        'Agility 4',
        'Might 5'
    ],
    tags: [
        'Combat',
        'Physical',
        'Agility',
        'Might'
    ],
    cost: 3
],
description: 'Due to your strength and training, you are able to wield exceptionally heavy weapons with ease.',
    effect: 'You can wield two-handed melee weapons in one hand. When you do, you still gain the usual advantage granted by two-handed weapons.'
}, {
    name: 'Unending Charm',
    prerequisites: [
        'Influence 4'
    ],
    tags: [
        'Supernatural',
        'Non-Combat',
        'Influence'
    ],
    cost: 3
],
description: 'Your charm is so potent that your victims may become permanently enthralled by you.',
    effect: 'When you invoke the charmed bane, targets who do not make their resist roll within 24 hours of being afflicted become permanently affected by the bane. They do not receive any more resist rolls to shake themselves free of the effect. Other supernatural effects like a dispel boon can still end the effect (and other methods may work at the GM∩┐╜s discretion).'
}, {
    name: 'Untrackable',
    prerequisites: [
        'Protection 3 OR Alteration 3 OR Influence 3'
    ],
    tags: [
        'Non-Combat',
        'Protection',
        'Alteration',
        'Influence'
    ],
    cost: 1
],
description: 'Whether this power manifests itself as vines that grow in your wake, a magical ward against detection, or an illusory veil, the effect is the same: you are supernaturally protected from being tracked.',
    effect: 'Your travel is veiled by magic that conceals your tracks and any evidence of your passage even after you are far away. It is impossible to follow your tracks except by supernatural means.'
}, {
    name: 'Vicious Strike',
    prerequisites: [
        'none'
    ],
    tags: [
        'Combat'
    ],
    cost: 2
],
description: 'Whether through brute force, lethal precision, or volatile magic, a deadly attack delivered by you is exceptionally vicious.',
    effect: 'Any time you roll a natural 20 on the d20 for an attack action roll, you roll twice on the subsequent re-roll of the d20 and take the higher result.'
}, {
    name: 'Well-Rounded',
    prerequisites: [
        'none'
    ],
    tags: [
        'Non-Combat'
    ],
    cost: 2
],
description: 'You have a versatile education, a wide range of experiences, or just plain old good luck. The result is that you\'re pretty good at things you\'re not specialized in.',
    effect: 'Any time you make a non-attack action roll with an attribute in which you have a score of 2 or less, roll an additional d20 and keep the highest of the two d20s.'
}, {
    name: 'Wealthy',
    prerequisites: [
        'none'
    ],
    tags: [
        'Non-Combat'
    ],
    cost: 3
],
description: 'Whether you were born into nobility, heir to a great treasure, or simply a well-established merchant, you are wealthier than the average adventurer.',
    'effect': 'Your wealth score is increased by 1.'
}]);
})();
