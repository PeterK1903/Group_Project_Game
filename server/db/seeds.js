use game;
db.dropDatabase();

db.dungeons.insertMany(
heroArray=[
  {
    name: 'Barbarian',
    hitpoints: 4
  },
  {
    name: 'Chainmail',
    hitpoints: 4
  },
  {
    name: 'Leather Sheield',
    hitpoints: 3
  },
  {
    name: 'War Hammer',
    type : "warHammer"
  },
  {
    name: 'Healing Potion',
    type: "healingPotion"
  },
  {
    name: 'Vorpal Axe',
    type:  "vorpalAxe"
  },
  {
    name: 'Torch',
    type: "torch"
  }
]
)
