'use strict'

const Api = require('claudia-api-builder')
const api = new Api()
const createCourse = require('./handlers/create-course')

api.get('/', () => 'Welocme to Serverlessing.')

api.post('/courses', (request) => {
    return createCourse(request.body)
}, {
    success: 201,
    error: 400
})

module.exports = api