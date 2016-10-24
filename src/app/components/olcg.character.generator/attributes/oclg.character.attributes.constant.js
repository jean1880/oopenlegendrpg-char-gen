(function () {
    'use strict';

    angular.module('olcg')
        .constant('ATTRIBUTES', {
            physical: {
                agility: {
                    description: 'Dodge attacks, move with stealth, perform acrobatics, shoot a bow, pick a pocket'
                },
                fortitude: {
                    description: 'Wear heavy armor, resist poison, shrug off pain, exert yourself physically'
                },
                might: {
                    description: 'Swing a maul, jump over a chasm, break down a door, wrestle a foe to submission'
                }
            },
            mental: {
                learning: {
                    description: 'Recall facts about history, arcane magic, the natural world, etc.'
                },
                logic: {
                    description: 'Solve riddles, decipher a code, improvise a tool, understand the enemy’s strategy, find a loophole'
                },
                perception: {
                    description: 'Sense ulterior motives, track someone, catch a gut feeling, spot a hidden foe, find a secret door'
                },
                will: {
                    description: 'Maintain your resolve, overcome adversity, resist torture, stay awake on watch, stave off insanity'
                }
            },
            social: {
                deception: {
                    description: 'Tell a lie, bluff at cards, disguise yourself, spread rumors, swindle a sucker'
                },
                persuasion: {
                    description: 'Negotiate a deal, convince someone, haggle a good price, pry information'
                },
                presence: {
                    description: 'Give a speech, sing a song, inspire an army, exert your force of personality, have luck smile upon you'
                }
            },
            supernatural: {
                alteration: {
                    description: 'Change shape, alter molecular structures, transmute one material into another'
                },
                creation: {
                    description: 'Channeling higher powers for healing, creation, resurrection, divine might, etc.'
                },
                energy: {
                    description: 'Create and control the elements–fire, cold, electricity, etc.'
                },
                entropy: {
                    description: 'Disintegrate matter, kill with a word, create undead, sicken others'
                },
                influence: {
                    description: 'Control the minds of others, speak telepathically, instill supernatural fear, create illusory figments, cloak with invisibility'
                },
                movement: {
                    description: 'Teleport, fly, hasten, slow'
                },
                prescience: {
                    description: 'See the future, read minds or auras, detect magic or evil, scry, communicate with extraplanar entities'
                },
                protection: {
                    description: '	Protect from damage, break supernatural influence, dispel magic, bind demons'
                }
            }
        });
})()
