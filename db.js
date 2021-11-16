const mongoose= require ('mongoose');
const employee = require('./models/employee');
const router = require('./routes/routes');

mongoose.connect('mongodb://localhost:27017/meanDB',(err)=>{
    if(!err){
        console.log(' DB connection successful..');

    }else{
        console.log('Error in connection' + err);

    }

})
// get Api
router.get('/',(req,res)=>{
    employee.find((err,doc)=>{
        if(err){
            console.log('err in get data'+err);
        }else{
            res.send(doc);
        }
    })
});
// post Api
router.post('/',(req,res)=>{
    let emp = new employee({
        name: req.body.name,
        position:req.body.position,
        sept:req.body.dept
    });
    emp.save(err,doc)=>{
        if(err){
            console.log('err in post data'+err);
        }else{
            res.send(doc);
        }
    }
})




module.exports = mongoose;