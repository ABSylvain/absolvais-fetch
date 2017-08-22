"use strict";
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetch(url) {
    return new Promise(function(ok, ko) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                ok(xhr.responseText);
            } else {
                ko(xhr.status)
            }
        };
        xhr.onerror = function(error) {
            ko(error);
        }
        xhr.send();
    });
}
fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
    console.log(response)
}).catch(function(error) {
    console.error(error);
});
module.exports = fetch;