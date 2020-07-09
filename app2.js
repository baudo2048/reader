"use strict";

var _homeDesktop = _interopRequireDefault(require("./homeDesktop.js"));

var _indexMobile = _interopRequireDefault(require("./indexMobile.js"));

var _eventConf = _interopRequireDefault(require("./lib/event/eventConf.js"));

var _appEventManager = _interopRequireDefault(require("./appEventManager.js"));

var _restClient = _interopRequireDefault(require("../lib/socket/restClient.js"));

var _parse = _interopRequireDefault(require("./lib/parser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONFIGURATION FILES
(0, _eventConf.default)(); // GENERATED

document.eventManager = _appEventManager.default; //import socketClient from './lib/socket/socketClient.js'
//socketClient() 
// GENERATED
//import socketHandler from './socketHandler.js'
//socketHandler()

(0, _restClient.default)();
document.parser = _parse.default;

if (screen.width >= 700) {
  document.body.appendChild((0, _homeDesktop.default)());
} else {
  document.body.appendChild((0, _indexMobile.default)());
}