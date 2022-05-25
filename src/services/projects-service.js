const moment = require('moment');
const connection = require('../config/db-connection');

module.exports = {
  all(req,res){
    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'SELECT * FROM projects;', 
      function (error, results) {
        if(error) throw error;
        res.send({ 
          success: true, 
          data: results 
        });
      });
      connection.release();
    })
  },
  one(req,res){
    let id = req.params.id;

    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'SELECT * FROM projects WHERE id = ?;'
      , [id],
      function (error, results) {
        if(error) throw error;
        if(results.length == 0) {
          return res.status(404).send({message: "Not Found"});
        }
        res.send({ 
          success: true, 
          data: results[0]
        });
      });
      connection.release();
    })
  },
  create(req,res){
    let date = null;

    if (req.body.status)
      date = moment().format("YYYY-MM-DD")

    let data = {
        name : req.body.name,
        date : date,
    }

    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'INSERT INTO projects SET ?;'
      , [data],
      function (error, results) {
        if(error) throw error;
        res.send({ 
          success: true, 
        });
      });
      connection.release();
    })
  },
  confirm(req,res){
    let id = req.params.id;

    let data = {
      date : moment().format("YYYY-MM-DD")
    }

    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'UPDATE projects SET ? WHERE id = ?;'
      , [data, id],
      function (error, results) {
        if(error) throw error;
        res.send({ 
          success: true, 
        });
      });
      connection.release();
    })
  },
  update(req,res){
    let id = req.params.id;
    let date = null;

    if (req.body.status)
      date = moment().format("YYYY-MM-DD")

    let data = {
      name : req.body.name,
      date : date,
    }

    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'UPDATE projects SET ? WHERE id = ?;'
      , [data, id],
      function (error, results) {
        if(error) throw error;
        res.send({ 
          success: true, 
        });
      });
      connection.release();
    })
  },
  delete(req,res){
    let id = req.params.id;

    connection.getConnection(function(err, connection) {
      if (err) throw err;
      connection.query(
        'DELETE FROM projects WHERE id = ?;'
      , [id],
      function (error, results) {
        if(error) throw error;
        res.send({ 
          success: true, 
        });
      });
      connection.release();
    })
  }
}