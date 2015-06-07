// Imports
var Form = require('microscope-console').Form;
var path = require('path');
var ionicAppLib = require('ionic-app-lib');
var _ = require('lodash');

// cordova plugins references and components archive url
var plugins = [
    { id: 0, name: 'camera', ref: 'cordova-plugin-camera', url: 'https://github.com/microscope-mobile/microscope-component-camera/archive/master.zip' }
];

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
                { name: plugins[0].name, value: plugins[0].id }
            ]
        }, {
            type: "confirm",
            name: 'isComponent',
            message: 'Would you like to download a component sample ?'
        }];

        this.render();
    },

    response: function (answer) {
        console.log('\n');
        var componentPath = path.join(process.cwd(), './src/components/');
        var selectedPlugin = _.find(plugins, { id: answer.plugin });

        ionicAppLib.cordova.addPlugin(process.cwd(), selectedPlugin.ref, {}, true);

        if (answer.isComponent) {
            if(selectedPlugin.url){
                ionicAppLib.utils.fetchArchive(componentPath, selectedPlugin.url).then(function () {
                    console.log('download complete !!');
                    this.cb();
                }.bind(this));
            }else{
                console.log('We are sorry but there are no component samples for this plugin yet !');
            }
        }else{
            this.cb();
        }

        console.log('\n');
    }
});

module.exports = PluginForm;