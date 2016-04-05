require('babel-register')({
    only: [
        /node_modules\/mozaik[^/]*\/src/,
        /src\/server\.js/
    ]
});

require('./src/server');
