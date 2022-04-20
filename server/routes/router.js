const express = require('express');
const req = require('express/lib/request');
const route = express.Router()
const services = require('../services/render')
const controller = require("../controller/controller")

    route.get('/', services.homeRoutes)
    
    route.get('/addUser', services.addUserRoutes)
    route.get('/updateUser',services.updateUserRoutes)


    //API
    route.post('/api/users', controller.create)
    route.get('/api/users', controller.find)
    route.put('/api/users/:id', controller.update)
    route.delete('/api/users/:id', controller.delete)

    module.exports = route
    