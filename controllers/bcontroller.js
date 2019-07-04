const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query).then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },

  Remove: function(req,res) {
    db.Book.deleteOne({_id: req}).then(data => res.json(data))
  },

  saveBook: function(req, res){
    db.Book.create(req).then(data=> res.json(data))
  }
};
