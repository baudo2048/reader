export function dispatch (eventName, msg) {
    console.log('dispatch - ' + eventName);
    var detail = {detail: msg};
    document.dispatchEvent(new CustomEvent(eventName, detail));
}

export function register (eventName, callback){
    document.addEventListener(eventName, callback);
}

export function unregister (eventName, callback){
    document.removeEventListener(eventName, callback);
}



