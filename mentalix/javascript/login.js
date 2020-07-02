/* eslint-env browser */
/* eslint no-console: "error" */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* jslint white:true, browser:true, devel:true */

//var PreferencesManager = brackets.getModule("preferences/PreferencesManager");

//prefs = PreferencesManager.getExtensionPrefs("jslint");

//prefs.set("options.es6", true);

var mylogin = document.getElementById('login');
var myregister = document.getElementById('register');
var mybtn = document.getElementById('btn');

login = () =>{
    mylogin.style.left = '50px';
    myregister.style.left = '500px';
    mybtn.style.left = '0px'
}

register = () =>{
    mylogin.style.left = '-450px';
    myregister.style.left = '50px';
    mybtn.style.left = '110px'
}