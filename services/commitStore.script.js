const fs = require('fs')
const path = require('path')

const hichartseries = require('../data/hichartseries.data.js')

/**
 * Commit vuole il json da salvare su disco fisso, mentre highcharts per esempio
 * è già in formato variabile js.
 * 
 * I data set che partono da variabile devono essere salvati sotto forma di variabile
 * JSON.stringify ... varName
 * 
 * 
 */
module.exports = function(app, req, res, next, dirname){
    console.log('saving store as JSON.stringify...')

    var store = req.body.data
    var hcs = store.hichartseries

    //raccimulo i dati 

    fs.writeFileSync(path.join(dirname, 'data', 'hichartseries.data.js'), 'module.exports = ' + JSON.stringify(hcs), 'utf8')
    fs.writeFileSync(path.join(dirname, 'data', 'store.data.js'), 'module.exports = ' + JSON.stringify(store), 'utf8')
    //fs.readFileSync ...
    
    res.send(JSON.stringify({esito:'done'}))
}

