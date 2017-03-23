var ObjectID = require('mongodb').ObjectID;

// always module exports
// we export func, can do var
// pass down express app and mongo db
module.exports = function(app, db) {
  /*
  // route is like /job/:id
  app.get('/job/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('jobs').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  */

  app.get('/job/list', (req, res) => {
		var limit = req.query.limit;

		if(limit) {
			limit = parseInt(limit);
		}
		else {
			limit = 0;
		}

		//console.log('-- test --');
		//console.log(limit);

    var myRes = db
      .collection('jobs')
      .find()
			.limit(limit)
			.sort({ datePosted: -1 })
      .toArray((err, cursor) => {
        if(err)
          console.error(err);
          //console.log(cursor);
        res.json(cursor);
      });

  });

  // you can say app.post is under a wrapper
  // we pass express app and mongo so can use it here.
  app.post('/job/create', (req, res) => {
    //
    res.send('Hello');
  });


};
