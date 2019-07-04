const db = require("../models");

module.exports = {
  findAll: function(
    id, req, res) {
    db.Book.find({where: id}, req.query).then(data => res.json(data))
    .catch(err => res.status(422).json(err))
  },

  Remove: function(req,res) {
    db.Book.deleteOne({_id: req}).then(data => res.json(data))
  },

  saveBook: function(req, res){
    db.Book.create(req.body).then(data=> res.json(data))
  }
};
