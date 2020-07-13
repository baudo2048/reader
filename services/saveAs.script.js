const fs = require('fs')
const path = require('path')

/**
 * DATA
 * fileName = test.ux
 * code
 * scriptCode
 */
module.exports = function(app, req, res, next, dirname){
    
    var usr = req.body.meta.user
    var pass = req.body.meta.pass

    var users = {
        'admin@katecode.com': 'admin',
        'mario': 'rossi'
    }

    if(users[usr]==pass){
        // Vai

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
    } else {
        console.log('not authorized')
        res.send(JSON.stringify({esito:'login'}))
    }

}

