const fs = require('fs')
const path = require('path')

module.exports = function(app, req, res, next, dirname){
    console.log('files service started + ' + `${dirname}/ux`)
    fs.readdir(path.join(dirname,'ux'), (err, filenames)=>{
        if(err){
            return
        }
        res.send(JSON.stringify(filenames))
    })
}
    

