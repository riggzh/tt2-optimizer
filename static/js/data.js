var artifacts = {
	'bos' : {
		'active' : 1,
		'sort' : 1,
		'name' : 'Book of Shadows',
		'bonus' : ' Prestige Relic',
		'rating' : 10,
		'ad' : .3,
		'effect' : .05,
		'gmax' : 0.12,
		'grate' : .0001,
		'gexpo' : .5,
		'max' : -1,
		'ccoef' : .7,
		'cexpo' : 2.5,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'sov' : {
		'active' : 1,
		'sort' : 2,
		'name' : 'Stone of Valrunes',
		'bonus' : ' Basic Titan Gold',
		'rating' : .8,
		'ad' : .5,
		'effect' : .3,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00025,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'coc' : {
		'active' : 1,
		'sort' : 3,
		'name' : 'Chest of Contentment',
		'bonus' : ' Chesterson Gold',
		'rating' : .8,
		'ad' : .4,
		'effect' : .25,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : 1,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hs' : {
		'active' : 1,
		'sort' : 4,
		'name' : 'Heroic Shield',
		'bonus' : ' Boss Gold',
		'rating' : .8,
		'ad' : .4,
		'effect' : .2,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'bop' : {
		'active' : 1,
		'sort' : 5,
		'name' : 'Book of Prophecy',
		'bonus' : ' All Gold',
		'rating' : .8,
		'ad' : .3,
		'effect' : .2,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2.2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'zc' : {
		'active' : 1,
		'sort' : 6,
		'name' : 'Zakynthos Coin',
		'bonus' : ' Inactive Gold',
		'rating' : .8,
		'ad' : .3,
		'effect' : .2,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'gfa' : {
		'active' : 1,
		'sort' : 7,
		'name' : 'Great Fay Medallion',
		'bonus' : ' Fairy Gold',
		'rating' : .8,
		'ad' : .4,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00018,
		'gexpo' : .5,
		'ccoef' : 1,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'coe' : {
		'active' : 1,
		'sort' : 8,
		'name' : 'Coins of Ebizu',
		'bonus' : ' Splash Gold',
		'rating' : .8,
		'ad' : .5,
		'effect' : .3,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hsw' : {
		'active' : 1,
		'sort' : 9,
		'name' : 'Heavenly Sword',
		'bonus' : ' All Artifact Damage',
		'rating' : 5,
		'ad' : 1,
		'effect' : .05,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00025,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2.2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'dr' : {
		'active' : 1,
		'sort' : 10,
		'name' : 'Divine Retribution',
		'bonus' : ' All Damage',
		'rating' : 5,
		'ad' : 1,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : 1,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'dh' : {
		'active' : 1,
		'sort' : 11,
		'name' : 'Drunken Hammer',
		'bonus' : ' Tap Damage',
		'rating' : 1,
		'ad' : .3,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ss' : {
		'active' : 1,
		'sort' : 12,
		'name' : 'Samosek Sword',
		'bonus' : ' Sword Attack Damage',
		'rating' : 1,
		'ad' : .5,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00014,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tr' : {
		'active' : 1,
		'sort' : 13,
		'name' : 'The Retaliator',
		'bonus' : ' Critical Damage',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hb' : {
		'active' : 1,
		'sort' : 14,
		'name' : 'Hero\'s Blade',
		'bonus' : ' All Hero Damage',
		'rating' : 3,
		'ad' : .5,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tsos' : {
		'active' : 1,
		'sort' : 15,
		'name' : 'The Sword of Storms',
		'bonus' : ' Melee Hero Damage',
		'rating' : 1,
		'ad' : .3,
		'effect' : .15,
		'max' : -1,
		'gmax' : 0.45,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'fb' : {
		'active' : 1,
		'sort' : 16,
		'name' : 'Furies\' Bow',
		'bonus' : ' Ranged Hero Damage',
		'rating' : 1,
		'ad' : .3,
		'effect' : .15,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'cota' : {
		'active' : 1,
		'sort' : 17,
		'name' : 'Charm of the Ancients',
		'bonus' : ' Spell Hero Damage',
		'rating' : 1,
		'ad' : .3,
		'effect' : .15,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ttt' : {
		'active' : 1,
		'sort' : 18,
		'name' : 'Tiny Titan Tree',
		'bonus' : ' Ground Hero Damage',
		'rating' : 1,
		'ad' : .3,
		'effect' : .15,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hh' : {
		'active' : 1,
		'sort' : 19,
		'name' : 'Helm of Hermes',
		'bonus' : ' Flying Hero Damage',
		'rating' : .5,
		'ad' : .3,
		'effect' : .15,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'foe' : {
		'active' : 1,
		'sort' : 20,
		'name' : 'Fruit of Eden',
		'bonus' : ' Pet Damage',
		'rating' : 1,
		'ad' : .5,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ie' : {
		'active' : 1,
		'sort' : 21,
		'name' : 'Influential Elixir',
		'bonus' : ' Clan Ship Damage',
		'rating' : 1,
		'ad' : .5,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'orc' : {
		'active' : 1,
		'sort' : 22,
		'name' : 'O\'Ryan\'s Charm',
		'bonus' : ' Companion Damage',
		'rating' : 3,
		'ad' : .5,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hos2' : {
		'active' : 1,
		'sort' : 23,
		'name' : 'Heart of Storms',
		'bonus' : ' Pet Damage Bonuses',
		'rating' : 4,
		'ad' : .5,
		'effect' : .005,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2.2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ao' : {
		'active' : 1,
		'sort' : 24,
		'name' : 'Apollo Orb',
		'bonus' : ' Pet Gold Bonuses',
		'rating' : 2,
		'ad' : .5,
		'effect' : .02,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .7,
		'cexpo' : 2.2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'af' : {
		'active' : 1,
		'sort' : 25,
		'name' : 'Avian Feather',
		'bonus' : ' Inactive Damage',
		'rating' : .25,
		'ad' : .3,
		'effect' : .2,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hos' : {
		'active' : 1,
		'sort' : 26,
		'name' : 'Corrupted Rune Heart',
		'bonus' : ' Splash Damage',
		'rating' : .5,
		'ad' : .3,
		'effect' : .00025,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'td' : {
		'active' : 1,
		'sort' : 27,
		'name' : 'Durendal Sword',
		'bonus' : ' Non-Boss Damage',
		'rating' : 1,
		'ad' : 1,
		'effect' : .24,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : 1,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hs2' : {
		'active' : 1,
		'sort' : 28,
		'name' : 'Helheim Skull',
		'bonus' : ' Boss Damage',
		'rating' : 2,
		'ad' : 1,
		'effect' : .12,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : 1,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'roc' : {
		'active' : 1,
		'sort' : 29,
		'name' : 'Ring of Calisto',
		'bonus' : ' All Equipment Boost',
		'rating' : 4,
		'ad' : .5,
		'effect' : .01,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .65,
		'cexpo' : 2.2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'bod' : {
		'active' : 1,
		'sort' : 27,
		'name' : 'Blade of Damocles',
		'bonus' : ' Sword Boost',
		'rating' : 2,
		'ad' : .5,
		'effect' : .08,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .65,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hom' : {
		'active' : 1,
		'sort' : 31,
		'name' : 'Helmet of Madness',
		'bonus' : ' Helmet Boost',
		'rating' : 2,
		'ad' : .5,
		'effect' : .08,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .65,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tp' : {
		'active' : 1,
		'sort' : 32,
		'name' : 'Titanium Plating',
		'bonus' : ' Armor Boost',
		'rating' : .8,
		'ad' : .5,
		'effect' : .08,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .65,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'as' : {
		'active' : 1,
		'sort' : 33,
		'name' : 'Amethyst Staff',
		'bonus' : ' Slash Boost',
		'rating' : 2,
		'ad' : .5,
		'effect' : .08,
		'max' : -1,
		'gmax' : 0.32,
		'grate' : .00015,
		'gexpo' : .5,
		'ccoef' : .65,
		'cexpo' : 2,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ig' : {
		'active' : 1,
		'sort' : 34,
		'name' : 'Invader\'s Gjalarhorn',
		'bonus' : ' All Active Skill Effect',
		'rating' : 2,
		'ad' : .2,
		'effect' : .02,
		'max' : -1,
		'gmax' : 0.36,
		'grate' : .00018,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.8,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tm' : {
		'active' : 1,
		'sort' : 35,
		'name' : 'Titan\'s Mask',
		'bonus' : ' Heavenly Strike Damage',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'rt' : {
		'active' : 1,
		'sort' : 36,
		'name' : 'Royal Toxin',
		'bonus' : ' Deadly Strike Effect',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'lp' : {
		'active' : 1,
		'sort' : 37,
		'name' : 'Laborer\'s Pendant',
		'bonus' : ' Hand of Midas Gold Bonus',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'bor' : {
		'active' : 1,
		'sort' : 38,
		'name' : 'Bringer of Ragnarok',
		'bonus' : ' Fire Sword Damage',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'pof' : {
		'active' : 1,
		'sort' : 39,
		'name' : 'Parchment of Foresight',
		'bonus' : ' War Cry Damage',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'eoe' : {
		'active' : 1,
		'sort' : 40,
		'name' : 'Elixir of Eden',
		'bonus' : ' Shadow Clone Damage',
		'rating' : 1,
		'ad' : .2,
		'effect' : .1,
		'max' : -1,
		'gmax' : 0.4,
		'grate' : .0002,
		'gexpo' : .5,
		'ccoef' : .6,
		'cexpo' : 1.7,
		'type' : 'multiply',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'hoti' : {
		'active' : 1,
		'sort' : 41,
		'name' : 'Hourglass of the Impatient',
		'bonus' : ' All Active Skill Cooldown',
		'rating' : 1,
		'ad' : .8,
		'effect' : -0.02,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'pt' : {
		'active' : 1,
		'sort' : 42,
		'name' : 'Phantom Timepiece',
		'bonus' : 's All Active Skill Duration',
		'rating' : 1,
		'ad' : .8,
		'effect' : 1,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : 1,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'fs' : {
		'active' : 1,
		'sort' : 43,
		'name' : 'Forbidden Scroll',
		'bonus' : 's Deadly Strike Duration',
		'rating' : 1,
		'ad' : 1.5,
		'effect' : 2,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 2.4,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'rof' : {
		'active' : 1,
		'sort' : 44,
		'name' : 'Ring of Fealty',
		'bonus' : 's Hand of Midas Duration',
		'rating' : 1,
		'ad' : 1.5,
		'effect' : 2,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 2.4,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ga' : {
		'active' : 1,
		'sort' : 45,
		'name' : 'Glacial Axe',
		'bonus' : 's Fire Sword Duration',
		'rating' : 1,
		'ad' : 1.5,
		'effect' : 2,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 2.4,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'a' : {
		'active' : 1,
		'sort' : 46,
		'name' : 'Aegis',
		'bonus' : 's War Cry Duration',
		'rating' : 1,
		'ad' : 1.5,
		'effect' : 2,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 2.4,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'sg' : {
		'active' : 1,
		'sort' : 47,
		'name' : 'Swamp Guantlet',
		'bonus' : 's Shadow Clone Duration',
		'rating' : 1,
		'ad' : 1.5,
		'effect' : 2,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 2.4,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ip' : {
		'active' : 1,
		'sort' : 48,
		'name' : 'Infinity Pendulum',
		'bonus' : ' Heavenly Strike Mana Cost',
		'rating' : 1,
		'ad' : .9,
		'effect' : -1,
		'max' : 20,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'gok' : {
		'active' : 1,
		'sort' : 49,
		'name' : 'Glove of Kuma',
		'bonus' : ' Deadly Strike Mana Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -1,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ts' : {
		'active' : 1,
		'sort' : 50,
		'name' : 'Titan Spear',
		'bonus' : ' Hand of Midas Mana Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -1,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'os' : {
		'active' : 1,
		'sort' : 51,
		'name' : 'Oak Staff',
		'bonus' : ' Fire Sword Mana Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -1,
		'max' : 30,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tac' : {
		'active' : 1,
		'sort' : 52,
		'name' : 'The Arcana Cloak',
		'bonus' : ' War Cry Mana Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -1,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ho' : {
		'active' : 1,
		'sort' : 53,
		'name' : 'Hunter\'s Ointment',
		'bonus' : ' Shadow Clone Mana Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -1,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ae' : {
		'active' : 1,
		'sort' : 54,
		'name' : 'Ambrosia Elixir',
		'bonus' : ' Mana Pool Cap',
		'rating' : 1,
		'ad' : .8,
		'effect' : 2,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .6,
		'cexpo' : 3,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'ms' : {
		'active' : 1,
		'sort' : 55,
		'name' : 'Mystic Staff',
		'bonus' : ' Mana Regeneration',
		'rating' : 1,
		'ad' : 2,
		'effect' : .075,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'eof' : {
		'active' : 1,
		'sort' : 56,
		'name' : 'Egg of Fortune',
		'bonus' : ' Chesterson Chance',
		'rating' : 1,
		'ad' : 2,
		'effect' : .01,
		'max' : 10,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : 1.4,
		'cexpo' : 3,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'dc' : {
		'active' : 1,
		'sort' : 57,
		'name' : 'Divine Chalice',
		'bonus' : ' 10x Gold Chance',
		'rating' : 1,
		'ad' : 1,
		'effect' : .01,
		'max' : 50,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .8,
		'cexpo' : 2.6,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'is' : {
		'active' : 1,
		'sort' : 58,
		'name' : 'Invader\'s Shield',
		'bonus' : ' Multiple Fairy Chance',
		'rating' : 1,
		'ad' : 1.6,
		'effect' : 0.005,
		'max' : 50,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.1,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'aom' : {
		'active' : 1,
		'sort' : 59,
		'name' : 'Axe of Muerte',
		'bonus' : ' Critical Chance',
		'rating' : 1,
		'ad' : 3,
		'effect' : 0.005,
		'max' : 20,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .8,
		'cexpo' : 2.5,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'eotk' : {
		'active' : 1,
		'sort' : 60,
		'name' : 'Essence of the Kitsune',
		'bonus' : ' Multi-Spawn Chance',
		'rating' : 1,
		'ad' : 3,
		'effect' : .005,
		'max' : 20,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .8,
		'cexpo' : 2.5,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'lkm' : {
		'active' : 1,
		'sort' : 61,
		'name' : 'Lost King\'s Mask',
		'bonus' : ' All Upgrade Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -.02,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 3,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'sor' : {
		'active' : 1,
		'sort' : 62,
		'name' : 'Staff of Radiance',
		'bonus' : ' Hero Upgrade Cost',
		'rating' : 1,
		'ad' : .8,
		'effect' : -.02,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'tms' : {
		'active' : 1,
		'sort' : 63,
		'name' : 'The Master\'s Sword',
		'bonus' : ' Sword Master Upgrade Cost',
		'rating' : 1,
		'ad' : 2,
		'effect' : -.02,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'as2' : {
		'active' : 1,
		'sort' : 64,
		'name' : 'Aram Spear',
		'bonus' : ' All Titan HP',
		'rating' : 1,
		'ad' : 2,
		'effect' : -.02,
		'max' : 40,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'pct',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
	'wod' : {
		'active' : 1,
		'sort' : 65,
		'name' : 'Ward of Darkness',
		'bonus' : 's Boss Timer Duration',
		'rating' : 1,
		'ad' : 2,
		'effect' : 25,
		'max' : 60,
		'gmax' : 0,
		'grate' : 0,
		'gexpo' : 1,
		'ccoef' : .5,
		'cexpo' : 2.6,
		'type' : 'add',
		'level' : 0,
		'current_ad' : '',
		'current_effect' : '',
		'displayCost' : '',
		'cost' : '',
		'efficiency' : '' },
};

var artifact_costs = {
	'0' : -1,
	'1' : 1,
	'2' : 3,
	'3' : 6,
	'4' : 11,
	'5' : 19,
	'6' : 30,
	'7' : 46,
	'8' : 69,
	'9' : 102,
	'10' : 148,
	'11' : 214,
	'12' : 306,
	'13' : 434,
	'14' : 613,
	'15' : 861,
	'16' : 1203,
	'17' : 1675,
	'18' : 2323,
	'19' : 3212,
	'20' : 4430,
	'21' : 6094,
	'22' : 8363,
	'23' : 11454,
	'24' : 15657,
	'25' : 21365,
	'26' : 29108,
	'27' : 39599,
	'28' : 53796,
	'29' : 72990,
	'30' : 98914,
	'31' : 133897,
	'32' : 181063,
	'33' : 244605,
	'34' : 330143,
	'35' : 445208,
	'36' : 599886,
	'37' : 807680,
	'38' : 1086657,
	'39' : 1460982,
	'40' : 1962961,
	'41' : 2801512,
	'42' : 4271796,
	'43' : 6546742,
	'44' : 10084102,
	'45' : 15611565,
	'46' : 24291381,
	'47' : 37988598,
	'48' : 59710114,
	'49' : 94326541,
	'50' : 149764436,
	'51' : 238984254,
	'52' : 383276658,
	'53' : 617780678,
	'54' : 1000762985,
	'55' : 1629292101,
	'56' : 2665833882,
	'57' : 4383580899,
	'58' : 7244059100,
	'59' : 12030591779,
	'60' : 20078853673,
	'61' : 33676929221,
	'62' : 56762601881,
	'63' : 96144140647,
	'64' : 163647145909,
	'65' : 279906771691,
	'66' : -1
};

// x = 1.4067499999999975
// x += 0.00395
// a = 66
// a * Math.pow(x, a++)
