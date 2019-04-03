const path = require('path');

module.exports = {
    entry: './src/app.js',
    optimization: {
        minimize: false,
    },
    output: {
        filename: 'bundle-pack.js',
        path: path.resolve(__dirname, 'dist')
    }
};

