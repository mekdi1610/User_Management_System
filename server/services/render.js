const axios = require('axios');
const req = require('express/lib/request');
const res = require('express/lib/response');

//Allow us to render files in .js
exports.homeRoutes = (err, resp) => {
    //Make a get request to api
    axios.get('http://localhost:3001/api/users')
    .then(function(res){
        console.log(res)
        resp.render('index', {users: res.data});
    })
    .catch(err=>{
        console.log(err)
    })
   
}
exports.addUserRoutes = (err, resp) => {
    resp.render('addUser');
}
exports.updateUserRoutes = (req, res) => {
    axios.get('http://localhost:3001/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("updateUser",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
    // resp.render('updateUser');

}