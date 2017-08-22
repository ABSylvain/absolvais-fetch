const fetch = require('./app');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(answer) {
        console.log(answer);
        exit(0);
    }).catch(function(err) {
        console.log(err);
        exit(1);
    });