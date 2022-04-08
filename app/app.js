import * as MODEL from "../model/model.js";

var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>about</h1>`;
var productsContent = `<h1>products</h1>`;
var contactContent = `<h1>contact</h1>`;



function route(){
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#","")
    console.log(pageName)
    let pageContent = pageName + "Content";
    if (pageName == ""){
        pageContent = "homeContent";
    }
    MODEL.modelPageName(pageContent);
}

function initListeners(){
    $(window).on("hashchange",route)
    route();
    console.log(MODEL.myName);
}

$(document).ready(function (){
    console.log(MODEL.myName);

    initListeners();
});