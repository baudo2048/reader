import homeDesktop from './homeDesktop.js'
import indexMobile from './indexMobile.js'

// CONFIGURATION FILES
import eventConf from './lib/event/eventConf.js'
eventConf()

// GENERATED
import appEventManager from './appEventManager.js'
document.eventManager = appEventManager

//import socketClient from './lib/socket/socketClient.js'
//socketClient() 

// GENERATED
//import socketHandler from './socketHandler.js'
//socketHandler()

import restClient from '../lib/socket/restClient.js'
restClient()

import parser from './lib/parser/parse.js'
document.parser = parser

import storeClient from './lib/data/storeClient.js'
storeClient()


if(screen.width >= 700){
    document.body.appendChild(homeDesktop())
} else {
    document.body.appendChild(indexMobile())
}

