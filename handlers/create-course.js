const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

function createCourse(request) {
    if( !request || !request.name || !request.description)
        throw new Error('Not sufficient info')
    
    return docClient.put({
        TableName: 'courses',
        Item: {
            courseId: uuid(),
            name: request.name,
            description: request.description,
            status: 'pending'
        }
    }).promise()
        .then((res) => {
            console.log('Course is saved.')
            return res
        })
        .catch((saveError) => {
            console.log(`Course is not saved :`, saveError)
            throw saveError
        })
}

module.exports = createCourse