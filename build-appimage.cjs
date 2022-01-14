const path = require('path');

// Require bundler
const { Bundler } = require('neutralino-appimage-bundler');

// Create an object with some params
const bundler = new Bundler({
    // .desktop file properties
    desktop: {
        // Name field
        name: 'Neutralino Template',

        // Path to the icon
        icon: path.join(__dirname, 'public/icons/appIcon.png')
    },

    // Neutralino binary info
    binary: {
        // Name of the binary (cli.binaryName)
        name: 'neutralino-template',

        // Dist folder path
        dist: path.join(__dirname, 'dist')
    },

    // Application version
    version: '0.0.0'
});

// Bundle project
bundler.bundle();
