const fs = require('fs')
const path = require('path')

module.exports = function(app, req, res, next, dirname) {
    //req.sendFile(path.join(`${__dirname}/ux/${req.body.data.fileName}`))

    var code = fs.readFileSync(`${dirname}/ux/${req.body.data.fileName}`, 'utf8')

    const noExt = req.body.data.fileName.substr(0,req.body.data.fileName.length-3)
    var scriptCode = ''
    if (fs.existsSync(`${dirname}/script/${noExt}.script.js`)) {
        scriptCode = fs.readFileSync(`${dirname}/script/${noExt}.script.js`, 'utf8')
    }

    var cssCode = ''
    if (fs.existsSync(`${dirname}/csx/${noExt}.css.js`)) {
        cssCode = fs.readFileSync(`${dirname}/csx/${noExt}.css.js`, 'utf8')
    }

    res.send(JSON.stringify({code:code, scriptCode:scriptCode, cssCode:cssCode}))    
}