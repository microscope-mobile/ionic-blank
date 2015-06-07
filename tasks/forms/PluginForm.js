// Imports
var Form = require('microscope-console').Form;
var path = require('path');
var ionicAppLib = require('ionic-app-lib');

/**
 * ComponentForm class
 */
var PluginForm = Form.extend({

    banner: 'CORDOVA PLUGIN',

    initialize: function (cb) {
        
        this.cb = cb;
        
        this.model = [{
            type: 'list',
            name: 'plugin',
            message: 'Choose your cordova plugin !',
            choices: [
                { name: 'camera', value: 'https://github.com/microscope-mobile/microscope-component-camera/archive/master.zip' }
            ]
        }];

        this.render();
    },

    response: function (answer) {
        console.log('\n');
        var componentPath = path.join(process.cwd(), './src/components/');
        
        ionicAppLib.cordova.addPlugin(process.cwd(), 'cordova-plugin-camera', {}, true);
        
        ionicAppLib.utils.fetchArchive(componentPath, answer.plugin).then(function () {
            console.log('download complete !!');
            this.cb();
        }.bind(this));
        
        console.log('\n');
    }
});

module.exports = PluginForm;