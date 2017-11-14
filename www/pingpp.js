/**
 * ping++, cordova, module
 * Author: Tong Chia
 * License: Apache License 2.0
 * */
//var exec = require('cordova/exec');

module.exports = {
    /**
     * @param {object|string} charge
     * @param {Function} successCallback ['success']
     * @param {Function} errorCallback ['fail'|'cancel'|'invalid']
     */
    createPayment: function (charge, successCallback, errorCallback) {
         if (typeof charge === 'object') { charge = JSON.stringify(charge); }
         corodva.exec(successCallback, errorCallback, "PingppPlugin", "createPayment", [charge]);
    }
};
