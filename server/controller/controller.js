const req = require('express/lib/request');
const res = require('express/lib/response');
var Userdb = require('../model/model')

//Create and save new user
exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }  
    //New user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    //save user in the db
    user
        .save(user)
        .then(data =>{
            //res.send(data)
            res.redirect('/addUser')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error message"
            })
        })
}
//reterive
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:error.message || "Error occured"})
        })
    }
    else{Userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:error.message || "Error occured"})
        })
    }
}

//update
exports.update = (req, res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data to update cannot be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500)
    })
}

//delete a user with specified user id
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            return res.status(404).send({message: "Data empty"})
   
        }else{
            res.send({message: "User was deleted successfully"})
        }
    })
    .catch(err=>{
        console.log(err)
    })
}