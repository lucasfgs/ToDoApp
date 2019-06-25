const express = require('express')

module.exports = app =>{

    // API Routes
    const rotuer = express.Router()
    app.use('/api', rotuer)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(rotuer, '/todos')
}