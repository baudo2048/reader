const fs = require("fs");
const xlsx = require("xlsx");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var document = () => {
    const dom = new JSDOM('<!doctype html>');

    return dom;
};

var html = () => {
    return `
        <!DOCTYPE html>
        <html>
        ${head()}
    `;
};

var head = () => {
    return `
        <head>
            <link rel="stylesheet" type="text/css" href="./css/style.css"></link>
        </head>
    `;
};

var header = () => {
    return `
        <div class="header">
            <img class="logo" width="210px" height="24px" src="./img/logo.png">
        </div>`;
};

var header_page = (pageTitle) => {
    return `
    <div class="header_page">
        <h1>${pageTitle}</h1>
    </div>`;
};

var menu_bar = () => {
    return `
    <div class="menu_bar">
        <div class="menu_item">File</div>
        <div class="menu_item">Modifica</div>
    </div>`;
};

/* var css = () => {
    return fs.readFileSync('./css/style.css','utf8');
};

var scriptJs = () => {
    return fs.readFileSync('./js/app.js');
}; */

var writeFile = (path, text)=>{
    fs.writeFile(path, text, (err)=>{
        if(err) {
            console.log('writing error ' + err);
        } else {
            console.log('writing success');
        }    
    });
};

var getSheet = (xlFile, xlSheet) => {
    var wb = xlsx.readFile(xlFile);
    return xlsx.utils.sheet_to_json(wb.Sheets[xlSheet]);
};



module.exports = {
    head: head(),
    header: header(),
    header_page: header_page,
    html: html(),
    writeFile: writeFile,
    getSheet: getSheet,
    dom: document()
};