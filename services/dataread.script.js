const fs = require('fs')
const path = require('path')


module.exports = function(app, req, res, next, dirname){
    console.log('reading data file...')
    var hello = JSON.parse(fs.readFileSync(path.join(dirname, 'data', 'hello.json'), 'utf8'))

    res.send(JSON.stringify(hello))
}

