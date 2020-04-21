const matchesController = require("@api/matches/controller");
const standingsController = require("@api/standings/controller");
const prettyMatchesController = require("@pretty/matches/controller");
const setupController = require("@setup/controller");

function register(app) {

  setupController(app);
  matchesController(app);
  standingsController(app);
  prettyMatchesController(app);
  
}

module.exports = {
    register
}
