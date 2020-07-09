const fs = require('fs')
const path = require('path')

/**
 * DATA
 * fileName = test.ux
 * code
 * scriptCode
 */
module.exports = function(app, req, res, next, dirname){
    console.log('saving data file...')
    fs.writeFileSync(path.join(dirname, 'data', 'hello.json'), JSON.stringify({nome: 'giuseppe', cognome:'h'}), 'utf8')
    
    res.send(JSON.stringify({esito:'done'}))
}

