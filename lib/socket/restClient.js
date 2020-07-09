export default function restClient(){
    function rest(eventName, msg) {
         fetch('/'+eventName, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'same-origin', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({eventName:eventName, data: msg}) // body data type must match "Content-Type" header
          }).then( response => {
            console.log('fetching response ... ' + eventName)
            document.dispatch(`${eventName}.response`, response)
        });
    }

    function json(serviceName, msg){
      return new Promise( (resolve, reject) => {
          fetch('/json', {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({meta: {serviceName:serviceName}, data:msg}) // body data type must match "Content-Type" header
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
    
    document.rest = rest
    document.json = json

}
