// Use the Sequelize package
const Sequelize = require("sequelize");

// 1.) Access the Node File System package
//const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
//const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

// Create a new Sequelize object for persistence management
const sequelize = new Sequelize('activities', 'your_user', 'your_user_password', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-6',
    // 3.) Add an "ssl" property to the dialectOptions configuration, using the serverCert const defined above
    /*
    ssl: {
        ca: cert
    }
    */
  },
  define: {
    timestamps: false
  }
});

// Create a new database object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Add model modules
db.players = require("./models/player.js")(sequelize, Sequelize);
db.teams = require("./models/team.js")(sequelize, Sequelize);

// Add model relationships
db.players.belongsToMany(db.teams, { through: 'teams_players', as: 'teams', foreignKey: 'player_id' });
db.teams.belongsToMany(db.players, { through: 'teams_players', as: 'players', foreignKey: 'team_id' });

module.exports = db;