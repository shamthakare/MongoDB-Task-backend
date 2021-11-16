const mongoose = require("mongoose");
const employee = require("./models/employee");
const router = require("./routes/routes");
 

mongoose.connect("mongodb://localhost:27017/meanDB", (err) => {
  if (!err) {
    console.log(" DB connection successful..");
  } else {
    console.log("Error in connection" + err);
  }
});

// Get Api
router.get("/", (req, res) => {
  employee.find((err, doc) => {
    if (err) {
      console.log("err in get data" + err);
    } else {
      res.send(doc);
    }
  });
});

// //get single user
router.get("/:id", (req, res) => {
   if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    employee.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("err in get employee by id" + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("no record found with id" + req.params.id);
  }
});

//Put API
router.put("/:id", (req, res) => { 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    let emp = {
      name: req.body.name,
      position: req.body.position,
      dept: req.body.dept,
    };
    employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true}, (err, doc) => {
      if (err) {
        console.log("err in delete employee by id" + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send("no record found with id" + req.params.id);
  }
});

//Delet API continue your work yes i check delete api proper work you conform check api ok continue plise yes
//naynesh sir all routes proprly work yes but error msg is not show proper chek it after some time ok my task give me
// ok new task is create a 1 apllication in angular and genrate a form and usring this Backend store the data using frontend ok 2nd
router.delete("/:id", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    employee.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("err in Update employee data" + err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(200).send("no record found with id" + req.params.id);
  }
});

// post Api  check if id is not valid then showing errer when i was delete a record ? ok no show data not found massg
router.post("/", (req, res) => {
  let emp = new employee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept,
  });
  emp.save((err, doc) => {
    if (err) {
      console.log("err in post data" + err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = mongoose;
