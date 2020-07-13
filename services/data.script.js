const fs = require('fs')
const path = require('path')

const hichartseries = require('../data/hichartseries.data.js')

/**
 * DATA
 * fileName = test.ux
 * code
 * scriptCode
 */
module.exports = function(app, req, res, next, dirname){
    console.log('saving data file...')

    //raccimulo i dati 

    //fs.writeFileSync(path.join(dirname, 'data', 'hello.json'), JSON.stringify({nome: 'giuseppe', cognome:'h'}), 'utf8')
    //fs.readFileSync ...
    
    res.send(JSON.stringify({users:{'admin': 'admin'}, hichartseries:hichartseries}))
}

