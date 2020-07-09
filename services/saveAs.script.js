const fs = require('fs')
const path = require('path')

/**
 * DATA
 * fileName = test.ux
 * code
 * scriptCode
 */
module.exports = function(app, req, res, next, dirname){
    console.log('saving ux file...')
    fs.writeFileSync(path.join(dirname, 'ux', req.body.data.fileName), req.body.data.code, 'utf8')
    
    var fileNameScript = req.body.data.fileName.substr(0,req.body.data.fileName.length-3)
    try {
        console.log('saving script...')
        fs.writeFileSync(path.join(dirname, 'script', `${fileNameScript}.script.js`), req.body.data.scriptCode, 'utf8')
    } catch(err){
        console.error(err)
    }

    var fileNameCss = req.body.data.fileName.substr(0,req.body.data.fileName.length-3)

    try {
        console.log('saving css...')
        fs.writeFileSync(path.join(dirname, 'csx', `${fileNameCss}.css.js`), req.body.data.cssCode, 'utf8')
    } catch(err){
        console.error(err)
    }
    console.log('saved')
    res.send(JSON.stringify({esito:'done'}))
}

