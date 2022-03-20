const matchesController = require("@api/matches/controller");
const prettyMatchesController = require("@pretty/matches/controller");

function register(app) {

  matchesController(app);
  prettyMatchesController(app);

}

module.exports = {
  register
}
