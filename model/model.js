var homeContent = `<h1>HOME</h1>`;
var aboutContent = `<h1>about</h1>`;
var productsContent = `<h1>products</h1>`;
var contactContent = `<h1>contact</h1>`;

export var myName = "name"

export function modelPageName(pgName){
    $("#app").html(eval(pgName));
}