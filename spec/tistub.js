Ti = {};

Ti.API = {
    info: function(msg) { console.log("[INFO] " + msg); },
    error: function(msg) { console.log("[ERROR] " + msg); },
    warn: function(msg) { console.log("[WARN] " + msg); }
};

Ti.Platform = {
    osname: 'iphone',
    displayCaps: {
        platformHeight: 480,
        platformWidth: 320
    }
};