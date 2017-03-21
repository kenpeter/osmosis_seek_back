// get routes
const noteRoutes = require('./note_routes');

// module exports func
module.exports = function(app, db) {
  // call the routes
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};
