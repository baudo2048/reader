export default function restClient(){
    function tt(eventName, msg){
        console.log('fetching request ... ' + eventName + ' - ' + JSON.stringify(msg))
        fetch(`/${eventName}`, {
            method: 'POST',
            body: JSON.stringify({msg})
        }).then( response => {
            console.log('fetching response ... ' + eventName)
            document.dispatch(`${eventName}.response`, response)
        })
    }

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
    
    document.rest = rest
}
