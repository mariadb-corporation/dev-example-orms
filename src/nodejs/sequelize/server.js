const db = require("./db.js");
const Player = db.players;
const Team = db.teams;

// Uncomment a block of code below to execute

// Create a new Players record (uncommented by default)
Player.create({ 
    first_name: "Shane", 
    last_name: "Falco",
    age: 31
}).then(data => {
    log(data);
});

// Find Player by ID
/*
Player.findByPk(10).then(data => {
    log(data);
});
*/

// Update Player age
/*
Player.findByPk(10).then(player => {
    if (player) {
        player.update({
          age: 35
        })
        .then(data => {
            log(data);
        });
      }
});
*/

// Get all Players
/*
Team.findAll().then(data => {
    log(data);
});
*/

// Get all Teams
/*
Team.findAll().then(data => {
    log(data);
});
*/

// Modify the returned attributes
/*
Team.findAll({
    attributes: ['name']
}).then(data => {
    log(data);
});
*/

// Filter players by age
/*
const Op = db.Sequelize.Op;

Player.findAll({
    where: {
        age: {
            [Op.gt]: 25
        }
    }
}).then(data => {
    log(data);
});
*/

// Aggregates
/*
Player.max('age').then(data => {
    log(data);
});

Team.count().then(data => {
    log(data);
});
*/

// Order by age DESC
/*
const sequelize = db.sequelize;
Player.findAll({
    order: [
        ['age', 'DESC']
    ]
}).then(data => {
    log(data);
});
*/

// Associations
/*
Team.findByPk(1, 
    { 
        include: [{
            model: Player,
            as: 'players',
            attributes: ['id','first_name','last_name', 'age'],
            through: {
                attributes: [],
            }
        }]
    }
).then(data => {
    log(data);
});
*/
/*
Player.findByPk(10, 
    { 
        include: [{
            model: Team,
            as: 'teams',
            attributes: ['id','name'],
            through: {
                attributes: [],
            }
        }]
    }
).then(data => {
    log(data);
});
*/

// A function used to format and display Sequelize result data 
function log(json) {
    console.clear();
    console.log(JSON.stringify(json, null, " "));
    process.exit();
}