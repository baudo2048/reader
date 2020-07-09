const fs = require('fs')
const path = require('path')

/**
 * DATA
 * fileName: test.ux
 * code: 
 * 
 */
module.exports = function(app, req, res, next, dirname) {
    console.log('saving gen script...')
    var fileNameScript = req.body.data.fileName.substr(0,req.body.data.fileName.length-3) + '.js'

    fs.writeFileSync(path.join(dirname, fileNameScript), req.body.data.code, 'utf8')
    console.log('saved')
    res.send(JSON.stringify({esito: 'done'}))
}