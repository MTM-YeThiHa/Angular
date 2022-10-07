var express = require("express")
var cors = require('cors')
var db = require("./sqlitedb.js")

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 5000
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/api/owner", (req, res, next) => {
    var sql = "select * from owner"
    var params = []
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows)
    });
});

app.get("/api/owner/:id", (req, res, next) => {
    var sql = "select * from owner where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
       if (err) {
          res.status(400).json({"error":err.message});
          return;
       }
       res.json(row)
    });
});

app.post("/api/owner/", (req, res, next) => {
    var errors=[]
    if (!req.body.item) {
        errors.push("No item specified");
    }
    var data = {
        id : req.body.id,
        name : req.body.name,
        dateOfBirth : req.body.dateOfBirth,
        address : req.body.address,
    }
    var sql = 'INSERT INTO owner (id, name, dateOfBirth, address) VALUES (?,?,?,?)'
    var params = [data.id, data.name, data.dateOfBirth, data.address]
    db.run(sql, params, function(err, result) {
         if (err){
         res.status(400).json({"error": err.message})
         return;
      }
      data.id = this.lastID;
      res.json(data);
   });
});

app.put("/api/owner/:id", (req, res, next) => {
    var data = {
       id : req.body.id,
       name: req.body.name,
       dateOfBirth: req.body.dateOfBirth,
       address : req.body.address
    }
    db.run(
       `UPDATE owner SET
          id = ?, 
 
          name = ?,
          dateOfBirth = ?, 
          address = ?, 
  
          WHERE id = ?`,
             [data.id, data.name, data.dateOfBirth, data.address, req.params.id],
       function (err, result) {
          if (err){
             console.log(err);
             res.status(400).json({"error": res.message})
             return;
          }
          res.json(data)
    });
 })

 app.delete("/api/owner/:id", (req, res, next) => {
    db.run(
       'DELETE FROM owner WHERE id = ?',
       req.params.id,
       function (err, result) {
          if (err){
             res.status(400).json({"error": res.message})
             return;
          }
          res.json({"message":"deleted", changes: this.changes})
    });
 })

 app.use(function(req, res){
    res.status(404);
 })
 