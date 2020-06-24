import homeDesktop from './homeDesktop.js'

// CONFIGURATION FILES
import eventConf from './lib/event/eventConf.js'
eventConf()

// GENERATED
import appEventManager from './appEventManager.js'
document.eventManager = appEventManager

import socketClient from './lib/socket/socketClient.js'
socketClient() 

// GENERATED
import socketHandler from './socketHandler.js'
socketHandler()

document.body.appendChild(homeDesktop())



