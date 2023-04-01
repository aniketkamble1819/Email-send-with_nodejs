let express = require("express");
let Taluka =require("../models/Taluka");
let Town =require("../models/Town");
let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    let object = new Taluka(body);
    object.save().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.put("/:id", (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    Taluka.findByIdAndUpdate(id,body).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.get("/", (req,res)=>{
    Taluka.find().sort({name : 1}).then(result=>{
        if(result.length > 0){
            res.end(JSON.stringify({status : "success", data : result}));
        }
        else{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
        }
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}));        
    })
})

router.get("/:id", (req,res)=>{
    let id = req.params.id;
    Taluka.findById(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
    })
})

router.delete("/:id", (req,res)=>{
    let id = req.params.id;
    Taluka.findByIdAndDelete(id).then(result=>{
        res.end(JSON.stringify({status : "success", data : result}));
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : "Record not found"}));        
var express = require("express");
let Taluka = require("../models/Taluka");
let Town = require("../models/Town");

})
});

router.delete("/town/:id", (req, res)=>{
    Town.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});



module.exports = router