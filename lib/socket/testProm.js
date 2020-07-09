function jack(serviceName, msg){
    return new Promise( (resolve, reject) => {
        fetch('/json', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({serviceName:serviceName, data: msg}) // body data type must match "Content-Type" header
        }).then( response => {
            return response.json()
        }).then(data => {
            console.log('fetching response ... data is + ' + JSON.stringify(data))
            document.eventManager(`${serviceName}.response`, data)
            resolve(data)
        }).catch(error => {
            reject(error)
        });
    })
}



jack().then(data=>{
    console.log(data)
}).catch(err=>{
    console.error(err)
})


