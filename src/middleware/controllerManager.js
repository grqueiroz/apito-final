const matchesController = require("@api/matches/controller");
const prettyMatchesController = require("@pretty/matches/controller");
// const setupController = require("@setup/controller");

function register(app) {

  matchesController(app);
  prettyMatchesController(app);
  // setupController(app);

}

module.exports = {
  register
}
