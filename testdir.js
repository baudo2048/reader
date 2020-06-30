const fs = require('fs')


fs.readdir('./ux', (err, filenames)=>{
    if(err){
        return
    }

    res.send(JSON.stringify(filenames))
    filenames.forEach(function (filename) {
        console.log(filename)
    })
})